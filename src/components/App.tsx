import { Route, Routes } from "react-router-dom";
import AppStyled from "./App.styled";
import Header from "./Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <h2 className="header__title">Killer Robots</h2>
        <Routes>
          <Route path="/" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
