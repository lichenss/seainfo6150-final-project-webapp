import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Error from "./Error/Error.jsx";
import LogIn from "./LogIn/LogIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";
import Category from "./Category/Category.jsx";
import Course from "./Course/Course.jsx";
import RegistrationConfirmation from "./RegistrationConfirmation/RegistrationConfirmation.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
/*const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};*/

function App() {
  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/log-in" exact component={LogIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/registration-confirmation" exact component={RegistrationConfirmation} />
      <Route path="/thank-you" exact component={ThankYou} />
        <Route
          path="/:categoryLink"
          exact
          render={(props) => (
            <Category
              categoryLink={props.match.params.categoryLink}
            />
          )}
        />
        <Route
          path="/:categoryName/:courseID"
          exact 
          render={(props) => (
            <Course
              location={props.location}
            />
          )}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
/*

        
        
*/