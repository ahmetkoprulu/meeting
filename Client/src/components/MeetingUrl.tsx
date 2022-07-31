import CopyIcon from "../icons/CopyIcon";

export default function MeetingUrl({ url }: { url: string }) {
  return (
    <div>
      <p className="text-muted text-thin">
        Copy this link and send it to people you want to meet with. Be sure to
        save it so you can use it later, too.
      </p>
      <div className="meeting-url-container">
        <span>{url}</span>
        <CopyIcon size={20} />
      </div>
    </div>
  );
}
