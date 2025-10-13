import React from 'react'

const Card = (props) => {
  return (
    <div className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s" alt="" />
            <h1>{props.user} , {props.age}</h1>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <button>click to view more </button>
        </div>
  )
}

export default Card