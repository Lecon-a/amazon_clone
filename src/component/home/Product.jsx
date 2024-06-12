import "./Product.css";
import { Link } from "react-router-dom";


const Product = ({
    productTitle,
    action,
    imageSize,
    data,
    handleProductPopup,
    isPopUp
}) => {
    
    return (
        <div className="product">
            <h3 className="product__title">{productTitle}</h3>
            <div className="product__image_gallery" onClick={() => handleProductPopup(productTitle, data)}>
                {
                    Array(imageSize)
                        .fill()
                        .map((_, i) =>
                            <div key={i} className={imageSize === 1 ? "product_img_style_one" : "product__image"}>
                                <img src={data[i]?.product_image} alt="product image" />
                                <span className="product__name">{data[i]?.product_name}</span>
                            </div>)
                }
            </div>
            <Link to={"/more_products"} className="product__see_more">{action}</Link>
        </div>
    )
}

export default Product;