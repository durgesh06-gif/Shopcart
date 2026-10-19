import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../Logincontext'; // Assuming LoginContext is the exported context object

function Login() {
  const { login } = useContext(LoginContext); // Pass the context object, not the function
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data.email);
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter email</label>
        <input 
          type="email" 
          {...register('email', { required: { value: true, message: 'email is required' } })} 
        />
        <p className="text-danger">{errors.email && errors.email.message}</p>
        <br />
        <label>Enter pass</label>
        <input 
          type="password" 
          {...register('password', { required: { value: true, message: 'password is required' } })} 
        />
        <p className="text-danger">{errors.password && errors.password.message}</p>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
