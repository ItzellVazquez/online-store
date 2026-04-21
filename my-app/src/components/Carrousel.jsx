import React, {useState} from 'react'
import ProductCard from './productCard'
import data from '../data/data.js'
const Carrousel = (props) => {
  const {category} = props
  const products = data.filter(product => product.categoria === category)

  console.log("las propiedades del carrousel son: ", category, data)
  return (
    <div className="carrousel flex flex-row overflow-x-auto gap-4 py-4">
      <div children="carrousel-title" className="flex flex-row text-xl font-bold mb-4">
        hola soy el Carrousel
      </div>
      <div className="carrousel-items flex flex-row gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

      </div>
    </div>
  )
}

export default Carrousel