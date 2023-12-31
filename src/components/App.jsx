import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import { PublicRoute } from './PublicRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<ContactsPage />}
            ></PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/"></Navigate>} />
    </Routes>
  );
};
