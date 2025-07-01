import { BrowserRouter, Routes } from "react-router";
import { PublicRoutes } from "./routes/public.routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
