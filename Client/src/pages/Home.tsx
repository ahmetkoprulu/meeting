import { useState } from "react";
import JoinInput from "../components/JoinInput";
import Modal from "../components/Modal";
import MeetingUrl from "../components/MeetingUrl";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [url, setUrl] = useState("https://meet.google.com/seg-kasy-wxk");

  let handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="slogan">
          <h1>Premium video meetings.</h1>
          <h1>Now free for everyone.</h1>
          <p>
            We re-engineered the service we built for secure business meetings,
            Google Meet, to make it free and avaible for all.
          </p>
        </div>

        <div className="button-group">
          <button className="btn btn-primary mr-2" onClick={handleClick}>
            New meeting
          </button>
          <JoinInput />
        </div>

        <Modal
          isVisible={isVisible}
          onHide={() => setIsVisible(false)}
          title="Here is the link to your meeting"
          content={<MeetingUrl url={url} />}
        />
      </div>
    </div>
  );
}
