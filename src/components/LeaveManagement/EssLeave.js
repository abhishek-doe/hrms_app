import React, { useState, useMemo } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { useTable } from "react-table";
import "./EssLeave.css";

const EssLeave = () => {
  const [earnedL, setEarnedL] = useState("Earned Leave");
  const [quotaState, setQuotaState] = useState(1);
  console.log(quotaState);

  const quotaData = [
    {
      id: 1,
      type: "Earned Leave",
      total: 16.91,
      used: 0,
      actual: 16.91,
      onHold: 0,
      available: 4.5,
      carryForward: 0,
    },
    {
      id: 2,
      type: "Finished Leave",
      total: 26.91,
      used: 4,
      actual: 26.91,
      onHold: 2,
      available: 4.5,
      carryForward: 0,
    },
    {
      id: 3,
      type: "Not Earned",
      total: 4.9,
      used: 2,
      actual: 12.91,
      onHold: 1,
      available: 4.5,
      carryForward: 0,
    },
  ];
  const holidayData = [
    {
      name: "New Years Day",
      from: "01-Jan-2023",
      to: "01-Jan-2023",
      days: 1,
    },
    {
      name: "Makar Sakranti",
      from: "14-Jan-2023",
      to: "14-Jan-2023",
      days: 1,
    },
    {
      name: "Republic day",
      from: "26-Jan-2023",
      to: "26-Jan-2023",
      days: 1,
    },
    {
      name: "Good Friday",
      from: "02-Apr-2023",
      to: "02-Apr-2023",
      days: 1,
    },
    {
      name: "Ugadi",
      from: "13-Apr-2023",
      to: "13-Apr-2023",
      days: 1,
    },
    {
      name: "Shree Ram Navmi",
      from: "21-Apr-2023",
      to: "21-Apr-2023",
      days: 1,
    },
  ];

  const columns = useMemo(
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
  const holidayColumn = useMemo(
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
      },
    ],
    []
  );
  const data = useMemo(() => quotaData, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, holidayColumn, data });

  const lHistoryData = [
    {
      id: 1,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24_dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
    {
      id: 2,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24_dec-2020",
      days: "2",
      status: "Cancelled",
      color: "#ff9696",
    },
    {
      id: 3,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24_dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
    {
      id: 4,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24_dec-2020",
      days: "2",
      status: "Cancelled",
      color: "#ff9696",
    },
    {
      id: 5,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24_dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
  ];

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
            <p style={{ color: `${data.color}` }}>{data.status}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ color: "#666666", display: "flex", alignItems: "center", fontSize: ".9rem" }}>
              {earnedL}
              <span>
                <BiDotsVertical style={{ fontSize: "1.3rem" }} />
              </span>
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
            <h3 style={{ color: "#5db2ff", flex: "1" }}>Leave History</h3>
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
            <li className={quotaState===1 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(1)}>Leave Quota</li>
            <li className={quotaState===2 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(2)}>Holiday List</li>
            <li className={quotaState===3 ? "quota-active" : "quota-li"} onClick={() => setQuotaState(3)}>Optional Holidays</li>
          </div>
          <div className="table-div">
            {quotaState === 1 && (
              <>
                <div className="calender-div">
                  <label htmlFor="calender">Leave Calander</label>
                  <select id="calender" className="calender-select">
                    <option>Leave Calander(01, Jan, 2022)</option>
                    <option>Leave Calander(01, Jan, 2022)</option>
                    <option>Leave Calander(01, Jan, 2022)</option>
                  </select>
                </div>
                <p style={{ fontSize: ".9rem", padding: "7px" }}>Can Carry Forward to Next Year</p>
                <table {...getTableProps()} className="table">
                  <thead className="thead">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()} className="th">
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                            <td {...cell.getCellProps()} className="td">
                              {" "}
                              {cell.render("Cell")}{" "}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
                <table {...getTableProps()} className="table">
                  <thead className="thead">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()} className="th">
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                            <td {...cell.getCellProps()} className="td">
                              {cell.render("Cell")}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
                <table {...getTableProps()} className="table">
                  <thead className="thead">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()} className="th">
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                            <td {...cell.getCellProps()} className="td">
                              {cell.render("Cell")}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p style={{color: "#999999", fontSize: ".8rem", lineHeight: "1.7rem", marginTop: "1rem"}}>You cannot opt optional holidays at this moment. Please contact your HR.<br /> <span style={{color: "#666666", fontWeight: "bold"}}>Note:</span>This is one time selection. Once opted you can not change</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EssLeave;
