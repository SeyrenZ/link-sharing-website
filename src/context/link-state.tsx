"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface LinkType {
  timestamp: number;
  name: string;
  platform: string; // New property
}

interface LinkInfo {
  links: LinkType[];
  selectedPlatform: string;
}

type LinkContextType = {
  links: LinkType[];
  setLinks: (links: LinkType[]) => void;
  updateLinkPlatform: (index: number, platform: string) => void; // Updated part
  removeLink: (timestamp: number) => void;
  addLink: (link: LinkType) => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const addLink = (link: LinkType) => {
    if (links.length < 5) {
      setLinks([...links, link]);
    }
  };

  const removeLink = (timestamp: number) => {
    setLinks(links.filter((link) => link.timestamp !== timestamp));
  };

  const updateLinkPlatform = (index: number, platform: string) => {
    setLinks(links.map((link, i) => i === index ? { ...link, platform } : link));
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        setLinks,
        removeLink,
        addLink,
        updateLinkPlatform, 
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
