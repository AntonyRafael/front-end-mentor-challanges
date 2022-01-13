import React from "react";

let types : any = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Looks like this is not an CEP",
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Looks like this is not an email",
  },
  cpf: {
    regex: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\?[0-9]{2})$/,
    message: "Looks like this is not an CPF",
  },
  number: {
    regex: /^\d+$/,
    message: "Please, use only numbers in this field",
  },
};

const useForm = (type ?: any) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>("");

  function validate(value :any) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("field cannot be empty");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target } : any) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    setError,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;