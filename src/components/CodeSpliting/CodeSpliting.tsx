import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBAr";

const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Questions = lazy(() => import("./pages/Questions"));

const isAuthenticated = false;

export default function CodeSpliting() {
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/*"
            element={<PrivateRoutes />}
          />
        ) : (
          <Route
            path="/*"
            element={<PublicRoutes />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="profile"
          element={
            <Suspense fallback={<>...</>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<>...</>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<>...</>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <Suspense fallback={<>...</>}>
              <Questions />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Navigate
              to="/profile"
              replace
            />
          }
        />
      </Routes>
    </>
  );
};
export const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<>Loading app...</>}>
            <Login />
          </Suspense>
        }
      />

      <Route
        path="/*"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />
    </Routes>
  );
};
