import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  // I need to set selected episode as a state variable
  const [selectedEpisode, setSelectedEpisode] = useState();

  // Guard case to prompt selection of a show
  if (!show) {
    return <p>Please select a show to learn more.</p>;
  }

  // Otherwise ...
  // I need to return props from EpisodeList
  // ... then from EpisodeDetails
  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
