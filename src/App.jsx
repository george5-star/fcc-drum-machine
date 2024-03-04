import styled from "styled-components";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import Power from "./components/Power";
import Bank from "./components/Bank";
import Volume from "./components/Volume";
import { useState } from "react";

const AppContainer = styled.div`
  border: 5px solid #818181;
  display: flex;
  gap: 20px;
  width: 100%;
  margin-inilne: auto;
  padding: 2em;
  border-radius: 10px;

  > * {
    width: 50%;
  }

  @media (max-width: 600px) {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aign-items: center;
    > * {
      width: 100%;
    }
  }
`;
const DrumPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 20px;
  margin-right: 10px;
`;
const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aign-items: center;
  min-height: 30vh;
`;

const App = () => {
  const [powerStatus, setPowerStatus] = useState(true);
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const drumPadElements = keys.map((key, id) => <DrumPad pad={key} key={id} />);

  const handlePower = (e) => {
    // setPowerStatus((prevValue) => !prevValue);
    // e.target.checked = powerStatus;
    console.log("powerStatus: ", powerStatus);
  };

  return (
    <AppContainer id="drum-machine">
      <DrumPadContainer id="drum-pad-container">
        {drumPadElements}
      </DrumPadContainer>
      <ControlsContainer id="controls-container">
        <Power onToggle={handlePower} power={powerStatus} />
        <Display />
        <Volume />
        <Bank />
      </ControlsContainer>
    </AppContainer>
  );
};

export default App;
