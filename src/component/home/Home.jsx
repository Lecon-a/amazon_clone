import { useState } from "react";
import amazon_cover from "../../assets/images/amazon_cover.jpg";
// 
import headset from "../../assets/images/game/headset.jpg";
import keyboard from "../../assets/images/game/keyboard.jpg";
import mice from "../../assets/images/game/computer_mice.jpg";
import chair from "../../assets/images/game/chair.jpg";
// 
import Product from "./Product";
import ProductPopup from "../home/product_popup/ProductPopup";
import "./Home.css";


const Home = () => {

    const [data] = useState([
        {
            id: "prod0001",
            product_image: headset,
            product_name: "Headsets",
            price: 24.99,
            rating: 4,
            description: "Product description goes here",
        },
        {
            id: "prod0002",
            product_image: keyboard,
            product_name:"Keyboards",
            price: 120,
            rating: 3,
            description: "Product description goes here",
        },
        {
            id: "prod0003",
            product_image: mice,
            product_name:"Computer mice",
            price: 14.99,
            rating: 4,
            description: "Product description goes here",
        },
        {
            id: "prod0004",
            product_image: chair,
            product_name:"Chairs",
            price: 99.99,
            rating: 5,
            description: "Product description goes here",
        },
    ])

    const [titles] = useState(["Gaming accessories", "Shop deals in Fashion", "Refresh your space", "Deals in PCs"])

    const [isShow, setIsShow] = useState(false);
    const [products, setSelectedProducts] = useState([]);
    const [category, setCategory] = useState("");


    const handleProductPopup = (category, products) => {
        setSelectedProducts(products);
        setCategory(category);
        setIsShow(true)
    }

    const handleCloseModal = () => {
        setIsShow(false);
        setSelectedProducts([]);
        setCategory("");
    }

    return (<>
        <div className="home">
            <div className="home__container">
                <img
                    src={amazon_cover}
                    alt="amazon cover"
                    className="home__image"
                />

                <div className="product__wrapper">
                    
                    {/* Store */}
                    <div className="home__row">
                        {
                            Array(4)
                                .fill()
                                .map(
                                    (_, i) => <Product
                                        key={i}
                                        productTitle={titles[i]}
                                        action={"See more"}
                                        data={data}
                                        imageSize={4}
                                        handleProductPopup={handleProductPopup}
                                    />
                                )
                        }
                    </div>
                    {/* end store here */}

                    {/* store */}
                    <div className="home__row">
                        {
                            Array(4)
                                .fill()
                                .map(
                                    (_, i) => <Product
                                        key={i}
                                        productTitle={titles[i]}
                                        action={"See more"}
                                        data={data}
                                        imageSize={2}
                                        handleProductPopup={handleProductPopup}
                                    />
                                )
                        }
                    </div>
                    {/* end store here */}
                    
                    {/* Store */}
                    <div className="home__row">
                        {
                            Array(4)
                                .fill()
                                .map(
                                    (_, i) => <Product
                                        key={i}
                                        productTitle={titles[i]}
                                        action={"See more"}
                                        data={data}
                                        imageSize={1}
                                        handleProductPopup={handleProductPopup}
                                    />
                                )
                        }
                    </div>
                    {/* end store here */}

                    {/* Advertisement */}
                    <div className="home__ads__row">
                        Adverts go here... C...
                    </div>
                    {/* ends here */}

                    {/* Store */}
                    <div className="home__row">
                        {
                            Array(4)
                                .fill()
                                .map(
                                    (_, i) => <Product
                                        key={i}
                                        productTitle={titles[i]}
                                        action={"See more"}
                                        data={data}
                                        imageSize={4}
                                        handleProductPopup={handleProductPopup}
                                    />
                                )
                        }
                    </div>
                    {/* end store here */}

                </div>
            </div>
        {isShow && <ProductPopup products={products} category={category} close={handleCloseModal} />}
        </div>
    </>
    )
}

export default Home;