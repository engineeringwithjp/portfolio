import React from "react";

const skills = [
  { number: "01", label: "Research & Development"       },
  { number: "02", label: "Blueprint Drafting"           },
  { number: "03", label: "Engineering Report Generation"},
  { number: "04", label: "Data Analysis"                },
  { number: "05", label: "Troubleshooting"              },
  { number: "06", label: "Consulting"                   },
  { number: "07", label: "Embedded Systems"             },
  { number: "08", label: "Facilities Management"        },
  { number: "09", label: "Prototyping"                  },
  { number: "10", label: "Basic Construction Services" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@600;700&display=swap');

  .skill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 10px;
  }

  .skill-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border: 1px solid rgba(198, 128, 227, 0.25);
    border-radius: 4px;
    background: rgba(198, 128, 227, 0.04);
    cursor: default;
    transition: all 0.22s ease;
    animation: chipFadeIn 0.5s ease both;
  }

  .skill-chip:hover {
    background: rgba(198, 128, 227, 0.12);
    border-color: rgba(198, 128, 227, 0.7);
    transform: translateY(-3px);
    box-shadow: 0 6px 24px rgba(198, 128, 227, 0.18);
  }

  .skill-chip:hover .skill-number {
    color: #c680e3;
  }

  .skill-number {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    color: rgba(198, 128, 227, 0.45);
    letter-spacing: 0.04em;
    transition: color 0.22s ease;
    line-height: 1;
    padding-top: 1px;
  }

  .skill-label {
    font-family: 'Syne', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.88);
    letter-spacing: 0.03em;
    white-space: nowrap;
  }

  @keyframes chipFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
`;

function Toolstack() {
  return (
    <>
      <style>{styles}</style>
      <div className="skill-grid">
        {skills.map(({ number, label }, i) => (
          <div
            key={number}
            className="skill-chip"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="skill-number">{number}</span>
            <span className="skill-label">{label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Toolstack;