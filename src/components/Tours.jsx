import Tour from "./Tour"


function Tours({tours, removeTour}) {
  return (

    <>
    <div className="container">
        <h2>Our Tours</h2>
    </div>
      {tours.map((tour)=>
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
      )}
    </>
  )
}

export default Tours
