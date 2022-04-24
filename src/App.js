import Tours from "./components/Tours";
import Tour from "./components/Tour";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tours-project'
// let url ='http://api.icndb.com/jokes/random'


function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] =useState([])

  const removeTour = (id)=>{
    let newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async()=>{
    setLoading(true)

    const response = await fetch(url)
    const tours = await response.json()
    setTours(tours) 
    setLoading(false)

  }

  useEffect(()=>{
    fetchTours()
  },[])

  console.log(tours[0]);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length===0){
    return(
      <main>
        <h3>No Tours Left</h3>
        <div className="btn-div">
        <button className="refresh_btn"
        onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main >
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
