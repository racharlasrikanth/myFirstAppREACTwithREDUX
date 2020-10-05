export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num, // people usually use payload varialble
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
