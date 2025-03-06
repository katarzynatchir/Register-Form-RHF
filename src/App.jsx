import { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import Modal from './components/Modal.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 10%;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1eab72;
  text-align: center;
`;

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Container>
      <H1>Formularz zgłoszeniowy na kurs programowania</H1>
      {userData === null ? (
        <ApplicationForm setUserData={setUserData} />
      ) : (
        <Modal userData={userData} />
      )}
    </Container>
  );
};

export default App;
