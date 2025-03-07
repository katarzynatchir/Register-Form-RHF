import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from '../validation/schemaValidation';
import {
  ApplicationFormStyled,
  H1,
  H2,
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
} from '../styles/styles';
import TextField from './TextField';

const ApplicationForm = ({ setUserData }) => {
  const [imgPreview, setImgPreview] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    mode: 'onChange',
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

  const handleUploadedFile = event => {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
    setImgPreview(urlImage);
  };

  const onSubmit = data => {
    setUserData({ ...data, imgPreview });
    console.log(data);
  };

  const onError = errors => console.log('validation errors', errors);

  return (
    <>
      <H1>Formularz zgłoszeniowy na kurs programowania</H1>
      <ApplicationFormStyled onSubmit={handleSubmit(onSubmit, onError)}>
        <H2>Dane osobowe</H2>

        <TextField
          label="Imię"
          error={errors.firstName}
          {...register('firstName')}
        />

        {/* <div>
          <Input {...register('firstName')} type="text" placeholder="Imię" />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </div> */}

        <TextField
          label="Nazwisko"
          error={errors.lastName}
          {...register('lastName')}
        />

        {/* <div>
          <Input {...register('lastName')} type="text" placeholder="Nazwisko" />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </div> */}

        <TextField label="Email" error={errors.email} {...register('email')} />

        {/* 
        <div>
          <Input {...register('email')} type="text" placeholder="Email" />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div> */}

        <TextField
          type="number"
          label="Numer telefonu"
          error={errors.phone}
          {...register('phone')}
        />

        {/* <div>
          <Input
            {...register('phone')}
            type="number"
            placeholder="Numer telefonu"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </div> */}

        <H2>Preferencje kursu</H2>

        <div>
          <FlexRow>
            <p>Wybierz formę nauki: </p>
            <LabelControl htmlFor="stationary">
              <Radio
                {...register('formOfLearnig')}
                type="radio"
                id="stationary"
                value="Stacjonarny"
              />
              <span>Stacjonarna</span>
            </LabelControl>
            <LabelControl htmlFor="online">
              <Radio
                {...register('formOfLearnig')}
                type="radio"
                id="online"
                value="Online"
              />
              <span>Online</span>
            </LabelControl>
          </FlexRow>
          {errors.formOfLearnig && (
            <ErrorMessage>{errors.formOfLearnig.message}</ErrorMessage>
          )}
        </div>

        <div>
          <Select {...register('technology')} size={5} multiple="multiple">
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Next.js">Next.js</option>
          </Select>
          {errors.technology && (
            <ErrorMessage>{errors.technology.message}</ErrorMessage>
          )}
        </div>

        <div>
          <H2>Dodaj swoje CV</H2>
          <InputFile
            {...register('imageCV')}
            type="file"
            onChange={handleUploadedFile}
          />
          {errors.imageCV && (
            <ErrorMessage>{errors.imageCV.message}</ErrorMessage>
          )}
        </div>

        <H2>Doświadczenie w programowaniu</H2>
        <div>
          <LabelControl>
            <Checkbox type="checkbox" {...register('isExperienced')} />
            <span>Czy masz doświadczenie w programowaniu?</span>
          </LabelControl>
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
              <FlexRow key={field.id}>
                <FlexItem>
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
                </FlexItem>
                <FlexItem>
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
                </FlexItem>
                <FlexItem>
                  <DeleteButton type="button" onClick={index => remove(index)}>
                    Usuń
                  </DeleteButton>
                </FlexItem>
              </FlexRow>
            ))}
          </>
        )}
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        <Button type="submit">Wyślij zgłoszenie</Button>
      </ApplicationFormStyled>
    </>
  );
};

export default ApplicationForm;
