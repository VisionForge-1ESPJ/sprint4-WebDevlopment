import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

// Rota privada: sem sessão, redireciona para o login guardando a origem
function ProtectedRoute() {
  const { usuario } = useAuth()
  const local = useLocation()

  if (!usuario) return <Navigate to="/login" replace state={{ de: local.pathname }} />
  return <Outlet />
}

export default ProtectedRoute
