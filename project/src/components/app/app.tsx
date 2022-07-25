import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import MainLayout from '../main-layout/main-layout';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import PrivateRoot from '../private-route/private-route';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import PageNotFound from '../page-not-found/page-not-found';
import { AuthorizationStatus } from '../private-route/private-route.constants';
import { AppRoute } from '../../project.constants';
import type { Props } from './app.types';

function App({ films }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <WelcomeScreen
              authorizationStatus={AuthorizationStatus.NoAuth}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MainLayout
              authorizationStatus={AuthorizationStatus.NoAuth}
              films={films}
            />
          }
        >
          <Route index element={<Overview />} />
          <Route path={AppRoute.Overview} element={<Overview />} />
          <Route path={AppRoute.Reviews} element={<Reviews />} />
          <Route path={AppRoute.Details} element={<Details />} />
          <Route path='*' element={<Overview />} />
        </Route>
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn isSignInFailed={false} isError={false} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoot authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview films={films} />
            </PrivateRoot>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoot authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films} />
            </PrivateRoot>
          }
        />
        <Route path={AppRoute.PageNotFound} element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
