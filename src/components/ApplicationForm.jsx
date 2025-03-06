import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from '../validation/schemaValidation';
import {
  ApplicationFormStyled,
  H1,
  H2,
  Input,
  Select,
  ErrorMessage,
  FlexRow,
  AddButton,
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

  const isExperienced = watch('isExperienced');

  const onSubmit = data => {
    setUserData(data);
    console.log(data);
  };

  // const onError = errors => console.log('validation errors', errors);

  return (
    <>
      <H1>Formularz zgłoszeniowy na kurs programowania</H1>
      <ApplicationFormStyled onSubmit={handleSubmit(onSubmit)}>
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

        <div>
          <Select {...register('technology')} size={5} multiple="multiple">
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="nextjs">Next.js</option>
          </Select>
          {errors.technology && (
            <ErrorMessage>{errors.technology.message}</ErrorMessage>
          )}
        </div>

        <H2>Dodaj swoje CV</H2>
        <Input {...register('imageCV')} type="file" />
        {errors.imageCV && (
          <ErrorMessage>{errors.imageCV.message}</ErrorMessage>
        )}
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
              <AddButton
                type="button"
                onClick={() => {
                  append({
                    name: 'JavaScript',
                    years: '1',
                  });
                }}
              >
                Dodaj doświadczenie
              </AddButton>
              {errors.programingLanguages && (
                <ErrorMessage>
                  {errors.programingLanguages.message}
                </ErrorMessage>
              )}
            </div>
            {fields.map((field, index) => (
              <table key={field.id}>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        {...register(`programingLanguages.${index}.name`, {
                          shouldUnregister: true,
                        })}
                      >
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="Inne">Inne</option>
                      </Select>
                    </td>
                    <td>
                      <Select
                        {...register(`programingLanguages.${index}.years`, {
                          shouldUnregister: true,
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Select>
                    </td>
                    <td>
                      <button type="button" onClick={index => remove(index)}>
                        Usuń
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </>
        )}
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        <button type="submit">Wyślij zgłoszenie</button>
      </ApplicationFormStyled>
    </>
  );
};

export default ApplicationForm;
