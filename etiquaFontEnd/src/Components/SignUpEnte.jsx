import "./Css/SignUpImpresa.css";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { allowedFileSize, fileErrorMessage, getImg64 } from "../services";
import { useNavigate } from "react-router-dom";

export default function SignUpEnte() {
  const [image, setImg] = useState("");
  const [uploadFile, setUploadFile] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      np_user: "",
      email: "",
      password: "",
      confirmpassword: "",
      type: "",
      activity: "",
      cap: "",
      address: "",
      address_n: "",
      common: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("*Required"),
      activity: Yup.string().required("*Required"),
      name: Yup.string().required("*Nome Ente non profit is Required"),
      np_user: Yup.string().required("*Username is Required"),
      email: Yup.string()
        .email("*Email is Invalid")
        .required("*Email is Required"),
      password: Yup.string().required("*Password is Required"),
      confirmpassword: Yup.string()
        .required("*Confirm password is required")
        .oneOf([Yup.ref("password"), null], "*Passwords Mismatched"),
      cap: Yup.string().required("*Cap is Required"),
      address: Yup.string().required("*Indirizzo is Required"),
      address_n: Yup.string().required("*n is Required"),
      common: Yup.string().required("*Comune is Required"),
    }),
    onSubmit: async function (values, { resetForm }) {
      if (!image) {
        alert("Profile Image is Require");
        return;
      }
      if (!uploadFile) {
        alert("Cover Image is Require");
        return;
      }
      const item = {
        accountType: "non-profit",
        coverImage: uploadFile,
        name: values.name,
        username: values.np_user,
        password: values.password,
        //one filed is less that should be here Non-profit user(Utente non profit)
        activity: values.activity,
        type: values.type,
        email: values.email,
        address: {
          address: values.address,
          n: values.address_n,
          comune: values.common,
          cap: values.cap,
        },
        image: image,
      };

      navigate("/nonprofit-signUp-2", {
        state: item,
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <main className="signupconsumatore">
          <h2 style={{ fontWeight: "500" }}>Ente non profit</h2>
          <div style={{ marginBottom: "5vh" }}>
            <input
              className="inputLoginLine"
              placeholder="*Nome Ente non profit"
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

          <label htmlFor="image-upload" className="uploadProfileImage">
            {image ? (
              <img
                src={image}
                className="uploadProfileImage"
                width="100"
                height="100"
                alt='img'
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
            id="image-upload"
            className="uploadImage"
            type="file"
          />

          {/* COVERPHOTO */}
          <label htmlFor="cover-photo" className="uploadBackgroundImpresa">
            {uploadFile ? (
              <img
                src={uploadFile}
                className="uploadBackgroundImpresa"
                width="100"
                height="100"
                alt='img'

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
                getImg64(
                  URL.createObjectURL(event.target.files[0]),
                  setUploadFile
                );
              }
            }}
            id="cover-photo"
            className="uploadImage"
            type="file"
          />
          <div className="inputformlogin">
            <div>
              <input
                className="inputLogin"
                placeholder="*Utente non profit"
                name="np_user"
                id="np_user"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.np_user}
              />
              {formik.touched.np_user && formik.errors.np_user && (
                <span className="text-red-400">{formik.errors.np_user}</span>
              )}
            </div>
            <div>
              <select
                placeholder="*Nome Impresa"
                className="inputLogin"
                name="type"
                id="type"
                onChange={(event) => {
                  formik.setFieldValue("type", event.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              >
                <option value="">*Tipo di ente</option>
                <option value="A">A</option>
              </select>
              {formik.touched.type && formik.errors.type && (
                <span className="text-red-400">{formik.errors.type}</span>
              )}
            </div>
            <div>
              <select
                onChange={(event) => {
                  formik.setFieldValue("activity", event.target.value);
                }}
                placeholder="*Nome Impresa"
                className="inputLogin"
                name="activity"
                id="activity"
                onBlur={formik.handleBlur}
                value={formik.values.activity}
              >
                <option value="">*Attivita dell organizzazione</option>
                <option value="A">A</option>
              </select>
              {formik.touched.activity && formik.errors.activity && (
                <span className="text-red-400">{formik.errors.activity}</span>
              )}
            </div>
            <div>
              <input
                className="inputLogin"
                placeholder="*Email di riferimento"
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
            <div className="indirizzoSignUpImprese">
              <div className="indirizzoSignUpImpreseItem1">
                <input
                  className="inputLogin"
                  placeholder="*Indirizzo"
                  name="address"
                  id="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <span className="text-red-400">{formik.errors.address}</span>
                )}
              </div>
              <div className="indirizzoSignUpImpreseItem2">
                <input
                  className="inputLogin"
                  placeholder="*n"
                  name="address_n"
                  id="address_n"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address_n}
                />
                {formik.touched.address_n && formik.errors.address_n && (
                  <span className="text-red-400">
                    {formik.errors.address_n}
                  </span>
                )}
              </div>
            </div>
            <div className="indirizzoSignUpImprese">
              <div className="indirizzoSignUpImpreseItem1">
                <input
                  className="inputLogin"
                  placeholder="*Comune"
                  name="common"
                  id="common"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.common}
                />
                {formik.touched.common && formik.errors.common && (
                  <span className="text-red-400">{formik.errors.common}</span>
                )}
              </div>
              <div className="indirizzoSignUpImpreseItem2">
                <input
                  className="inputLogin"
                  placeholder="*Cap"
                  name="cap"
                  id="cap"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cap}
                />
                {formik.touched.cap && formik.errors.cap && (
                  <span className="text-red-400">{formik.errors.cap}</span>
                )}
              </div>
            </div>
            <div style={{ marginTop: "3vh" }} className="buttonLogindiv">
              <button type="submit" className="buttonLogin">
                Avanti {">"}
              </button>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
}
