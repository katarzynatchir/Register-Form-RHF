import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ApplicationFormStyled,
  H1,
  H2,
  ErrorMessage,
  FlexRow,
  FlexItem,
  Button,
} from '../styles/styles';
import {
  technologyOptions,
  programingLanguages,
  years,
} from '../data/selectOptions';
import formSchema from '../validation/schemaValidation';
import TextField from './TextField';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const ApplicationForm = ({ setUserData }) => {
  const [imgPreview, setImgPreview] = useState();
  const [isExperienced, setIsExperienced] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      formOfLearning: '',
      technology: [],
      imageCV: {},
      isExperienced: false,
      programingLanguages: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'programingLanguages',
  });

  const handleUploadedFile = event => {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
    setImgPreview(urlImage);
  };

  const onSubmit = data => {
    setUserData({ ...data, imgPreview });
    console.log(data);
  };

  return (
    <>
      <H1>Formularz zgłoszeniowy na kurs programowania</H1>
      <ApplicationFormStyled onSubmit={handleSubmit(onSubmit)}>
        <H2>Dane osobowe</H2>
        <TextField
          label="Imię"
          error={errors.firstName}
          {...register('firstName')}
        />

        <TextField
          label="Nazwisko"
          error={errors.lastName}
          {...register('lastName')}
        />

        <TextField label="Email" error={errors.email} {...register('email')} />

        <TextField
          type="number"
          label="Numer telefonu"
          error={errors.phone}
          {...register('phone')}
        />

        <H2>Preferencje kursu</H2>
        <div>
          <FlexRow>
            <p>Wybierz formę nauki: </p>

            <Radio
              label="Stacjonarna"
              id="stationary"
              {...register('formOfLearning')}
            />
            <Radio label="Online" id="online" {...register('formOfLearning')} />
          </FlexRow>
          {errors.formOfLearning && (
            <ErrorMessage>{errors.formOfLearning.message}</ErrorMessage>
          )}
        </div>

        <Select
          {...register('technology')}
          size={5}
          multiple
          options={technologyOptions}
          error={errors.technology}
        />

        <H2>Dodaj swoje CV</H2>
        <TextField
          type="file"
          error={errors.imageCV}
          className="fileInput"
          {...register('imageCV', {
            onChange: event => handleUploadedFile(event),
          })}
        />

        <H2>Doświadczenie w programowaniu</H2>
        <Checkbox
          label="Czy masz doświadczenie w programowaniu?"
          {...register('isExperienced', {
            onChange: () => setIsExperienced(prev => !prev),
          })}
        />

        {isExperienced && (
          <>
            <div>
              <Button
                className="btn-add"
                type="button"
                onClick={() => {
                  append({
                    name: 'JavaScript',
                    years: '1',
                  });
                }}
              >
                Dodaj doświadczenie
              </Button>
              {errors.programingLanguages && (
                <ErrorMessage>
                  {errors.programingLanguages.message}
                </ErrorMessage>
              )}
            </div>
            {fields.map((field, index) => (
              <FlexRow key={field.id}>
                <FlexItem>
                  <Select
                    {...register(`programingLanguages.${index}.name`, {
                      shouldUnregister: true,
                    })}
                    options={programingLanguages}
                  />
                </FlexItem>
                <FlexItem>
                  <Select
                    {...register(`programingLanguages.${index}.years`, {
                      shouldUnregister: true,
                    })}
                    options={years}
                  />
                </FlexItem>
                <FlexItem>
                  <Button
                    className="btn-delete"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Usuń
                  </Button>
                </FlexItem>
              </FlexRow>
            ))}
          </>
        )}
        <Button type="submit">Wyślij zgłoszenie</Button>
      </ApplicationFormStyled>
    </>
  );
};

export default ApplicationForm;
