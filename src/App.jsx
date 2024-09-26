import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import RadioInput from "./components/RadioInput";
import CheckBox from "./components/CheckBox";

const initialFormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    // [name] will insert the value assigned to name into the object
    // so address, or email etc
    // If it's equal to consent then we assign the checked value, otherwise
    // we're inserting a string which is held in value.
    setFormData({
      ...formData,
      [name]: name === "consent" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <TextInput
            label="Full name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
          <TextInput
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <TextInput
            label="Phone Number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Email Address"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form__section-right">
          <TextArea
            label="Write you complaint"
            name="complaint"
            rows={10}
            placeholder="You can complain here"
            value={formData.complaint}
            onChange={handleChange}
          />

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <RadioInput
              label="Phone"
              name="contact"
              value="phone"
              checkedOption={formData.contact}
              onChange={handleChange}
            />

            <RadioInput
              label="Email"
              name="contact"
              value="email"
              checkedOption={formData.contact}
              onChange={handleChange}
            />

            <RadioInput
              label="Post"
              name="contact"
              value="post"
              checkedOption={formData.contact}
              onChange={handleChange}
            />

            <RadioInput
              label="None"
              name="contact"
              value="none"
              checkedOption={formData.contact}
              onChange={handleChange}
            />

            <CheckBox
              label="I agree you can take my data and run wild"
              name="consent"
              value={formData.consent}
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
