import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    background-color:  #121416;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #f2f2f2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 10%;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 30rem;
  padding: 2rem;
  border-radius: 0.25rem;
  background-color: #222426;
`;

const ApplicationFormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 30rem;
  padding: 2rem;
  border-radius: 0.25rem;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: #d8a559;
`;

const UL = styled.ul`
  list-style-position: inside;
`;

const ImgCV = styled.img`
  width: 200px;
  height: auto;
`;

const Input = styled.input`
  width: 100%;
  background-color: #374151;
  border: none;
  color: #f2f2f2;
  padding: 0.5rem;
  border-radius: 0.25rem;
  &::placeholder {
    color: #a3a3a3;
  }
  &:focus-visible {
    outline: 1px solid #748eab;
  }
`;
const InputFile = styled(Input)`
  background-color: transparent;
  padding: 0;
`;

const Select = styled.select`
  width: 100%;
  background-color: #374151;
  color: #f2f2f2;
  padding: 0.5rem;
  border-radius: 0.25rem;
  overflow-y: hidden;
  appearance: none;
  cursor: pointer;
  &:focus-visible {
    outline: 1px solid #748eab;
  }
`;

const LabelControl = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.75rem;
`;

const Checkbox = styled.input`
  appearance: none;
  background-color: #374151;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.25em;
  transform: translateY(0.15rem);
  display: grid;
  place-content: center;
  cursor: pointer;
  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.25em;
    background-color: #085eb8;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

const Radio = styled(Checkbox)`
  border-radius: 50%;
  &::before {
    border-radius: 50%;
    background-color: #085eb8;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.85rem;
  font-size: 0.85rem;
  color: #da3f3e;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const FlexItem = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  font-size: 1rem;
  text-align: center;
  color: #121416;
  font-weight: 600;
  width: 100%;
  background-color: #085eb8;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

const AddButton = styled(Button)`
  background-color: #0d9f6e;
`;

const DeleteButton = styled(Button)`
  background-color: #da3f3e;
`;

export {
  GlobalStyle,
  Container,
  ModalBox,
  ApplicationFormStyled,
  H1,
  H2,
  UL,
  ImgCV,
  Input,
  InputFile,
  Select,
  LabelControl,
  Checkbox,
  Radio,
  ErrorMessage,
  FlexRow,
  FlexItem,
  Button,
  AddButton,
  DeleteButton,
};
