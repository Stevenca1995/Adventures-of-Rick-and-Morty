const getRandomNumber = (limit) => {
  //? 0 => 0.9999999999 * 126 => 0 ==> 125.99999999 => 1 ==> 126
  return Math.floor(Math.random() * limit) + 1;
};

export {getRandomNumber}