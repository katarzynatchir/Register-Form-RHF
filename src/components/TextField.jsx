import { ErrorMessage, Input } from '../styles/styles';

const TextField = ({
  type = 'text',
  label,
  error,
  className = '',
  ...other
}) => {
  return (
    <div>
      <Input type={type} placeholder={label} className={className} {...other} />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default TextField;
