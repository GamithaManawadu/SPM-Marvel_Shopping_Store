export const setErrors = (email, contactNumber) => {
  let errors = {};
  errors.email = email ? "" : "Email Address is required!";
  //errors.contactNumber = contactNumber ? "" : "Mobile Number is required!";
  return errors;
};
