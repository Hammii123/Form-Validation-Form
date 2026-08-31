# Form Validation App

A React-based form validation application that demonstrates custom client-side validation using React state management and native JavaScript.

The application validates user information in real time, including name, email, password strength, and password confirmation.

## 🚀 Features

- Controlled form inputs using React `useState`
- Name validation
- Maximum name length of 50 characters
- Prevents numbers and special characters in the name
- Custom email validation
- Password strength validation
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character
- ASCII-based password character validation
- Real-time password requirement indicators
- Confirm password validation
- Save button disabled until the form is valid
- Data stored using `localStorage`
- Success message displayed after successful submission
- Form automatically clears after successful submission
- Form remains enabled for the next user

## 🛠️ Technologies Used

- React
- JavaScript
- CSS
- HTML
- React Hooks
  - `useState`
- Browser `localStorage`

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── App.css
└── main.jsx