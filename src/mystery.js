export const mystery2 = (num) => {
  if (num % 4) {
    return false;
  } if (!(num % 400)) {
    return true;
  } if (!(num % 100)) {
    return false;
  } if (!(num % 4)) {
    return true;
  }
};
