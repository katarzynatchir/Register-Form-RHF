import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const phoneValidation = new RegExp(/^[0-9]{9}$/);

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
  phone: z.string().regex(phoneValidation, {
    message: 'Numer telefonu musi składać się z 9 cyfr',
  }),
  formOfLearnig: z.enum(['stationary', 'online'], {
    message: 'Należy wybrać preferowaną formę nauki',
  }),
  technology: z
    .array()
    .nonempty({ message: 'Proszę wybrać conajmniej jedną technologię' }),
});

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dane osobowe</h2>
      <input {...register('firstName')} type="text" placeholder="Imię" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName')} type="text" placeholder="Nazwisko" />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input {...register('email')} type="text" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register('phone')} type="text" placeholder="Numer telefonu" />
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

      <select {...register('technology')} size="5" multiple="multiple">
        <option>React</option>
        <option>Node.js</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Next.js</option>
      </select>
      {errors.technology && <p>{errors.technology.message}</p>}
      <h2>Dodaj swoje CV</h2>
      <input type="file" />
      <h2>Doświadczenie w programowaniu</h2>
      <button type="submit">Wyślij zgłoszenie</button>
    </form>
  );
};

export default ApplicationForm;
