import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
