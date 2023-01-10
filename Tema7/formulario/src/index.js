import fetch from 'node-fetch';

document.getElementById("pin").addEventListener("input", comprobarPin);

async function comprobarPin(e){
    
    if(e.target.value.length===5){
        
        let peticion = await fetch('https://validate-pin.fly.dev/validate', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'PIN='+e.target.value
        }
        );

            console.log(peticion);
    }
}
