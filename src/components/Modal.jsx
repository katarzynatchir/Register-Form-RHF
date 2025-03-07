import { ModalBox, H1, H2, UL, ImgCV } from '../styles/styles';

const Modal = ({ userData }) => {
  return (
    <>
      <H1>Dane z formularza</H1>
      <ModalBox>
        <H2>Dane osobowe:</H2>
        <p>Imię: {userData.firstName}</p>
        <p>Nazwisko: {userData.lastName}</p>
        <p>Email: {userData.email}</p>
        <p>Telefon: {userData.phone}</p>
        {userData.isExperienced && (
          <>
            <H2>Doświdczenie w programowaniu:</H2>
            <UL>
              {userData.programingLanguages.map(el => (
                <li key={el.name}>
                  Technlogia: {el.name} / poziom: {el.years}
                </li>
              ))}
            </UL>
          </>
        )}
        <H2>Preferencje kursu:</H2>
        <p>Typ kursu: {userData.formOfLearnig}</p>
        <p>Preferowane technlogie:</p>
        <UL>
          {userData.technology.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </UL>
        <H2>Curriculum vitae:</H2>

        <ImgCV src={userData.imgPreview} />
      </ModalBox>
    </>
  );
};

export default Modal;
