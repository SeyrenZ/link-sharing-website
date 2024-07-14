"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export interface LinkType {
  id: string;
  name: string;
  platform: string; // New property
  url: string;
}

interface LinkProfileDetails {
  userName: string;
  lastName: string;
  email: string;
}

type LinkContextType = {
  links: LinkType[];
  setLinks: (links: LinkType[]) => void;
  profileDetails: LinkProfileDetails; // Now a single object, not an array
  setProfileDetails: (profileDetails: LinkProfileDetails) => void; // Corrected type
  updateLinkPlatform: (index: number, platform: string) => void;
  updateLinkUrl: (index: number, url: string) => void;
  updateProfileDetails: (profileDetails: LinkProfileDetails) => void;
  removeLink: (id: string) => void;
  addLink: (link: LinkType) => void;
  fetchAndSetLinks: () => void;
  handleSave: () => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [profileDetails, setProfileDetails] = useState<LinkProfileDetails>({
    userName: "",
    lastName: "",
    email: "",
  });
  const fetchAndSetProfileDetails = useCallback(async () => {
    const email = localStorage.getItem("email");
    if (email) {
      const response = await fetch(`/api/data/get-user-detail?email=${email}`);
      if (response.ok) {
        // console.log(response);
        const data = await response.json();

        setProfileDetails(data);
        // Assuming setProfileDetails is the state setter for profileDetails
      }
    } else {
      console.log("No email found in localStorage");
    }
  }, []);

  const fetchAndSetLinks = useCallback(async () => {
    const email = localStorage.getItem("email");
    if (email) {
      const response = await fetch(`/api/data/get-link?email=${email}`);
      if (response.ok) {
        const data = await response.json();
        setLinks(data);
      }
    } else {
      console.log("No email found in localStorage");
    }
  }, [setLinks]);

  useEffect(() => {
    fetchAndSetLinks();
    fetchAndSetProfileDetails();
  }, [fetchAndSetLinks, fetchAndSetProfileDetails]);

  const handleSave = async () => {
    try {
      const LinkResponse = await fetch(
        "http://localhost:3000/api/data/store-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
            links: links.map(({ platform, url, id }) => ({
              platform,
              url,
              id,
            })),
          }),
        }
      );

      if (!LinkResponse.ok) {
        throw new Error("Failed to save links");
      }
      console.log("Links saved successfully!");
    } catch (error) {
      console.error("Error saving links:", error);
    }

    try {
      const ProfileResponse = await fetch(
        "http://localhost:3000/api/data/store-user-detail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
            profileDetails: profileDetails,
          }),
        }
      );

      if (!ProfileResponse.ok) {
        throw new Error("Failed to save profile details");
      }
      console.log("Profile details saved successfully!");
    } catch (error) {
      console.error("Error saving profile details:", error);
    }
  };

  const addLink = (link: Omit<LinkType, "id">) => {
    if (links.length < 5) {
      const newLink = { ...link, id: uuidv4() }; // Generate a UUID for the new link
      setLinks([...links, newLink]);
    }
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const updateProfileDetails = (profileDetails: LinkProfileDetails) => {
    setProfileDetails(profileDetails); // Wrap the object in an array
  };

  const updateLinkPlatform = (index: number, platform: string) => {
    setLinks(
      links.map((link, i) => (i === index ? { ...link, platform } : link))
    );
  };

  const updateLinkUrl = (index: number, url: string) => {
    setLinks(links.map((link, i) => (i === index ? { ...link, url } : link)));
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        setLinks,
        profileDetails,
        setProfileDetails,
        removeLink,
        addLink,
        updateLinkPlatform,
        updateLinkUrl,
        updateProfileDetails,
        fetchAndSetLinks,
        handleSave,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export const useLinks = () => {
  const context = useContext(LinkContext);
  if (context === undefined) {
    throw new Error("useLinks must be used within a LinkProvider");
  }
  return context;
};
