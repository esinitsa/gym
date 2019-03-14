export const contains = ({firstName}, query) => {
  if (firstName.toLowerCase().includes(query)) {
    return true;
  }
  return false;
};
