import "./Css/PostProgettoStep1.css"
import React, { useContext } from "react";
import PostProgettoContext from "../context/PostProgettoContext";

export default function PostProgettoStep2Component() {

  //Context
  const {
    formikstep2,
    singleProject,
    setSingleProject,
    ongoingProject,
    setOngoingProject,
    dividesMultiMilestone,
    setDividesMultiMilestonect
  } = useContext(PostProgettoContext);

  const handleChanges = (event) => {
    //Sinngle Project
    if (event.target.name === 'singleProject') {

      if (event.target.checked === true) {
        setSingleProject(true)
      }
      else {
        setSingleProject(false)
      }

    }
    //Ongoing Project
    if (event.target.name === 'ongoingProject') {

      if (event.target.checked === true) {
        setOngoingProject(true)
      }
      else {
        setOngoingProject(false)
      }
    }
    //Divides Into Multiplemileston
    if (event.target.name === 'dividesMultiMilestone') {

      if (event.target.checked === true) {
        setDividesMultiMilestonect(true)
      }
      else {
        setDividesMultiMilestonect(false)
      }
    }
  }
  return (

    <form onSubmit={formikstep2.handleSubmit}>
      <div>
        <main className="postprogettoS2">

          <h2 style={{ fontWeight: '500' }}>Nuova raccolta fondi  </h2>

          <div style={{ marginBottom: '5vh' }}>
            <h2 style={{ fontWeight: '500' }}>Luci d'artista </h2>
          </div>

          <div className="checkboxIscrizioneImprese">

            <input
              style={{
                transform: 'scale(2)',
                marginRight: '1rem',
                marginLeft: '2rem',
                textAlign: 'center'
              }}
              type='checkbox'
              name="singleProject"
              placeholder="*Nome Impresa"
              onChange={handleChanges}
              value={singleProject}
            />
            <p>
              Progetto Singolo
            </p>

          </div>

          <div className="checkboxIscrizioneImprese">
            <input
              style={{
                transform: 'scale(2)',
                marginRight: '1rem',
                marginLeft: '2rem',
                textAlign: 'center'
              }}
              type='checkbox'
              name="ongoingProject"
              placeholder="*Nome Impresa"
              onChange={handleChanges}
              value={ongoingProject}

            />

            <p>
              Progetto Continuativo(ripetuto nel tempo)
            </p>

          </div>

          <div className="checkboxIscrizioneImprese">
            <input
              style={{
                transform: 'scale(2)',
                marginRight: '1rem',
                marginLeft: '2rem'
              }}
              type='checkbox'
              name="dividesMultiMilestone"
              placeholder="*Nome Impresa"
              onChange={handleChanges}
              value={dividesMultiMilestone}
            />

            <p>
              Suddividi la raccolta fondi in più traguardi(consigliato per budget superiori a 30.000 euro)
            </p>
          </div>

          <div className="inputformlogin">
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{
                  fontWeight: '600',
                  fontSize: '20px',
                  marginBottom: '1rem',
                  marginLeft: '2rem'
                }}>
                  *Budget</p>
                <input
                  style={{ height: '5rem' }}
                  className="inputLogin"
                  placeholder="Inserisci il tuo budget"
                  name="budget"
                  id="budget"
                  onChange={formikstep2.handleChange}
                  onBlur={formikstep2.handleBlur}
                  value={formikstep2.values.budget}

                />
                {formikstep2.touched.budget && formikstep2.errors.budget && (
                  <span className="text-red-400">
                    {formikstep2.errors.budget}
                  </span>
                )}
              </div>
            </div>
            <div style={{ marginTop: '3vh' }} className="buttonLogindiv">
              <button type="submit" className="buttonLogin">Avanti {">"}</button>
            </div>
          </div>
        </main>
      </div>
    </form>

  );
}