import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExerience } from "../../actions/profile";

const AddExperience = ({ addExerience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  // this following might not be needed. we can just use current variable
  //   const [toDateDisabled, toggleDisabled] = useState(false);

  // destructring
  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addExerience(formData, history);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            value={title}
            onChange={onChange}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={company}
            onChange={onChange}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={location}
            onChange={onChange}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="current"
              checked={current}
              onChange={handleCheckbox}
            />{" "}
            Current Job
          </label>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            disabled={current}
            value={to}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={onChange}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExerience: PropTypes.func.isRequired,
};

export default connect(null, { addExerience })(AddExperience);
