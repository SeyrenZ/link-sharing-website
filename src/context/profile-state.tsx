"use client";
import React, { createContext, useContext, useState } from "react";

type ProfileContextType = {
  isButtonClicked: boolean;
  setIsButtonClicked: (profile: boolean) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        isButtonClicked,
        setIsButtonClicked,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
