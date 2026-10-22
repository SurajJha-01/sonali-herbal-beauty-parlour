import React, { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './themeStore';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('sonali-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('sonali-theme', theme);
    } catch {
      // The selected theme still applies for this visit when storage is unavailable.
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
