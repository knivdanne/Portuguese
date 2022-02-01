import './App.css';
import { Button, Card, Dropdown, Carousel, Nav, NavDropdown, ListGroup, Badge, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// MAKE SURE TO USE EXAMPLES FROM BOOTSTRAPREACT https://react-bootstrap.github.io/components/navs/
import Amplify, { API, container, graphqlOperation, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DeviceInfo from 'react-native-device-info';
// import Filter from "./components/filter";
// import Browse from "./components/browse";
import content from './content';
// import { Footer } from './components/footer';
// import { Navbar_ } from "./components/navbar";
// import { LoginForm } from "./components/login";
// import { sendInfo, getDevice, DisplayIp } from "./components/logging";
import { DisplayGlosor } from "./components/glosor";
// import { CreateRecipe } from "./components/createRecipe";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import awsExports from "./aws-exports";
Amplify.configure(awsExports);








const App = () => {

  useEffect(() => {
  }, [])



  return (
    <div className="App" style={{ background: content.color.BackgroundShade, }}>
      <Router>
        <div style={{ fontFamily: 'Arial', }} >

          <Routes >
            <Route path="/" element={
              <div className="App">
                <header >
                  <div className='d-flex justify-content-between mx-2'>
                  </div>

                </header>
                <div style={{ background: content.color.BackgroundShade, }}>
                  <Container style={{ background: content.color.LightShade, }}>
                  </Container>
                </div>
              </div>
            } />
            <Route path="/glosor" element={
              <div className="App">
                <header >
                  <div className='d-flex justify-content-between mx-2'>
                  </div>
                </header>
                <div style={{ background: content.color.BackgroundShade, }}>
                  <Container style={{ background: content.color.LightShade, }}>
                    <DisplayGlosor />
                  </Container>
                </div>
              </div>
            } />

          </Routes >

        </div>
      </Router >

    </div>

  )
}


export default App