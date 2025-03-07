import { LabelControl, RadioStyled } from '../styles/styles';

const Radio = ({ label, id, ...other }) => {
  return (
    <LabelControl htmlFor={id}>
      <RadioStyled type="radio" {...other} id={id} value={label} />
      <span>{label}</span>
    </LabelControl>
  );
};

export default Radio;
