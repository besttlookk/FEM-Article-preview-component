import React from "react";
import { ReactComponent as FbIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwIcon } from "../images/icon-twitter.svg";
import { ReactComponent as PintIcon } from "../images/icon-pinterest.svg";
const Icons = () => {
  return (
    <>
      <span>share</span>
      <a href="/">
        <FbIcon />
      </a>
      <a
        href="https://twitter.com/prabhash__dev"
        target="_blank"
        rel="noreferrer"
        title="Click to visit my twitter acc."
      >
        <TwIcon />
      </a>
      <a href="/">
        <PintIcon />
      </a>
    </>
  );
};

export default Icons;
