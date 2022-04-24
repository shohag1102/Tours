import { useState } from "react"

function Tour({id,image,info,price,name, removeTour}) {


const [readMore, setReadMore] = useState(false)

  return (
    <div className="card">
        <div class="img-div">
                <img src={image} alt={name}/>
        </div>
        <div class="desc_head">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
            <div class="desc-body">
                <p>{readMore ? info : `${info.substring(0,200)}...`} <a onClick={()=> setReadMore(!readMore)} >
                    {readMore ? 'Show Less' : 'Show More'}
                    </a></p>
                
            </div>
            <div class="btn-div">
                <button class="delete-btn"
                onClick={()=>removeTour(id)}>
                    Not Interested
                </button>
            </div>
    </div>
  )
}

export default Tour
