import { Route, Routes } from "react-router-dom";
import AppStyled from "./App.styled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
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
