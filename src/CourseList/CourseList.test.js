import React from "react";
import CourseList from "./CourseList";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const courses={
    "cs-0001":{
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
},
"cs-0002":{
"slug": "art-0002",
"title": "The Ultimate Drawing Course - Beginner to Advanced",
"description": "Learn the #1 most important building block of all art",
"instructor": "Joeel & Natalie Rivera",
"image": {
  "_url": "https://wordpressstorageaccount.blob.core.windows.net/wp-media/wp-content/uploads/sites/946/arts-humanities-1.jpg",
  "_height": "619",
  "_width": "1100"
},
"requirements":"Motivation to learn!"
}
}
describe("CourseList tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <CourseList categoryName='computer-science'
        courses={courses}/>
        </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });