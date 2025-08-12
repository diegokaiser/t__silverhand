import React, { createContext, useState, useEffect } from "react";

interface DrawerContextType {
  drawerOpen: boolean;
  toggleDrawer: (value?: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('drawerOpen');
    if (stored !== null) setDrawerOpen(stored === 'true')
  }, [])

  const toggleDrawer = (value?: boolean) => {
    const next = value !== undefined ? value : !drawerOpen
    setDrawerOpen(next)
    localStorage.setItem('drawerOpen', String(next))
  }

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const DrawerContextRef = DrawerContext;