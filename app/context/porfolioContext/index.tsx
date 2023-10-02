"use client";

import React, { useContext, useEffect, useState, createContext } from "react";

const PortfolioContext = createContext<PortfolioContextType>(
  {} as PortfolioContextType
);

type PortfolioContextType = {
  handleClickSetTime: (selectedTheme: string) => void;
  actualTheme: string;
  handleClickOpenMenu: () => void;
  openMenu: boolean;
  handleClickOpenThemes: () => void;
  openThemes: boolean;
};

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [actualTheme, setActualTheme] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);
  const [openThemes, setOpenModal] = useState(false);

  const handleClickSetTime = (selectedTheme: string) => {
    setActualTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  const handleClickOpenMenu = () => {
    setOpenMenu(!openMenu);
    if (openThemes) {
      setOpenModal(false);
    }
  };

  const handleClickOpenThemes = () => {
    setOpenModal(!openThemes);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== "light") {
      setActualTheme(storedTheme!);
    }
    const root = document.getElementsByTagName("html")[0];
    root.className = actualTheme;
  }, [actualTheme]);

  return (
    <PortfolioContext.Provider
      value={{
        handleClickSetTime,
        actualTheme,
        handleClickOpenMenu,
        openMenu,
        handleClickOpenThemes,
        openThemes,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const useApi = () => useContext(PortfolioContext);
