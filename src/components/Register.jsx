import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        {...register("firstName", { required: { value: true, message: "firstname is req" }
        ,minLength:{value:2,message:'min 2 char r req'}
       })}
      />
      {errors.firstName && <p style={{ color: "red", margin: "4px 0 0 0" }}>{errors.firstName.message}</p>}
      <br />
      <br />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastname"
        {...register("lastname", { required: { value: true, message: "lastname is req" }
        ,minLength:{value:2,message:'min 2 char r req'}
        })}
      />
      {errors.lastname && <p style={{ color: "red", margin: "4px 0 0 0" }}>{errors.lastname.message}</p>}
      <br />
      <br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        {...register("email", { required: { value: true, message: "email is req" } 
        , pattern: {
      value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      message: "Please enter a valid email format"
    }})}
      />
      {errors.email && <p style={{ color: "red", margin: "4px 0 0 0" }}>{errors.email.message}</p>}
      <br />
      <br />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        {...register("password", { required: { value: true, message: "pass is req" }
    //   , pattern: {
    //   value:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    //   message: "Please enter a valid email format"
    // }
  })}
      />
      {errors.password && <p style={{ color: "red", margin: "4px 0 0 0" }}>{errors.password.message}</p>}
      <br />
      <br />

      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmpassword"
        {...register("confirmpassword", {
          required: { value: true, message: "conpass is req" },
    //        pattern: {
    //   value:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    //   message: "Please enter a valid email format"
    // },
          validate: (val) => {
            if (watch('password') !== val) {
              return "Your passwords do not match";
            }
          }
        }        
      )}
      />
      {errors.confirmpassword && <p style={{ color: "red", margin: "4px 0 0 0" }}>{errors.confirmpassword.message}</p>}
      <br />
      <br />

      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;
