import React, { useState } from "react";
import "./PersonalDetailPage.css";
import { MdEmail } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import UpdateEmerC from "./UpdateEmerC"
import AddAddressD from "./AddAddressD"
import AddDependent from "./AddDependent"
import UpdatePersonalDetails from "./UpdatePersonalDetails"
import { personalData, dependentData } from "../../constants"

const PersonalDetailPage = () => {
  const navigate = useNavigate();
  const [emermodal, setEmermodal] = useState(false)
  const [pinfomodal, setPinfomodal] = useState(false)
  const [addressmodal, setAddressmodal] = useState(false)
  const [dependentmodal, setDependentmodal] = useState(false)

  if (emermodal || pinfomodal || addressmodal || dependentmodal) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }

  const personalInfoElement =
    personalData &&
    personalData.map((data) => {
      return (
        <div style={{ background: data.background, display: "flex", flexGrow: "1", height: "1.5rem", padding: "10px 2rem" }} key={data.id}>
          <p style={{ flex: "20%", fontSize: "0.9rem" }}>{data.name}&nbsp;:</p>
          <p style={{ fontSize: "0.9rem" }}>{data.value}</p>
        </div>
      );
    });

  const dependentElement =
    dependentData &&
    dependentData.map((data) => {
      return (
        <div key={data.id} style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem", borderBottom: "1px solid #8f8f8f" }}>
          <BsPersonCircle style={{ fontSize: "3rem", color: "#5c5c5c" }} />
          <div style={{ flex: "50%" }}>
            <p style={{ fontSize: "0.9rem", marginBottom: "1rem", color: "#929292" }}>
              {data?.name} <br /> {data?.gender} <br /> {data?.relation} <br /> D.O.B: {data?.dob}
            </p>
          </div>
          <div className="dotsmenu-div">
            <HiOutlineDotsVertical />
            <div className="dotsmenu">
              <p>Edit</p>
              <hr />
              <p>Delete</p>
            </div>
          </div>
        </div>
      );
    });

  const handleEditPD = () => {
    navigate("/updatepersonaldetails");
  };

  return (
    <main className="personalDetail">
      <div className="container">
        <section className="col-1">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="employee"
              style={{
                height: "6rem", color: "white", borderRadius: "50%", marginTop: "-2rem"
              }}
            />
            <div style={{ textAlign: "center", color: "#737373" }}>
              <h3>George Calan</h3>
              <h5>Administrative Assistant-EUAE24</h5>
            </div>
            <h4 style={{ color: "#f2b205", wordWrap: "break-word", display: "flex", alignItems: "center", gap: "10px" }}>
              <MdEmail style={{ fontSize: "1.5rem" }} />
              george123@outlook.com
            </h4>
          </div>

          <div className="emergency">
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", marginTop: "5px", marginBottom: "9px" }}>
              <p style={{ fontSize: "0.9em", color: "#cf796b" }}>Emergency Contact</p>
              <button className="edit-emer" onClick={() => setEmermodal(!emermodal)}>
                <GrEdit className="edit-btn" />
                &nbsp;&nbsp;Edit
              </button>
            </div>
            <hr />
            <br />
            <p style={{ color: "#878787" }}>
              Name: Charlie <br /> Relationship: father <br />
              Cell: 8291938392{" "}
            </p>
          </div>
        </section>

        <section className="col-2">
          <div className="personal-info">
            <div className="pInfo-tag">
              <h4 style={{ color: "#0e82cf" }}>Personal Information</h4>
              <button className="edit-info" onClick={() => setPinfomodal(!pinfomodal)}>
                <GrEdit className="edit-btn" />
                &nbsp;&nbsp;Edit
              </button>
            </div>
            <div className="info-ele">{personalInfoElement}</div>
          </div>


          <div className="addressD">
            <div className="address-tag">
              <h4 style={{ color: "#0e82cf" }}>Address Details</h4>
              <button className="edit-info" onClick={() => setAddressmodal(!addressmodal)}>
                Add More
              </button>
            </div>
            <div className="address-info">
              <div style={{ background: "#eeeeee", margin: "1rem 0.6rem", padding: "0.6rem 1.2rem" }}>
                <div style={{ display: "flex", gap: "15.1rem", marginBottom: "6px" }}>
                  <h4>Temporary Address</h4>
                  <div className="dotsmenu-div">
                    <HiOutlineDotsVertical style={{ marginTop: "2px", fontSize: "1.3rem", cursor: "pointer" }} />
                    <div className="dotsmenu">
                      <p>Edit</p>
                      <hr />
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
                <hr />
                <br />
                <div>
                  <p style={{ fontSize: "0.9rem" }}>
                    Sherwood, street, door-12,
                    <br />
                    Sherwood,
                    <br />
                    United States, U.S.A.,
                    <br />
                    Pin/Zip Code: .<br />
                    Tel: 9776655129
                    <br />
                    Mobile No: 9776655129
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>

        </section>

        <section className="col-3">
          <div className="dependent-tag">
            <h4 style={{ color: "#0e82cf" }}>Dependent Details</h4>
            <button className="edit-info" onClick={() => setDependentmodal(!dependentmodal)}>
              <GrEdit className="edit-btn" />
              &nbsp;&nbsp;Edit
            </button>
          </div>

          <div className="dependent-div">{dependentElement}</div>
        </section>
      </div>
      {
        emermodal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <UpdateEmerC setModal={setEmermodal} />
            </div>
          </div>
        )
      }
      {
        addressmodal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <AddAddressD setModal={setAddressmodal} />
            </div>
          </div>
        )
      }
      {
        dependentmodal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <AddDependent setModal={setDependentmodal} />
            </div>
          </div>
        )
      }
      {
        pinfomodal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <UpdatePersonalDetails setModal={setPinfomodal} />
            </div>
          </div>
        )
      }
    </main>
  );
};

export default PersonalDetailPage;