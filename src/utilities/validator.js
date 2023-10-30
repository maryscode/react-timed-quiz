const config = require("../constants/config");
const countries = config.COUNTRY_LIST;
const states = config.STATE_LIST;

// each field sent by the form has an array of functions in this object
// the function will return nothing if the item is valid or a string if it has an error
const rules = {
  firstName: [
    (val) => {
      if (typeof val !== "string") {
        return "firstName must be a string";
      }
    },
    (val) => {
      if (val.length < 2) {
        return "firstName must be more than 2 characters";
      }
    },
  ],
  lastName: [
    (val) => {
      if (typeof val !== "string") {
        return "lastName must be a string";
      }
    },
    (val) => {
      if (val.length < 2) {
        return "lastName must be more than 2 characters";
      }
    },
  ],

  score: [
    (val) => {
      if (typeof val !== "number") {
        return "score must be a number";
      }
    },
    (val) => {
      if (val < 0 || val > 25) {
        return "score must be greater than or equal to 0 and less than or equal to 25";
      }
    },
  ],
  country: [
    (val) => {
      if (typeof val !== "string") {
        return "lastName must be a string";
      }
    },
  ],

  state: [
    (val, { country }) => {
      if (country === "USA" && val !== "string") {
        return "If the country is USA a state is required";
      }
    },
  ],

  lastModified: [
    (val) => {
      if (typeof val !== "number") {
        return "please include a timestap for example: +new Date()";
      }
    },
  ],
  time: [
    (val) => {
      if (typeof val !== "number") {
        return "time must be a number";
      }
    },
    (val) => {
      if (val < 0 || val > 97000) {
        return "time must be greater than or equal to 0 and less than or equal to 97000 (ms)";
      }
    },
  ],
};

// you can only check fields included in the form (ie not throw errors at missing required fields) if you add onlyCheckIncluded = true to the fomData
// this allows this function to only check a single item rather than everything if needed

module.exports = (formData) => {
  const results = { hasErrors: false };

  const onlyCheckIncluded = formData.onlyCheckIncluded;
  delete formData.onlyCheckIncluded;

  // iterate over every item expected in the form or just the sent fields
  Object.keys(onlyCheckIncluded ? formData : rules).forEach((key) => {
    // call all of the fuctions for the field
    let errors = rules[key]
      .map((rule) => rule(formData[key], formData))
      .filter((x) => x !== undefined);

    // if any errors have happened note it
    const hasErrors = !!errors.length;

    if (hasErrors) {
      console.log(formData);
      results.hasErrors = true;
    }

    results[key] = { hasErrors, errors };
  });

  // returns {hasErrors: true, errors: [...errors]} or {hasErrors: false, errors: []}
  return results;
};
