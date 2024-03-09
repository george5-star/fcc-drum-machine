import styled from "styled-components";
import PropTypes from "prop-types";

const Handle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  border: 1px solid #e5e5e5;
  background: repeating-radial-gradient(
      circle at 50% 50%,
      rgba(200, 200, 200, 0.2) 0%,
      rgba(200, 200, 200, 0.2) 2%,
      transparent 2%,
      transparent 3%,
      rgba(200, 200, 200, 0.2) 3%,
      transparent 3%
    ),
    conic-gradient(
      white 0%,
      silver 10%,
      white 35%,
      silver 45%,
      white 60%,
      silver 70%,
      white 80%,
      silver 95%,
      white 100%
    );
  box-shadow: 3px 5px 10px 0 rgba(0, 0, 0, 0.4);
  transition: left 0.4s;
`;

const ToggleBorder = styled.div`
  border: 2px solid #f0ebeb;
  width: 65px;
  margin-block-start: -15px;
  margin-inline: auto;
  padding: 1px 2px;
  background: linear-gradient(to bottom right, white, rgba(220, 220, 220, 0.5)),
    white;
  box-shadow: 0 0 0 2px #fbfbfb;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }

  & input[type="checkbox"] {
       display: none;
    }

    & label {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 20px;
        background: #ff8b71;
        cursor: pointer;
        box-shadow: inset 0 0 16px rgba(0,0,0,.3);
        transition: background .5s;
            }

    & input[type="checkbox"]:checked + label {
        background: #31ff87;
    }

    & input[type="checkbox"]:checked + label > ${Handle} {
        left: calc(100% - 35px + 20px);
    }

 {
`;

const ToggleText = styled.p`
  font-size: 1.25em;
  text-align: center;
  color: #555;
  display: block;
`;

const Bank = ({ setBankText }) => {
  return (
    <>
      <ToggleText>Bank</ToggleText>
      <ToggleBorder>
        <input id="two" type="checkbox" onChange={setBankText} />
        <label htmlFor="two">
          <Handle></Handle>
        </label>
      </ToggleBorder>
    </>
  );
};

Bank.propTypes = {
  // bankToggleStatus: PropTypes.bool.isRequired,
  setBankText: PropTypes.func.isRequired,
};

export default Bank;
