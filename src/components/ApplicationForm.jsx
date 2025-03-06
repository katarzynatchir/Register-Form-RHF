import { useFieldArray, useForm } from 'react-hook-form';
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
    watch,
    control,
  } = useForm({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      formOfLearnig: '',
      technology: [],
      imageCV: {},
      isExperienced: false,
      // programingLanguages: [{ name: 'JavaScript', years: '1' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'programingLanguages',
  });

  const onRowDelete = index => {
    remove(index);
  };
  const isExperienced = watch('isExperienced');

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
      <select {...register('technology')} size={5} multiple="multiple">
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
      <div>
        <label>
          <input type="checkbox" {...register('isExperienced')} />
          <span>Czy masz doświadczenie w programowaniu?</span>
        </label>
      </div>
      {isExperienced && (
        <>
          <div>
            <button
              type="button"
              onClick={() => {
                append({
                  name: 'JavaScript',
                  years: '1',
                });
              }}
            >
              Dodaj doświadczenie
            </button>
            {errors.programingLanguages && (
              <ErrorMessage>{errors.programingLanguages.message}</ErrorMessage>
            )}
          </div>
          {fields.map((field, index) => (
            <table key={field.id}>
              <tbody>
                <tr>
                  <td>
                    <select
                      {...register(`programingLanguages.${index}.name`, {
                        shouldUnregister: true,
                      })}
                    >
                      <option value="JavaScript">JavaScript</option>
                      <option value="Python">Python</option>
                      <option value="C++">C++</option>
                      <option value="Inne">Inne</option>
                    </select>
                  </td>
                  <td>
                    <select
                      {...register(`programingLanguages.${index}.years`, {
                        shouldUnregister: true,
                      })}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" onClick={() => onRowDelete(index)}>
                      Usuń
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </>
      )}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      <button type="submit">Wyślij zgłoszenie</button>
    </ApplicationFormStyled>
  );
};

export default ApplicationForm;
