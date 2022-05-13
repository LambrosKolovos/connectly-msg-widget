import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import instagram from "../../../assets/instagram.png";
import Platform from "../Platform";

const renderElement = () => {
  const testPlatform = {
    id: 0,
    name: "Dummy messenger",
    desktopUrl: "deskurl.com",
    icon: <img src={instagram} />,
  };
  render(
    <Platform
      name={testPlatform.name}
      url={testPlatform.desktopUrl}
      icon={testPlatform.icon}
    />
  );

  return screen.getByTestId("platform-id");
};

const platformElement = renderElement();

test("Platform component renders properly", () => {
  expect(platformElement).toBeInTheDocument();
});

test("Has correct text", () => {
  expect(platformElement).toHaveTextContent("Dummy messenger");
});

test("Redirects properly", () => {
  expect(platformElement).toHaveAttribute("href", "deskurl.com");
});
