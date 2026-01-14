import React from "react";
import { CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import teamData from "../../assets/team/teamData";
import "./About.css";

const About = () => {
  return (
    <main className="page-wrapper">

      {/* ABOUT SECTION */}
      

      {/* MISSION SECTION */}
      <section className="container section py-4">
        <h3 className="section-title mb-2">Our Mission</h3>
        <p className="text-muted">
          
Our mission is to bridge the gap between citizens and governance by providing a transparent, reliable, and easy-to-use digital platform for reporting local and village-level issues. Many genuine problems faced by citizens go unnoticed or unresolved due to lack of proper communication channels and accountability. Through this project, we aim to ensure that issues raised by citizens are documented clearly, verified properly, and delivered to the appropriate authorities in a structured manner. This helps reduce delays, avoids miscommunication, and ensures that responsibility is clearly defined at every stage of the process.

By enabling end-to-end issue tracking, our mission is to improve transparency and build trust between citizens and representatives. Citizens can see the progress of their complaints, while authorities can focus on verified and prioritized issues. Ultimately, the project aims to promote responsive governance, encourage civic participation, and contribute to safer, better-managed communities through the effective use of technology.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="container section py-5">
        <h3 className="section-title text-center mb-4">Our Team</h3>

        <div className="row justify-content-center">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
            >
              <div className="card team-card h-100 text-center p-3">
                <div className="avatar-wrapper mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="avatar-img"
                  />
                </div>
                <h6 className="fw-bold">{member.name}</h6>
                <p className="text-muted small">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;
