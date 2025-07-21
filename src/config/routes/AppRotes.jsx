import { Route, Routes } from "react-router-dom";
import AppLayout from "@/ui/Layout/AppLayout";
import LandingPage from "@/ui/pages/landing/LandingPage";
import Students from "@/ui/pages/students/Students";
import Teachers from "@/ui/pages/teachers/Teachers";
import Groups from "@/ui/pages/groups/Groups";
import Reports from "@/ui/pages/reports/Reports";
import Invoices from "@/ui/pages/invoices/Invoices";
import Login from "@/ui/auth/Login";
import Register from "@/ui/auth/Register";

//Aquí estan las rutas de la aplicación, si se quieren agregar más rutas, se deben agregar aquí
//Para la protección de rutas, se debe implementar un sistema de autenticación y autorización
//que permita verificar si el usuario está autenticado y tiene permisos para acceder a las rutas protegidas
//Por ahora, las rutas de autenticación están abiertas para todos los usuarios

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/alumnos" element={<Students />} />
        <Route path="/profesores" element={<Teachers />} />
        <Route path="/grupos" element={<Groups />} />
        <Route path="/reportes" element={<Reports />} />
        <Route path="/facturas" element={<Invoices />} />
      </Route>
    </Routes>
  );
}
