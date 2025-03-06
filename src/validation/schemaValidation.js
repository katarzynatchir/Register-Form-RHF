import { z } from 'zod';

const phoneValidation = new RegExp(/^[0-9]{9}$/);

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

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
    .string()
    .array()
    .nonempty({ message: 'Proszę wybrać conajmniej jedną technologię' }),
  imageCV: z
    .any()
    .refine(file => file?.length == 1, 'Musisz dodać załącznik jako zdjęcie')
    .refine(file =>
      ACCEPTED_IMAGE_TYPES.includes(file[0]?.type, {
        message: 'Akceptowane pliki to: jpeg, jpg i png',
      })
    ),
});

export default formSchema;
