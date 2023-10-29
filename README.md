# FormFlows: Streamlined React Form Management

The useForm hook provides an abstraction for managing form states, validation, and submissions. It simplifies the process of handling form inputs and reduces boilerplate for developers.

## 🚀 Getting Started

**Prerequisites**
- Ensure you have Node.js and npm installed. If not, download them from <a href="https://nodejs.org/en">Node.js Official Website</a>.

## Installation

Before using the hook, ensure that you've installed the package. You can install the package via npm:

```
npm install @yourusername/formflow --save

```

To use the useForm hook, simply import it from its module.

```
import useForm from '@yourusername/formflow';

```

## API

`useForm(initialValues, validators, onSubmit)`

```
const {
  values,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit
} = useForm(initialValues, validators, onSubmit);

```

#### Parameters

- **initialValues**(Object): Initial values of the form fields. This should match the structure of your form's fields. For example: { username: '', password: '' }.

- **validators** (Object): Validators for each form field. Each validator is a function that takes in the value of the field and returns an error message string if the validation fails.

- **onSubmit** (Function): Callback function to execute when the form is submitted and passes validation. This function should handle the actual submission logic, such as making API calls.

#### Returns
- **values** (Object): Current values of the form fields.

- **errors** (Object): Errors for each form field, if any exist.

- **isSubmitting** (Boolean): State indicating whether the form is currently being submitted.

- **handleChange** (Function): Change handler for input fields. Attach this to each form input's onChange prop.

- **handleSubmit** (Function): Submit handler for the form. Attach this to the form's onSubmit prop.


## 📖 Usage

1. Define your initial form values and validation rules.
2. Use the useForm hook in your form component.
3. Bind handleChange to the onChange event of each input field.
4. Bind handleSubmit to the onSubmit event of the form.

#### Example

```
import React from 'react';
import useForm from './path_to_useForm';

const validateRules = {
  username: (value) => (!value ? "Username is required!" : null),
  password: (value) => {
    if (!value) return "Password is required!";
    if (value.length < 8) return "Password should be at least 8 characters!";
    return null;
  }
};

const LoginForm = () => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useForm({ username: '', password: '' }, validateRules, async (values) => {
    // Logic to submit data, e.g., API call
    console.log("Submitted", values);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="username" value={values.username} onChange={handleChange} placeholder="Username" />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password" />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>Login</button>
    </form>
  );
};

export default LoginForm;

```

## 🔧 Features

- **Boilerplate Reduction**: Streamline your form management process.
- **Integrated Validation**: Ensure data integrity at the input level.
- **State Management**: Effortlessly manage form data, errors, and submission states.
- **Flexibility**: Customize validation rules and submission logic.
- **Enhanced UX**: Offer real-time feedback through integrated validation.
- **Library Compatibility**: Adaptable to various UI libraries or design systems.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## 📝 License
This project is typically licensed under GNU. Refer to the LICENSE file for more information.