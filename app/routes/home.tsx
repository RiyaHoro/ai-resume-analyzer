import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Resume Analyzer" },
    { name: "description", content: "AI Feedback for your dream job" },
  ];
}

export default function Home() {
  return ( <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
          <div className="page-heading">
              <h1>Track you Applications & Resume Rating</h1>
              <h2>Review your submissions and 
                check AI-powered feedback</h2>
          </div>

      </section>
      
  </main>
  )
}
