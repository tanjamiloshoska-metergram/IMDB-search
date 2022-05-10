import SearchTextField from "../SearchTextField/SearchTextField";
import SubmitButton from "../SubmitButton/SubmitButton";

const SearchForm = ({ onTextFieldChange, onSubmitClick }) => {
  return (
    <div>
      <label>
        Title:
        <SearchTextField handleChange={onTextFieldChange} />
      </label>
      <SubmitButton onClick={onSubmitClick}>Submit</SubmitButton>
    </div>
  );
};

export default SearchForm;
