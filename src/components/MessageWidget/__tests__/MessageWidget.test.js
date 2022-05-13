import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageWidget from "../MessageWidget";

test("Renders properly", () => {
  render(<MessageWidget />);

  const messageWidgetElement = screen.getByTestId("message-widget-id");

  expect(messageWidgetElement).toBeInTheDocument();
  expect(messageWidgetElement.classList.contains("message-widget")).toBe(true);
});
