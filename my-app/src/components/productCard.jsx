import AddToCart from './AddToCart.jsx'

const ProductCard = (props) => {
  const { product } = props
  console.log("las propiedades del producto son: ", product)
  return (
    <div className="product-card">
        {product ? (
            <div className="product-item">
                <img src={product.url} alt={product.name} className="product-image max-h-[200px] " />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>Disponible: {product.inventory}</p>
                <AddToCart product={product} />
            </div>
        ) : (
            <></>
        )}  
                </div>
  )
}

export default ProductCard