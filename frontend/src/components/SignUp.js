import React, { useContext, useEffect, useState } from "react";
// import { TextField } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Input from "@mui/material/Input";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import IconButton from "@mui/material/IconButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import showSvg from "../assets/show.svg";
import hideSvg from "../assets/hide.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
// import { AppContext } from "../../context/application-context";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import {
//   notifyIncompleteFields,
//   notifyError,
//   notifyPasswordMatch,
//   notifyRegisterationSuccessful,
//   notifyAlreadyLoggedIn,
// } from "../../utils/toastify-objects";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const showConfirmPasswordHandler = () =>
    setShowConfirmPassword((show) => !show);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   const appCtx = useContext(AppContext);
  //   const user = appCtx.user;
  //   const setUser = appCtx.setUser;

  //   useEffect(() => {
  //     if (user) {
  //       notifyAlreadyLoggedIn();
  //       navigate("/");
  //     }
  //   });

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log({
      name,
      email,
      birthDate,
      password,
    });
    // if (!fullName || !email || !username || !password || !confirmPassword) {
    //   notifyIncompleteFields();
    //   console.log("............1");
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   notifyPasswordMatch();
    //   console.log("............2");
    //   return;
    // }
    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/users/sign_up",
    //     {
    //       name: fullName,
    //       email,
    //       password,
    //       username,
    //       confirmPassword,
    //     },
    //     config
    //   );
    //   notifyRegisterationSuccessful();
    //   setUser(data);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   navigate("/");
    // } catch (error) {
    //   notifyError();
    // }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.login_card}>
        <p>Sign up as a New User!</p>
        <Form onSubmit={submitHandler}>
          <div className={styles.form_field}>
            <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className={styles.form_field}>
            <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className={styles.form_field}>
            <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className={styles.form_field}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputGroup.Text
                  className="cursor-pointer"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <img src={hideSvg} alt="hide_svg" />
                  ) : (
                    <img src={showSvg} alt="show_svg" />
                  )}
                </InputGroup.Text>
              </div>
            </Form.Group>
          </div>
          <Button className={styles.submit_button} type="submit">
            Sign Up
          </Button>
        </Form>
      </div>

      <div className={styles.login_footer}>
        <div className={styles.create_account}>
          Already a User? <Link to="/login">Sign In</Link>{" "}
        </div>
        <div className={styles.privacy_policy}>
          Terms of use | Privacy policy
        </div>
      </div>
    </div>
  );
};

export default SignUp;

{
  /* <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Full Name"
              type="text"
              variant="standard"
              fullWidth
              size="small"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_field}>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              fullWidth
              size="small"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.form_field}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className={styles.form_field}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showConfirmPassword ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={showConfirmPasswordHandler}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <Button className={styles.submit_button} type="submit">
            Sign Up
          </Button> */
}
