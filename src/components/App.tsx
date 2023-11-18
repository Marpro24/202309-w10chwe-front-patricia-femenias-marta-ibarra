import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./App.styled";
import Header from "./Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <h2 className="header__title">Killer Robots</h2>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" />
          <Route path="/" element={<Navigate to="/create" />} />
          <Route path="/create" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
