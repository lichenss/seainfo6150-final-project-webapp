import React from "react";
import CourseListItem from "./CourseListItem";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const course={
    "slug": "art-0001",
"title": "Therapeutic Art Life Coach Certification (Accredited)",
"description": "Therapeutic Art: Help Clients Heal, Reduce Stress & Manifest Dreams with Mandalas, Affirmations, Vision Boards & More",
"instructor": "Janet Giessl",
"image": {
  "_url": "https://arhu.umd.edu/sites/default/files/2019-04/iStock-955549248%20composite-JC%20flat2%20opt1-min.jpg",
  "_height": "619",
  "_width": "1100"
},
"requirements":"Ability to print course material."
}
describe("CourseListItem tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <CourseListItem course={course} category='computer-science' />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });