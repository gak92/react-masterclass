import { useContext } from "react";
import VideosContext from "../context/VideosContext";

const useVideos = () => {
  return useContext(VideosContext);
}

export default useVideos;