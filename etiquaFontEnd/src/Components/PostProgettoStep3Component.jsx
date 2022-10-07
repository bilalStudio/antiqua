import "./Css/SignUpImpresa.css"
import React, { useState, useContext } from "react";
import { ElectricalServices } from "@mui/icons-material";
import PostProgettoContext from "../context/PostProgettoContext";

export default function PostProgettoStep3Component() {

  //Context
  const {
    formikstep3,
    singleArtista,
    setSingleArtista,
    ongoingArtista,
    setOngoingArtista,
    dividesMultiMilestoneArtista,
    setDividesMultiMilestoneArtista
  } = useContext(PostProgettoContext);
  const handleChanges = (event) => {

    if (event.target.name === 'singleArtista') {
      if (event.target.checked === true) {
        setSingleArtista(true)
      }
      else {
        setSingleArtista(false)
      }
    }

    if (event.target.name === 'ongoingArtista') {
      if (event.target.checked === true) {
        setOngoingArtista(true)
      }
      else {
        setOngoingArtista(false)
      }
    }

    if (event.target.name === 'dividesMultiMilestoneArtista') {
      if (event.target.checked === true) {
        setDividesMultiMilestoneArtista(true)
      }
      else {
        setDividesMultiMilestoneArtista(false)
      }
    }

  }

  // const [loader, setLoader] = useState(false);


  return (
    <form onSubmit={formikstep3.handleSubmit}>
      <div>
        <main className="postprogettoS2">

          <h2 style={{ fontWeight: '500' }}>nuova Raccolta fondi</h2>
          <h2 style={{ fontWeight: '500' }}>Luci d'artista</h2>
          <div className="checkboxIscrizioneImprese">
            <input
              style={{ transform: 'scale(2)', marginRight: '20px' }}
              type='checkbox'
              name='singleArtista'
              onChange={handleChanges}
              value={singleArtista}
            />
            <p style={{ marginRight: '2rem' }}>
              Progetto singolo
            </p>
            <input style={{ transform: 'scale(2)', marginRight: '20px' }}
              type='checkbox'
              name="ongoingArtista"
              onChange={handleChanges}
              value={ongoingArtista}
            />
            <p>Progetto continuativo (ripetuto nel tempo)
            </p>
          </div>
          <div className="checkboxIscrizioneImprese">

            <p>Rinnova automaticamente la raccolta fondi ogni</p>
            <input
              style={{ width: '4rem', marginTop: '-1rem', marginLeft: '1rem' }}
              className="inputLogin"
              placeholder="60"
              name="renew_fundraising"
              id="renew_fundraising"
              onChange={formikstep3.handleChange}
              onBlur={formikstep3.handleBlur}
              value={formikstep3.values.renew_fundraising}
            />

            <select
              style={{ width: '6rem', marginTop: '-1rem', marginLeft: '1rem' }}
              onChange={(event) => {
                formikstep3.setFieldValue("pages", event.target.value);
              }}
              className="inputLogin"
              name="pages"
              id="pages"
              onBlur={formikstep3.handleBlur}
              value={formikstep3.values.pages}
            >
              <option value="Giorni">Giorni</option>
              <option value="a">a</option>
            </select>
            {formikstep3.touched.pages && formikstep3.errors.pages && (
              <span className="text-red-400">{formikstep3.errors.pages}</span>
            )}
          </div>

          <div className="checkboxIscrizioneImprese">
            <input
              style={{ transform: 'scale(2)', marginRight: '20px' }}
              type='checkbox'
              name="dividesMultiMilestoneArtista"
              onChange={handleChanges}
              value={dividesMultiMilestoneArtista}
            />
            <p style={{ marginRight: '2rem' }}>
              Suddividi la raccolta fondi in più traguardi (consigliato per budget superiori a 30.000 euro)
            </p>
          </div>

          <div className="inputformlogin">

            <div>
            </div>

            <div className="indirizzoSignUpImprese">
            </div>

            <hr className="line"></hr>

            <div className="iscrizionePuntoVendita">

              <div style={{ height: '21rem' }} className="iscrizionePuntoVenditaForm">
                <div>
                  <input className="inputLoginLine" placeholder="*Traguardo1"
                    name="finish_line"
                    id="finish_line"
                    onChange={formikstep3.handleChange}
                    onBlur={formikstep3.handleBlur}
                    value={formikstep3.values.finish_line}
                  />
                  {formikstep3.touched.finish_line && formikstep3.errors.finish_line && (
                    <span className="text-red-400">
                      {formikstep3.errors.finish_line}
                    </span>
                  )}
                </div>
                <p style={{ marginRight: '2rem' }}>
                  * Budget Traguardo
                </p>
                <input style={{ marginTop: '0px' }} className="inputLogin" placeholder="0,00"
                  name="budget_finish_line"
                  id="budget_finish_line"
                  onChange={formikstep3.handleChange}
                  onBlur={formikstep3.handleBlur}
                  value={formikstep3.values.budget_finish_line}
                />
                {formikstep3.touched.budget_finish_line && formikstep3.errors.budget_finish_line && (
                  <span className="text-red-400">
                    {formikstep3.errors.budget_finish_line}
                  </span>
                )}
                <p style={{ marginRight: '2rem' }}>
                  * Breve descrizione
                </p>

                <input style={{ marginTop: '10px' }} className="inputLogin" placeholder="0,00"
                  name="short_description"
                  id="short_description"
                  onChange={formikstep3.handleChange}
                  onBlur={formikstep3.handleBlur}
                  value={formikstep3.values.short_description}
                />
                {formikstep3.touched.short_description && formikstep3.errors.short_description && (
                  <span className="text-red-400">
                    {formikstep3.errors.short_description}
                  </span>
                )}

                <div className="checkboxIscrizioneImprese">
                </div>

                <div>
                </div>

                <div style={{ marginTop: '2vh' }} className="logopuntovenditasignupimprese">
                </div>

                <div className="indirizzoSignUpImprese">
                </div>

              </div>

            </div>

            <div style={{ marginTop: '3vh' }} className="buttonLogindiv">
              <button type="submit" className="buttonLogin">Manda in approvazione</button>
            </div>

          </div>
        </main>
      </div>
    </form>

  );
}