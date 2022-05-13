import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import MessageWidgetButton from "../MessageWidgetButton";

test("Displays chat icon when platforms are open", () => {
  render(<MessageWidgetButton shrinked={true} platformsOpen={true} />);

  const closeIcon = screen.getByTestId("close-platform-icon-id");
  expect(closeIcon).toBeInTheDocument();
});

test("Displays close icon when platforms are closed", () => {
  render(<MessageWidgetButton shrinked={true} platformsOpen={false} />);

  const showIcon = screen.getByTestId("show-platform-icon-id");
  expect(showIcon).toBeInTheDocument();
});
