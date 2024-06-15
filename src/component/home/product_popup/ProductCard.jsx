import "../Product.css";
import "./ProductPopup.css"
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/cartSlice";

const ProductCard = ({ productTitle, products }) => {
    const dispatch = useAppDispatch();
    const QUANTITY = 1;

    const handleAddToCart = (product) => {
        dispatch(
          addToCart({
            id: product.id,
            product_image: product.product_image,
            product_name: product.product_name,
            price: product.price,
            rating: product.rating,
            description: product.description,
            quantity: QUANTITY
          })
        );
  };

  const productElements = products?.map((product) => {
    return (
      <div key={product.id} className="products__card">
        <img src={product.product_image} alt="product image" />
        <div className="productCard__info">
          <strong className="products__name">{product.product_name}</strong>
          <div className="__info">
            <span className="products__price">
              $<strong>{product.price}</strong>
            </span>
            <div>
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="products__rating">
                    🌟
                  </span>
                ))}
            </div>
          </div>
        </div>
        <button
          className="add__to__cart__button"
          onClick={() => handleAddToCart(product, product.id)}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div className="products">
      <h3 className="products__title">{productTitle}</h3>
      <div className="products__group">{productElements}</div>
    </div>
  );
};

export default ProductCard;