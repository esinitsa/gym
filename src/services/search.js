export const contains = ({email, firstName, lastName}, query) => {
  if (email.toLowerCase().includes(query)
  || firstName.toLowerCase().includes(query)
  || lastName.toLowerCase().includes(query)) {
    return true;
  }
  return false;
};
