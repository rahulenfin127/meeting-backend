const yup = require('yup')

module.exports.createUserSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
  
});

module.exports.loginUserSchema = yup.object({
    email: yup.string().email(),
    password: yup.string().required(),
  });

