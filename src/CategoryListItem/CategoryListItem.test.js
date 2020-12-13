import React from "react";
import CategoryListItem from "./CategoryListItem";
import mathandlogicImg from '../images/math_and_logic.jpg';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const category={
    slug: 5,
        categoryName: 'Math and Logic',
        categoryLink:'math-and-logic',
        imageURI: mathandlogicImg,
}
describe("CategoryListItem tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <CategoryListItem category={category} key={category.slug} />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });