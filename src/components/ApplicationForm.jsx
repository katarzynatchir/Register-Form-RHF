import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';

// const phoneValidation = new RegExp(/^[0-9]{9}$/);

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Imię musi składać się conajmniej z 3 znaków' }),
  lastName: z
    .string()
    .min(3, { message: 'Nazwisko musi składać się conajmniej z 3 znaków' }),
  email: z
    .string()
    .nonempty('Proszę podać adres e-mail')
    .email({ message: 'Niepoprawny adres email' }),
  // phone: z.number().regex(phoneValidation, {
  //   message: 'Numer telefonu musi składać się z 9 cyfr',
  // }),
  phone: z
    .number({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone must be a number',
    })
    .gte(100000000)
    .lte(999999999),
  formOfLearnig: z.enum(['stationary', 'online'], {
    message: 'Należy wybrać preferowaną formę nauki',
  }),
  // technology: z
  //   .array()
  //   .nonempty({ message: 'Proszę wybrać conajmniej jedną technologię' }),
});

const Heading = styled.h1`
  font-size: 2rem;
  color: #1eab72;
  text-align: center;
`;

const ApplicationForm = ({ onSetData, onSetIsFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: 'twojEmail@email.com',
      phone: 123456789,
      formOfLearnig: '',
      // technology: [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = data => {
    onSetData(data);
    onSetIsFormSubmit(true);
    console.log(data);
  };
  const onError = errors => console.log('validation errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Heading>Formularz zgłoszeniowy na kurs programowania</Heading>
      <h2>Dane osobowe</h2>
      <input {...register('firstName')} type="text" placeholder="Imię" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName')} type="text" placeholder="Nazwisko" />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input {...register('email')} type="text" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('phone')}
        type="number"
        placeholder="Numer telefonu"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <h2>Preferencje kursu</h2>
      <div>
        <p>Wybierz formę nauki</p>
        <label htmlFor="stationary">
          <input
            {...register('formOfLearnig')}
            type="radio"
            id="stationary"
            value="stationary"
          />
          stacjonarnie
        </label>
        <label htmlFor="online">
          <input
            {...register('formOfLearnig')}
            type="radio"
            id="online"
            value="online"
          />
          online
        </label>
      </div>
      {errors.formOfLearnig && <p>{errors.formOfLearnig.message}</p>}

      {/* <select {...register('technology')} size="5" multiple="multiple">
        <option>React</option>
        <option>Node.js</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Next.js</option>
      </select>
      {errors.technology && <p>{errors.technology.message}</p>} */}
      <h2>Dodaj swoje CV</h2>
      <input type="file" />
      <h2>Doświadczenie w programowaniu</h2>
      <button type="submit">Wyślij zgłoszenie</button>
    </form>
  );
};

export default ApplicationForm;
