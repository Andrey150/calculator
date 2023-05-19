import React from 'react';
import useTheme from "../hooks/useTheme";

const Layout = ({children}) => {
  const { isDark } = useTheme();
  return (
    <div className={`layout ${isDark ? 'dark' : ''}`}>
      {children}
    </div>
  );
};

export default Layout;