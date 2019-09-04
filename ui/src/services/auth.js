export const setToken = token => {
  localStorage.setItem('auth_token', token)
};

export const getToken = () => {
    return localStorage.getItem('auth_token')
};

export const isAuthorized = () => {
  return !!getToken()
};

export const logout = () => {
    localStorage.removeItem('auth_token')
};
