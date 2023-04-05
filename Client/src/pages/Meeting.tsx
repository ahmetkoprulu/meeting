import { useContext, useEffect, useState } from "react";
import { getCookie } from "../helpers/Cookie";
import UserService from "../services/user";

import Overlay from "../components/Overlay";
import MainContext, { User, UserContextState } from "../contexts/MainContext";

export default function Meeting() {
  var [loading, setLoading] = useState(true);
  var { user, setUser } = useContext(MainContext) as UserContextState;

  useEffect(() => {
    async function callback() {
      const sid = getCookie("sid");
      if (!sid) return;

      var response = await UserService.getCurrentUser();
      console.log(response);
      if (response.status !== 200) setUser(null);

      setUser(response.data as User);
      setLoading(false);
    }

    callback();
  }, []);

  return (
    <Overlay show={loading}>
      <div className="meeting-container">
        <div className="meeting-content">
          <div className="meeting-people">people</div>
          <div className="meeting-chat-container">chat</div>
        </div>
        <div className="meeting-toolbar">toolbar</div>
      </div>
    </Overlay>
  );
}
