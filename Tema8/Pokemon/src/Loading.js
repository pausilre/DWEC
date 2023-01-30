import './loader.css'

function Loading(props) {
  const {loading} = props;
  
  if(loading){
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    )
  }else{
    return(
      <>
      {props.children}
      </>
    )
  }
}

export default Loading
