import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  // this following might not be needed. we can just use current variable
  //   const [toDateDisabled, toggleDisabled] = useState(false);

  // destructring
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

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
    addEducation(formData, history);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any schoo/college or bootcamp
        that you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            value={school}
            onChange={onChange}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={degree}
            onChange={onChange}
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={fieldofstudy}
            onChange={onChange}
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
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
            Current
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
            placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
