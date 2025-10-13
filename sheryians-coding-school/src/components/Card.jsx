import React from 'react'

const Card = ({jass}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
{jass.map((card, index)=>{
return (
    <div key={index} className="w-[300px] m-10 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
  <img src={card.image} alt="Card Image" className="w-full h-48 object-cover" />
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
    <p className="text-gray-600 text-sm mb-2">{card.description}</p>
    <p className="text-red-500 font-semibold mb-2">Limited Time Offer</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 line-through">{card.originalPrice}</p>
        <p className="text-green-600 font-bold text-lg">{card.discountedPrice}</p>
      </div>
      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{card.discountPercentage} off</span>
    </div>
  </div>
</div>
)

 

})}
   
</div>
  )

}

export default Card