import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useGetCurrentUserQuery } from 'Store/auth/authApi';
import { getUserToken } from 'Store/auth/authSlice';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const AddContact = lazy(() => import('pages/AddContact/AddContact'));
const ErrorView = lazy(() => import('pages/ErrorView/ErrorView'));

export default function App() {
  const token = useSelector(getUserToken);

  useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts-list">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts-list"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="contacts-add"
            element={
              <PrivateRoute redirectTo="/login">
                <AddContact />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}