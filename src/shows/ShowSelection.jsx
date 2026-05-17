import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    /** I need an array with a list of shows, so I need to map */
    <nav className="shows">
      {shows.map((show) => (
        <a
          className={"show" + (show === selectedShow ? "selected" : "")}
          key={show.name}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
