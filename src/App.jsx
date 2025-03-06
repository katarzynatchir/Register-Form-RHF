import { useState } from 'react';
import { Container, H1 } from './styles/styles.js';
import ApplicationForm from './components/ApplicationForm';
import Modal from './components/Modal.jsx';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Container>
      {userData === null ? (
        <>
          <H1>Formularz zgłoszeniowy na kurs programowania</H1>
          <ApplicationForm setUserData={setUserData} />
        </>
      ) : (
        <>
          <H1>Dane z formularza</H1>
          <Modal userData={userData} />
        </>
      )}
    </Container>
  );
};

export default App;
