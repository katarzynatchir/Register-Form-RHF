const Modal = ({ userData }) => {
  return (
    <div>
      <p>Imię: {userData.firstName}</p>
      <p>{JSON.stringify(userData, null, 2)}</p>
    </div>
  );
};

export default Modal;
