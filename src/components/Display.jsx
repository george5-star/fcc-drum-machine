import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect } from "react";

const DisplayContainer = styled.div`
  background-color: #f0f0f0;
  padding: 0.85rem;
  width: 100%;
  color: #555;
  text-align: center;
  font-size: 1.25rem;
`;

const Display = ({ setStatus, drumPadText, volumeValue }) => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("display").innerText = "";
    }, 1000);
  }, [setStatus, volumeValue]);

  return (
    <DisplayContainer id="display">
      {setStatus ? drumPadText : "Power: Off"}
    </DisplayContainer>
  );
};

Display.propTypes = {
  setStatus: PropTypes.bool.isRequired,
  volumeValue: PropTypes.string.isRequired,
  drumPadText: PropTypes.string.isRequired,
};

export default Display;
