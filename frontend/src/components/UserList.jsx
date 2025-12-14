import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setSearch } from "../features/users/usersSlice";
import { logout } from "../features/auth/authSlice";
import "./UserList.css"; // Importamos los nuevos estilos

const UserList = () => {
  const dispatch = useDispatch();
  const { list, search, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = list.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Helper para obtener iniciales (Ej: Juan Perez -> JP)
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando directorio...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* 1. Header: Título y Logout separados */}
      <header className="dashboard-header">
        <h2>Equipo</h2>
        <button className="btn-logout" onClick={() => dispatch(logout())}>
          Cerrar sesión
        </button>
      </header>

      {/* 2. Buscador grande y claro */}
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>

      {/* 3. Grid de resultados */}
      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              {/* Avatar generado visualmente */}
              <div className="user-avatar">
                {getInitials(user.firstName, user.lastName)}
              </div>
              
              <div className="user-info">
                <h3>{user.firstName} {user.lastName}</h3>
                <p title={user.email}>{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">
            No se encontraron usuarios con "{search}"
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
