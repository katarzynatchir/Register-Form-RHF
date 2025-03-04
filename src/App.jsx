import styled from 'styled-components';
import ApplicationForm from './components/ApplicationForm';

const DivContainer = styled.div`
  margin: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #1eab72;
  text-align: center;
`;

function App() {
  return (
    <DivContainer>
      <Heading>Formularz zgłoszeniowy na kurs programowania</Heading>
      <ApplicationForm />
    </DivContainer>
  );
}

export default App;
