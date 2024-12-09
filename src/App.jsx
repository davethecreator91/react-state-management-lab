import { useState } from "react";

const ZFOptions = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
]

const App = () => {

  //State 
const [team, SetTeam] = useState([])
const [teamStrength, SetTeamStrength] = useState(0)
const [teamAgility, SetTeamAgility] = useState(0)
const [money, setMoney] = useState(100)
const [ZombieFighters, SetZombieFighters] = useState(ZFOptions);




  
  // Event handler

  const handleAddFighter = (newFighter) => {
 
if (money >= newFighter.price) {
  SetTeam([...team, newFighter]);
  setMoney(money - newFighter.price)
  SetTeamStrength(teamStrength + newFighter.strength)
  SetTeamAgility(teamAgility + newFighter.agility)
}
  else alert("Not enough money to add this fighter!")
  }

const handleRemoveMember = (memberRemove) => {
  SetTeam([team, memberRemove])
  SetMoney(money + memberRemove)
  SetTeamStrength(teamStrength - memberRemove.strength)
  SetTeamAgility(teamAgility - memberRemove)
}
  
  //Additional Functions

  //creating a function that adds new member's strength to the initial strength


  //team picking prompt
  if (team.length === 0) {
    alert("Pick some team members!")
  }

  

  return (
    <>
    <h1>Zombie Fighters</h1>

    <h2>Money: {money}</h2>

    <h2>Team</h2>
        <h3>Team Strength: {teamStrength}</h3>
        <h3>Team Agility: {teamAgility}</h3>
      <ul>
        {team.map((member, idx) => (
        <li key={idx}>
          <img src={member.img} alt="" />
          <p>Name: {member.name}</p>
          <p>Strength: {member.strength}</p>
          <p>Agility: {member.agility}</p>
          <button type="submit" name="remove" onClick={ () => handleRemoveMember(member)}>Remove</button>
          </li>
        ))}
        </ul>
    <h2>Fighters</h2>
      <ul>
        {ZombieFighters.map((zFighter, idx) => (
        <li key={idx}>
          <img src={zFighter.img} alt="" />
         <p>Name: {zFighter.name}</p>
         <p>Price: ${zFighter.price}</p>
         <p>Strength {zFighter.strength}</p>
         <p>Agility {zFighter.agility}</p> 
         <button type="submit" name="submit" onClick={ () => handleAddFighter(zFighter)}>Add</button>
         </li>
        ))}

      </ul>4
      
    </>
  );
}

export default App