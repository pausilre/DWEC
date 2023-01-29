import { useState } from 'react';

function Range(props){
    const {label, min, max, cambiarValor, defaultValue} = props;
    let [textValue, setRangeValue] = useState(defaultValue);

    function recogerValorCambiado(event){
        setRangeValue(event.target.value);
        cambiarValor(event.target.value);
    }
    return(
        <div class="containerRange">
            <div className="mr">{label}: </div>
            <div className="mr"><input type="range" min={min} max={max} onChange={recogerValorCambiado} defaultValue={defaultValue}></input></div>
            <div className="mr">{textValue}</div>
        </div>
    )
}

export default Range;