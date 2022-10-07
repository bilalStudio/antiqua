import "./Css/Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { baseUrl } from "../services";
import axios from "axios";
import Loader from "./Loader";

export default function LoginForm() {
  const [loader, setLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Email is invalid")
        .required("*Email is Required"),
      password: Yup.string()
        .required("*Password is Required"),
    }),
    onSubmit: async function (values, { resetForm }) {
      const item = {
        email: values.email,
        password: values.password,
      };
      setLoader(true);
      const data = await axios.post(baseUrl + "login", item);
      setLoader(false);
      if (data.data.status) {
        resetForm();
        localStorage.setItem("userData", JSON.stringify(data.data.data));
        alert("User Login Successful");
      }

      if (
        data.data.status === false &&
        typeof data.data.message === "string" &&
        data.data.message.length > 0
      ) {
        alert(data.data.message);

        return;
      }

      if (data.data?.message?.details[0]?.message) {
        alert(data.data.message?.details[0]?.message);
        return;
      }

      console.log(data.data.message);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <main className="LoginForm">
          <div className="inputformlogin">
            <div>
              <input
                className="inputLogin"
                placeholder="E-mail"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>
            <div>
              <input
                className="inputLogin"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-400">{formik.errors.password}</span>
              )}
            </div>
            <div>
              <p>Password dimenticata?</p>
            </div>

            <div className="buttonLogindiv">
              <button type="submit" disabled={loader} className="buttonLogin">
                {loader ? <Loader color={"white"} /> : "Accedi as"}
              </button>
            </div>
          </div>
          <div className="inputformlogin"></div>
          <div className="nuovoAccountDiv">
            <h2 className="nuovoAccounth2">Crea nuovo account</h2>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/consumatore-responsabile"
            >
              <div className="childNuovoAccountDiv">
                <h2
                  style={{ fontWeight: "500" }}
                  className="childCreaNuovoAccount"
                >
                  Consumatore responsabile
                </h2>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/impresa-responsabile"
            >
              <div className="childNuovoAccountDiv">
                <h2
                  style={{ fontWeight: "500" }}
                  className="childCreaNuovoAccount"
                >
                  Impresa responsabile
                </h2>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/nonprofit-signUp"
            >
              <div
                style={{ marginBottom: "5vh" }}
                className="childNuovoAccountDiv"
              >
                <h2
                  style={{ fontWeight: "500" }}
                  className="childCreaNuovoAccount"
                >
                  Ente non profit
                </h2>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </form>
  );
}
