import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import ProblemIndexContainer from "./problem_index/problem_index_container";
import GroupShowContainer from "./group_show/group_show";
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import DashboardContainer from "./profile/dashboard";
import Splash from "./splash/splash";
import Footer from "./footer/footer";
import AboutContainer from "./about/about_container";
import ScrollToTop from "./scroll_to_top";
import NotFound from "./not_found";

const App = () => (
  <div className="page-container">
    <div className="main-content">
      <ScrollToTop />
      <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/register" component={RegisterFormContainer} />

        <ProtectedRoute exact path="/problems" component={ProblemIndexContainer} />
        <ProtectedRoute exact path="/groups/:groupId" component={GroupShowContainer} />
        <Redirect exact from="/groups/reload/:groupId" to="/groups/:groupId" />
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />

        <Route exact path="/about" component={AboutContainer} />
        <NotFound />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
