import useGetSpecie from "./use_get_specie";
import Loading from "./Loading";

function PokeData(props) {

  // Your code here
  const {id} = props;
  const {especie, loading} = useGetSpecie(id);

    return (
      <Loading loading={loading}>
          <h2>PokeData</h2>
          <div className='pokedata'>
              <img alt="pokemon image" src={especie}/>
          </div>
      </Loading>
    )
}

export default PokeData;
