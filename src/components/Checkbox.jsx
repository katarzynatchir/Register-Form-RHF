import { LabelControl, CheckboxStyled } from '../styles/styles';

const Checkbox = ({ label, ...other }) => {
  return (
    <div>
      <LabelControl>
        <CheckboxStyled type="checkbox" {...other} />
        <span>{label}</span>
      </LabelControl>
    </div>
  );
};

export default Checkbox;
