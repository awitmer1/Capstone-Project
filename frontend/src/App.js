// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import MoreResultsPage from "./pages/MoreResultsPage/MoreResultsPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage";
import SavedPlaces from "./pages/SavedPlaces/SavedPlaces";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/results/more' element={<MoreResultsPage />} />
        <Route path='/business/:id' element={<BusinessPage />} />
        <Route
          path='/saved'
          element={
            <PrivateRoute>
              <SavedPlaces />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
