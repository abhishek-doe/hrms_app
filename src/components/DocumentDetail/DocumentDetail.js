import React from "react";
import "./DocumentDetail.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const DocumentDetail = () => {
  return (
      <main className="documentDetail">
        <section className="left-side">
          <h2 style={{ fontWeight: "100" }}>Add Document</h2>
          <form className="detailFields">
            <div className="form-div">
              <label htmlFor="id">Document Type</label>
              <select id="id" required>
                <option value="">--Select--</option>
                <option value="passport">Passport</option>
                <option value="pan">Pan Card</option>
                <option value="license">Driving License</option>
                <option value="voterId">Voter ID</option>
                <option value="aadhar">Aadhar Card</option>
              </select>
            </div>
            <div className="form-div">
              <label htmlFor="number">Document No.</label>
              <input id="number" placeholder="Document No." type="text" required />
            </div>
            <div className="form-div">
              <label htmlFor="issued">Issued Date</label>
              <input id="issued" type="date" required />
            </div>
            <div className="form-div">
              <label htmlFor="expiry">Expiry Date</label>
              <input id="expiry" type="date" required />
            </div>
            <input type="file" id="file" />
            <p style={{ fontSize: ".8rem", color: "#119acc", margin: "10px 0" }}>
              Note: <span style={{ color: "#999999" }}>Allowed file formats are jpg, jped, pdf, docx and png. And the maximum file size can be 3MB</span>
            </p>
            <button className="btn-submit">Submit</button>
          </form>
        </section>
        <section className="right-side">
          <div>
            <div className="doc">
              <div className="doc-div">
                <AiOutlineFilePdf style={{ color: "#119acc", fontSize: "4rem" }} />
                <div>
                  <h2 style={{ display: "flex", flex: "1" }}>Driving License</h2>
                  <h5>TS-04-2013-00002156</h5>
                </div>
                <BsThreeDotsVertical style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              </div>
              <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignContent: "center", marginTop: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <p style={{ color: "#999999" }}>Issued Data</p>
                  <h3 style={{ color: "#666666" }}>18-Oct-2020</h3>
                </div>
                <div style={{ height: "3rem", background: "#999999", width: "2px", borderRadius: "10px", marginTop: "8px" }}></div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <p style={{ color: "#999999" }}>Expiry Data</p>
                  <h3 style={{ color: "#666666" }}>18-Oct-2025</h3>
                </div>
              </div>
              <button style={{ background: "#119acc", color: "white", padding: "7px 13px", borderRadius: "4px", border: "none", marginLeft: "62%", marginTop: "10px" }}>
                <FaDownload />
                &nbsp;&nbsp;Download
              </button>
            </div>
          </div>
        </section>
      </main>
  );
};

export default DocumentDetail;
