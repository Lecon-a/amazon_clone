import { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
// import Brand from '../component/Brand';
import { auth } from '../firebase';

const brand_path = "https://upload.wikimedia.org/wikipedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png";

function Login() {

  // help to programmatically change the url
  const history = useHistory();

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO firebase stuff here
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        history.push("/");
      })
      .catch(error => console.log(error.message));
  }

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO firebase stuff here
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        // it successfully created the user with the email and password
        if (auth) {
          history.push("/");
        }
      })
    .catch(error => alert(error.message));
  }

  const handleOnChange = (e) => {
    // destruct the event handlers object
    const { name, value } = e.target;
    // update the component state
    setData({
      ...data,
      [name]: value
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login">
      <Link className="login__brand" to={"/"}>
        SPaICTHub
        {/* <Brand brand_path={brand_path} /> */}
      </Link>
      <div className="login__form__wrapper">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleOnChange}
          />

          <h5>Password</h5>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={data.password}
            name="password"
            onChange={handleOnChange}
          />

          <button onClick={handleSignIn} className="signInButton">
            Sign In
          </button>
        </form>

        <p>
          By Signing-in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={handleRegister} className="registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login
