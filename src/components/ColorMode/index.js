import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode(props) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {...props}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
