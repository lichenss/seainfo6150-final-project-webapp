import React from "react";
import ContactUs from "./ContactUs";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("ContactUs tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <ContactUs />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });