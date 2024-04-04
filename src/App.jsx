import { Route, Routes } from "react-router-dom";
import "./App.css";
import Students from "./Pages/Dashboard/Students";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Teachers from "./Pages/Dashboard/Teachers";
import { AuthProvider } from "./components/Auth";
import Main from "./Pages/Dashboard/Main";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="/students"
            element={
              <RequireAuth>
                <Students />
              </RequireAuth>
            }
          />
          <Route
            path="/teachers"
            element={
              <RequireAuth>
                <Teachers />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
