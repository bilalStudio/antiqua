import "./Css/PostProgettoStep1.css";
import Icona1 from "../Images/icona1.png";
import Icona2 from "../Images/icona2.png";
import Icona3 from "../Images/icona3.png";
import Icona4 from "../Images/icona4.png";

import Icona5 from "../Images/icona5.png";
import Icona6 from "../Images/icona6.png";
import Icona7 from "../Images/icona7.png";
import Icona8 from "../Images/icona8.png";

import Icona9 from "../Images/icona9.png";
import Icona10 from "../Images/icona10.png";
import Icona11 from "../Images/icona11.png";
import Icona12 from "../Images/icona12.png";

import Icona13 from "../Images/icona13.png";
import Icona14 from "../Images/icona14.png";
import Icona15 from "../Images/icona15.png";
import Icona16 from "../Images/icona16.png";
import React from "react";

import { useContext } from "react";
import PostProgettoContext from '../context/PostProgettoContext';

export default function PostProgettoStep1() {
  //Context
  const {
    formikstep1,
    image,
    fileUpload,
    setImg,
    setFileUpload,
    allowedFileSize,
    fileErrorMessage,
    getImg64,

  }
    = useContext(PostProgettoContext);

  return (
    <form onSubmit={formikstep1.handleSubmit} >
      <div>
        <main className="postprogetto">
          <h2 style={{ fontWeight: '500' }}>Nuova raccolta fondi </h2>
          <div style={{ marginBottom: '5vh' }}>
            <input className="inputLoginLine" placeholder="*Nome Progetto"
              name="name"
              id="name"
              onChange={formikstep1.handleChange}
              onBlur={formikstep1.handleBlur}
              value={formikstep1.values.name}
            />
            {formikstep1.touched.name && formikstep1.errors.name && (
              <span className="text-red-400">
                {formikstep1.errors.name}
              </span>
            )}
          </div>

          {/* Cover Uploading */}
          <label htmlFor="image-upload" className="uploadBackgroundPostProgetto">
            {image ? (
              <img
                src={image}
                alt='coverPhoto'
                className="uploadBackgroundPostProgetto"
                width="100"
                height="100"
              />) : (<p className="uploadpictextPostProgetto">Immagine principale</p>)}
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

          {/* Second Cover Uploading */}
          <label htmlFor="cover-photo" className="uploadProfileImagePostProgetto">
            {fileUpload ? (
              <img
                src={fileUpload}
                alt='coverPhoto'
                className="uploadProfileImagePostProgetto"
                width="100"
                height="100"
              />) : (<p className="uploadpictextPostProgetto">+</p>)}
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

          <div>
            <div>
              <p style={{
                fontWeight: '600',
                fontSize: '20px',
                marginBottom: '1rem',
                marginLeft: '2rem',
                marginTop: '1rem'
              }}>*Breve descrizione del progetto</p>
              <input
                style={{ height: '10rem' }}
                className="inputLogin"
                placeholder="Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet"
                name="short_description1"
                id="short_description1"
                onChange={formikstep1.handleChange}
                onBlur={formikstep1.handleBlur}
                value={formikstep1.values.short_description1}
              />
              {formikstep1.touched.short_description1 && formikstep1.errors.short_description1 && (
                <span className="text-red-400">
                  {formikstep1.errors.short_description1}
                </span>
              )}
            </div>
            <div>
              <p style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem', marginLeft: '2rem' }}>*Problema che risolve</p>
              <input
                style={{ height: '10rem' }}
                className="inputLogin"
                placeholder="Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet"
                name="problem_that_solves"
                id="problem_that_solves"
                onChange={formikstep1.handleChange}
                onBlur={formikstep1.handleBlur}
                value={formikstep1.values.problem_that_solves}
              />
              {formikstep1.touched.problem_that_solves && formikstep1.errors.problem_that_solves && (
                <span className="text-red-400">
                  {formikstep1.errors.problem_that_solves}
                </span>
              )}
            </div>
            <div>

              <div className="MainContainerCategorie">
                <div className="MainContainerCategorieC1">
                  <img style={{ textAlign: 'center' }} className="IconeIMG" src={Icona1} alt='icon_images' />
                </div>
                <div className="MainContainerCategorieC2">
                  <img className="IconeIMG" src={Icona2} alt='icon_images' />
                </div>
                <div className="MainContainerCategorieC3">
                  <img className="IconeIMG" src={Icona3} alt='icon_images'/>
                </div>
                <div className="MainContainerCategorieC4">
                  <img className="IconeIMG" src={Icona4} alt='icon_images'/>
                </div>
              </div>

              <div className="MainContainerCategorie">

                <div className="MainContainerCategorieC1">
                  <img className="IconeIMG" src={Icona5} alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC2">
                  <img className="IconeIMG" src={Icona6} alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC3">
                  <img className="IconeIMG" src={Icona7} alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC4">
                  <img className="IconeIMG" src={Icona8} alt='icon_images' />
                </div>

              </div>

              <div className="MainContainerCategorie">

                <div className="MainContainerCategorieC1">
                  <img className="IconeIMG" src={Icona9} alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC2">
                  <img className="IconeIMG" src={Icona10} alt='icon_images'/>
                </div>

                <div className="MainContainerCategorieC3">
                  <img className="IconeIMG" src={Icona11} alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC4">
                  <img className="IconeIMG" src={Icona12} alt='icon_images' />
                </div>

              </div>

              <div className="MainContainerCategorie">
                <div className="MainContainerCategorieC1">
                  <img className="IconeIMG" src={Icona13}  alt='icon_images'/>
                </div>

                <div className="MainContainerCategorieC2">
                  <img className="IconeIMG" src={Icona14}alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC3">
                  <img className="IconeIMG" src={Icona15}alt='icon_images' />
                </div>

                <div className="MainContainerCategorieC4">
                  <img className="IconeIMG" src={Icona16} alt='icon_images'/>
                </div>
              </div>

              <div>
                <p style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem', marginLeft: '2rem' }}>
                  *Descrizione più approfondita</p>
                <input
                  style={{ height: '14rem' }}
                  className="inputLogin"
                  placeholder="Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet"
                  name="in_depth_description"
                  id="in_depth_description"
                  onChange={formikstep1.handleChange}
                  onBlur={formikstep1.handleBlur}
                  value={formikstep1.values.in_depth_description}
                />
                {formikstep1.touched.in_depth_description && formikstep1.errors.in_depth_description && (
                  <span className="text-red-400">
                    {formikstep1.errors.in_depth_description}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem', marginLeft: '2rem' }}>*Partner</p>
                <input
                  style={{ height: '5rem' }}
                  className="inputLogin"
                  placeholder="Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet"
                  name="partner"
                  id="partner"
                  onChange={formikstep1.handleChange}
                  onBlur={formikstep1.handleBlur}
                  value={formikstep1.values.partner}
                />
                {formikstep1.touched.partner && formikstep1.errors.partner && (
                  <span className="text-red-400">
                    {formikstep1.errors.partner}
                  </span>
                )}
              </div>
            </div>
            <div style={{ marginTop: '3vh' }} className="buttonLogindiv">
              <button type="submit" className="buttonLogin">Avanti {'>'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </form>
  );
}