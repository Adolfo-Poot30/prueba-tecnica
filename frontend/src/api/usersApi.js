export const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Error al cargar usuarios");
  }

  return response.json();
};

