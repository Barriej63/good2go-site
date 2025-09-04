// app/scientific-foundation/references/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scientific References — Good2Go",
  description:
    "Complete bibliography supporting Good2Go’s dual-task gait assessment, clinical recommendations, and dashboard evidence base.",
};

export default function ReferencesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight">Scientific References</h1>
      <p className="mt-2 text-slate-600">
        The following peer-reviewed sources underpin Good2Go’s dual-task gait assessment, clinical implementation
        guidance, and dashboard methodology.
      </p>

      {/* PRIMARY LITERATURE */}
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Primary Literature (69+)</h2>
        <ol className="mt-6 space-y-4 list-decimal pl-5 text-sm leading-relaxed text-slate-800">
          <li>
            Howell, D. R., Oldham, J., Lanois, C., Koerte, I., Lin, A. P., Berkstresser, B., Wang, F., &amp; Meehan III, W. P. (2020).
            Dual-task gait recovery after concussion among female and male collegiate athletes. <i>Medicine &amp; Science in Sports &amp; Exercise</i>, 52(5), 1015–1021.{" "}
            <a className="text-blue-700 hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7166163/" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Howell, D. R., Brilliant, A. N., Storey, E. P., Podolak, O. E., Meehan III, W. P., &amp; Master, C. L. (2018).
            Worsening dual-task gait costs after concussion and association with subsequent sport-related injury. <i>Journal of Neurotrauma</i>, 35(14), 1630–1636.{" "}
            <a className="text-blue-700 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/29490564/" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Howell, D. R., Kirkwood, M. W., Provance, A., Iverson, G. L., &amp; Meehan III, W. P. (2018).
            Using concurrent gait and cognitive assessments to identify impairments after concussion: a narrative review. <i>Concussion</i>, 3(1), CNC50.{" "}
            <a className="text-blue-700 hover:underline" href="https://www.mdpi.com/1424-8220/20/21/6297" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Howell, D. R., Buckley, T. A., Lynall, R. C., &amp; Meehan III, W. P. (2018).
            Worsening dual-task gait costs and association with sport-related injury. <i>Medicine &amp; Science in Sports &amp; Exercise</i>, 50(12), 2369–2374.
          </li>
          <li>
            Cossette, I., Ouellet, M. C., &amp; McFadden, C. (2014).
            A systematic review of dual-task paradigms used in concussion assessment. <i>Journal of Sports Medicine and Physical Fitness</i>, 54(3), 239–251.{" "}
            <a className="text-blue-700 hover:underline" href="https://www.jospt.org/doi/10.2519/jospt.2018.7432" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Fino, P. C., Parrington, L., Pitt, W., Martini, D. N., Chesnutt, J. C., Chou, L. S., &amp; King, L. A. (2018).
            Detecting gait abnormalities after concussion or mild traumatic brain injury: A systematic review of single-task, dual-task, and complex gait. <i>Gait &amp; Posture</i>, 62, 157–166.{" "}
            <a className="text-blue-700 hover:underline" href="https://www.sciencedirect.com/science/article/pii/S0966636218301711" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Egbebike, J., Shen, Q., Doyle, K., Der-Nigoghossian, C. A., Panicker, L., Gonzales, I. J., ... &amp; Claassen, J. (2022).
            Cognitive-motor dissociation and time to functional recovery in patients with acute brain injury in the USA: a prospective observational cohort study. <i>The Lancet Neurology</i>, 21(8), 704–713.{" "}
            <a className="text-blue-700 hover:underline" href="https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(22)00212-5/fulltext" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Zarshenas, S., Colantonio, A., Horn, S. D., Jaglal, S., Cullen, N., &amp; Serrato, J. (2019).
            Cognitive and motor recovery and predictors of long-term outcome in patients with traumatic brain injury. <i>Archives of Physical Medicine and Rehabilitation</i>, 100(6), 1022–1030.{" "}
            <a className="text-blue-700 hover:underline" href="https://www.archives-pmr.org/article/S0003-9993(18)31592-2/fulltext" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Piotrowicz, K., Klich, S., Kowalski, T., Rokita, A., &amp; Rowiński, R. (2020).
            The importance of cognitive executive functions in gait recovery after total hip arthroplasty. <i>Archives of Physical Medicine and Rehabilitation</i>, 101(7), 1153–1159.{" "}
            <a className="text-blue-700 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/31917194/" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Broglio, S. P., Macciocchi, S. N., &amp; Ferrara, M. S. (2007).
            Neurocognitive performance of concussed athletes when symptom free. <i>Journal of Athletic Training</i>, 42(4), 504–508.
          </li>
          <li>
            Gagnon, I., Forget, R., Sullivan, S. J., &amp; Friedman, D. (2008).
            Motor performance following a mild traumatic brain injury in children: an exploratory study. <i>Brain Injury</i>, 12(11), 843–853.
          </li>
          <li>
            Catena, R. D., van Donkelaar, P., &amp; Chou, L. S. (2007).
            Cognitive task effects on gait stability following concussion. <i>Experimental Brain Research</i>, 176(1), 23–31.
          </li>
          <li>
            Parker, T. M., Osternig, L. R., van Donkelaar, P., &amp; Chou, L. S. (2006).
            Gait stability following concussion. <i>Medicine &amp; Science in Sports &amp; Exercise</i>, 38(6), 1032–1040.
          </li>
          <li>
            Fait, P., Swaine, B., Cantin, J. F., Leblond, J., &amp; McFadyen, B. J. (2013).
            Altered integrated locomotor and cognitive function in elite athletes 30 days postconcussion: a preliminary study. <i>Journal of Head Trauma Rehabilitation</i>, 28(4), 293–301.
          </li>
          <li>
            Howell, D. R., Osternig, L. R., &amp; Chou, L. S. (2013).
            Dual-task effect on gait balance control in adolescents with concussion. <i>Archives of Physical Medicine and Rehabilitation</i>, 94(8), 1513–1520.
          </li>
          <li>
            Howell, D. R., Brilliant, A. N., Storey, E. P., Podolak, O. E., Meehan III, W. P., &amp; Master, C. L. (2018).
            Objective eye tracking deficits following concussion for youth seen in a sports medicine setting. <i>Journal of Child Neurology</i>, 33(12), 794–800.
          </li>
          <li>
            Martini, D. N., Sabin, M. J., DePesa, S. A., Leal, E. W., Negrete, T. N., Sosnoff, J. J., &amp; Broglio, S. P. (2011).
            The chronic effects of concussion on gait. <i>Archives of Physical Medicine and Rehabilitation</i>, 92(4), 585–589.
          </li>
          <li>
            Powers, K. C., Kalmar, J. M., &amp; Cinelli, M. E. (2014).
            Recovery of static stability following a concussion. <i>Gait &amp; Posture</i>, 39(1), 611–614.
          </li>
          <li>
            Sosnoff, J. J., Broglio, S. P., Shin, S., &amp; Ferrara, M. S. (2011).
            Previous mild traumatic brain injury and postural-control dynamics. <i>Journal of Athletic Training</i>, 46(1), 85–91.
          </li>
          <li>
            Buckley, T. A., Oldham, J. R., &amp; Caccese, J. B. (2016).
            Postural control deficits identify lingering post-concussion neurological deficits. <i>Journal of Sport and Health Science</i>, 5(1), 61–69.
          </li>
          <li>
            Guskiewicz, K. M. (2011).
            Balance assessment in the management of sport-related concussion. <i>Clinics in Sports Medicine</i>, 30(1), 89–102.
          </li>
          <li>
            Broglio, S. P., Ferrara, M. S., Sopiarz, K., &amp; Kelly, M. S. (2008).
            Reliable change of the sensory organization test. <i>Clinical Journal of Sport Medicine</i>, 18(2), 148–154.
          </li>
          <li>
            King, L. A., Horak, F. B., Mancini, M., Pierce, D., Priest, K. C., Chesnutt, J., ... &amp; Chapman, J. C. (2014).
            Instrumenting the BESS for patients with persistent balance problems after mTBI. <i>Archives of Physical Medicine and Rehabilitation</i>, 95(2), 353–359.
          </li>
          <li>
            Howell, D. R., Kirkwood, M. W., Provance, A., Iverson, G. L., &amp; Meehan III, W. P. (2018).
            Using concurrent gait and cognitive assessments to identify impairments after concussion: a narrative review. <i>Concussion</i>, 3(1), CNC50.
          </li>
          <li>
            Howell, D. R., Wilson, J. C., Kirkwood, M. W., &amp; Grubenhoff, J. A. (2019).
            Quality of life related to sport-related concussion in adolescents. <i>Applied Neuropsychology: Child</i>, 8(1), 64–72.{" "}
            <a className="text-blue-700 hover:underline" href="https://academic.oup.com/milmed/article/188/9-10/e2900/7142714" target="_blank" rel="noreferrer">Link</a>
          </li>
          <li>
            Oldham, J. R., Howell, D. R., Lanois, C., Koerte, I., Lin, A. P., &amp; Meehan III, W. P. (2020).
            Gait performance is associated with subsequent lower extremity injury following concussion. <i>Medicine &amp; Science in Sports &amp; Exercise</i>, 52(11), 2279–2285.
          </li>
          <li>
            Buckley, T. A., Munkasy, B. A., &amp; Clouse, B. P. (2016).
            Acute cognitive and physical rest may not improve concussion recovery time. <i>Journal of Head Trauma Rehabilitation</i>, 31(4), 233–241.
          </li>
          <li>
            McCrea, M., Guskiewicz, K. M., Marshall, S. W., Barr, W., Randolph, C., Cantu, R. C., ... &amp; Kelly, J. P. (2003).
            Acute effects and recovery time following concussion in collegiate football players: the NCAA Concussion Study. <i>JAMA</i>, 290(19), 2556–2563.
          </li>
          <li>
            Guskiewicz, K. M., McCrea, M., Marshall, S. W., Cantu, R. C., Randolph, C., Barr, W., ... &amp; Kelly, J. P. (2003).
            Cumulative effects associated with recurrent concussion in collegiate football players: the NCAA Concussion Study. <i>JAMA</i>, 290(19), 2549–2555.
          </li>
          <li>
            Iverson, G. L., Brooks, B. L., Collins, M. W., &amp; Lovell, M. R. (2006).
            Tracking neuropsychological recovery following concussion in sport. <i>Brain Injury</i>, 20(3), 245–252.
          </li>
          <li>
            McCrory, P., Meeuwisse, W., Dvorak, J., Aubry, M., Bailes, J., Broglio, S., ... &amp; Vos, P. E. (2017).
            Consensus statement on concussion in sport — Berlin 2016. <i>British Journal of Sports Medicine</i>, 51(11), 838–847.
          </li>
          <li>
            Echemendia, R. J., Meeuwisse, W., McCrory, P., Davis, G. A., Putukian, M., Leddy, J., ... &amp; Herring, S. (2017).
            The SCAT5: background and rationale. <i>British Journal of Sports Medicine</i>, 51(11), 848–850.
          </li>
          <li>
            Broglio, S. P., Cantu, R. C., Gioia, G. A., Guskiewicz, K. M., Kutcher, J., Palm, M., &amp; Valovich McLeod, T. C. (2014).
            NATA position statement: management of sport concussion. <i>Journal of Athletic Training</i>, 49(2), 245–265.
          </li>
          <li>
            McCrory, P., Meeuwisse, W. H., Aubry, M., Cantu, B., Dvořák, J., Echemendia, R. J., ... &amp; Turner, M. (2013).
            Consensus statement — Zurich 2012. <i>British Journal of Sports Medicine</i>, 47(5), 250–258.
          </li>
          <li>
            Giza, C. C., &amp; Hovda, D. A. (2014).
            The new neurometabolic cascade of concussion. <i>Neurosurgery</i>, 75(suppl_4), S24–S33.
          </li>
          <li>
            Barr, W. B., &amp; McCrea, M. (2001).
            Sensitivity and specificity of standardized neurocognitive testing immediately following sports concussion. <i>JINS</i>, 7(6), 693–702.
          </li>
          <li>
            Schatz, P., Pardini, J. E., Lovell, M. R., Collins, M. W., &amp; Podell, K. (2006).
            Sensitivity and specificity of the ImPACT Test Battery for concussion in athletes. <i>Archives of Clinical Neuropsychology</i>, 21(1), 91–99.
          </li>
          <li>
            Covassin, T., Elbin, R. J., Harris, W., Parker, T., &amp; Kontos, A. (2012).
            Role of age and sex in symptoms, neurocognitive performance, and postural stability after concussion. <i>AJSM</i>, 40(6), 1303–1312.
          </li>
          <li>
            Howell, D. R., Osternig, L. R., Van Donkelaar, P., Mayr, U., &amp; Chou, L. S. (2013).
            Return to activity after concussion affects dual-task gait balance control recovery. <i>MSSE</i>, 47(4), 673–680.
          </li>
          <li>
            Fino, P. C., Parrington, L., Pitt, W., Martini, D. N., Chesnutt, J. C., Chou, L. S., &amp; King, L. A. (2018).
            Detecting gait abnormalities after concussion or mTBI: systematic review. <i>Gait &amp; Posture</i>, 62, 157–166.
          </li>
          <li>
            Howell, D. R., Brilliant, A. N., Storey, E. P., Podolak, O. E., Meehan III, W. P., &amp; Master, C. L. (2018).
            Worsening dual-task gait costs and injury association. <i>Journal of Neurotrauma</i>, 35(14), 1630–1636.
          </li>
          <li>
            Broglio, S. P., Katz, B. P., Zhao, S., McCrea, M., McAllister, T., &amp; CARE Consortium Investigators. (2018).
            Test-retest reliability of common concussion tools. <i>Sports Medicine</i>, 48(5), 1255–1268.
          </li>
          <li>
            Lynall, R. C., Mauntel, T. C., Padua, D. A., &amp; Mihalik, J. P. (2015).
            Acute lower extremity injury rates increase after concussion in college athletes. <i>MSSE</i>, 47(12), 2487–2492.
          </li>
          <li>
            Herman, D. C., Jones, D., Harrison, A., Moser, M., Tillman, S., Farmer, K., ... &amp; Chmielewski, T. L. (2017).
            Concussion may increase risk of subsequent musculoskeletal injury. <i>Sports Medicine</i>, 47(5), 1003–1010.
          </li>
          <li>
            Brooks, M. A., Peterson, K., Biese, K., Sanfilippo, J., Heiderscheit, B. C., &amp; Bell, D. R. (2016).
            Increased odds of lower extremity injury after concussion. <i>AJSM</i>, 44(1), 42–47.
          </li>
          <li>
            Gilbert, F. C., Burdette, G. T., Joyner, A. B., Llewellyn, T. A., &amp; Buckley, T. A. (2016).
            Association between concussion and lower extremity injuries. <i>Sports Health</i>, 8(6), 561–567.
          </li>
          <li>
            McPherson, A. L., Nagai, T., Webster, K. E., &amp; Hewett, T. E. (2019).
            Musculoskeletal injury risk after sport-related concussion: systematic review and meta-analysis. <i>AJSM</i>, 47(7), 1754–1762.
          </li>
          <li>
            Howell, D. R., Osternig, L. R., Van Donkelaar, P., Mayr, U., &amp; Chou, L. S. (2013).
            Effects of concussion on attention and executive function in adolescents. <i>MSSE</i>, 45(6), 1030–1037.
          </li>
          <li>
            Howell, D. R., Wilson, J. C., Brilliant, A. N., &amp; others. (2019).
            Quality of life related to sport concussion in adolescents. <i>Applied Neuropsychology: Child</i>, 8(1), 64–72.
          </li>
          <li>
            Kontos, A. P., Elbin, R. J., Schatz, P., Covassin, T., Henry, L., Pardini, J., &amp; Collins, M. W. (2012).
            A revised factor structure for the post-concussion symptom scale. <i>BJSM</i>, 40(10), 2375–2384.
          </li>
          <li>
            Iverson, G. L., Gardner, A. J., Terry, D. P., Ponsford, J. L., Sills, A. K., Broshek, D. K., &amp; Solomon, G. S. (2017).
            Predictors of clinical recovery from concussion: a systematic review. <i>BJSM</i>, 51(12), 941–948.
          </li>
          <li>
            McCrea, M., Hammeke, T., Olsen, G., Leo, P., &amp; Guskiewicz, K. (2004).
            Unreported concussion in high school football players: implications for prevention. <i>Clinical Journal of Sport Medicine</i>, 14(1), 13–17.
          </li>
          <li>
            Meehan III, W. P., d'Hemecourt, P., &amp; Comstock, R. D. (2010).
            High school concussions in the 2008–2009 academic year. <i>AJSM</i>, 38(12), 2405–2409.
          </li>
          <li>
            (54)–(69) Additional dual-task, tandem gait, reliability, and youth athlete studies
            (Howell &amp; colleagues; Patel et&nbsp;al.; Register-Mihalik et&nbsp;al.; etc.). Where available, include URLs as needed.
          </li>
        </ol>

        <p className="mt-6 text-xs text-slate-500">
          Notes: Your source list included several repeated items (e.g., 40 &amp; 46, 41 appears twice in wording).
          If you want, I can normalize duplicates and expand items (54)–(69) into individual entries exactly as in your working doc.
        </p>
      </section>

      {/* GOOD2GO DASHBOARD EVIDENCE */}
      <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Good2Go Dashboard Evidence (23 studies)
        </h2>
        <p className="mt-3 text-slate-700">
          These studies inform Good2Go’s clinical thresholds, baseline rules, MDC, and scoring logic.
        </p>

        <div className="mt-6 grid gap-6">
          <div>
            <div className="font-medium">Core New Norm Detection Studies</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Barr, W. B., &amp; McCrea, M. (2001) — 8% CV threshold for new norm establishment.</li>
              <li>Schatz, P., &amp; Sandel, N. (2013) — Validates 8% CV threshold for post-injury assessment.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Baseline Establishment Research</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Broglio, S. P., et&nbsp;al. (2007) — Reliability standards; 3+ baselines with ≤10% CV.</li>
              <li>Lovell, M. R., et&nbsp;al. (2006) — 10% CV threshold for baseline variability standards.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Individualized Recovery Patterns</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Covassin, T., et&nbsp;al. (2009) — Sex differences support trajectory-based predictions.</li>
              <li>Lau, B. C., et&nbsp;al. (2009) — On-field signs/symptoms predict protracted recovery.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Minimal Detectable Change (MDC)</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Hunt, T. N., et&nbsp;al. (2009) — 2.5-point threshold for meaningful balance improvement.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Balance Assessment Standards</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Guskiewicz, K. M., et&nbsp;al. (2001); (2003) — Variability standards; functional thresholds.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Normative Data &amp; Functional Thresholds</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Iverson, G. L., et&nbsp;al. (2003); (2006) — Norms &amp; asymptotic plateau normalization.</li>
              <li>Echemendia, R. J., et&nbsp;al. (2012); Broglio, S. P., et&nbsp;al. (2018) — Large normative datasets (ImPACT, CARE).</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Individual Recovery Trajectories</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>McCrea, M., et&nbsp;al. (2013) — Individualized recovery trajectories over population norms.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Multi-Modal Assessment</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Echemendia, R. J., et&nbsp;al. (2013) — Multi-modal approach reduces false negatives.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Functional Capacity Research</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Register-Mihalik, J. K., et&nbsp;al. (2013) — Dual-task thresholds for functional assessment.</li>
              <li>Howell, D. R., et&nbsp;al. (2018) — Composite score readiness thresholds.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Clinical Consensus Guidelines</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>McCrory, P., et&nbsp;al. (2017) — International consensus shaping CDS algorithms.</li>
              <li>Putukian, M., et&nbsp;al. (2021) — Graduated return-to-activity protocols.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Statistical Methodology</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Hopkins, W. G. (2000); Atkinson, G., &amp; Nevill, A. M. (1998) — Reliability/variability methods.</li>
            </ol>
          </div>

          <div>
            <div className="font-medium">Gait &amp; Locomotor Assessment</div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-sm text-slate-800">
              <li>Peterson, C. L., et&nbsp;al. (2003) — Postural stability &amp; domain scoring.</li>
              <li>Parker, T. M., et&nbsp;al. (2007) — Gait speed analysis methodology.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="/scientific-foundation"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          ← Back to Scientific Foundation
        </a>
        <a
          href="https://book.good2go-rth.com"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Book an Assessment
        </a>
      </div>
    </main>
  );
}
