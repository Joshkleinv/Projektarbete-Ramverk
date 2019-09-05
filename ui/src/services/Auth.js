export const setToken = token => {
  localStorage.setItem('auth_token', token)
};

export const setEmailAddress = emailAddress => {
  localStorage.setItem('emailAddress', emailAddress)
};

export const getToken = () => {
    return localStorage.getItem('auth_token')
};

export const getEmailAddress = () => {
    return localStorage.getItem('emailAddress')
};

export const isAuthorized = () => {
  return !!getToken()
};

export const logout = () => {
    localStorage.removeItem('auth_token')
};

export const removeEmailAddress = () => {
  localStorage.removeItem('emailAddress')
};