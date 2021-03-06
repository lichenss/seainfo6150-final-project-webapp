import React from "react";
import Course from "./Course";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
var data={
    title:"Therapeutic Art Life Coach Certification (Accredited)",
    imgurl:"https://arhu.umd.edu/sites/default/files/2019-04/iStock-955549248%20composite-JC%20flat2%20opt1-min.jpg",
    description:"Therapeutic Art: Help Clients Heal, Reduce Stress & Manifest Dreams with Mandalas, Affirmations, Vision Boards",
    instructor:"Janet Giessl"
};
const location={
        state:{data}
}
describe("Course tests", () => {
    it("renders correctly", () => {
      const { container } = render(
      <BrowserRouter>
      <Course location={location} />
      </BrowserRouter>);
      expect(container).toMatchSnapshot();
    });
  });