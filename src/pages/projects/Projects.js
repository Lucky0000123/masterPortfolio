import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg";
import "./Projects.css";

// Import images statically
import wencoFleetManagement from "../../assets/images/wenco-fleet-management.jpg";
import visioRockIntegration from "../../assets/images/visio-rock-integration.jpg";
import centralControlRoom from "../../assets/images/central-control-room.jpg";
import plcAutomationSiemens from "../../assets/images/plc-automation-siemens.jpg";
import ranjantMeshNetwork from "../../assets/images/ranjant-mesh-network.jpg";

const imageMap = {
  "wenco-fleet-management": wencoFleetManagement,
  "visio-rock-integration": visioRockIntegration,
  "central-control-room": centralControlRoom,
  "plc-automation-siemens": plcAutomationSiemens,
  "ranjant-mesh-network": ranjantMeshNetwork,
};

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {publications.data.map((publication) => (
            <div className="publication-card" key={publication.id}>
              <img
                src={imageMap[publication.id]}
                alt={publication.name}
                className="publication-image"
              />
              <div className="publication-content">
                <h2 className="publication-title">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.name}
                  </a>
                </h2>
                <p className="publication-description">
                  {publication.description}
                </p>
                <p className="publication-date">
                  Completed on:{" "}
                  {new Date(publication.createdAt).toLocaleDateString()}
                </p>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
