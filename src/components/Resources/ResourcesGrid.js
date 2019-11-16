import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ResourcesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  downloadFile = id => {
    window.location.href = `${process.env.REACT_APP_API_ROOT}/resources/${id}`;
  };

  getColumns(data) {
    return data ? Object.keys(data[0]) : [];
  }

  render() {
    const { data, onDeleteResource } = this.props;

    return data ? (
      <>
        <table style={{ borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ background: "#252525" }}>
              {this.getColumns(data).map(c => (
                <th key={c} style={{ padding: "1em 0.5em" }}>
                  {c}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                {Object.keys(row).map(field => (
                  <td key={field} style={{ padding: "0.25em 0.5em" }}>
                    {row[field]}
                  </td>
                ))}
                <td>
                  <button
                    style={{ margin: "0px 2px" }}
                    title="delete"
                    href="."
                    onClick={() => onDeleteResource(row.id)}
                  >
                    <FontAwesomeIcon
                      style={{ fontSize: 20 }}
                      icon="trash-alt"
                    />
                  </button>

                  <button
                    style={{ margin: "0px 2px" }}
                    title="download"
                    href="."
                    onClick={() => this.downloadFile(row.id)}
                  >
                    <FontAwesomeIcon style={{ fontSize: 20 }} icon="download" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <></>
    );
  }
}

export default ResourcesGrid;
