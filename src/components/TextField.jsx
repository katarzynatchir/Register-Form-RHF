import { ErrorMessage, Input } from '../styles/styles';

const TextField = ({ type = 'text', label, error, ...other }) => {
  return (
    <div>
      <Input type={type} placeholder={label} {...other} />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default TextField;
