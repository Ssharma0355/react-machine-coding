import React from "react";

const ReusableTable = ({ data = [] }) => {
  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No data found</p>;

  const headers = Object.keys(data[0]);

  const renderCellValue = (value) => {
    if (value === null || value === undefined) return "";

    if (typeof value === "object") {
      return JSON.stringify(value); // Convert object to string
    }
    return value;
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head}>{head.toUpperCase()}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={row.id ?? index}>
              {headers.map((head) => (
                <td key={head}>{renderCellValue(row[head])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;