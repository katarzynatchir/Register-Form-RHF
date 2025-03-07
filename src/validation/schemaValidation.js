import { z } from 'zod';

const phoneValidation = new RegExp(/^[0-9]{9}$/);
const acceptedImgTypes = ['image/jpeg', 'image/jpg', 'image/png'];

const WithoutExperience = z.object({
  isExperienced: z.literal(false),
});
const WithExperience = z.object({
  isExperienced: z.literal(true),
  programingLanguages: z
    .array(
      z.object({
        name: z.string(),
        years: z.string(),
      })
    )
    .nonempty(
      'Gdy zaznaczono doświadczenie w programowaniu, lista doświadczeń nie może być pusta'
    ),
});

const formSchema = z
  .object({
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
    formOfLearning: z.enum(['Stacjonarna', 'Online'], {
      message: 'Należy wybrać preferowaną formę nauki',
    }),
    technology: z
      .string()
      .array()
      .nonempty({ message: 'Proszę wybrać conajmniej jedną technologię' }),
    imageCV: z
      .any()
      .refine(file => file?.length == 1, 'Musisz dodać załącznik jako zdjęcie')
      .refine(file =>
        acceptedImgTypes.includes(file[0]?.type, {
          message: 'Akceptowane pliki to: jpeg, jpg i png',
        })
      ),
  })
  .and(
    z.discriminatedUnion('isExperienced', [WithExperience, WithoutExperience])
  );

export default formSchema;
