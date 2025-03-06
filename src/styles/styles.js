import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 10%;
`;

const ApplicationFormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40rem;
  padding: 1rem;
  border: 0.125rem solid #383838;
  background-color: #222426;
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1eab72;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #d8a559;
`;

const Input = styled.input`
  width: 100%;
  background-color: #374151;
  border: none;
  color: #f2f2f2;
  padding: 0.5rem;
  &::placeholder {
    color: #a3a3a3;
  }
  &:focus-visible {
    outline: 1px solid #748eab;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.85rem;
  color: #ef5350;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export {
  Container,
  ApplicationFormStyled,
  H1,
  H2,
  Input,
  ErrorMessage,
  FlexRow,
};
