import { useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/candidates-hero.png.webp";
import howToApply from "../assets/images/HowToApply.png.webp";
 
export default function Candidates() {
  const [showRoles, setShowRoles] = useState(false);
  
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[500px] sm:h-[650px] flex items-center pt-20 sm:pt-0">
        <div className="absolute inset-0">
          <img src={hero} alt="Candidates" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-64" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl pt-16 pb-16 md:pt-0">
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black text-white drop-shadow-2xl uppercase leading-[0.85] tracking-tighter">
              SPECIALIST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">CAREERS</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              We connect technical industrial professionals to elite mining and engineering roles through a high-precision, strategic matching process.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button as={NavLink} to="/jobs" variant="primary" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Explore Portal</Button>
              <Button as={NavLink} to="/apply" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Submit Your CV</Button>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-24 -mt-24 sm:-mt-40 relative z-10">
        <Container>
          <div className="bg-white rounded-[3rem] border-4 border-funeka-divider shadow-2xl p-10 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-funeka-brand/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-700"></div>
            
            <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
              <div className="h-1.5 w-12 bg-funeka-action rounded-full mx-auto mb-8"></div>
              <h2 className="text-4xl sm:text-6xl font-black text-funeka-anchor uppercase tracking-tighter mb-6">Candidate Roadmap</h2>
              <p className="text-funeka-text/60 text-xl font-medium">Strategic steps to connect with global industrial leaders.</p>
            </div>
 
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center relative z-10">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Strategic Discovery",
                    text: "Browse our specialized job listings focusing on mining, technical, and industrial roles in South Africa."
                  },
                  {
                    step: "02",
                    title: "Precision Matching",
                    text: "We prioritize candidate-to-role alignment. Our team analyzes every CV for technical competence and cultural fit."
                  },
                  {
                    step: "03",
                    title: "Secure Application",
                    text: "Apply via our secure, POPIA-compliant portal. Your data is handled with the highest level of professional confidentiality."
                  },
                  {
                    step: "04",
                    title: "Feedback Loop",
                    text: "Receive regular updates and professional insights through our structured interview and onboarding cycles."
                  }
                ].map((s, i) => (
                  <div key={i} className="flex gap-10 group/step">
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-[1.5rem] bg-funeka-anchor text-funeka-brand flex items-center justify-center text-2xl font-black shadow-xl group-hover/step:bg-funeka-action group-hover/step:text-white transition-all duration-500">
                        {s.step}
                      </div>
                      {i < 3 && <div className="w-1.5 flex-1 bg-funeka-divider my-3 rounded-full"></div>}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-3xl font-black text-funeka-anchor mb-4 uppercase tracking-tight group-hover/step:text-funeka-action transition-colors">{s.title}</h3>
                      <p className="text-funeka-text/60 leading-relaxed font-medium text-lg">{s.text}</p>
                    </div>
                  </div>
                ))}
 
                <div className="pt-12 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
                  <Button as={NavLink} to="/jobs" variant="primary" className="w-full sm:w-auto px-12 py-5 shadow-2xl shadow-funeka-anchor/20">Find Roles</Button>
                  <Button as={NavLink} to="/apply" variant="ghost" className="w-full sm:w-auto px-12 py-5">Register CV</Button>
                </div>
              </div>
 
              <div className="relative">
                <div className="absolute -inset-10 bg-funeka-brand/5 rounded-full blur-[100px]" />
                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img src={howToApply} alt="How to apply" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-32 bg-funeka-bg border-t border-funeka-divider">
        <Container>
          <SectionHeading
            title="Professional Protocol"
            subtitle="Expertise, transparency, and deep respect for your technical career."
          />
          <div className="grid gap-10 lg:grid-cols-3 mt-20">
            {[
              {
                title: "POPIA Compliance",
                text:
                  "Your personal information is encrypted and used strictly for strategic recruitment purposes only.",
              },
              {
                title: "Candidate Advocacy",
                text:
                  "We act as your professional bridge to employers, ensuring your skills are presented with authority.",
              },
              {
                title: "Industry Insight",
                text:
                  "We match your technical skills to roles that offer the best long-term stability and career growth path.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-sm hover:shadow-xl hover:border-funeka-action/20 transition-all group">
                <div className="h-1.5 w-12 bg-funeka-brand rounded-full mb-10"></div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-6 uppercase tracking-tight leading-tight">{c.title}</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-lg">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-funeka-anchor text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-funeka-action/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        <Container className="relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-funeka-action rounded-full"></div>
              <div className="h-1 w-4 bg-funeka-brand rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Submit CVs for the following positions
            </h2>
            <p className="text-lg sm:text-xl text-white/70 font-medium max-w-3xl leading-relaxed">
              We actively recruit for these roles. Submit your CV and we will match you when a suitable opportunity opens.
            </p>
          </div>
          <div className="mt-8">
            <button 
              onClick={() => setShowRoles(!showRoles)}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-8 py-5 text-white font-black uppercase tracking-wider transition-all w-full md:w-auto"
            >
              <span>{showRoles ? "Hide Available Positions" : "View Available Positions"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showRoles ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 overflow-hidden transition-all duration-500 ease-in-out origin-top ${showRoles ? "max-h-[2000px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}`}>
            {[
              "RDO","Team Leaders","Winch Operator","Loco Operators","Drill Rig Operators",
              "Shaft Timberman","Grade Operator","Winding Engine Driver","Onsetters","Miners",
              "Shift Supervisors","Mine Overseers","Mine Planner","Auto Electricians","Fitters",
              "Water Bowser","Diesel Mechanic","ADT Operator","Electricians","Boilermakers",
              "Drum Truck Operators","Excavators","FEL Operator","Forklifts","LHD Operators",
              "Front End Operators","Drop Race Assistant","Drop Race Operator","Drop Race Miner",
              "Drop Race Shift Supervisor","TLB Operator","Millwright","Mine Manager","Engineers",
              "General Engineering Supervisor","Instrument Technician"
            ].map((role) => (
              <div key={role} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-funeka-brand/40 hover:bg-white/10 transition-all">
                <div className="h-2 w-2 rounded-full bg-funeka-action shrink-0"></div>
                <span className="text-sm font-bold text-white">{role}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button as={NavLink} to="/apply" variant="primary" className="px-10 py-5 text-lg shadow-xl shadow-funeka-action/30">
              Submit Your CV Now
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
