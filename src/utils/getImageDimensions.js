
export const getImageDimensions = (string) => {
    let numbers = string.match(/\d+/g)
    let lastTwo = numbers.slice(-2);
    let imageDimensions = `${lastTwo[0]} x ${lastTwo[1]}`
   return imageDimensions
};
