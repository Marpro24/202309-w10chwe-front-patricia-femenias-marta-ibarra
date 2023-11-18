import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./App.styled";
import Header from "./Header/Header";
import Homepage from "../pages/Homepage/Homepage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Navigate to="/create" />} />
          <Route path="/create" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
