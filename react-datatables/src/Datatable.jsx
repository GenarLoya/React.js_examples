import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import { useEffect, useState } from "react";

function Datatable() {
  const [users, setusers] = useState([]);

  const url = "https://gorest.co.in/public/v2/users";

  async function showData() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setusers(json);
  }

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    { name: "NAME", selector: (row) => row.name, sortable: true },
    { name: "EMAIL", selector: (row) => row.email, sortable: true },
  ];

  createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div>
      {JSON.stringify(users)}
      <DataTable
        columns={columns}
        data={users}
        pagination
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default Datatable;
