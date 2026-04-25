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
              Pet n People
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12 font-serif">
              Safety is becoming a major concern nowadays, but as we focus on safety, an unfortunate lack of freedom fills its spot. We aim to fix this problem because freedom is the best gift you can give your pet.
            </p>

            <div className="pt-8 border-t border-border/60">
              <div className="mb-6 text-sm text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">By submitting this assignment, I agree to the following:</p>
                <p>"Aggies do not lie, cheat, or steal, or tolerate those who do."</p>
                <p>"I have not given or received any unauthorized aid on this assignment."</p>
                <p className="pt-2">Section: 594</p>
                <p>Assignment: Proposal website</p>
                <p>Date: 23 April 2026</p>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Team Members</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">Youssef Bouaziz</span>
                  <span className="text-sm text-muted-foreground">Co-Founder</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">Shariar Rafi</span>
                  <span className="text-sm text-muted-foreground">Co-Founder</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">Edward Sanchez</span>
                  <span className="text-sm text-muted-foreground">Co-Founder</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="problem" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Problem & Solution Requirements"
              description=""
            />

            <div className="mt-8 prose prose-slate max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
              <p style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>The project solves the problem of balancing freedom with security, both for your home and your pets. The issue that comes with solving such a problem is complexity as many variables and factors need to be addressed, and while creating a product that encompasses the whole of all the possible variables would be impossible, we can quickly deduce that a lot of these issues stem from two major flaws; controlling when our pets can go inside and outside, and preventing others from accessing/destroying the pet's means of exiting and entering the house.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold font-serif text-primary mb-3">Cats walk up to 3.7 km/day</div>
                  <div className="text-xl font-semibold text-primary mb-2"><span className="text-sm font-normal text-muted-foreground">(Jensen et al., 2022)</span></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A GPS tracking study of 97 companion cats in Denmark found that cats travel up to 3.7 km per day (75th percentile), with a median of 2.4 km/day and a median of 5 hours spent away from home engaging in natural roaming behaviour (Jensen et al., 2022).
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Indoor-only cats face significantly higher rates of obesity, boredom, and behavioural problems — including aggression, house-soiling, and destructive behaviour — due to restricted movement and limited stimulation (Grigg &amp; Kogan, 2019).
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                    <p>Grigg, E. K., &amp; Kogan, L. R. (2019). Owners' attitudes, knowledge, and care practices: Exploring the implications for domestic cat behavior and welfare in the home. <em>Animals</em>, <em>9</em>(11), 978. https://doi.org/10.3390/ani9110978</p>
                    <p>Jensen, H. A., Meilby, H., Nielsen, S. S., &amp; Sandøe, P. (2022). Movement patterns of roaming companion cats in Denmark—A study based on GPS tracking. <em>Animals</em>, <em>12</em>(14), 1748. https://doi.org/10.3390/ani12141748</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold font-serif text-primary mb-3">Dogs' BCS drops significantly after 8 weeks outdoors</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A 2024 study published in <em>Scientific Reports</em> found that just eight weeks of structured outdoor exercise produced a statistically significant reduction in dogs' body condition scores (BCS) without any changes to diet (Smedberg et al., 2024). BCS is measured on a 9-point veterinary scale where 1–3 = underweight, 4–5 = ideal weight, 6 = slight overweight, 7 = overweight, and 8–9 = obese — meaning even a one-point shift represents a clinically meaningful change in a dog's health category.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                    <p>Smedberg, M., Spörndly-Nees, S., Kallings, L. V., Lindqvist, A., &amp; Rydén, A. (2024). A pilot study of a joint outdoor exercise program for dog owners and dogs. <em>Scientific Reports</em>, <em>14</em>, 14321. https://doi.org/10.1038/s41598-024-65033-0</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold font-serif text-primary mb-3">Only 71% of lost dogs & 53% of lost cats are recovered</div>
                  <div className="text-xl font-semibold text-primary mb-2"><span className="text-sm font-normal text-muted-foreground">(Lord et al., 2007)</span></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A peer-reviewed study of 187 lost dogs and 138 lost cats found that only 71% of dogs and 53% of cats were ever recovered by their owners, with median recovery times of 2 days for dogs and 5 days for cats (Lord et al., 2007).
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                    <p>Lord, L. K., Wittum, T. E., Ferketich, A. K., Funk, J. A., &amp; Rajala-Schultz, P. J. (2007). Search and identification methods that owners use to find a lost dog. <em>Journal of the American Veterinary Medical Association</em>, <em>230</em>(2), 211–216. https://doi.org/10.2460/javma.230.2.211</p>
                    <p>Lord, L. K., Wittum, T. E., Ferketich, A. K., Funk, J. A., &amp; Rajala-Schultz, P. J. (2007). Search and identification methods that owners use to find a lost cat. <em>Journal of the American Veterinary Medical Association</em>, <em>230</em>(2), 217–220. https://doi.org/10.2460/javma.230.2.217</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold font-serif text-primary mb-3">Back doors are burglars' #1 entry point at 38.7%</div>
                  <div className="text-xl font-semibold text-primary mb-2"><span className="text-sm font-normal text-muted-foreground">(Park &amp; Lee, 2021)</span></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Research published in the <em>Journal of Environmental Psychology</em> reveals that the back door was the route chosen most frequently by participants to enter a building, selected in 38.7% of cases, and that the choice of intrusion routes was strongly affected by physical features related to the ease of penetration (Park &amp; Lee, 2021).
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Burglars are not choosing entry points at random — they are actively seeking the path of least resistance, and the back door is their first choice. A doggy door installed in a back door, as is common practice, directly compounds this vulnerability by introducing a permanent, unmonitored opening into the single most targeted entry point in a home. When ease of access is the primary factor driving a burglar's decision, any structural weakness in a back door — including a pet flap — becomes an invitation.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                    <p>Park, S. Y., &amp; Lee, K. H. (2021). Burglars' choice of intrusion routes: A virtual reality experimental study. <em>Journal of Environmental Psychology</em>, <em>74</em>, 101582. https://doi.org/10.1016/j.jenvp.2021.101582</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 prose prose-slate max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
              <p>We all love our pets, but most animals do prefer being outside as opposed to being trapped inside the confines of a home. Of course this would vary depending on the type of animal and their personality. However many studies have shown that being outside is beneficial for your fluffy friends! This, however, brings up a problem — many pets go missing every year and although being outside is beneficial it can also cause you to lose a best friend.</p>
              <p>This isn't even mentioning how a lot of current solutions for autonomous entrance and exiting of a household for the pet are flawed in many ways. Standard doggy doors are flimsy and easy to enter and exit, making them a prime entry point for unwanted guests and an easy exit point for pets and small children who shouldn't be going out at night or during a storm.</p>
              <p>Electronic doggy doors, however, require some sort of identification attached to them so they open for the pet — but this usually comes in the form of a collar which can be easily lost or destroyed while holding said identification. Microchips are also not viable with our current technology through a camera or sensor due to range limitations.</p>
            </div>
          </div>
        </section>

        <section id="solution" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Solution"
              description=""
            />

            <div className="mt-8 prose prose-slate max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed">
              <p>Our solution is to create an app that is specifically tied to our product — a specialized pressure plate that doubles as a rug embedded in your front porch. We will also install a sliding door as a doggy door and a camera that acts as surveillance and activates whenever the pressure plate is triggered. Our app will also allow you to access any remote cameras around and within your house if you have any installed.</p>
              <p>The app will allow you to set a certain weight threshold that will automatically open the sliding doggy door, ensuring only your pet can trigger it. For safety reasons, if the detected weight changes more than twice within 5 minutes, the app will send you a notification and give you the option to temporarily lock the door and monitor the live camera feed.</p>
            </div>

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
                <div className="bg-white rounded-xl border border-border shadow-lg overflow-hidden">
                  <img
                    src="/architecture.jpg"
                    alt="Pet n People architecture sketch showing pressure plate, sliding doggy door, camera, and mobile app"
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-xs text-muted-foreground text-center py-2 px-4 border-t border-border">Figure 1. System architecture sketch — Pet n People</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Vision / Goal"
              description=""
            />

            <div className="mt-8 prose prose-slate max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg">
              <p>We strive to create a product that will ease the burdens of pet owners. To accomplish this we need to…</p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mt-12 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Strategic Objectives</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Research",
                    desc: "Research the material makeup of similar outdoor camera products in order to know what materials to be seeking."
                  },
                  {
                    title: "Prototype",
                    desc: "Draw up prototype sketches and send the sketches to factories capable of procuring the necessary materials to construct the prototypes."
                  },
                  {
                    title: "Testing and Feedback",
                    desc: "Send prototypes for testing in order to gain feedback and make final sketches based on that feedback."
                  },
                  {
                    title: "Shipping",
                    desc: "Contract factories to produce our product and logistics to ship our products to the homes of customers."
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground/70 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-lg mb-1">{item.title}</strong>
                      <span className="text-primary-foreground/80 leading-relaxed">{item.desc}</span>
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
              description=""
            />

            <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { phase: "Phase 1: Research of Materials", time: "6 months", desc: "Gain an overview of the necessary materials." },
                { phase: "Phase 2: Prototype Sketches", time: ">1 year", desc: "Draw up prototypes to gain interest from potential investors and send the sketches to factories that are willing to cooperate." },
                { phase: "Phase 3: Testing and Feedback", time: "2 years", desc: "Gain feedback and procure reports for investors/stakeholders." },
                { phase: "Phase 4: Production and Shipping", time: "1 year", desc: "Ship the final product to customers." }
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
              description=""
            />

            <div className="mt-12">
              <div>
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
                        <td className="py-4 px-6 font-medium">Personnel</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">Engineering, Design, PM</td>
                        <td className="py-4 px-6 text-right font-medium">$37,500,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">Software / Tools</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">Microsoft Azure license</td>
                        <td className="py-4 px-6 text-right font-medium">$8,064</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">Marketing</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">Launch campaigns, ads</td>
                        <td className="py-4 px-6 text-right font-medium">$40,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">Materials</td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">Raw materials (per 100,000 kg)</td>
                        <td className="py-4 px-6 text-right font-medium">$1,566,000</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-50/50">
                        <td colSpan={2} className="py-4 px-6 font-bold text-right">Total Estimated Budget (annual cost)</td>
                        <td className="py-4 px-6 text-right font-bold text-primary text-lg">$39,114,064</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="risks" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Risks & Implications"
              description=""
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Global supply chain disruptions",
                  description: "A big concern for a product that requires the procurement of materials across the globe is interruptions in the global supply chain, be it due to conflicts, tariffs, embargos etc.",
                  mitigation: "To combat this, we must diversify our supply chains in order to ease the impacts of such issues and continue to produce our product. This, of course, will come at an increased cost which is unfortunately unavoidable."
                },
                {
                  title: "Investor loss",
                  description: "There is the concern of investors potentially losing interest in the project and leaving, leading to a loss of funding.",
                  mitigation: "To try to ease this, we will also diversify our pool of investors."
                }
              ].map((risk, i) => (
                <Card key={i} className="border-border shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2.5 rounded-md text-orange-600 shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{risk.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{risk.description}</p>
                        <div className="bg-slate-50 rounded p-3 text-sm border border-border">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Mitigation Plan</strong>
                          {risk.mitigation}
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
              description=""
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Monetary Success",
                  desc: "A fairly obvious metric is profitability. Turning a profit will allow for long term funding for the production of this product, making sure that we will be able to continue being to able to meet customer demand."
                },
                {
                  title: "Customer Satisfaction",
                  desc: "Satisfied customers will ensure that there is a pool of individuals willing to give us money and, in turn, allow for its long term existence."
                },
                {
                  title: "Shareholder Satisfaction",
                  desc: "Ensuring that we will be able to make a profit will ensure that investors are willing to stick with our product and allow for further funding."
                }
              ].map((metric, i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-serif mb-2">{metric.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
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
