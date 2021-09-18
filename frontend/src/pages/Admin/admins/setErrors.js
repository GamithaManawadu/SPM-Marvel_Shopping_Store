export const setErrors = (email, contact) => {
    let errors = {};
    errors.email = email?"":"Email Address is required!"
    errors.contact = contact?"":"Mobile Number is required!"
    return errors;
};