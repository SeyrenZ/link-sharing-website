"use client";
import React, { createContext, useContext, useState } from "react";

interface LinkType {
  timestamp: number;
  name: string;
}

type LinkContextType = {
  links: LinkType[];
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

  return (
    <LinkContext.Provider value={{ links, removeLink, addLink }}>
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
