import "../Product.css";
import "./ProductPopup.css"

const ProductCard = ({
    productTitle,
    products,
}) => {

    const handleAddToCart = (product) => {
        // TODO
        alert(`Product name: ${product.product_name}`);
    }

    const productElements = products?.map((product, i) => {
        return <div key={i} className="products__card">
                    <img src={product.product_image} alt="product image" />
                    <div className="productCard__info">
                        <strong className="products__name">{product.product_name}</strong>
                        <div className="__info">
                    <span className="products__price">{product.price}</span>
                    <span className="products__rating">rating {product.rating}</span>
                        </div>
                    </div>
                <button className="add__to__cart__button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
    })
    
    return (
        <div className="products">
            <h3 className="products__title">{productTitle}</h3>
            <div className="products__group">
                {
                    productElements
                }
            </div>
        </div>
    )
}

export default ProductCard;