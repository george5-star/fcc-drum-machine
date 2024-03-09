import styled from "styled-components";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import Power from "./components/Power";
import Bank from "./components/Bank";
import Volume from "./components/Volume";
import { useEffect, useRef, useState } from "react";

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
  const [padText, setPadText] = useState("");
  const audiosRef = useRef(null);

  const getMap = () => {
    if (!audiosRef.current) {
      audiosRef.current = new Map();
    }
    return audiosRef.current;
  };

  const textMap = {
    Q: "Heater-1",
    W: "Heater-2",
    E: "Heater-3",
    A: "Heater-4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };

  const handlePower = () => {
    setPowerStatus((prevValue) => !prevValue);
  };

  const handleClicked = (e) => {
    console.log(e.target.parentElement);
    // const drumPad = document.querySelector(e.target);
    // console.log(drumPad);
    if (powerStatus) {
      // const audio = e.target.parentElement.lastElementChild;
      // audio.play();
      // audio.currentTime = 0;
      setTimeout(() => {
        const audio = audiosRef.current.get(Number(e.target.id));
        audio.play();
        audio.currentTime = 0;
      }, 1000);

      // const audio = drumPad.lastElementChild;
      // if (audio) {
      //   audio.play();
      //   audio.currentTime = 0;
      // }
      setPadText(textMap[e.target.innerText]);
    }
  };

  const handleBankText = (e) => {
    setPadText(e.target.checked ? "Heater Kit" : "Smooth Piano Kit");
  };

  const handleVolumeText = (e) => {
    setPadText(`Volume: ${e.target.value}`);
  };

  const drumPadElements = keys.map((key, id) => (
    <DrumPad
      pad={key}
      triggerClicked={handleClicked}
      key={id}
      id={id}
      ref={(node) => {
        const map = getMap();
        if (node) {
          map.set(id, node);
        } else {
          map.delete(id);
        }
      }}
    />
  ));

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (powerStatus) {
        const drumPad = document.getElementById(e.key.toUpperCase());
        drumPad.classList.toggle("active");

        setPadText("key pressed");
        setTimeout(() => {
          drumPad.classList.toggle("active");
        }, 50);

        const audio = drumPad.lastElementChild;
        if (audio) {
          audio.play();
          audio.currentTime = 0;
        }
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [powerStatus]);

  return (
    <AppContainer id="drum-machine">
      <DrumPadContainer id="drum-pad-container">
        {drumPadElements}
      </DrumPadContainer>
      <ControlsContainer id="controls-container">
        <Power onToggle={handlePower} power={powerStatus} />
        <Display
          setStatus={powerStatus}
          volumeValue={padText}
          drumPadText={padText}
        />
        <Volume handleVolume={handleVolumeText} status={powerStatus} />
        <Bank setBankText={handleBankText} />
      </ControlsContainer>
    </AppContainer>
  );
};

export default App;
