
function Card({id, name, job, description, image ,changeLeft, changeRight, randomChange}) {
  return (
    <div className="card">
      <div className="img">
            <i className="fa-solid fa-quote-right"></i>
            <img src={image} alt="person" />
          </div>
          <div className="desc-title">
            <h4>{name}</h4>
            <h4 className="job">{job}</h4>
          </div>
          <div className="desc-body">
            <p>
              {description}
            </p>
          </div>
          <div className="pagination">
            <span onClick={()=>changeLeft(id)}><i className="fa-solid fa-angle-left"></i></span>
            <span onClick={()=>changeRight(id)}><i className="fa-solid fa-angle-right"></i></span>
          </div>
          <button onClick={()=>randomChange(id)}>Surprise Me</button>
    </div>
  )
}

export default Card
