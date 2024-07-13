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

type LinkContextType = {
  links: LinkType[];
  setLinks: (links: LinkType[]) => void;
  updateLinkPlatform: (index: number, platform: string) => void;
  updateLinkUrl: (index: number, url: string) => void; // Updated part
  removeLink: (id: string) => void;
  addLink: (link: LinkType) => void;
  fetchAndSetLinks: () => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);

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
  }, [fetchAndSetLinks]);

  const addLink = (link: Omit<LinkType, "id">) => {
    if (links.length < 5) {
      const newLink = { ...link, id: uuidv4() }; // Generate a UUID for the new link
      setLinks([...links, newLink]);
    }
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
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
        removeLink,
        addLink,
        updateLinkPlatform,
        updateLinkUrl,
        fetchAndSetLinks,
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
