import React from "react";
import LogIn from "./LogIn";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("LogIn tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <LogIn />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });