export const validationSetter = (
  validateFn = (value) => true,
  errMsg = false
) => (params) => {
  syncValidator(
    params.newValue,
    validateFn,
    onSuccess(params),
    onFail(params, errMsg)
  );
  return false;
};

const syncValidator = (newValue, validateFn, onSuccess, onFail) => {
  if (validateFn(newValue)) {
    onSuccess();
  } else {
    onFail();
  }
};

const onSuccess = (params) => () => {
  let data = params.data;
  let field = params.colDef.field;
  data[field] = params.newValue;
  data.isError = {
    ...data.isError,
    [field]: { value: false, errMsg: {}, cellEdited: true },
  };
  params.api.applyTransaction({ update: [data] });
};

const onFail = (params, errMsg) => () => {
  let data = params.data;
  let field = params.colDef.field;
  data[field] = params.newValue;
  data.isError = {
    ...data.isError,
    [field]: { value: true, errMsg, cellEdited: true },
  };
  params.api.applyTransaction({ update: [data] });
};
