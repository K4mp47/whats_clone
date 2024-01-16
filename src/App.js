import './App.css';
import {LeftPanel} from "./components/left-panel";
import {RightPanel} from "./components/right-panel";
import {Flex} from "@chakra-ui/react";

function App() {
  return (
    <Flex className="App">
        <LeftPanel />
        <RightPanel />
    </Flex>
  );
}

export default App;
