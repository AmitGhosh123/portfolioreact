import React from 'react'
import "./productList.css"
import { products } from '../../data'
import Product from '../product/Product'

const ProductList = () => {
  return (
    <div>
      <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">WEB development projects</h1>
        <p className="pl-desc">
          These are some projects made by me and hosted with github link.
          Click on the project tile to view the actual project.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default ProductList
