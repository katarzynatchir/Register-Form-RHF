import { SelectStyled, ErrorMessage } from '../styles/styles';

const Select = ({ options = [], error, ...other }) => {
  return (
    <div>
      <SelectStyled {...other}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectStyled>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};
export default Select;
