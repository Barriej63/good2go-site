// app/scientific-foundation/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scientific Foundation — Good2Go",
  description:
    "Why dual-task gait is the gold standard for concussion assessment and recovery monitoring. Evidence, clinical guidance, and Good2Go’s research base.",
};

export default function ScientificFoundationPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* HERO / INTRO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Scientific Foundation
            </h1>
            <p className="mt-3 text-lg text-slate-700 leading-relaxed">
              Good2Go’s dual-task gait assessment gives healthcare providers
              <span className="font-medium"> unprecedented insight</span> into recovery status, 
              and <span className="font-medium">immediate pointers to interventions</span>.
              The research base shows superior sensitivity vs. traditional methods and
              objective, quantifiable markers that map to real-world function.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://book.good2go-rth.com"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
              >
                Book a Test
              </Link>
              <Link
                href="/scientific-foundation/references"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                View Full References (69+)
              </Link>
            </div>
          </div>

          {/* Image placeholder #1 */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
            <div className="relative w-full h-64 sm:h-72 lg:h-full min-h-64">
              <Image
                src="/scientific1.jpg" // add your file to /public
                alt="Dual-task gait assessment research visualization"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE RESEARCH SAYS */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          What does the research say?
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Extensive peer-reviewed literature shows dual-task gait provides
          <span className="font-medium"> superior sensitivity</span>, <span className="font-medium">predictive validity</span>, and
          <span className="font-medium"> ecological relevance</span> compared with single-task tests. It yields
          objective scores that eliminate subjectivity and standardise assessment across contexts,
          refining clinical decision-making.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Enhanced Detection", "Deficits persist beyond symptom resolution; dual-task exposes what single-task misses."],
            ["Predictive Power", "Persistent dual-task costs correlate with higher risk of subsequent injury."],
            ["Real-World Fit", "Dual-task mirrors everyday cognitive-motor demands, improving return-to-activity decisions."],
            ["Objective Metrics", "Standardized, quantifiable outcomes reduce subjectivity and variability."],
            ["Cognitive-Motor Insight", "Dissociation patterns inform prognosis and individualized rehab planning."],
            ["Technology-Ready", "Sensor-based protocols enable reliable, scalable implementations."],
          ].map(([title, body], i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCOPE OF GOOD2GO EVIDENCE BASE */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          What underpins Good2Go?
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The Good2Go concussion monitoring system is built on extensive research and trials spanning:
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Gait and cognitive function</li>
          <li>• Dual-task vs. single-task gait sensitivity</li>
          <li>• Impaired head stabilization during turning in chronic mTBI</li>
          <li>• Turning performance reflects real-world change-of-direction in sport</li>
          <li>• Dynamic balance captured within gait assessments</li>
          <li>• Plantiga IMUs and continuous walking protocol validity/reliability</li>
          <li>• Pre/post-concussion data across rugby, netball, football, hockey, workplace, home</li>
          <li>• Clinical protocols, thresholds, and analysis methods</li>
        </ul>

        {/* Image placeholder #2 */}
        <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64 sm:h-72">
            <Image
              src="/scientific2.webp" // add your file to /public
              alt="Good2Go scientific program imagery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CLINICAL SIGNIFICANCE */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Clinical Significance</h3>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Superior sensitivity for post-concussion deficits</li>
          <li>• Predictive capability for future injury prevention</li>
          <li>• Objective measures supporting return-to-play/work</li>
          <li>• Enhanced serial monitoring across recovery</li>
        </ul>
        <p className="mt-4 text-sm text-slate-700">
          Evidence supports AI-enhanced dual-task gait as a <span className="font-medium">gold standard</span> for modern concussion management.
        </p>
      </section>

      {/* GOOD2GO DASHBOARD — KEEP INTACT */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Good2Go Dashboard</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          These 23 research studies form the evidence-based foundation of the Good2Go concussion monitoring system,
          ensuring clinical protocols, thresholds, and analysis methods are grounded in peer-reviewed research.
        </p>

        {/* Collapsible list so it doesn't dominate the page */}
        <details className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <summary className="cursor-pointer text-sm font-medium text-slate-800">
            Show evidence list (23 studies)
          </summary>
          <div className="mt-4 grid gap-3 text-sm text-slate-700">
            <div>
              <div className="font-medium">Core New Norm Detection Studies</div>
              <ul className="mt-1 list-disc pl-5">
                <li>
                  Barr, W. B., &amp; McCrea, M. (2001) — 8% CV threshold for new norm establishment.
                </li>
                <li>
                  Schatz, P., &amp; Sandel, N. (2013) — Validates 8% CV threshold for post-injury assessment.
                </li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Baseline Establishment Research</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Broglio, S. P., et al. (2007) — Reliability standards; 3+ baselines with ≤10% CV.</li>
                <li>Lovell, M. R., et al. (2006) — 10% CV threshold for baseline variability.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Individualized Recovery Patterns</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Covassin, T., et al. (2009) — Sex differences underpin trajectory-based predictions.</li>
                <li>Lau, B. C., et al. (2009) — Signs/symptoms linked to protracted recovery risk.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Minimal Detectable Change (MDC)</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Hunt, T. N., et al. (2009) — 2.5-point threshold for meaningful balance improvement.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Balance Assessment Standards</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Guskiewicz, K. M., et al. (2001); (2003) — Variability standards &amp; return-to-activity thresholds.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Normative Data &amp; Functional Thresholds</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Iverson, G. L., et al. (2003); (2006) — Normative ranges &amp; asymptotic plateau methods.</li>
                <li>Echemendia, R. J., et al. (2012); Broglio, S. P., et al. (2018) — Population norms (ImPACT, CARE).</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Individual Recovery Trajectories</div>
              <ul className="mt-1 list-disc pl-5">
                <li>McCrea, M., et al. (2013) — Individualized trajectories over population standards.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Multi-Modal Assessment</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Echemendia, R. J., et al. (2013) — Multi-modal approach reduces false negatives.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Functional Capacity Research</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Register-Mihalik, J. K., et al. (2013) — Dual-task thresholds for functional assessment.</li>
                <li>Howell, D. R., et al. (2018) — Composite score readiness thresholds.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Clinical Consensus Guidelines</div>
              <ul className="mt-1 list-disc pl-5">
                <li>McCrory, P., et al. (2017) — International consensus shaping CDS algorithms.</li>
                <li>Putukian, M., et al. (2021) — Graduated return-to-activity protocols.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Statistical Methodology</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Hopkins, W. G. (2000); Atkinson, G., &amp; Nevill, A. M. (1998) — Reliability/variability methods.</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Gait &amp; Locomotor Assessment</div>
              <ul className="mt-1 list-disc pl-5">
                <li>Peterson, C. L., et al. (2003) — Postural stability &amp; domain scoring.</li>
                <li>Parker, T. M., et al. (2007) — Gait speed analysis methodology.</li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* CONCLUSIONS / CTA */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Final Conclusions</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Dual-task gait represents a <span className="font-medium">paradigm shift</span> in concussion care:
          it detects persistent deficits, predicts outcomes, and quantifies recovery with objective,
          standardised metrics. Integrating dual-task into routine protocols can improve outcomes,
          refine return-to-activity decisions, and reduce risk of long-term complications.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            See How it Works
          </Link>
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book an Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
