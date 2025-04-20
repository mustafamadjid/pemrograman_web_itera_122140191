const useSearch = (data, keyword) => {
  return data.filter(
    (item) =>
      item.judul.toLowerCase().includes(keyword.toLowerCase()) ||
      item.author.toLowerCase().includes(keyword.toLowerCase())
  );
};

export default useSearch;
