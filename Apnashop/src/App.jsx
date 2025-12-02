import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./Frontend/user/UserRoutes";
import AdminRoutes from "./Frontend/admin/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER WEBSITE */}
        <Route path="/*" element={<UserRoutes />} />

        {/* ADMIN PANEL */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
