import "./Css/SignUpImpresa.css";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import {
  baseUrl,
  getImg64,
  allowedFileSize,
  fileErrorMessage,
} from "../services";
import Loader from "./Loader";

export default function SignUpImpresa() {
  //State initialize for uploading images and files
  const [image, setImg] = useState();
  const [fileUpload, setFileUpload] = useState();
  const [sf_image, sf_setImg] = useState();
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      businessName: "",
      category: "",
      email: "",
      password: "",
      confirmPassword: "",
      cap: "",
      address: "",
      address_n: "",
      common: "",
      // store field
      sf_name1: "",
      sf_name: "",
      sf_email: "",
      sf_password: "",
      sf_confirmPassword: "",
      sf_cap: "",
      sf_address: "",
      sf_address_n: "",
      sf_common: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("*Nome Impresa is Required"),
      businessName: Yup.string().required("*Required"),
      category: Yup.string().required("*Required"),
      email: Yup.string()
        .email("*Email is invalid")
        .required("*Email di riferimento is Required"),
      password: Yup.string().required("*Password is Required"),
      confirmPassword: Yup.string()
        .required("*Confirm Password is Required")
        .oneOf([Yup.ref("password"), null], "*Passwords Mismatched"),
      cap: Yup.string().required("*Cap is Required"),
      address: Yup.string().required("*Indirizzo is Required"),
      address_n: Yup.string().required("*n is Required"),
      common: Yup.string().required("*Comune is Required"),
      // store field
      sf_name1: Yup.string().required("*Nome Impresa is Required"),
      sf_name: Yup.string().required("*Utente punto vendita is Required"),
      sf_email: Yup.string()
        .email("*Email invalid")
        .required("*Email di riferimento is Required"),
      sf_password: Yup.string().required("*Password is Required"),
      sf_confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "*Passwords Mismatched"),
      sf_cap: Yup.string().required("*Cap is Required"),
      sf_address: Yup.string().required("*Indirizzo is Required"),
      sf_address_n: Yup.string().required("*n is Required"),
      sf_common: Yup.string().required("*Comune is Required"),
    }),
    onSubmit: async function (values, { resetForm }) {
      if (!image) {
        alert("!Please add company image");
        return;
      }
      if (!fileUpload) {
        alert("!Please add cover image");
        return;
      }
      if (!sf_image) {
        alert("!Please add store image");
        return;
      }

      const item = {
        accountType: "company",
        coverImage: fileUpload,
        name: values.name,
        password: values.password,
        businessName: values.businessName,
        //one field is less that is should be here
        category: values.category,
        email: values.email,
        address: {
          address: values.address,
          n: values.address_n,
          comune: values.common,
          cap: values.cap,
        },
        image: image,
        store: {
          name: values.sf_name1,
          username: values.sf_name,
          image: sf_image,
          email: values.sf_email,
          password: values.sf_password,
          address: {
            address: values.sf_address,
            n: values.sf_address_n,
            comune: values.sf_common,
            cap: values.sf_cap,
          },
        },
      };

      setLoader(true);
      const data = await axios.post(baseUrl + "signup", item);
      setLoader(false);

      if (data.data.status) {
        alert("Registered Successfully");
        sf_setImg("");
        setImg("");
        setFileUpload("");
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

  const sameCredentialsChecked = (event) => {
    if (event.target.checked) {
      formik.setFieldValue("sf_name", formik.values.name);
      formik.setFieldValue("sf_email", formik.values.email);
      formik.setFieldValue("sf_password", formik.values.password);
      formik.setFieldValue("sf_confirmPassword", formik.values.confirmPassword);
      sf_setImg(image);
    }
  };
  const sameAddressChecked = (event) => {
    if (event.target.checked) {
      formik.setFieldValue("sf_address", formik.values.address);
      formik.setFieldValue("sf_address_n", formik.values.address_n);
      formik.setFieldValue("sf_common", formik.values.common);
      formik.setFieldValue("sf_cap", formik.values.cap);
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <main className="signupconsumatore">
          <h2 style={{ fontWeight: "500" }}>Impresa Responsabile</h2>
          <div style={{ marginBottom: "5vh" }}>
            <input
              className="inputLoginLine"
              placeholder="*Nome Impresa"
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
          
          {/* Files Uploading */}
          <label htmlFor="image-upload" className="uploadProfileImage">
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
                getImg64(URL.createObjectURL(event.target?.files[0]), setImg);
              }
            }}
            id="image-upload"
            className="uploadImage"
            type="file"
          />

          {/* COVERPHOTO */}
          <label htmlFor="cover-photo" className="uploadBackgroundImpresa">
            {fileUpload ? (
              <img
                src={fileUpload}
                className="uploadBackgroundImpresa"
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
                getImg64(
                  URL.createObjectURL(event.target.files[0]),
                  setFileUpload
                );
              }
            }}
            id="cover-photo"
            className="uploadImage"
            type="file"
          />

          <div className="inputformlogin">
            <div>
              <select
                onChange={(event) => {
                  formik.setFieldValue("businessName", event.target.value);
                }}
                value={formik.values.businessName}
                placeholder="*Nome Impresa"
                className="inputLogin"
                name="businessName"
                id="businessName"
              >
                <option value="">*Ragione Sociale</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>

              {formik.errors.businessName && (
                <span className="text-red-400">
                  {formik.errors.businessName}
                </span>
              )}
            </div>
            <div>
              <select
                onChange={(event) => {
                  formik.setFieldValue("category", event.target.value);
                }}
                placeholder="*Nome Impresa"
                className="inputLogin"
                value={formik.values.category}
                name="category"
                id="category"
              >
                <option value="">*Categoria merciologica</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
              {formik.errors.category && (
                <span className="text-red-400">{formik.errors.category}</span>
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
                type={"password"}
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
                type={"password"}
                className="inputLogin"
                placeholder="*Conferma Password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="text-red-400">
                    {formik.errors.confirmPassword}
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
            <hr className="line"></hr>
            <div className="iscrizionePuntoVendita">
              <div className="iscrizionePuntoVenditaForm">
                <div>
                  <input
                    className="inputLoginLine"
                    placeholder="Nome Punto vendita"
                    name="sf_name1"
                    id="sf_name1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sf_name1}
                  />
                  {formik.touched.sf_name1 && formik.errors.sf_name1 && (
                    <span className="text-red-400">
                      {formik.errors.sf_name1}
                    </span>
                  )}
                </div>
                <div className="checkboxIscrizioneImprese">
                  <input
                    style={{ transform: "scale(2)", marginRight: "20px" }}
                    type="checkbox"
                    onChange={sameCredentialsChecked}
                    id="sameCandidate"
                    placeholder="*Nome Impresa"
                  />
                  <p>Usa le stesse credenziali della tua impresa</p>
                </div>
                <div>
                  <input
                    className="inputLogin"
                    placeholder="*Utente punto vendita"
                    name="sf_name"
                    id="sf_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sf_name}
                  />
                  {formik.touched.sf_name && formik.errors.sf_name && (
                    <span className="text-red-400">
                      {formik.errors.sf_name}
                    </span>
                  )}
                </div>
                <div
                  style={{ marginTop: "2vh" }}
                  className="logopuntovenditasignupimprese"
                >
                  <label
                    htmlFor="sf_file-upload"
                    className="uploadProfileImage"
                  >
                    {sf_image ? (
                      <img
                        src={sf_image}
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
                        getImg64(
                          URL.createObjectURL(event.target.files[0]),
                          sf_setImg
                        );
                      }
                    }}
                    id="sf_file-upload"
                    className="uploadImage"
                    type="file"
                  />
                </div>
                <div>
                  <input
                    className="inputLogin"
                    placeholder="*Email di riferimento"
                    name="sf_email"
                    id="sf_email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sf_email}
                  />
                  {formik.touched.sf_email && formik.errors.sf_email && (
                    <span className="text-red-400">
                      {formik.errors.sf_email}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type={"password"}
                    className="inputLogin"
                    placeholder="*Password"
                    name="sf_password"
                    id="sf_password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sf_password}
                  />
                  {formik.touched.sf_password && formik.errors.sf_password && (
                    <span className="text-red-400">
                      {formik.errors.sf_password}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type={"password"}
                    className="inputLogin"
                    placeholder="*Conferma Password"
                    name="sf_confirmPassword"
                    id="sf_confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sf_confirmPassword}
                  />
                  {formik.touched.sf_confirmpassword &&
                    formik.errors.sf_confirmpassword && (
                      <span className="text-red-400">
                        {formik.errors.sf_confirmPassword}
                      </span>
                    )}
                </div>
                <div
                  style={{ marginTop: "5vh" }}
                  className="checkboxIscrizioneImprese"
                >
                  <input
                    style={{ transform: "scale(2)", marginRight: "20px" }}
                    type="checkbox"
                    onChange={sameAddressChecked}
                    placeholder="*Nome Impresa"
                  />
                  <p>Usa lo stesso indirizzo dell'impresa</p>
                </div>
                <div className="indirizzoSignUpImprese">
                  <div className="indirizzoSignUpImpreseItem1">
                    <input
                      className="inputLogin"
                      placeholder="*Indirizzo"
                      name="sf_address"
                      id="sf_address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sf_address}
                    />
                    {formik.touched.sf_address && formik.errors.sf_address && (
                      <span className="text-red-400">
                        {formik.errors.sf_address}
                      </span>
                    )}
                  </div>
                  <div className="indirizzoSignUpImpreseItem2">
                    <input
                      className="inputLogin"
                      placeholder="*n"
                      name="sf_address_n"
                      id="sf_address_n"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sf_address_n}
                    />
                    {formik.touched.sf_address_n &&
                      formik.errors.sf_address_n && (
                        <span className="text-red-400">
                          {formik.errors.sf_address_n}
                        </span>
                      )}
                  </div>
                </div>
                <div className="indirizzoSignUpImprese">
                  <div className="indirizzoSignUpImpreseItem1">
                    <input
                      className="inputLogin"
                      placeholder="*Comune"
                      name="sf_common"
                      id="sf_common"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sf_common}
                    />
                    {formik.touched.sf_common && formik.errors.sf_common && (
                      <span className="text-red-400">
                        {formik.errors.sf_common}
                      </span>
                    )}
                  </div>
                  <div className="indirizzoSignUpImpreseItem2">
                    <input
                      className="inputLogin"
                      placeholder="*Cap"
                      name="sf_cap"
                      id="sf_cap"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sf_cap}
                    />
                    {formik.touched.sf_cap && formik.errors.sf_cap && (
                      <span className="text-red-400">
                        {formik.errors.sf_cap}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "3vh" }} className="buttonLogindiv">
              <button disabled={loader} type="submit" className="buttonLogin">
                {loader ? <Loader color={"white"} /> : "Avanti"}
              </button>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
}
