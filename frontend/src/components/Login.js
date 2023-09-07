import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  notifyIncompleteFields,
  notifyError,
  notifyLoginSuccessful,
  notifyAlreadyLoggedIn,
} from "./utils/toastify-objects";
import showSvg from "../assets/show.svg";
import hideSvg from "../assets/hide.svg";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      notifyAlreadyLoggedIn();
      navigate("/");
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email || !password) {
      notifyIncompleteFields();
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      notifyLoginSuccessful();
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      notifyError();
      setLoading(false);
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.login_card}>
        <p>Sign in to your Account</p>
        <Form onSubmit={submitHandler}>
          <div className={styles.form_field}>
            <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
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
          {loading && (
            <div className={styles.spinner}>
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {!loading && (
            <Button className={styles.submit_button} type="submit">
              Log In
            </Button>
          )}
        </Form>
      </div>

      <div className={styles.login_footer}>
        <div className={styles.create_account}>
          New here? <Link to="/sign_up">Create an account</Link>{" "}
        </div>
        <div className={styles.privacy_policy}>
          Terms of use | Privacy policy
        </div>
      </div>
    </div>
  );
};

export default Login;
