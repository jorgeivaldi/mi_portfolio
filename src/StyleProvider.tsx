import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from "@mantine/core"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"
import { useState } from "react"
import { GlobalStyles } from "./GlobalStyles"

// Custom theme is applied to all components in App
export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: 'orange',
        }}
        withGlobalStyles
      >
        <GlobalStyles/>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}