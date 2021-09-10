import React, { useContext, useState } from 'react';

const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    const [isSidebarOpne, setIsSidebarOpen] = useState(true)
    const [isSubmenuOpne, setIsSubmenuOpen] = useState(true)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider
        value={{ 
            isSidebarOpne, 
            isSubmenuOpne, 
            openSidebar, 
            closeSidebar, 
            openSubmenu, 
            closeSubmenu 
        }}>
            { children }
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}