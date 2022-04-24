import { useState } from "react";
import data from "./components/Data";
import Card from "./components/Card";
import Header from "./components/Header";
// import Cards from "./components/Cards";

function App() {
  let [persons, setPersons] = useState(data[0])
  // console.log(persons);

    const changeLeft = (id)=>{
      // console.log('current id',id);
      
      if(id===0){
        id=4
      }
      id-=1
      setPersons(data[id])
      // console.log('changed id',id);
      
    }

    const changeRight = (id)=>{
      // console.log('clicked id',id);
      id+=1
      if(id===4){
        id=0
      }
      setPersons(data[id])
    }

    function randomChange(id){
      console.log('clicked')
      const randomNumber = Math.floor(Math.random()*3+1)
      
      setPersons(data[randomNumber])
      
    }
  
  return (
    <div  className="container">
      <Header/>
      <Card {...persons} changeLeft={changeLeft}
      changeRight={changeRight}
      randomChange={randomChange}/>
    </div>
  )
}

export default App;
