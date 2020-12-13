import React from "react";
import SignUp from "./SignUp";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("SignUp tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <SignUp />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });