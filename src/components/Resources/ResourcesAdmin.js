import React from "react";
import ResourcesGrid from "./ResourcesGrid";
import UploadResource from "./UploadResource";
import AuthService from "../../services/AuthService";

class ResourcesAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getData = () => {
    fetch(`${process.env.REACT_APP_API_ROOT}/resources`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
      });
  };

  deleteResource = (id) => {
    try {
      fetch(`${process.env.REACT_APP_API_ROOT}/resources/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthService.getToken(),
        },
      }).then((res) => {
        this.setState((prevState) => ({
          data: prevState.data.filter((el) => el.id !== id),
        }));
      });
    } catch (err) {}
  };

  addResource = (formData) => {
    try {
      fetch(`${process.env.REACT_APP_API_ROOT}/resources/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: AuthService.getToken(),
        },
      }).then((res) => {
        res.json().then((json) => {
          this.setState({ data: [...this.state.data, json] });
        });
      });
    } catch (err) {}
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <div>
          All resources on this list can be accessed via:
          https://api.dbarone.com/resources/name/[filename]
        </div>
        <ResourcesGrid
          data={this.state.data}
          onDeleteResource={this.deleteResource}
        />
        <UploadResource onAddResource={this.addResource} />
      </>
    );
  }
}

export default ResourcesAdmin;
