import { H1 } from '../styles/styles';

const Modal = ({ userData }) => {
  return (
    <div>
      <H1>Dane z formularza</H1>
      <p>Imię: {userData.firstName}</p>
      <p>{JSON.stringify(userData, null, 2)}</p>
    </div>
  );
};

export default Modal;
