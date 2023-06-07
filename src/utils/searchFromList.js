export const searchFromList = (data, searchValue) => {
  if (!data) return [];
  const searchingItems = data.filter((obj) =>
    obj.artistName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return searchingItems;
};
