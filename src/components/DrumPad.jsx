import PropTypes from "prop-types";
import { forwardRef } from "react";
// import { forwardRef } from "react";
import styled from "styled-components";

import qPath from "../assets/sounds/Heater-1.mp3";
import wPath from "../assets/sounds/Heater-2.mp3";
import ePath from "../assets/sounds/Heater-3.mp3";
import aPath from "../assets/sounds/Heater-4_1.mp3";
import sPath from "../assets/sounds/Heater-6.mp3";
import dPath from "../assets/sounds/Dsc_Oh.mp3";
import zPath from "../assets/sounds/Kick_n_Hat.mp3";
import xPath from "../assets/sounds/RP4_KICK_1.mp3";
import cPath from "../assets/sounds/Cev_H2.mp3";

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: hsl(226, 25%, 69%);
  border-radius: 8px;
  filter: blur(2px);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    hsl(248, 39%, 39%) 0%,
    hsl(248, 39%, 49%) 8%,
    hsl(248, 39%, 39%) 92%,
    hsl(248, 39%, 29%) 100%
  );
`;

const Front = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: hsl(248, 53%, 58%);
  padding: 16px 32px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Pushable = styled.button`
  position: relative;
  width: 80px;
  height: 70px;
  display: flex;
  justify-content: center;
  aign-items: center;
  background: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    filter: brightness(110%);
  }

  &:hover ${Front} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const soundMap = {
  "Q": qPath,
  "W": wPath,
  "E": ePath,
  "A": aPath,
  "S": sPath,
  "D": dPath,
  "Z": zPath,
  "X": xPath,
  "C": cPath,
};

const DrumPad = forwardRef(function Drumpad({ pad, triggerClicked, id }, ref) {
  return (
    <Pushable className="drum-pad" id={pad} onClick={triggerClicked}>
      <Shadow className="shadow"></Shadow>
      <Edge></Edge>
      <Front className="front" id={id}>
        {pad}
      </Front>
      <audio
        src={`${soundMap[pad]}`}
        className="clip"
        id={pad}
        ref={ref}
      ></audio>
    </Pushable>
  );
});

DrumPad.propTypes = {
  pad: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  triggerClicked: PropTypes.func.isRequired,
};

export default DrumPad;
