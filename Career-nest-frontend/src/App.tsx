import './App.css';
import { createTheme, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { create } from 'domain';

function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': [
        '#1c1c1c',
        '#1a1a1a',
        '#171717',
        '#151515',
        '#121212',
        '#0f0f0f',
        '#0c0c0c',
        '#0a0a0a',
        '#070707',
        '#050505',
      ],
      'cerise': [
        '#ff6f91',
        '#ff5f85',
        '#ff4f79',
        '#ff3f6d',
        '#ff2f61',
        '#ff1f55',
        '#ff0f49',
        '#ff003d',
        '#e60036',
        '#cc002e',
      ],
    },
    primaryColor: 'cerise',
    primaryShade: 5,  
  })
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
