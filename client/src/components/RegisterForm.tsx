import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { endPoint } from "../../functions/endPoints";
import axios from "axios";

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required("Enter valid email"),
  password: Yup.string()
    .required("Enter valid password")
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be at least 24 characters"),
  confirmPassword: Yup.string()
    .required("Enter valid confirm password")
    .min(6, "Confirm password must be at least 6 characters")
    .max(24, "Confirm password must be at least 24 characters")
    .oneOf([Yup.ref("password")], "Passwords must be match"),
  name: Yup.string()
    .required("Please enter a name")
    .matches(/^[A-Za-zğüşöçİĞÜŞÖÇ]+$/, "Please enter a valid name"),
  surname: Yup.string()
    .required("Please enter a surname")
    .matches(/^[A-Za-zğüşöçİĞÜŞÖÇ]+$/, "Please enter a valid surname"),
  phoneNumber: Yup.string()
    .required("Please enter a phone number")
    .matches(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      "Please enter a valid phone number"
    )
    .max(10, "Phone number must be 10 digits")
    .min(10, "Phone number must be 10 digits"),
});

export default function RegisterForm() {
  interface FormValues {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  }

  const initialValues: FormValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const handleRegisterForm = (values: FormValues): void => {
    endPoint.baseApi &&
      axios
        .post(`${endPoint.baseApi}/register`, {
          values,
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        handleRegisterForm(values);
        setSubmitting(false);
      }}
      validationSchema={registerSchema}
    >
      {({ errors, touched }) => (
        <Form className="max-w-3xl mx-auto mt-24 border-2 border-solid border-blue-700 p-10 rounded">
          <div className="relative z-0 w-full mb-6 group">
            <Field
              type="text"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {touched.email && errors.email && (
              <div className="text-sm text-red-400 font-bold">
                {errors.email}
              </div>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Field
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {touched.password && errors.password && (
              <div className="text-sm text-red-400 font-bold">
                {errors.password}
              </div>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="text-sm text-red-400 font-bold">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
              {touched.name && errors.name && (
                <div className="text-sm text-red-400 font-bold">
                  {errors.name}
                </div>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="text"
                name="surname"
                id="surname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="surname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Surname
              </label>
              {touched.surname && errors.surname && (
                <div className="text-sm text-red-400 font-bold">
                  {errors.surname}
                </div>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                name="phoneNumber"
                id="phoneNumber"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="phoneNumber"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123 456 7890)
              </label>
              {touched.phoneNumber && errors.phoneNumber && (
                <div className="text-sm text-red-400 font-bold">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
