import "./Header.css";
import { Link } from "react-router-dom";
import { PlaceOutlined, Search } from "@material-ui/icons";
import { ShoppingBasket } from "@material-ui/icons";
import { useAppSelector } from "../../redux/hooks";
import { totalItemSelected } from "../../redux/actions";
// import { auth } from "../../firebase";
import Brand from "../Brand";

const brand_path = "http://pngimg.com/uploads/amazon/amazon_PNG11.png";


const Header = () => {

    const { basket, user } = useAppSelector(state => state.basket);

    const handleLogOut = () => {
        if (user) {
            // auth.signOut();
        }
    }

    return <div className="header__wrapper">
        <div className="header">
            <Link className="header__brand" to={"/"}>
                SPaICTHub
                {/* <Brand brand_path={brand_path} /> */}
            </Link>

            <div className="header__deliver__to">
                <PlaceOutlined className="header__deliverLogo" />
                <div className="header__deliver__to_text">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Nigeria</span>
                </div>
            </div>

            <div className="header__search">
                <select name="" id="" className="header__searchSelect">
                    <option value="all">All</option>
                    <option value="spaicthub">SPa ICT Hub</option>
                </select>
                <input type="text" className="header__searchInput" />
                {/* search logo */}
                <Search className="header__searchLogo" />
            </div>

            <div className="header__nav">
                <div className="header__optionLocation">
                    <div className="header__optionLogo">🇳🇬</div>
                    <div className="header__optionLineTwo">NIG</div>
                </div>
                <Link className="tabs" to={!user && "/login"}>
                    <div className="header__option" onClick={handleLogOut}>
                        <span className="header__optionLineOne">Hello {user? "," + user.email : "Guest"}</span>
                        <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link className="tabs" to={"/orders"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="tabs" to={"/checkout"}>
                    <div className="header__option cart">
                        <ShoppingBasket className="cart__icon"/>
                        <span className="header__optionLineTwo cart__number">{totalItemSelected(basket)}</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className="header__down_nav">
            <div className="header__down__navItem">All</div>
            <div className="header__down__navItem">Today's Deals</div>
            <div className="header__down__navItem">Customer Service</div>
            <div className="header__down__navItem">Registry</div>
            <div className="header__down__navItem">Gift Cards</div>
            <div className="header__down__navItem">Sell</div>
        </div>
    </div>
}

export default Header;