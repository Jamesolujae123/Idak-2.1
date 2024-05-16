import { useState } from "react";
import "./signin.css";

const Signin = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Successfully!");
    console.log(formValues);
  };

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormValues((prevVal) => ({ ...prevVal, [name]: value }));
  };


  return (
    <div className="signin-cont">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Create An Account</h2>
        <div className="form-inputs">
          <div className="inputs">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
