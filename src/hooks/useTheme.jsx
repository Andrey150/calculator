import React, {useContext} from 'react';
import { ThemeContext } from "../providers/theme-provider";

const useTheme = () => {
  const value = useContext(ThemeContext);

  return value
};

export default useTheme;