import MainContext, { UserContextState } from "../contexts/MainContext";
import { useContext } from "react";

export default function Navbar() {
  var { user } = useContext(MainContext) as UserContextState;

  return (
    <div className="navbar">
      <a className="navbar-brand" href="#a">
        Meetup
      </a>
      <ul className="navbar-nav">
        <li className="navbar-item right">
          {user == null ? (
            <a href="/sign-in">Sign in</a>
          ) : (
            <span className="user-info">
              <span className="mr-3">{user.name}</span>
              <img
                className="profile-img"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt=""
              />
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}
