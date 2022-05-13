import React, { useCallback, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import MessageWidgetButton from "../MessageWidgetButton/MessageWidgetButton";
import Platform from "../Platform/Platform";
import platfromData from "../../platformData";

import "./MessageWidget.css";

function MessageWidget() {
  const [isShrinked, setIsShrinked] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);

  const toggleShowPlatform = () => {
    setShowPlatform(!showPlatform);
  };

  const shrinkWidget = useCallback(() => {
    if (!isShrinked) {
      setTimeout(() => {
        setIsShrinked(true);
      }, 3000);
    } else {
      window.removeEventListener("scroll", shrinkWidget);
    }
  }, [isShrinked]);

  useEffect(() => {
    window.addEventListener("scroll", shrinkWidget);

    return () => {
      clearTimeout(shrinkWidget);
      window.removeEventListener("scroll", shrinkWidget);
    };
  }, [shrinkWidget]);

  return (
    <div className="message-widget" data-testid="message-widget-id">
      {platfromData.map((platform) => {
        return (
          <Platform
            key={platform.id}
            name={platform.name}
            icon={platform.icon}
            url={isMobile ? platform.mobileUrl : platform.desktopUrl}
            visible={showPlatform}
          />
        );
      })}
      <MessageWidgetButton
        shrinked={isShrinked}
        onClick={toggleShowPlatform}
        platformsOpen={showPlatform}
      />
    </div>
  );
}

export default MessageWidget;
