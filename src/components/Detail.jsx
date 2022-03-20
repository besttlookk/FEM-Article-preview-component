import React, { useState } from "react";
import avatar from "../images/avatar-michelle.jpg";
import { ReactComponent as ShareIcon } from "../images/icon-share.svg";
import Icons from "./Icons";

const Detail = () => {
  const [isShareOn, setIsShareOn] = useState(false);

  const handleClick = () => {
    setIsShareOn((prev) => !prev);
  };
  return (
    <div className="detail">
      <div className="detail__image">
        <img alt="avatar" src={avatar} />
      </div>
      <div className="detail__main">
        <p className="detail__name">Michelle Appleton</p>
        <p className="detail__date">20 Mar 2022</p>
      </div>

      {/*  */}

      <div
        className={`detail__share-icon ${isShareOn ? "active" : ""}`}
        onClick={handleClick}
      >
        {/* shared list for desktop */}
        <div className={`detail__share__desktop ${isShareOn ? "active" : ""}`}>
          <Icons />
        </div>
        <ShareIcon />
      </div>

      {/* shared list for mobile */}
      <div className={`detail__share ${isShareOn ? "active" : ""}`}>
        <Icons />
      </div>
    </div>
  );
};

export default Detail;
