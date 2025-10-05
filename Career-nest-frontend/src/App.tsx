import './App.css';
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-blue-500 font-bold underline">
        <HomePage />
      </h1>
    </MantineProvider>
  );
}

export default App;
