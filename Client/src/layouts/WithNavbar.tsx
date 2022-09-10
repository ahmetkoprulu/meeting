import { Outlet, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainContext, { User, UserContextState } from "../contexts/MainContext";
import { useContext, useEffect } from "react";
import UserService from "../services/user";
import { getCookie } from "../helpers/Cookie";

export default function WithNavbar() {
  var { user, setUser } = useContext(MainContext) as UserContextState;

  useEffect(() => {
    async function callback() {
      const sid = getCookie("sid");
      if (!sid) return;

      var response = await UserService.getCurrentUser();
      console.log(response);
      if (response.status !== 200) setUser(null);

      setUser(response.data as User);
    }

    callback();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
