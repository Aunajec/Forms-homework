import React, { useState } from "react";

function BasicForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);

  const validate = (field, value) => {
    switch (field) {
      case "name":
        return value ? "" : "Name is required";
      case "email":
        return value.includes("@") ? "" : "Valid email required";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "10-digit phone required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validate(name, value);
    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmissions([...submissions, formData]);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div>
      <h1>Sign Up Sheet</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {formErrors.phone && <p className="error">{formErrors.phone}</p>}

        <button type="submit">Submit</button>
      </form>

      <h2>Names</h2>
      <ul>
        {submissions.map((s, i) => (
          <li key={i}>
            {s.name} - {s.email} - {s.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicForm;
