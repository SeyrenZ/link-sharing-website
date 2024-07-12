"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface LinkType {
  timestamp: number;
  name: string;
  platform: string; // New property
  url: string;
}

type LinkContextType = {
  links: LinkType[];
  linkData: LinkType[];
  setLinks: (links: LinkType[]) => void;
  updateLinkPlatform: (index: number, platform: string) => void;
  updateLinkUrl: (index: number, url: string) => void; // Updated part
  removeLink: (timestamp: number) => void;
  addLink: (link: LinkType) => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [linkData, setLinkData] = useState<LinkType[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      // Retrieve the email from localStorage
      const email = localStorage.getItem("email"); // Assuming 'email' is the key used to store the email

      // Check if email exists
      if (email) {
        const response = await fetch(`/api/data/get-link?email=${email}`);
        if (response.ok) {
          const data = await response.json();
          setLinkData(data); // Update state with fetched data
        }
      } else {
        console.log("No email found in localStorage");
      }
    };

    fetchLinks();
  }, []);

  const addLink = (link: LinkType) => {
    if (links.length < 5) {
      setLinks([...links, link]);
    }
  };

  const removeLink = (timestamp: number) => {
    setLinks(links.filter((link) => link.timestamp !== timestamp));
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
        linkData,
        setLinks,
        removeLink,
        addLink,
        updateLinkPlatform,
        updateLinkUrl,
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
