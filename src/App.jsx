import playerData from "./playerData";

function BaseballCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.imgUrl} />
    </div>
  );
}

function App() {
  const cards = playerData.map((player) => <BaseballCard name={player.name} key={player.cardId}/>);

  return (
    <>
    {cards}
    </>
  );
}

export default App;
