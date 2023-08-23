import React, { useState } from "react";
import "./JobDetail.css";
import { BsFillBuildingFill } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import {branchData, positionData, ctcData, bankData} from "../../constants"

const JobDetail = () => {
  const [jobClicked, setJobClicked] = useState(true);
  const [positionClicked, setPositionClicked] = useState(false);
  const [positionDrop, setPositionDrop] = useState(null);
  const [bankDrop, setBankDrop] = useState(null);

  const handlePositionDrop = (i) => {
    if (positionDrop === i) {
      return setPositionDrop(null);
    }
    setPositionDrop(i);
  };
  const handleBankDrop = (i) => {
    if (bankDrop === i) {
      return setBankDrop(null);
    }
    setBankDrop(i);
  };

  const branchElement =
    "No Data" &&
    branchData.map((data) => {
      return (
        <div key={data.id}>
          <div style={{ display: "flex", height: "3rem", padding: "0 1.7rem" }}>
            <p style={{ color: "#0E93B1", flex: "1", display: "flex", alignItems: "center" }}>{data.name}</p>

            <p style={{ color: "eee", flex: "1", display: "flex", justifyItems: "center", alignItems: "center", color: "#404040" }}>{data.value}</p>
          </div>
          <hr />
        </div>
      );
    });

  const positionElement =
    "No data" &&
    positionData.map((data, i) => {
      return (
        <div key={data.id}>
          <div style={{ display: "flex", height: "3rem", alignItems: "center", padding: "0 1rem", borderBottom: "1px solid #e5e5e5", cursor: "pointer" }} onClick={() => handlePositionDrop(i)}>
            <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "1rem" }}>
              <AiFillEye style={{ color: "white", background: "#11a9cc", padding: "5px 9px", borderRadius: "4px", fontSize: "1.5rem" }} />
              <h4>{data.role}</h4>
            </div>
            <h2>{positionDrop === i ? "-" : "+"}</h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", fontSize: "14px", padding: " 0 1rem" }}
            className={positionDrop === i ? "positionDrop-show" : "positionDrop"}
          >
            <p style={{ marginTop: "10px" }}>Department Code</p>
            <p style={{ marginTop: "10px" }}>: {data.depCode}</p>
            <p>Department Name</p>
            <p>: {data.depName}</p>
            <p>Head of the Department</p>
            <p>: {data.depHead}</p>
            <p>Reporting to</p>
            <p>: {data.reportTo}</p>
            <p style={{ marginBottom: "10px" }}>From/Till date</p>
            <p style={{ marginBottom: "10px" }}>: {data.date}</p>
          </div>
        </div>
      );
    });

  const ctcElement =
    "no data" &&
    ctcData.map((data) => {
      return (
        <div style={{ display: "grid", display: "flex", gridTemplateColumns: "repeat(2, 1fr)", padding: "1rem 1.5rem", borderBottom: "1px solid #e5e5e5" }} key={data.id}>
          <p style={{ color: "#119acc", flex: "1" }}>{data.name}</p>
          <p style={{ color: "#999999" }}>{data.value}</p>
        </div>
      );
    });

  const bankElement =
    "no data" &&
    bankData.map((data, i) => {
      return (
        <div key={data.id}>
          <div style={{ display: "flex", height: "3rem", alignItems: "center", padding: "0 1rem", borderBottom: "1px solid #e5e5e5", cursor: "pointer" }} onClick={() => handleBankDrop(i)}>
            <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "1rem" }}>
              <AiFillEye style={{ color: "white", background: "#11a9cc", padding: "5px 9px", borderRadius: "4px", fontSize: "1.5rem" }} />
              <h4>{data.head}</h4>
            </div>
            <h2>{bankDrop === i ? "-" : "+"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", fontSize: "14px", padding: " 0 1rem" }} className={bankDrop === i ? "positionDrop-show" : "positionDrop"}>
            <p style={{ marginTop: "10px" }}>Account Name</p>
            <p style={{ marginTop: "10px" }}>: {data.name}</p>
            <p>Account No.</p>
            <p>: {data.number}</p>
            <p>Branch Name</p>
            <p>: {data.Branch}</p>
            <p>Payment Mode</p>
            <p>: {data.mode}</p>
            <p style={{ marginBottom: "10px" }}>Bank Type</p>
            <p style={{ marginBottom: "10px" }}>: {data.type}</p>
          </div>
        </div>
      );
    });
  return (
    <main className="jobDetail">
      <div className="container">
        <section className="col-1">
          <div className="job-tag">
            <div
              className={jobClicked ? "clicked" : "notClicked"}
              onClick={() => {
                setJobClicked(true);
                setPositionClicked(false);
              }}
            >
              Job Details
            </div>
            <div
              className={positionClicked ? "clicked" : "notClicked"}
              onClick={() => {
                setPositionClicked(true);
                setJobClicked(false);
              }}
            >
              Position Details
            </div>
          </div>
          {jobClicked ? (
            <div className="detail-container">
              <div className="detail-head">
                <BsFillBuildingFill style={{ color: "white", background: "#11a9cc", padding: "10px 2px", fontSize: "3.5rem" }} />
                <h2 style={{ color: "#11a9cc", fontSize: "2rem", fontWeight: "100" }}>G.T.M. India</h2>
              </div>
              <hr />
              <div className="detail-body">{branchElement}</div>
            </div>
          ) : (
            <div className="position-container">
              <div className="position-head">
                <TbHierarchy3 style={{ color: "#11a9cc", fontSize: "5rem" }} />
              </div>
              <hr />
              <div className="position-detail">{positionElement}</div>
            </div>
          )}
        </section>

        <section className="col-2">
          <div style={{ background: "#119acc", display: "flex", flexDirection: "column", width: "26rem", borderRadius: "10px 10px 0 0" }}>
            <div style={{ display: "flex", padding: "0.9rem 2rem" }}>
              <h2 style={{ color: "white", flex: "1" }}>CTC</h2>
              <button style={{ color: "white", backgroundColor: "#119acc", border: "1px solid white", borderRadius: "30px", padding: "10px 20px" }}>History</button>
            </div>
            <FaRegMoneyBillAlt style={{ color: "white", fontSize: "6rem", display: "flex", justifySelf: "center", alignSelf: "center" }} />
          </div>
          <div className="ctc-body">{ctcElement}</div>
        </section>

        <section className="col-3">
          <div style={{ background: "#fd9104", display: "flex", flexDirection: "column", width: "26rem", borderRadius: "10px 10px 0 0" }}>
            <div style={{ display: "flex", padding: "1.1rem 2rem" }}>
              <h2 style={{ color: "white", flex: "1" }}>Bank Details</h2>
            </div>
            <CiBank style={{ color: "white", fontSize: "6rem", display: "flex", justifySelf: "center", alignSelf: "center" }} />
          </div>
          <div className="bank-body">{bankElement}</div>
        </section>
      </div>
    </main>
  );
};

export default JobDetail;
