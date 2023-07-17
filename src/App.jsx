import playerData from "./playerData";
import { useState } from 'react';

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)
  const {name, img, key, team, stats, position} = props

  const statsDisplay = Object.entries(stats).map(([stName, stValue]) => (
    <p key={stName}>
      {stName} : {stValue}
    </p>
    ))

  function toggleCard(){
    if(showPicture){
      setShowPicture(false)
    } else {
      setShowPicture(true)
    }
  }

  if(showPicture){
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <img src={img} />
      </div>
    );
  } else {
    return (
      <div className="card" onClick={toggleCard}>
      <h2>{ name }</h2>
      <p>Team: { team }</p>
      <p>Position: { position }</p>
      { statsDisplay }
  
    </div>
    )
  }

}

function App() {
  const cards = playerData.map((player) => 
    <BaseballCard 
      name={player.name} 
      img = {player.imgUrl}
      key={player.cardId}
      team={player.team}
      stats={player.stats}
      position={player.position} 
    />
    )

  return (
    <>
    {cards}
    </>
  );
}

export default App;
