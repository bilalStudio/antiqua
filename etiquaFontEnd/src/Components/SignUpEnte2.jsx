import "./Css/SignUpImpresa.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../services";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

export default function SignUpEnteStep2(props) {
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      website: "",
      telephone: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
      youtube: "",
      twitter: "",
    },
    validationSchema: Yup.object({
      website: Yup.string(),
      telephone: Yup.string(),
      facebook: Yup.string(),
      instagram: Yup.string(),
      linkedIn: Yup.string(),
      youtube: Yup.string(),
      twitter: Yup.string(),
    }),
    onSubmit: async function (values, { resetForm }) {
      const item = {
        //if we can write location.state then we get all the data from previos page
        ...location?.state,
      };

      //for the optionals as websit, telephone, facebook fields are optional
      Object.keys(values)?.forEach((key) => {
        if (values[key]?.length > 0) {
          item[key] = values[key];
        }
      });

      setLoader(true);
      const data = await axios.post(baseUrl + "signup", item);
      setLoader(false);

      if (data.data.status) {
        alert("Register Successful");
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
    <form onSubmit={formik.handleSubmit}>
      <main className="signupconsumatore">
        <div style={{ width: "500px" }} className="inputformlogin">
          <div>
            <input
              className="inputLogin"
              placeholder="Website URL"
              name="website"
              id="website"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
            ></input>
            {formik.touched.website && formik.errors.website && (
              <span className="text-red-400">{formik.errors.website}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Telephone"
              name="telephone"
              id="telephone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telephone}
            ></input>
            {formik.touched.telephone && formik.errors.telephone && (
              <span className="text-red-400">{formik.errors.telephone}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Linkedin"
              name="linkedIn"
              id="linkedIn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedIn}
            ></input>
            {formik.touched.linkedIn && formik.errors.linkedIn && (
              <span className="text-red-400">{formik.errors.linkedIn}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Facebook"
              name="facebook"
              id="facebook"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.facebook}
            ></input>
            {formik.touched.facebook && formik.errors.facebook && (
              <span className="text-red-400">{formik.errors.facebook}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Instagram"
              name="instagram"
              id="instagram"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.instagram}
            ></input>
            {formik.touched.instagram && formik.errors.instagram && (
              <span className="text-red-400">{formik.errors.instagram}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Youtube"
              name="youtube"
              id="youtube"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.youtube}
            ></input>
            {formik.touched.youtube && formik.errors.youtube && (
              <span className="text-red-400">{formik.errors.youtube}</span>
            )}
          </div>
          <div>
            <input
              className="inputLogin"
              placeholder="Twitter"
              name="twitter"
              id="twitter"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twitter}
            ></input>
            {formik.touched.twitter && formik.errors.twitter && (
              <span className="text-red-400">{formik.errors.twitter}</span>
            )}
          </div>
          <div className="indirizzoSignUpImprese">
            <div className="indirizzoSignUpImpreseItem1">
              <div style={{ marginTop: "3vh", marginLeft: "80px" }}>
                <button
                  disabled={loader}
                  type={"submit"}
                  style={{ marginBottom: "2rem" }}
                  className="buttonLoginRow"
                >
                  {loader ? <Loader color={"white"} /> : "Crea account"}
                </button>
              </div>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/nonprofit-signUp"
              >
                <div style={{ marginTop: "3vh", marginLeft: "80px" }}>
                  <button className="buttonLoginRow"> indietro </button>
                </div>
              </Link>
            </div>
            <div className="indirizzoSignUpImpreseItem2"></div>
          </div>
        </div>
      </main>
    </form>
  );
}
