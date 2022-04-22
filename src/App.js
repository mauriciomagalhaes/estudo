import { useState } from "react";
import CarDetails from "./components/CarDetails";
import CondRender from "./components/condRender";
import Container from "./components/Container";
import First from "./components/FirstComponet";
import FormButton from "./components/formComp";
import ListRender from "./components/ListRender";
import Message from "./components/Message";
import MessageChange from "./components/MessageChange";
import UserDatails from "./components/UserDatails";

/* Main App */
function App() {

  const [cars] = useState([
      { id:1, brend: "Ford", model: "Fiesta", year: "2022", price: "12000", km: 0 },
      { id:2, brend: "VW", model: "Gol", year: "2020", price: "15000", km: 20000 },
      { id:3, brend: "Fiat", model: "Marea", year: "1999", price: "5000", km: 30000},
      { id:4, brend: "Renalt", model: "Sandeiro", year: "2020", price: "19000", km: 40000 },
  ]);

  const [message, setMessage] = useState("")
  const handleMessage = msg => setMessage(msg)
  
  const [pessoas] = useState([
    {id:1, name: 'Mauricio', age:'44', job:'Analista TI' },
    {id:2, name: 'Amanda', age:'40', job:'Analista Lic' },
    {id:3, name: 'Alice', age:'5', job:'Estudante' },
  
  ])

/*   const cars =[
    { id:1, brend: "Ford", model: "Fiesta", year: "2022", price: "12000", km: 0 },
    { id:2, brend: "VW", model: "Gol", year: "2020", price: "15000", km: 20000 },
    { id:3, brend: "Fiat", model: "Marea", year: "1999", price: "5000", km: 30000},
    { id:4, brend: "Renalt", model: "Sandeiro", year: "2020", price: "19000", km: 40000 },
  ] */

  return (
    <div className="App">
      <First />
      <FormButton/>
      <ListRender/>
      <CondRender/>
      {cars.map(car => 
        <CarDetails
          key={car.id}
          brend={car.brend} 
          model={car.model} 
          year={car.year} 
          price={car.price} 
          km={car.km}
        />
       )}
       <Container>
         <p>Este é o contúdo</p>
       </Container>

       <Message msg={message}/>
       <MessageChange handleMessage={handleMessage}/>

       {pessoas.map(pessoa =>
          <UserDatails key={pessoa.id} name={pessoa.name} age={pessoa.age}  job={pessoa.job}/>
        )}

    </div>
  );
}
export default App;
