import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { IconContext } from "react-icons/lib";
import { SiDatadog } from "react-icons/si";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className='navBar'>
      <ul>
        <li className='brand'>
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <IconContext.Provider
              value={{ size: "1.5em", className: "data-dog" }}>
              <SiDatadog />
            </IconContext.Provider>
            <b>TWF</b>
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link
                to='/saved'
                className='saved-link'
                style={{ color: "white" }}>
                My Saved Places
              </Link>
            </li>
            <li>
              <p>{user.username}</p>
            </li>
            <li>
              <button onClick={logoutUser}>Logout</button>
            </li>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
