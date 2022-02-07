

function DocumentBox(props) {
    
  return ( 
  <a className="documentName" href={props.url} target= "_blank" rel='noreferrer'>
  <div className="RoundTableDoc">
      <p className="documentName">{props.name}</p>
  </div>
  </a>
  );
}

export default DocumentBox;
