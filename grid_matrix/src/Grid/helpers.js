export const generateRandomAlphabets = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const generateArrayForGrid = (row, column) => {
  const arrayForGrid = [];
  let totalNumberOfElements = row * column;
  while (!!totalNumberOfElements) {
    arrayForGrid.push({
      alphabet: generateRandomAlphabets(),
      isSearched: false,
    });
    totalNumberOfElements = totalNumberOfElements - 1;
  }
  return arrayForGrid;
};

export const createTableLikeArray = (row, column, arrayForGrid) => {
  const outerArray = [];
  for (let i = 0; i < column; i++) {
    outerArray.push(arrayForGrid.splice(0, row));
  }
  console.log(outerArray);
  return outerArray || null;
};

export const searchForValues = (tableArray, searchedValue) => {
  if (!!tableArray?.length && searchedValue) {
    const flatArray = [].concat(...tableArray);
    return flatArray?.map((item) => {
      if (item?.alphabet === searchedValue) {
        return {
          ...item,
          isSearched: true,
        };
      } else {
        return {
          ...item,
          isSearched: false,
        };
      }
    });
  }
  return tableArray;
};
