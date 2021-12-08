import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "../pages/homepage/HomePage"
import ApplicationFormPage from "../pages/applicationformpage/ApplicationFormPage"
import LoginPage from "../pages/loginpage/LoginPage"
import AdminHomePage from "../pages/adminhomepage/AdminHomePage"
import TripDetailsPage from "../pages/tripdetailspage/TripDetailsPage"
import CreateTripPage from "../pages/createtrippage/CreatetripPage"
import ListTripsPage from "../pages/listtripspage/ListTripsPage"

const DivBody = styled.div`
  height: 100vh;
  width: 100vw;
`

const Router = () => {
    return (
        <BrowserRouter>
      <DivBody>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/ApplicationForm">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/Login">
            <LoginPage />
          </Route>

          <Route exact path="/AdminHome">
            <AdminHomePage />
          </Route>

          <Route exact path="/TripDetails/:id">
            <TripDetailsPage />
          </Route>

          <Route exact path="/CreateTrip">
            <CreateTripPage />
          </Route>

          <Route exact path="/ListTrips">
            <ListTripsPage />
          </Route>
        </Switch>
      </DivBody>
    </BrowserRouter>
    )
}

export default Router