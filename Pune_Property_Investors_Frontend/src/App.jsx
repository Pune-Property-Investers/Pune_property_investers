import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
        <HashRouter>
          <AppRoutes />
        </HashRouter>
  );
}

export default App;
