import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'Redux/auth/authOperations';
// import PublicRoute from '../Routes/PublicRoute';
// import PrivateRoute from '../Routes/PrivateRoute';

const HomeView = lazy(() => import('../Views/HomeView'));
const ContactsView = lazy(() => import('../Views/ContactsView'));
const RegisterView = lazy(() => import('../Views/RegisterView'));
const LoginView = lazy(() => import('../Views/LoginView'));
const PublicRoute = lazy(() => import('../Routes/PublicRoute'));
const PrivateRoute = lazy(() => import('../Routes/PrivateRoute'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Navigate to="register" />} />
        <Route path="/" element={<Navigate to="register" />} />
        <Route path="/" element={<HomeView />}>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="login" element={<LoginView />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="login" />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
