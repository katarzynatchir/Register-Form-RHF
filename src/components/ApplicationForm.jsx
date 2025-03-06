import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from '../validation/schemaValidation';
import {
  ApplicationFormStyled,
  H2,
  Input,
  ErrorMessage,
  FlexRow,
} from '../styles/styles';

const ApplicationForm = ({ setUserData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      formOfLearnig: '',
      technology: [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = data => {
    setUserData(data);

    console.log(data);
  };
  const onError = errors => console.log('validation errors', errors);

  return (
    <ApplicationFormStyled onSubmit={handleSubmit(onSubmit, onError)}>
      <H2>Dane osobowe</H2>
      <div>
        <Input {...register('firstName')} type="text" placeholder="Imię" />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Input {...register('lastName')} type="text" placeholder="Nazwisko" />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input {...register('email')} type="text" placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register('phone')}
          type="number"
          placeholder="Numer telefonu"
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </div>

      <H2>Preferencje kursu</H2>
      <div>
        <FlexRow>
          <p>Wybierz formę nauki: </p>
          <label htmlFor="stationary">
            <input
              {...register('formOfLearnig')}
              type="radio"
              id="stationary"
              value="stationary"
            />
            <span>stacjonarnie</span>
          </label>
          <label htmlFor="online">
            <input
              {...register('formOfLearnig')}
              type="radio"
              id="online"
              value="online"
            />
            <span>online</span>
          </label>
        </FlexRow>
        {errors.formOfLearnig && (
          <ErrorMessage>{errors.formOfLearnig.message}</ErrorMessage>
        )}
      </div>

      <select {...register('technology')} size="5" multiple="multiple">
        <option value="react">React</option>
        <option value="nodejs">Node.js</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="nextjs">Next.js</option>
      </select>
      {errors.technology && (
        <ErrorMessage>{errors.technology.message}</ErrorMessage>
      )}
      <H2>Dodaj swoje CV</H2>
      <Input {...register('imageCV')} type="file" />
      {errors.imageCV && <ErrorMessage>{errors.imageCV.message}</ErrorMessage>}
      <H2>Doświadczenie w programowaniu</H2>
      <label>
        <input type="checkbox" {...register('sendToEMail')} />
        <span>Czy masz doświadczenie w programowaniu?</span>
      </label>

      <button type="submit">Wyślij zgłoszenie</button>
    </ApplicationFormStyled>
  );
};

export default ApplicationForm;
