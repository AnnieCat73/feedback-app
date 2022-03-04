import './index.css';

const animals = [
  {id: 1, type: "cat", color: "white"},
  {id: 2, type: "dog", color: "brown"},
  {id: 3, type: "hamster", color: "beige"}
];

const animalsAll = animals.map((animal, index) => {
  return <li key={index}>{animal.type} and {animal.color}</li>

}) //1) CAN BE DEFINED HERE WITH  return and { OR


function App() {
  const animalsAll = animals.map((animal, index) => (
     <li key={index}>{animal.type}{animal.color}</li>
  )) // 2) OR AS JSX WITH ( and without return here

  const animalsAll = animals.map((animal, index) => {
    return <li key={index}>{animal.type} and {animal.color}</li>
  })//1 CAN ALSO BE DEFINED HERE WITH return AND {
  
  return (
    <div>
      <ul>
        {animalsAll}
      </ul>
    </div>
    
    
  );
}
export default App;