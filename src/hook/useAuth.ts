export const isAuth = (cookie?: string) => {
  if (cookie) {
    try {
      return JSON.parse(cookie);
    } catch (e) {
      return null;
    }
  }
  return null;
};
