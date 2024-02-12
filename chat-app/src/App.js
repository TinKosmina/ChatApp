import { useContext } from "react";
import "./App.scss";
import LoginPage from "./Components/LoginPage";

import RegisterPage from "./Components/RegisterPage";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import MainPage from "./Components/MainPage";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/loginpage"></Navigate>;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="mainpage"
            index
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
