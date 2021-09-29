export const setErrors = (title, price) => {
    let errors = {};
    errors.title = title ? "" : "Title is required!";
    errors.price = price ? "" : "Price is required!";
    return errors;
  };