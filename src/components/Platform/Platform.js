import React from "react";
import "./Platform.css";

function Platform({ icon, name, url, visible }) {
  return (
    <a
      data-testid="platform-id"
      href={url}
      target="_blank"
      className={
        visible
          ? "platform-container platform-container__visible"
          : "platform-container"
      }
    >
      {icon}
      <div className="platform-container__text">{name}</div>
    </a>
  );
}

export default Platform;
