import styled from 'styled-components';

const ApplicationFormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 40rem;
  padding: 1rem;
  border: 0.125rem solid #383838;
  background-color: #222426;
`;

const H2 = styled.h2`
  font-size: 1rem;
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
  font-size: 0.75rem;
  font-weight: 300;
  color: #ef5350;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export { ApplicationFormStyled, H2, Input, ErrorMessage, FlexRow };
