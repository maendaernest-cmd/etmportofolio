import React from "react";
import ResumeProjects from "../components/resume/ResumeProjects";
import ResumeExperienceCertificates from "../components/resume/ResumeExperienceCertificates";

export default function ResumePage() {
  const projects = [
    { title: "Mavu | Zimbabwe Civic Accountability Platform" },
    { title: "Roomee | Zimbabwe's Household Operating System" },
    { title: "Fakushen | Multi-Agent AI Ecosystem" },
  ];

  const experienceAndCerts = [
    { title: "Junior Instructor | uncommon.org (Harare)" },
    { title: "Software Engineering Intern | Sehi Group" },
    { title: "Software Engineering Technology Bootcamp | uncommon.org (Harare)" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Resume</h1>

        <ResumeProjects projects={projects} enableMotion={true} />

        <ResumeExperienceCertificates entries={experienceAndCerts} enableMotion={true} />
      </div>
    </main>
  );
}
