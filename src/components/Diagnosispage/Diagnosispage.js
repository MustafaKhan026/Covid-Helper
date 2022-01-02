import React from "react";
import { Link } from "react-router-dom";
import "./Diagnosis.css";
import img_one from "../../assets/img_one.png";
import img_two from "../../assets/diag.jpg";

const Diagnosispage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="navigation">
          <nav>
            <ul>
              <Link to="/symptoms" style={{ textDecoration: "none" }}>
                <li>Symptoms</li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>home</li>
              </Link>
              <Link to="/centers" style={{ textDecoration: "none" }}>
                <li>Vaccine Centers</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="diag__wrapper">
          <div className="diag__box">
            <h1 className="diag__box_heading">COVID-19: Diagnosis</h1>
            <div className="box">
              <p className="box_one_p">
                If you develop symptoms of coronavirus disease 2019 (COVID-19)
                or you've been exposed to the COVID-19 virus, contact your
                health care provider. <br /> Also let your health care provider
                know if you've had close contact with anyone who has been
                diagnosed with COVID-19. <br /> Factors used to decide whether
                to test you for the virus that causes COVID-19 may differ
                depending on where you live. Depending on your location, you may
                need to
                <br /> be screened by your clinic to determine if testing is
                appropriate and available. \In the U.S., your health care
                provider will determine whether to conduct tests for the virus
                that causes COVID-19 based on your signs and symptoms, as well
                as whether you have had close contact with someone diagnosed
                with COVID-19. Your health care provider may also consider
                testing if you are at higher risk of serious illness or you are
                going to have a medical procedure. If you have had close contact
                with someone with COVID-19 but you've had COVID-19 in the past
                three months, you don’t need to be tested. If you’ve been fully
                vaccinated and you’ve had close contact with someone with
                COVID-19, get tested 5 to 7 days after you’ve had contact with
                them. To test for the COVID-19 virus, a health care provider
                takes a sample from the nose (nasopharyngeal swab), throat
                (throat swab) or saliva. The samples are then sent to a lab for
                testing. If you're coughing up sputum, that may be sent for
                testing.
              </p>
            </div>
            <div className="diag__images">
              <div className="img__one">
                <img src={img_one} alt="" />
              </div>
              <div className="img__two">
                <img src={img_two} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box_one_p">
                The FDA has authorized at-home tests for the COVID-19 virus.
                These are available only with a doctor's prescription Rapid and
                accurate detection of COVID-19 is crucial to control outbreaks
                in the community and in hospitals. Current diagnostic tests for
                coronavirus include reverse-transcription polymerase chain
                reaction (RT-PCR), real‐time RT-PCR (rRT‐PCR), and reverse
                transcription loop‐mediated isothermal amplification (RT‐LAMP).
                RT-LAMP has similar sensitivity to rRT-PCR, is highly specific
                and is used to detect MERS-CoV. According to current diagnostic
                criteria founded by the China National Health Commission,
                laboratory examinations, including nasopharyngeal and
                oropharyngeal swab tests, have become a standard assessment for
                diagnosis of COVID-19 infection. To identify patients earlier,
                two one-step quantitative RT-PCR (qRT-PCR) assays were developed
                to detect two different regions (ORF1b and N) of the SARS-CoV-2
                genome. Three novel RT-PCR assays targeting the RNA-dependent
                RNA polymerase (RdRp)/helicase (Hel), spike (S), and
                nucleocapsid (N) genes of SARS-CoV-2 were developed. Among the
                three novel assays, the COVID-19-RdRp/Hel assay had the lowest
                limit of detection in vitro; highly sensitive and specific
                assays may help to improve the laboratory diagnosis of
                COVID-19.In a series of 51 patients with confirmed COVID-19
                infection, 71% patients were RT-PCR positive at the first time
                of testing of throat swab or sputum samples. The RT-PCR results
                usually become positive after several days (2-8 days). For
                patients suffering from fever, sore throat, fatigue, coughing or
                dyspnea that is coupled with recent exposure, COVID-19 infection
                should be diagnosed with typical chest computerized tomography
                (CT) characteristics despite negative RT-PCR results. Of 1014
                patients, 59% had positive RT-PCR results, and 88% had positive
                chest CT scans. As the diagnostic criteria expanded from
                laboratory examination to chest CT imaging, more than 14 000
                patients were diagnosed on February 12, 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagnosispage;
