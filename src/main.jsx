import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookContextProvider } from "./context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
);
