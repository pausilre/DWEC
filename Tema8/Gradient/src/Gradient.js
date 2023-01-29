import './styles/styles.css'

function Gradient(props){
    const hue = props.hue;
    const saturation = props.saturation;
    const number = props.number;
    let listSquare=[];
    let darkness=0;
    const increment=100/number;

    for(let i=0; i<number; i++){
        listSquare.push(<CrearDivs hue={hue} saturation={saturation} number={darkness} key={i}/>);
        darkness+=increment;
    }
    return (
        <div className="squares" >
            {listSquare}
        </div>
    )
}
function generarHsl(props){
    return `hsl(${props.hue} ${props.saturation}% ${(props.number)}%)`
}

function CrearDivs(props){
    return <div className="square" style={{background:generarHsl(props)}}></div>;
}
export default Gradient;
