export function returnAPI() {
  return process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_URL_LOCAL_API
    : process.env.REACT_APP_URL_API;
}
