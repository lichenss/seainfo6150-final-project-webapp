import React from "react";
import ThankYou from "./ThankYou";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("ThankYou tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <ThankYou />
      </BrowserRouter>
      );
      expect(container).toMatchSnapshot();
    });
  });