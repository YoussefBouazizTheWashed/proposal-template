import React from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Target, Clock, Zap, BarChart3, Layers, Activity } from "lucide-react";

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">{title}</h2>
      {description && <p className="text-lg text-muted-foreground mt-4 max-w-3xl leading-relaxed">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
      <Navbar />

      <main className="pb-32">
        <section id="hero" className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-border bg-slate-50/50">
          <div className="container mx-auto max-w-5xl">
            <Badge variant="outline" className="mb-8 font-sans font-medium text-xs tracking-wider uppercase bg-white flex w-max items-center gap-2 px-3 py-1.5">
              <span className="text-sm leading-none text-primary">★</span>
              <span>Project Proposal Template</span>
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black font-serif text-primary leading-[1.1] mb-8 tracking-tight">
              Pet and People Safety
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12 font-serif">
              Safety is becoming a major concern nowadays, but as we focus on safety, an unfortunate lack of freedom fills its spot. We have created a doorbell camera that is accessible at any time and from any place, which gives you control over entering and exiting your home. Our goal is to let our pets roam free while preventing as much risk as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-border/60">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Title / Product name, team member names</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">[Team Member 1]</span>
                    <span className="text-sm text-muted-foreground">[Role / Title]</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">[Team Member 2]</span>
                    <span className="text-sm text-muted-foreground">[Role / Title]</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Project Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <dt className="text-muted-foreground">Date</dt>
                    <dd className="font-medium">[October 24, 2024]</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <dt className="text-muted-foreground">Client / Department</dt>
                    <dd className="font-medium">[Organization Name]</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2">
                    <dt className="text-muted-foreground">Document Status</dt>
                    <dd className="font-medium">Draft for Review</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Problem & Solution Requirements"
              description="[Describe the problem the project solves or the opportunity it is taking advantage of. Include statistics or similar proving the need. What type of problem is it? What is the environment for the opportunity? Is there a timeframe?]"
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-4xl font-serif font-black text-primary mb-2">[73%]</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">[Statistic showing the scale of the problem. E.g. of users abandon processes due to friction.]</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-4xl font-serif font-black text-primary mb-2">[$2.4M]</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">[Financial impact of the current problem annually within the target market or organization.]</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-4xl font-serif font-black text-primary mb-2">[10x]</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">[Growth metric showing how the problem is compounding over time if left unaddressed.]</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 prose prose-slate max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
              <p>[Provide deeper narrative context here. Expand on the statistics above with qualitative insights. Who is suffering from this problem? How are they currently trying to solve it? Explain the limitations of current solutions and why a new approach is necessary.]</p>
            </div>
          </div>
        </section>

        <section id="solution" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Solution"
              description="[Write the solution, explain the scope, and how it will be delivered. Stay focused on what you are selling; one solution only. Communicate the idea clearly.]"
            />

            <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
              <div className="order-2 md:order-1 space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-3 rounded-lg shadow-sm border border-border shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif mb-2">[Core Feature 1]</h4>
                    <p className="text-muted-foreground leading-relaxed">[Explain how this feature solves a specific part of the user's pain point. Keep it benefit-focused.]</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-3 rounded-lg shadow-sm border border-border shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif mb-2">[Core Feature 2]</h4>
                    <p className="text-muted-foreground leading-relaxed">[Describe another key aspect of the solution. How does it integrate with the user's workflow?]</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-3 rounded-lg shadow-sm border border-border shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif mb-2">[Core Feature 3]</h4>
                    <p className="text-muted-foreground leading-relaxed">[Highlight the final major component that makes this solution complete and robust.]</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl border border-border shadow-lg flex items-center justify-center p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-100/50 mix-blend-multiply pointer-events-none"></div>
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-medium text-muted-foreground font-serif italic">[Insert High-Level Architecture Diagram,<br /> Mockup, or Product Visual Here]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Vision / Goal"
              description="[Bulleted list acceptable, but other formats equally acceptable. State the vision of the project and its goals. Be specific with measurable goals. Think: action-oriented, realistic and based in time.]"
            />

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mt-12 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Strategic Objectives</h3>
              <ul className="space-y-6">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground/70 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-lg mb-1">[Objective {item} Title]</strong>
                      <span className="text-primary-foreground/80 leading-relaxed">[Detailed description of the objective. E.g., Increase user retention by 25% within the first 6 months post-launch.]</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="timeframe" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Timeframe & Deliverables"
              description="[What is the amount of time you need to complete the goals? What will be delivered throughout the project lifecycle to the owners, investors, stakeholders, or others? Be specific and consider prototypes, periodic reports, alpha and beta testing results, etc.]"
            />

            <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { phase: "Phase 1: Discovery", time: "Weeks 1-2", desc: "[User research, requirements gathering, initial architecture planning.]" },
                { phase: "Phase 2: Design", time: "Weeks 3-5", desc: "[Wireframing, prototyping, user testing, and final UI/UX approval.]" },
                { phase: "Phase 3: Development", time: "Weeks 6-12", desc: "[Core system implementation, frontend build, API integrations.]" },
                { phase: "Phase 4: Launch", time: "Weeks 13-14", desc: "[QA testing, security review, beta release, and final deployment.]" }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8 md:mb-12 last:mb-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-primary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg font-serif">{item.phase}</h4>
                      <Badge variant="secondary" className="bg-slate-100">{item.time}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Resources & Budget"
              description="[Lists acceptable, but descriptions of resource needs and purposes also required. Table preferred for budget. Detail the type of resources, the quantity, and add notes as needed for clarity. Resources cost money; estimate the financial requirements here.]"
            />

            <div className="grid md:grid-cols-5 gap-12 mt-12">
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold font-serif mb-6">Estimated Budget</h3>
                <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 font-semibold text-sm text-muted-foreground">Category</th>
                        <th className="py-4 px-6 font-semibold text-sm text-muted-foreground">Description</th>
                        <th className="py-4 px-6 font-semibold text-sm text-muted-foreground text-right">Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-4 px-6 font-medium">[Personnel]</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">[Engineering, Design, PM]</td>
                        <td className="py-4 px-6 text-right font-medium">[$00,000]</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">[Software / Tools]</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">[Cloud infrastructure, licenses]</td>
                        <td className="py-4 px-6 text-right font-medium">[$0,000]</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">[Marketing]</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">[Launch campaigns, ads]</td>
                        <td className="py-4 px-6 text-right font-medium">[$0,000]</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">[Contingency]</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">[10% buffer for overruns]</td>
                        <td className="py-4 px-6 text-right font-medium">[$0,000]</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-50/50">
                        <td colSpan={2} className="py-4 px-6 font-bold text-right">Total Estimated Budget</td>
                        <td className="py-4 px-6 text-right font-bold text-primary text-lg">[$00,000]</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold font-serif mb-6">Required Resources</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">[Role 1]</strong>: [Description of responsibilities and time commitment]</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">[Role 2]</strong>: [Description of responsibilities and time commitment]</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">[Technology]</strong>: [Specific API access, hardware, or datasets needed]</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="risks" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Risks & Implications"
              description="[Consider both investor ($) and society loss. Write down what might happen, how it may occur, and what to do. If anything is going to stop deliverables from being delivered, this is where the information goes.]"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="border-border shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2.5 rounded-md text-orange-600 shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">[Risk Factor {i}]</h4>
                        <p className="text-sm text-muted-foreground mb-4">[Description of what could go wrong and its potential impact on the project timeline or success.]</p>
                        <div className="bg-slate-50 rounded p-3 text-sm border border-border">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Mitigation Plan</strong>
                          [How you will prevent this risk or handle it if it occurs.]
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="success" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Success Criteria"
              description="[Can be listed, but must be explained well. How do you define success? Be careful and specific in these details. It’s helpful to list five key success criteria against which the project will be measured.]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-serif mb-2">[Metric {i}]</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">[Target baseline vs. expected outcome. E.g., Reduce load time from 3s to &lt;1s.]</p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold font-serif text-lg mb-1">Ready to move forward?</h4>
                <p className="text-muted-foreground text-sm">Please review the above proposal and approve to initiate Phase 1.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-md font-medium text-sm border border-border bg-white hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Request Changes
                </button>
                <button className="px-6 py-3 rounded-md font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Approve Proposal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>Template generated for professional project proposals.</p>
      </footer>
    </div>
  );
}
