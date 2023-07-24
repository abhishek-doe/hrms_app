import React, { useState } from "react";
import "./ProfessionalDetail.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfessionalDetail = () => {
  const [accordion, setAccordion] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (i) => {
    if (accordion === i) {
      return setAccordion(null);
    }
    setAccordion(i);
  };

  const skillElement =
    skillData &&
    skillData.map((data) => {
      return (
        <>
          <div>
            <div style={{ display: "flex", color: "#575757", padding: "3px 2rem", marginTop: "10px" }}>
              <p style={{ flex: "1" }}>{data.field}</p>
              <div className="dotsmenu-div">
                <BsThreeDotsVertical style={{ color: "black", cursor: "pointer" }} />
                <div className="dotsmenu">
                  <p>Edit</p>
                  <hr />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: "#575757", padding: "7px 2rem", marginBottom: "10px" }}>
              <p style={{ flex: "1" }}>
                Experience: <span style={{ color: "#999999" }}>{data.experience}</span>
              </p>{" "}
              <p>
                Competency: <span style={{ color: "#999999" }}>{data.competency}</span>
              </p>{" "}
            </div>
          </div>
          <hr />
        </>
      );
    });

  const languageElement =
    languageData &&
    languageData.map((data) => {
      return (
        <>
          <div>
            <div style={{ display: "flex", color: "#575757", padding: "3px 2rem", marginTop: "10px" }}>
              <p style={{ flex: "10%" }}>{data.language}</p>
               <div className="dotsmenu-div">
                <BsThreeDotsVertical style={{ color: "black", cursor: "pointer" }} />
                <div className="dotsmenu">
                  <p>Edit</p>
                  <hr />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: "#575757", padding: "7px 2rem", marginBottom: "10px" }}>
              <p style={{ flex: "1" }}>
                Fluency: <span style={{ color: "#999999" }}>{data.fluency}</span>
              </p>{" "}
              <p>
                Competency: <span style={{ color: "#999999" }}>{data.competency}</span>
              </p>{" "}
            </div>
          </div>
          <hr />
        </>
      );
    });

  const prevEmployElement =
    prevEmployData &&
    prevEmployData.map((data) => {
      return (
        <>
          <div>
            <div style={{ display: "flex", color: "#575757", padding: "3px 2rem", marginTop: "10px" }}>
              <p style={{ flex: "10%" }}>
                {data.company}
                <span style={{ color: "#0e94db" }}>`({data.role})`</span>
              </p>{" "}
              <div className="dotsmenu-div">
                <BsThreeDotsVertical style={{ color: "black", cursor: "pointer" }} />
                <div className="dotsmenu">
                  <p>Edit</p>
                  <hr />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: "#575757", padding: "7px 2rem", marginBottom: "10px" }}>
              <p style={{ flex: "1" }}>
                From data: <span style={{ color: "#999999" }}> {data.from}</span>
              </p>{" "}
              <p>
                To Date: <span style={{ color: "#999999" }}>{data.to}</span>
              </p>{" "}
            </div>
          </div>
          <hr />
        </>
      );
    });

  const educationElement =
    educationData &&
    educationData.map((data, i) => {
      return (
        <>
          <div className="education-head" onClick={() => toggleAccordion(i)}>
            <MdOutlineCastForEducation style={{ color: "#0e82cf", fontSize: "1.5rem" }} />
            <h4 style={{ flex: "1" }}>{data.course}</h4>
            <h2 style={{ cursor: "pointer" }}>{accordion === i ? "-" : "+"}</h2>
          </div>
          <div className={accordion === i ? "education-content-show" : "education-content"}>
            <p style={{ color: "#575757", marginLeft: "1.7rem", paddingTop: "1rem" }}>
              Year Passed Out: <span style={{ color: "#999999" }}>{data.passOut}</span> <br /> GPA Score/ %: <span style={{ color: "#999999" }}>{data.gpa}</span> <br /> College/University:{" "}
              <span style={{ color: "#999999" }}>{data.college}</span>
            </p>
            <button style={{ padding: "5px", width: "5rem", border: "1px solid red", background: "white", borderRadius: "25px 0 0 25px", marginLeft: "21rem", marginBottom: "1rem" }}>Edit</button>
            <button style={{ padding: "5px", width: "5rem", border: "1px solid blue", borderLeft: "none", background: "white", borderRadius: "0 25px 25px 0" }}>Delete</button>
          </div>
        </>
      );
    });

  return (
    <main className="professionalDetail">
      <div className="container">
        <section className="col-1">
          <div className="skill-info">
            <div className="pInfo-tag">
              <h3 style={{ color: "#0e82cf", flex: "1" }}>Skill Details</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button className="edit-info" onClick={() => navigate("/updateskill")}>
                  Add More
                </button>
                <h2 style={{ color: "#477bf4", cursor: "pointer" }}>-</h2>
              </div>
            </div>
            <div className="info-ele">{skillElement}</div>
          </div>

          <div className="language-info">
            <div className="pInfo-tag">
              <h3 style={{ color: "#0e82cf", flex: "1" }}>Language Details</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button className="edit-info" onClick={() => navigate("/updatelanguage")}>
                  Add More
                </button>
                <h2 style={{ color: "#477bf4", cursor: "pointer" }}>-</h2>
              </div>
            </div>
            <div className="info-ele">{languageElement}</div>
          </div>
        </section>

        <section className="col-2">
          <div className="education-info">
            <div className="pInfo-tag">
              <h3 style={{ color: "#0e82cf", flex: "30%" }}>Qualification Details</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button className="edit-info" onClick={() => navigate("/updatequalification")}>
                  Add More
                </button>
                <h2 style={{ color: "#477bf4", cursor: "pointer" }}>-</h2>
              </div>
            </div>
            <div className="info-ele">{educationElement}</div>
          </div>
          <div className="prevEmploy-info">
            <div className="pInfo-tag">
              <h3 style={{ color: "#0e82cf", flex: "1" }}>Previous Employment Details</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button className="edit-info" onClick={() => navigate("/updateemployment")}>
                  Add More
                </button>
                <h2 style={{ color: "#477bf4", cursor: "pointer" }}>-</h2>
              </div>
            </div>
            <div className="info-ele">{prevEmployElement}</div>
          </div>
        </section>
      </div>
    </main>
  );
};
const skillData = [
  {
    field: "Automation",
    experience: "3 years",
    competency: "Advanced",
  },
  {
    field: "Web Dev",
    experience: "1 years",
    competency: "Intermediate",
  },
  {
    field: "Backend Dev",
    experience: "0 years",
    competency: "Begineer",
  },
];
const languageData = [
  {
    language: "English",
    fluency: "Good",
    competency: "intermediate",
  },
  {
    language: "Hindi",
    fluency: "Good",
    competency: "Advanced",
  },
];
const prevEmployData = [
  {
    company: "Wipro",
    role: "Software Tester",
    from: "22-Jun-2012",
    to: "27-Nov-2018",
  },
];
const educationData = [
  {
    course: "B.C.A.",
    passOut: 2011,
    gpa: 95,
    college: "JNTUH",
  },
  {
    course: "M.C.A.",
    passOut: 2013,
    gpa: 99,
    college: "HIMT",
  },
  {
    course: "B.SC Computers",
    passOut: 2011,
    gpa: 95,
    college: "JNTUH",
  },
];

export default ProfessionalDetail;
