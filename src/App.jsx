import { useState } from "react";
import "./App.css";
function App() {
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem("user");
   

    return savedForm ? JSON.parse(savedForm) : {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  });


  const [isEditing, setIsEditing] = useState(() => {
    return localStorage.getItem("user") ? false : true;
  });



  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }



  function handleSave() {

    if (!isNameValid) {
      return;
    }

    if (!isEmailValid) {
      return;
    }

    if (!passwordsMatch) {

      return;
    }

  
    localStorage.setItem("user", JSON.stringify(form));
   
    setIsEditing(false);

   alert("Login succesfull")


   setForm({
    name: "",
    email:"",
    password:"",
    confirmPassword:""
   
   });
     setIsEditing(true);
  }




  const passwordsMatch = form.password === form.confirmPassword;

  const isNameValid =  /^[A-Za-z\s]+$/.test(form.name) && form.name.trim().length > 2;
  

  const hasMinlength = form.password.length >= 8;
  const hasUpperCase = [...form.password].some((char) => {
    const code = char.charCodeAt(0);
    return code >= 65 && code <= 90;
  });

  const hasLowerCase = [...form.password].some((char) => {
    const code = char.charCodeAt(0);
    return code >= 97 && code <= 122;
  });

  const hasNumber = [...form.password].some((char) => {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
  });

  const hasSpecialCharacter = [...form.password].some((char) => {
    const code = char.charCodeAt(0);

    const isPrintable = code >= 33 && code <= 126;

    const isNumber = code >= 48 && code <= 57;
    const isUpperCase = code >= 65 && code <= 90;
    const isLowerCase = code >= 97 && code <= 122;

    return (
      isPrintable && !isNumber && !isUpperCase && !isLowerCase
    );
  });

  const isPasswordValid = hasMinlength && hasUpperCase &&
    hasLowerCase && hasNumber &&
    hasSpecialCharacter;



  const isEmailValid = /^[a-zA-Z]+[0-9]*@[a-z]+\.com$/.test(form.email)









  return (
    <div className="form">
      <br />
    
    
      <label className="labels" htmlFor="name">Enter name: </label>
      
      <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        disabled={!isEditing}
        maxLength={50}
      />

      {form.name.length > 0 && !isNameValid && (
        <p style={{ color: "red" }}>Name must conatin only letters</p>
      )}

      <br />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        disabled={!isEditing}
      />
      {form.email.length > 0 && !isEmailValid && (
        <p style={{ color: "red" }}>
          Please enter a valid email
        </p>
      )}



      <br />

      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        disabled={!isEditing}
      />


      <ul className="list" style={{ listStyle: "none", padding: 0, fontSize: "12px", }}>
        <li style={{ color: hasMinlength ? "green" : "red" }}>{hasMinlength ? "✓" : "✗"} At least 8 characters</li>
        <li style={{ color: hasUpperCase ? "green" : "red" }}>{hasUpperCase ? "✓" : "✗"} At least one Uppercase letter</li>
        <li style={{ color: hasLowerCase ? "green" : "red" }}>
          {hasLowerCase ? "✓" : "✗"} At least one Lowercase letter
        </li>
        <li style={{ color: hasNumber ? "green" : "red" }}>
          {hasNumber ? "✓" : "✗"} At least one Number character
        </li>
        <li style={{ color: hasSpecialCharacter ? "green" : "red" }}>
          {hasSpecialCharacter ? "✓" : "✗"} At least one Special character
        </li>
      </ul>



      <label htmlFor="confpass">Confirm Password: </label>
      <input
        id="confpass"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        disabled={!isEditing}
      />

      {form.confirmPassword && !passwordsMatch && (<p style={{ color: "red" }}>Password do not match</p>)}

      {form.confirmPassword && passwordsMatch && (<p style={{ color: "green" }}>Confirm Password match</p>)}


      <button onClick={handleSave} disabled={!isNameValid || !isEmailValid || !isPasswordValid || !passwordsMatch}> Login </button>

    

    </div>
  );
}

export default App;