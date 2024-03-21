import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Nav from './Nav/Nav.jsx'
import Event from './Event/Event.jsx';
import Footer from './Footer/Foot.jsx';
import Team from './Team/Team.jsx'
import About from './About/About.jsx';
import Register from './Register/Register.jsx';
import './index.css'
import './normalize.css'
import '../src/Nav/nav.css'
import '../src/Hero/hero.css'
import '../src/Footer/footer.css'
import '../src/Event/event.css'
import '../src/Team/team.css'
import '../src/About/about.css'
import '../src/Register/register.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/previous",
    element: <>
      <Nav />
      <Event />
      <Footer />
    </>,
  },
 
  {
    path: "/team",
    element: <>
      <Nav />
      <Team />
      <Footer />
    </>,
  },
  {
    path: "/about",
    element: <>
      <Nav />
      <About />
      <Footer />
    </>,
  },
  {
    path: "/register",
    element: <>
      <Nav />
      <Register />
      <Footer />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <RouterProvider router={router}>
      <NextUIProvider>
      <App />
    </NextUIProvider>
    </RouterProvider>
  </React.StrictMode>,
)


// useEffect(() => {

  //   function startLoader(){
  //       let currentValue = 0;
  
  //       function updateCounter(){
  //         if (currentValue === 100){
  //           return;
  //         }
  
  //         currentValue += Math.floor(Math.random()*10) + 1;
  
  //         if(currentValue > 100) {
  //           currentValue=100
  //         }
  
  //         counterRef.current.textContent = currentValue;
  
  //         let delay = Math.floor(Math.random()*50) + 50;
  //         setTimeout(updateCounter , delay)
  //       }
  
  //       updateCounter()
  
  //   }
  
  //   startLoader()
    
  //   gsap.to(".counter" , 0.25 , {
  //     delay:2,
  //     opacity:0,
  //   })

  //   gsap.to('.bar' , 1.5 , {
  //     delay:2,
  //     height:0,
  //     stagger:{
  //       amount:0.5
  //     },
  //     ease:'power4.inOut'
  //   })
  //   gsap.from('.h1', {
  //     delay: 2.5,
  //     y: 50,
  //     stagger: {
  //       amount: 0.5
  //     },
  //     ease: 'power4.inOut',
  //   });

  // },[])
