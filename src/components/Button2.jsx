import React from "react";
import styled from "styled-components";

const Button2 = ({ text, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>{text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: var(--text-color);
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.8em;
    line-height: 2.5em;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 0.9em;
    font-weight: 500;
    color: var(--color);
    transition: transform 0.3s;
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: var(--bg-color);
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: var(--text-color);
    transition: background 0s;
  }

  button:active {
    transform: scale(0.95);
  }
`;
export default Button2;
