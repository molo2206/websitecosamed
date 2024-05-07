import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AxiosInterceptor } from "./services/axios/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </BrowserRouter>
  </React.StrictMode>
);
