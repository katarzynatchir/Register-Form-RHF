import { useState } from 'react';
import { Container } from './styles/styles.js';
import ApplicationForm from './components/ApplicationForm';
import Modal from './components/Modal.jsx';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Container>
      {userData === null ? (
        <ApplicationForm setUserData={setUserData} />
      ) : (
        <Modal userData={userData} />
      )}
    </Container>
  );
};

export default App;
