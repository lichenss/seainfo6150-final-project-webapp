import React from "react";
import AboutUs from "./AboutUs";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("AboutUs tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <AboutUs />
      </BrowserRouter>
      );
      expect(container).toMatchSnapshot();
    });
  });