import {useEffect, useState} from 'react';
import { getSpeciesSprite } from './pokemon_api';

function useGetSpecie(id){

    const [loading, setLoading] = useState(true);
    const [especie, setEspecie] = useState();
  
    useEffect(()=>{
      async function load(){
        setLoading(true)
        
        //loading function cuando se cambie de usuario, no obtener especie
        setEspecie(await getSpeciesSprite(id))
        
        setLoading(false);
      }
      load()
    },[id])
    return {especie, loading}
}

export default useGetSpecie;