export const ifExists = resBodyItem => {
  return typeof resBodyItem !== 'undefined';
};

export const assignIfExists = resBodyItem => {
  return ifExists(resBodyItem) ? resBodyItem : null;
};

export const getValidObject = reqBody => {
  let validObject = {};
  Object.keys(reqBody).forEach(key => {
    if (ifExists(reqBody[key])) {
      validObject[key] = reqBody[key];
    }
  });
  return validObject;
};
