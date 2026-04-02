import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import AutodeskInventor from "../../Assets/TechIcons/autodesk-inventor-icon-48.svg";
import Diptrace from "../../Assets/TechIcons/diptrace-logo.png";
import Howie from "../../Assets/TechIcons/howie_icon.avif";
import HTML from "../../Assets/TechIcons/html_logo.png";
import AdobeCreative from "../../Assets/TechIcons/icons8-adobe-creative-cloud.svg";
import Bash from "../../Assets/TechIcons/icons8-bash.svg";
import CSS from "../../Assets/TechIcons/icons8-css-48.png";
import DaVinci from "../../Assets/TechIcons/icons8-davinci-resolve-48.svg";
import Excel from "../../Assets/TechIcons/icons8-excel-48.png";
import Figma from "../../Assets/TechIcons/icons8-figma-48.svg";
import MSOffice from "../../Assets/TechIcons/icons8-ms-office-48.png";
import Slack from "../../Assets/TechIcons/icons8-slack-48.svg";
import Solidworks from "../../Assets/TechIcons/icons8-solidworks-48.svg";
import Trello from "../../Assets/TechIcons/icons8-trello-24.png";
import MSProject from "../../Assets/TechIcons/msproject.png";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import QGIS from "../../Assets/TechIcons/qgis_icon.png";



const iconStyle = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
};

const tools = [
  { src: AutodeskInventor, alt: "autodesk-inventor",    label: "Autodesk Inventor"  },
  { src: QGIS,             alt: "qgis",                 label: "QGIS"               },
  { src: Solidworks,       alt: "solidworks",           label: "SolidWorks"         },
  { src: Diptrace,         alt: "diptrace",             label: "DipTrace"           },
  { src: Howie,            alt: "howie",                label: "AI"                 },
  { src: HTML,             alt: "html",                 label: "HTML"               },
  { src: CSS,              alt: "css",                  label: "CSS"                },
  { src: Javascript,       alt: "javascript",           label: "JavaScript"         },
  { src: Node,             alt: "node",                 label: "Node.js"            },
  { src: Python,           alt: "python",               label: "Python"             },
  { src: Bash,             alt: "bash",                 label: "Bash"               },
  { src: Git,              alt: "git",                  label: "Git"                },
  { src: Docker,           alt: "docker",               label: "Docker"             },
  { src: SQL,              alt: "sql",                  label: "MySQL"              },
  { src: Figma,            alt: "figma",                label: "Figma"              },
  { src: AdobeCreative,    alt: "adobe-creative-cloud", label: "Adobe CC"           },
  { src: DaVinci,          alt: "davinci-resolve",      label: "DaVinci Resolve"    },
  { src: Excel,            alt: "excel",                label: "Excel"              },
  { src: MSOffice,         alt: "ms-office",            label: "MS Office"          },
  { src: MSProject,        alt: "ms-project",           label: "MS Project"         },
  { src: Slack,            alt: "slack",                label: "Slack"              },
  { src: Trello,           alt: "trello",               label: "Trello"             },
  { src: vsCode,           alt: "vscode",               label: "VS Code"            },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ src, alt, label }) => (
        <Col key={alt} xs={4} md={2} className="tech-icons">
          <img src={src} alt={alt} style={iconStyle} />
          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;