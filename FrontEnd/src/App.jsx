import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuhtContext";


import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import MatchesPage from "./pages/MatchesPage";
import MatcheFromPage from "./pages/MatchesFromPage";
import ProfilePage from "./pages/ProfilePage";

import ProtecteRoute from "./ProtectedRoute";
import { MatcheProvider } from "./context/MatchesContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <MatcheProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtecteRoute />}>
                <Route 
                  path="/Matches" 
                  element={
                    <>
                      <Navbar />
                      <MatchesPage />
                    </>
                  } 
                />
                <Route path="/add-Matche" element={<MatcheFromPage />} />
                <Route path="/Matches/:id" element={<MatcheFromPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </MatcheProvider>
    </AuthProvider>
  );
}

export default App;