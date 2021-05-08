import React from 'react';
import ReactDOM from 'react-dom';
import feeds from './feeds.json';
import Feed from './Feed.js';
import NavTab from './NavTab';
import Start from './Start';
import Contact from './Contact';
import Footer from './Footer';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import backgroundImage from './bc_background8.png';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from 'react';

const GlobalPageWrapper = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-repeat: repeat;
    background-color: #fafaff;
  }
`
const PageContainer = styled.div`
  margin-top:100px;
`
const PageContainerWrapper = styled.div`
`
const ParticleWrapper = styled.div`
    position: fixed;
    margin: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    @media (max-width: 768px) {
    min-width: 3000px;
    min-height: 3000px;
  }
`

const App = () => {
  const [accept, setAccept] = useState(false);

  const setToTrue = () => {
    setAccept(true);
  }

  return(
    <>
    <GlobalPageWrapper />
        <ParticleWrapper>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 40,
                "density": {
                  "enable": true,
                  "value_area": 600
                }
              },
              "color": {
                "value": "#787880"
              },
              "shape": {
                "type": "edge",
                "stroke": {
                  "width": 1,
                  "color": "#787880"
                },
                "polygon": {
                  "nb_sides": 6
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.2,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 35,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6b78b1",
                "opacity": 1,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 500,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 1000,
                  "size": 10,
                  "duration": 2,
                  "opacity": 0.5,
                  "speed": 1
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 1
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
      </ParticleWrapper>
        
    <Router>
      
        <PageContainerWrapper>
          <NavTab />
        </PageContainerWrapper>
        
        <Switch> 
          <Route path="/news">
            <PageContainer>
              {feeds.map(feed => <Feed key={feed.id} heading={feed.heading} text={feed.text} date={feed.date}/>)}
            </PageContainer>
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer accept={accept} setToTrue={setToTrue}/>
    </Router>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)