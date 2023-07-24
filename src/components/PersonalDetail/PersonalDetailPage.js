import React from "react";
import "./PersonalDetailPage.css";
import { MdEmail } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PersonalDetailPage = () => {
  const navigate = useNavigate();

  const personalData = [
    {
      id: 1,
      name: "FirstName",
      value: "George",
      background: "#f9f9f9",
    },
    {
      id: 2,
      name: "Middle Name",
      value: "",
      background: "white",
    },
    {
      id: 3,
      name: "LastName",
      value: "Chalan",
      background: "#f9f9f9",
    },
    {
      id: 4,
      name: "Gender",
      value: "Male",
      background: "white",
    },
    {
      id: 5,
      name: "D.O.B.",
      value: "31-May-1988",
      background: "#f9f9f9",
    },
    {
      id: 6,
      name: "Mobile Number",
      value: "9836453627",
      background: "white",
    },
    {
      id: 7,
      name: "Marital Status",
      value: "unmarried",
      background: "#f9f9f9",
    },
    {
      id: 8,
      name: "D.O.B.",
      value: "31-May-1988",
      background: "white",
    },
    {
      id: 9,
      name: "D.O.B.",
      value: "31-May-1988",
      background: "#f9f9f9",
    },
    {
      id: 10,
      name: "Gender",
      value: "Male",
      background: "white",
    },
  ];

  const dependentData = [
    {
      id: 1,
      name: "Charlie",
      gender: "Male",
      relation: "Father",
      dob: "29-Nov-1967",
    },
    {
      id: 2,
      name: "Stacy",
      gender: "Female",
      relation: "Mother",
      dob: "19-Jan-1965",
    },
    {
      id: 3,
      name: "Steven",
      gender: "Male",
      relation: "Brother",
      dob: "15-Feb-1991",
    },
    {
      id: 4,
      name: "Charlie",
      gender: "Male",
      relation: "Father",
      dob: "29-Nov-1967",
    },
  ];

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
              style={{ height: "6rem", color: "white", borderRadius: "50%", marginTop: "-2rem" }}
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
              <button className="edit-emer" onClick={() => navigate("/updateemergencycontact")}>
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
              <button className="edit-info" onClick={handleEditPD}>
                <GrEdit className="edit-btn" />
                &nbsp;&nbsp;Edit
              </button>
            </div>
            <div className="info-ele">{personalInfoElement}</div>
          </div>

          <div className="addressD">
            <div className="address-tag">
              <h4 style={{ color: "#0e82cf" }}>Address Details</h4>
              <button className="edit-info" onClick={() => navigate("/addAddressdetails")}>
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
            <button className="edit-info" onClick={() => navigate("/addDependent")}>
              <GrEdit className="edit-btn" />
              &nbsp;&nbsp;Edit
            </button>
          </div>

          <div className="dependent-div">{dependentElement}</div>
        </section>
      </div>
    </main>
  );
};

export default PersonalDetailPage;
