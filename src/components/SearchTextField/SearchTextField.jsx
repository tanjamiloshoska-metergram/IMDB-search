const SearchTextField = ({ handleChange }) => {
  return <input type="text" onChange={(e) => handleChange(e.target.value)} />;
};

export default SearchTextField;
