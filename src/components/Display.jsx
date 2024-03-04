import styled from "styled-components";

const DisplayContainer = styled.div`
  background-color: #f0f0f0;
  padding: 0.85rem;
  width: 100%;
  color: #555;
  text-align: center;
  font-size: 1.25rem;
`;

const Display = () => {
  return <DisplayContainer id="display">display</DisplayContainer>;
};

export default Display;
