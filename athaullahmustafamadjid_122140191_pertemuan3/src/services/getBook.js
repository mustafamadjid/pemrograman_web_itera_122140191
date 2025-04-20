const getBookData = () => {
  const bookData = localStorage.getItem("buku");

  if (!bookData) return [];
  return JSON.parse(bookData);
};

export default getBookData;
