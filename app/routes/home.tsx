import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { callbackify } from "util";
import { resumes } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Resume Analyzer" },
    { name: "description", content: "AI Feedback for your dream job" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      

      <section className="main-section py-16">
        <div className="page-heading py-16">
          <h1>Track you Applications & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>

         {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <div key={resume.id}>
              <ResumeCard resume={resume} />
            </div>
          ))}
        </div>
      )}
      </section>
     
    </main>
  );
}
