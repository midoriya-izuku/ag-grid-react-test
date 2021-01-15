//validation setter if validation function fails call on fail or call On success
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

//each field is key in isError object 
//set is error field key value if validation function passes
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

//set is error field key value false if validation function fails
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
