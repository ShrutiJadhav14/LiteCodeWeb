export const ADMIN_CREDENTIALS = {
  email: "admin@ilitecode.com",
  password: "admin123"
};

export const loginAdmin = (email, password) => {
  if (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  ) {
    localStorage.setItem("isAdmin", "true");
    
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem("isAdmin");
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem("isAdmin") === "true";
};
