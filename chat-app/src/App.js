import { useContext } from "react";
import "./App.scss";
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/LoginPage";
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

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/loginpage"></Navigate>;
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={currentUser ? <MainPage /> : <LoginPage />} />
          <Route path="login" index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
