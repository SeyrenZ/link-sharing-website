"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Link {
  timestamp: number;
  name: string;
  platform: string;
  url: string;
}

interface LinkContextType {
  links: Link[];
  setLinks: (links: Link[]) => void;
  addLink: (link: Link) => Promise<void>;
  updateLinkPlatform: (id: number, platform: string) => Promise<void>;
  removeLink: (timestamp: number) => Promise<void>;
  loading: boolean;
  error: Error | null;
}

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within a LinkProvider");
  }
  return context;
};

export const LinkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchLinks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/links");
      const data: Link[] = await response.json();
      console.log(data);
      setLinks(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const addLink = async (link: Link) => {
    setLoading(true); // Start loading
    try {
      // Send a POST request to add the new link
      const response = await fetch("/links", {
        // Updated URL to match server route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(link),
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Endpoint not found. Please check the URL.");
        } else {
          throw new Error("Failed to add the link");
        }
      }
      // After adding, fetch the updated list of links to refresh the state
      await fetchLinks();
    } catch (err) {
      setError(err as Error); // Set any errors that occur
    } finally {
      setLoading(false); // End loading
    }
  };

  const updateLinkPlatform = async (id: number, platform: string) => {
    try {
      await fetch(`/api/links/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ platform }),
      });
      fetchLinks(); // Refresh the list
    } catch (err) {
      setError(err as Error);
    }
  };

  const removeLink = async (timestamp: number) => {
    try {
      await fetch(`/api/links/${timestamp}`, {
        method: "DELETE",
      });
      fetchLinks(); // Refresh the list
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        setLinks,
        updateLinkPlatform,
        removeLink,
        loading,
        error,
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
