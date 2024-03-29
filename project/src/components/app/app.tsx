import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import Login from '../../pages/login/login';
import PropertyScreen from '../../pages/property/property';
import PageNotScreen from '../../pages/page-not-found/page-not-found';
import {AppRoute} from '../../const';

type AppProps = {
  offers: number;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen/>}
        />
        <Route
          path={'*'}
          element={<PageNotScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
