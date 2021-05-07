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
    width: 200vh;
    height: 200vh;
    z-index: -1;
`

const App = () => {
  const [accept, setAccept] = useState(false);

  const setToTrue = () => {
    setAccept(true);
  }

  return(
    <>
    <Router>
      <GlobalPageWrapper />
        <ParticleWrapper>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 70,
                "density": {
                  "enable": true,
                  "value_area": 1000
                }
              },
              "color": {
                "value": "#787880"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 1,
                  "color": "#787880"
                },
                "polygon": {
                  "nb_sides": 8
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
                "value": 4,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#787880",
                "opacity": 1,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
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
              "detect_on": "canvas",
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
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
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