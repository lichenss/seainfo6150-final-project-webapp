import React from "react";
import Category from "./Category";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("Category tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <Category categoryLink='computer-science' />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });