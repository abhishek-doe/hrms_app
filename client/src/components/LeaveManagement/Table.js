import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./EssLeave.css";


  
  const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });


  return (
    <table {...getTableProps()} className="table">
      <thead>
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
  );
};

export default Table;

export const quotaData = [
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
export const holidayData = [
    {
        ids: 1,
        name: "New Years Day",
        from: "01-Jan-2023",
        to: "01-Jan-2023",
        days: 1,
    },
    {
        ids: 2,
        name: "Makar Sakranti",
        from: "14-Jan-2023",
        to: "14-Jan-2023",
        days: 1,
    },
    {
        ids: 3,
        name: "Republic day",
        from: "26-Jan-2023",
        to: "26-Jan-2023",
        days: 1,
    },
    {
        ids: 4,
        name: "Good Friday",
        from: "02-Apr-2023",
        to: "02-Apr-2023",
        days: 1,
    },
];
export const lHistoryData = [
    {
      id: 1,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24-dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
    {
      id: 2,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24-dec-2020",
      days: "2",
      status: "Cancelled",
      color: "#ff000098",
    },
    {
      id: 3,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24-dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
    {
      id: 4,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24-dec-2020",
      days: "2",
      status: "Cancelled",
      color: "#ff000098",
    },
    {
      id: 5,
      duration: "28-Dec-2020 To 29-Dec-2020",
      applied: "24-dec-2020",
      days: "2",
      status: "Approved",
      color: "#119a4c",
    },
  ];