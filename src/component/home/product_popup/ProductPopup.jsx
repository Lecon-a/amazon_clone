import "./ProductPopup.css";
import ProductCard from "../product_popup/ProductCard";

function ProductPopup({category, products, close}) {
  return (
    <div className="popup">
      <div className="popup__product">
        <div className="close__icon" onClick={close}>X</div>
        {<ProductCard
                  productTitle={category}
                  products={products}
            />
                        }
      </div>
    </div>
  )
}

export default ProductPopup
