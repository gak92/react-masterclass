import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

const useVideoDispatch = () => {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
