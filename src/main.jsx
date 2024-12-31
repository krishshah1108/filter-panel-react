import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookContextProvider } from "./context/BookContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </BrowserRouter>
);
