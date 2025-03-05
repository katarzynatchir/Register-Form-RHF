import styled from 'styled-components';
import ApplicationForm from './components/ApplicationForm';
import { useState } from 'react';
import Modal from './components/modal';

const DivContainer = styled.div`
  margin: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const App = () => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [data, setData] = useState({});

  return (
    <DivContainer>
      {!isFormSubmit && (
        <ApplicationForm
          onSetData={setData}
          onSetIsFormSubmit={setIsFormSubmit}
        />
      )}

      {isFormSubmit && <Modal userData={data} />}
    </DivContainer>
  );
};

export default App;
