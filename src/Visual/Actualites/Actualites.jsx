import "./Actualites.css";

function Actualites(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.urlToImage} />
      <p>{props.description}</p>
      <p>{props.content}</p>
      <p>Voir Plus : {props.url}</p>
    </>
  );
}

export default Actualites;
