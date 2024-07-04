"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  use,
} from "react";

export interface LinkType {
  timestamp: number;
  name: string;
}

interface LinkInfo {
  links: LinkType[];
  selectedPlatform: string;
}

type LinkContextType = {
  links: LinkType[];
  selectedPlatform: LinkInfo["selectedPlatform"];
  setSelectedPlatform: (platform: string) => void;
  setLinks: (links: LinkType[]) => void;
  removeLink: (timestamp: number) => void;
  addLink: (link: LinkType) => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [selectedPlatform, setSelectedPlatform] =
    useState<LinkInfo["selectedPlatform"]>("");

  const addLink = (link: LinkType) => {
    if (links.length < 5) {
      setLinks([...links, link]);
    }
  };

  const removeLink = (timestamp: number) => {
    setLinks(links.filter((link) => link.timestamp !== timestamp));
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        setLinks,
        removeLink,
        addLink,
        setSelectedPlatform,
        selectedPlatform,
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
