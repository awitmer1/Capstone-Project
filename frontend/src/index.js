import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";
import { CommentProvider } from "./hooks/CommentContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <SearchProvider>
          <CategoryProvider>
            <CommentProvider>
              <App />
            </CommentProvider>
          </CategoryProvider>
        </SearchProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
