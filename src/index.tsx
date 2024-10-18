import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Asegúrate de que este archivo exista
import "./index.css"; // Si tienes estilos globales

// Asegúrate de que el elemento con id "root" exista
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error('No se encontró el elemento "root" en el DOM.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
