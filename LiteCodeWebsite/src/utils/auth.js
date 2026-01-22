export const ADMIN_CREDENTIALS = {
  email: "admin@ilitecode.com",
  password: "admin123"
};

export const loginAdmin = (email, password) => {
  if (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  ) {
    localStorage.setItem("admin_logged_in", "true");
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin_logged_in");
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem("admin_logged_in") === "true";
};
