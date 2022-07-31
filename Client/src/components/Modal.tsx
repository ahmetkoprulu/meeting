import { ReactNode } from "react";
import XIcon from "../icons/XIcon";

export default function Modal({
  content,
  title,
  isVisible,
  onHide,
}: {
  content: ReactNode;
  title: string;
  isVisible: boolean;
  onHide: () => void;
}) {
  return (
    <div className={`modal ${isVisible && "modal-visible"}`} onClick={onHide}>
      <div
        className="modal-content modal-content-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close-button text-muted" onClick={onHide}>
            <XIcon />
          </span>
        </div>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
}
