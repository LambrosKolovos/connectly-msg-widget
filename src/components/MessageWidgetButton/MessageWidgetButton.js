import React from "react";
import { GrClose } from "react-icons/gr";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./MessageWidgetButton.css";
import platfromData from "../../platformData";

function MessageWidgetButton({ shrinked, onClick, platformsOpen }) {
  return (
    <div
      data-testid="msg-widget-button-id"
      className={
        shrinked ? "widget-container__shrinked" : "widget-container__expanded"
      }
    >
      {shrinked ? (
        <div className="widget-container__shrinked-content" onClick={onClick}>
          {platformsOpen ? (
            <GrClose size={30} data-testid="close-platform-icon-id" />
          ) : (
            <BsFillChatDotsFill size={30} data-testid="show-platform-icon-id" />
          )}
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          {platfromData.map((platform) => {
            return (
              <a
                key={platform.id}
                className="widget-container__icon"
                href={platform.desktopUrl}
              >
                {platform.icon}
              </a>
            );
          })}

          <div className="widget-container__text">Message us</div>
        </div>
      )}
    </div>
  );
}

export default MessageWidgetButton;
