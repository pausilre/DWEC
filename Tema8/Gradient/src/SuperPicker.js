import Gradient from './Gradient'
import Range from './Range'
import { useState } from 'react';


function SuperPicker() {

    let [rangeValueHue, setRangeValueHue] = useState(0);
    let [rangeValueSaturation, setRangeValueSaturation] = useState(100);
    let [rangeValueSteps, setRangeValueSteps] = useState(10);
  
    function cambiarHue(nuevoValor) {
      setRangeValueHue(nuevoValor);
    }
    function cambiarSaturation(nuevoValor) {
      setRangeValueSaturation(nuevoValor);
    }
    function cambiarSteps(nuevoValor) {
      setRangeValueSteps(nuevoValor);
    }
  
    return (
      <>
        <div id="container">
          <div class="containerSlider">
            <Range label='Hue' min='0' max='360' cambiarValor={cambiarHue} defaultValue='0'/>
            <Range label='Saturation' min='0' max='100' cambiarValor={cambiarSaturation} defaultValue='100'/>
            <Range label='Steps' min='5' max='100' cambiarValor={cambiarSteps} defaultValue='10'/>
          </div>
  
          <div id="infoRange">
            <Gradient  hue={rangeValueHue} saturation={rangeValueSaturation} number={rangeValueSteps}/>
          </div>
        </div>
      </>
    );
  }

  export default SuperPicker;


