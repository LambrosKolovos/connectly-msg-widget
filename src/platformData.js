import { FaSms } from "react-icons/fa";
import messenger from "./assets/messenger.png";
import instagram from "./assets/instagram.png";

const platfromData = [
  {
    id: 0,
    name: "SMS",
    icon: <FaSms size={32} />,
    desktopUrl: null,
    mobileUrl: "sms:123456",
  },
  {
    id: 1,
    name: "Messenger",
    icon: <img src={messenger} alt="Messenger icon" />,
    desktopUrl: "https://www.messenger.com/",
    mobileUrl: "fb-messenger://user/104062028320072",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <img src={instagram} alt="Instagram icon" />,
    desktopUrl: "https://www.instagram.com/",
    mobileUrl: "instagram://user?username=connectly.ai",
  },
];

export default platfromData;
