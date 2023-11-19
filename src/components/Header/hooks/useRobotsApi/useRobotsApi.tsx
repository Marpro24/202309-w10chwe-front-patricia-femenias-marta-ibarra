import axios from "axios";
import { useCallback } from "react";
import { RobotStructure } from "../../../../store/features/robots/types";

const useRobotsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getRobotsApi = useCallback(async () => {
    const { data: robots } = await axios.get<RobotStructure[]>("/robots");
    return robots;
  }, []);

  return { getRobotsApi };
};

export default useRobotsApi;
