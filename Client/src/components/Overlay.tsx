import Spinner from "./Spinner";

export default function Overlay(props: any) {
  return (
    <div className="overlay-container ">
      {props.show ? (
        <div className="overlay">
          <Spinner show={true} />
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}
