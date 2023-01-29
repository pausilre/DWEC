import './styles/styles.css';
import { useState } from 'react';
import Range from './Range';



function InfoRange(props){
    const {label, value} = props;
    return(
        <div class="containerRange">
            <div className="mr">{label}: </div>
            <div className="mr">{value}</div>
        </div>
    )
}

function Picker() {

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
          <InfoRange label='Hue' value={rangeValueHue} />
          <InfoRange label='Saturation' value={rangeValueSaturation} />
          <InfoRange label='Steps' value={rangeValueSteps} />
        </div>
      </div>
    </>
  );
}
export default Picker;
