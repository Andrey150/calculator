import React from 'react';
import useTheme from "../hooks/useTheme";
import './theme-button.css'

const ThemeButton = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div>
      <button className="theme-switcher" onClick={() => setIsDark(!isDark)}>
        Light Dark
      </button>
    </div>
  );
};

export default ThemeButton;