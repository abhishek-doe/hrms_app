import React, { useState, useMemo } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { quotaData, holidayData, lHistoryData } from "./Table";
import "./EssLeave.css";
import Table from "./Table";

const EssLeave = () => {
  const [earnedL, setEarnedL] = useState("Earned Leave");
  const [quotaState, setQuotaState] = useState(1);

  const columns1 = useMemo(
    () => [
      {
        Header: "Leave Type",
        accessor: "type",
      },
      {
        Header: "Total Leaves",
        accessor: "total",
      },
      {
        Header: "Used Leaves",
        accessor: "used",
      },
      {
        Header: "Actual Balance",
        accessor: "actual",
      },
      {
        Header: "On Hold Balance",
        accessor: "onHold",
      },
      {
        Header: "Carry Forward",
        accessor: "carryForward",
      },
    ],
    []
  );
  
  const columns2 = useMemo(
    () => [
      {
        Header: "Holiday Name",
        accessor: "name",
      },
      {
        Header: "From Date",
        accessor: "from",
      },
      {
        Header: "To Date",
        accessor: "to",
      },
      {
        Header: "No. of Days",
        accessor: "days",
      }
    ],
    []
  );

  const lHistoryElement =
    lHistoryData &&
    lHistoryData.map((data) => {
      return (
        <div key={data.id} className="leavesCard">
          <div style={{ flex: "1", lineHeight: "30px" }}>
            <p style={{ fontWeight: "bold", color: "#666666" }}>
              Duration: <span style={{ fontWeight: "400", color: "#999999" }}>{data.duration}</span>
            </p>
            <p style={{ fontWeight: "bold", color: "#666666" }}>
              Applied On: <span style={{ fontWeight: "400", color: "#999999" }}>{data.applied}</span>
            </p>
            <p style={{ color: `${data.color}`, fontWeight: "bold" }}>{data.status}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ color: "#666666", display: "flex", alignItems: "center", fontSize: ".9rem" }}>
              {earnedL}
                <div className="dotsmenu-div">
                <BiDotsVertical style={{ fontSize: "1.3rem" }} />
                  <div className="dotsmenu">
                    <p>Edit</p>
                    <hr />
                    <p>Delete</p>
                  </div>
                  </div>
            </p>
            <p style={{ color: "#666666", fontSize: ".9rem" }}>{data.days} Day(s)</p>
          </div>
        </div>
      );
    });

  return (
    <main className="essLeave">
      <div className="container">
        <section className="left-side">
          <div className="lHistory-tag">
            <h3 style={{ color: "#2670c5", flex: "1" }}>Leave History</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <select className="earned-leave" onChange={(e) => setEarnedL(e.target.value)}>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Not Earned">Non-earned leave</option>
              </select>
              <select className="sort-leave">
                <option value="All">All</option>
                <option value="Dates">Date</option>
                <option value="Year">Year</option>
              </select>
            </div>
          </div>
          <div className="historyElement">{lHistoryElement}</div>
        </section>
        <div className="right-side">
          <div className="quota">
            <li className={quotaState === 1 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(1)}>
              Leave Quota
            </li>
            <li className={quotaState === 2 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(2)}>
              Holiday List
            </li>
            <li className={quotaState === 3 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(3)}>
              Optional Holidays
            </li>
          </div>
          <div className="table-div">
            {quotaState === 1 && (
              <>
                <div className="calender-div">
                  <label htmlFor="calender">Leave Calander</label>
                  <select id="calender" className="calender-select">
                    <option>
                      Leave Calander(01, Jan, 2022)
                      </option>
                    <option>Leave Calander(01, Jan, 2022)</option>
                    <option>Leave Calander(01, Jan, 2022)</option>
                  </select>
                </div>
                <p style={{ fontSize: ".9rem", padding: "7px" }}>Can Carry Forward to Next Year</p>
                <Table columns={columns1} data={quotaData} />
              </>
            )}
            {quotaState === 2 && (
              <>
                <div className="calender-div">
                  <label htmlFor="calender">Holiday Calander</label>
                  <select id="calender" className="calender-select">
                    <option>India General :: Holidays</option>
                    <option>India General :: Holidays</option>
                    <option>India General :: Holidays</option>
                  </select>
                </div>
                <Table columns={columns2} data={holidayData} />
              </>
            )}
            {quotaState === 3 && (
              <>
                <div className="calender-div">
                  <label htmlFor="calender">Calander Year</label>
                  <select id="calender" className="calender-select">
                    <option>India Holidays List 2023</option>
                    <option>India Holidays List 2024</option>
                    <option>India Holidays List 2025</option>
                  </select>
                </div>
                <Table columns={columns2} data={holidayData} />
                <p style={{ color: "#999999", fontSize: ".8rem", lineHeight: "1.7rem", marginTop: "1rem" }}>
                  You cannot opt optional holidays at this moment. Please contact your HR.
                  <br /> <span style={{ color: "#666666", fontWeight: "bold" }}>Note:</span>This is one time selection. Once opted you can not change
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EssLeave;
