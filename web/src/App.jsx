import { useRef } from 'react';
import './App.css';
import FirstLayer from "./elements/first_layer";
import SecondLayer from "./elements/second_layer";
import NavBar from "./elements/components/nav_bar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();
  return (
    <div className="App">
      {/* <NavBar useRef={ref}/> */}
        <Parallax pages={4} ref={ref}>         
          <ParallaxLayer offset={0} speed={1}>
              <FirstLayer/>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 0.9, end: 3.5 }}>
            <NavBar useRef={ref}/>
          </ParallaxLayer>
        
          <ParallaxLayer offset={2} speed={0.1}>
            <SecondLayer/>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={2}>
              <h2>3. Web development is fun!</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.05}>
              <h2>4. Web development is fun!</h2>
          </ParallaxLayer>
        </Parallax>
    </div>
  );
}

export default App;
