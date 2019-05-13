export const contains = ({email, firstName, lastName}, query) =>
  `${email} ${firstName} ${lastName}`.toLowerCase().includes(query) ? true : false;
