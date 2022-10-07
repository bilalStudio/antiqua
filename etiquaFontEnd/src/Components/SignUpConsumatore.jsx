import "./Css/SignUpConsumatore.css";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import {
  baseUrl,
  getImg64,
  allowedFileSize,
  fileErrorMessage,
} from "../services";
import Loader from "./Loader";

export default function SignUpConsumatore() {
  const [image, setImg] = useState();
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("*Name is Required"),
      email: Yup.string()
        .email("*Email Invalid")
        .required("*Email is Required"),
      password: Yup.string()
        .required("*Password is Required"),
      confirmpassword: Yup.string()
        .required("*Password is Required")
        .oneOf([Yup.ref("password"), null], "*Passwords Mismatched"),
    }),
    onSubmit: async function (values, { resetForm }) {
      if (!image) {
        alert("Please Add image");
        return;
      }
      const item = {
        accountType: "consumer",
        name: values.name,
        image: image,
        email: values.email,
        password: values.password,
      };
      setLoader(true);
      const data = await axios.post(baseUrl + "signup", item);
      setLoader(false);
      if (data.data.status) {
        alert("Register Successful");
        setImg("");
        resetForm();
        return;
      }

      if (
        typeof data?.data?.message === "string" &&
        data?.data?.message?.length > 0
      ) {
        alert(data?.data?.message);
        return;
      }

      if (data.data.message?.details[0]?.message) {
        alert(data.data.message?.details[0]?.message);
      }
    },
  });

  return (
    <div>
      <main className="signupconsumatore">
        <h2 style={{ fontWeight: "500" }}>Consumatore Responsabile</h2>

        <label htmlFor="file-upload" className="uploadProfileImage">
          {image ? (
            <img
              src={image}
              className="uploadProfileImage"
              width="100"
              height="100"
            />
          ) : (
            <p className="uploadpictext">Carica immagine profilo</p>
          )}
        </label>
        <input
          onChange={(event) => {
            if (event.target?.files[0]) {
              if (event.target?.files[0]?.size > allowedFileSize) {
                alert(fileErrorMessage);
                return;
              }
              getImg64(URL.createObjectURL(event.target.files[0]), setImg);
            }
          }}
          id="file-upload"
          className="uploadImage"
          type="file"
        />

        <form onSubmit={formik.handleSubmit}>
          <div className="inputformlogin">
            <div>
              <input
                className={`inputLogin`}
                placeholder="*Nome Utente"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-400">{formik.errors.name}</span>
              )}
            </div>

            <div>
              <input
                className={"inputLogin"}
                placeholder="*Email"
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
                placeholder="*Password"
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
              <input
                className="inputLogin"
                placeholder="*Conferma Password"
                name="confirmpassword"
                id="confirmpassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <span className="text-red-400">
                    {formik.errors.confirmpassword}
                  </span>
                )}
            </div>
            <div style={{ marginTop: "3vh" }} className="buttonLogindiv">
              <button type="submit" className="buttonLogin">
                {loader ? <Loader color={"white"} /> : "Crea Account"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
