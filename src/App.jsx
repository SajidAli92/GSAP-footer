import React, { useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css"
import Footer from './components/Footer';


function App() {
  const appRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    const App = appRef.current;
    const cursor = cursorRef.current;

    if (!App || !cursor) return;

    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.6,
      }); 
    };

    
    App.addEventListener("mousemove", handleMouseMove);

    return () => {
      App.removeEventListener("mousemove", handleMouseMove);
    };
  });
    
    
  return (
    <>
    <div className='App'  ref={appRef}>
           <div id="cursor" ref={cursorRef}> </div>
           <Footer/>
    </div>

    </>
    
  )
}

export default App
