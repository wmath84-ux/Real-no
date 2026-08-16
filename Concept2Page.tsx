import { Layers, Bookmark, BookOpenCheck, Anchor, PenTool, Settings, AlertTriangle, ChevronDown } from 'lucide-react';

export default function Concept2Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 border-b-2 border-indigo-500 pb-3">
          Concept 2: HCF, LCM & Their Magical Relationship
        </h2>

        {/* 1. Prerequisite Logic */}
        <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-lg">
          <h3 className="text-base sm:text-lg font-bold text-blue-800 flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5" /> 1. Prerequisite Logic (The Building Blocks)
          </h3>
          <p className="text-sm sm:text-base text-slate-700 mb-3">Before diving into the master formulas for HCF and LCM, you must be absolutely solid on the underlying traits of a Factor and a Multiple:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li><strong>Factor (The Divider):</strong> The numbers that can perfectly divide another number. (Factors of 12 are 1, 2, 3, 4, 6, 12). They are always smaller than or equal to the number. This is why HCF uses the smallest power—it needs to fit inside the numbers.</li>
            <li><strong>Multiple (The Table):</strong> The results you get when you multiply a number by integers. (Multiples of 12 are 12, 24, 36, 48...). They are always greater than or equal to the number. This is why LCM uses the greatest power—it needs to be large enough to contain the numbers.</li>
          </ul>
        </div>

        {/* 2. Core Essence */}
        <div className="mb-8 bg-amber-50 border border-amber-200 p-5 sm:p-6 rounded-xl text-center shadow-sm">
          <h3 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
            <Bookmark className="w-4 h-4" /> 2. Core Essence
          </h3>
          <p className="text-sm sm:text-base text-amber-900 mb-4 font-medium">From the Fundamental Theorem of Arithmetic, we extract two formal definitions:</p>
          <ul className="text-sm sm:text-base text-amber-900 font-medium space-y-2 mb-6 max-w-lg mx-auto text-left list-disc pl-5">
            <li><strong>HCF (Highest Common Factor):</strong> The product of the smallest power of each common prime factor.</li>
            <li><strong>LCM (Least Common Multiple):</strong> The product of the greatest power of each prime factor involved.</li>
          </ul>
          <div className="bg-white/60 p-4 rounded-lg inline-block border border-amber-300 w-full sm:w-auto overflow-x-auto">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-1">The Master Relationship</p>
            <p className="text-lg sm:text-2xl font-bold font-mono text-slate-900 my-2 whitespace-nowrap">
              {String.raw`$$HCF(a, b) \times LCM(a, b) = a \times b$$`}
            </p>
            <p className="text-xs sm:text-sm text-amber-700 mt-2">For any two positive integers $a$ and $b$.</p>
          </div>
        </div>

        {/* 3. Deep Explanation */}
        <div className="mb-8 px-2 sm:px-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <BookOpenCheck className="w-5 h-5 text-indigo-600" /> 3. Deep Explanation (The "Meat")
          </h3>
          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-3">Seedhi Baat: Let's decode how we find these using Prime Factorization.</p>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700">
            <li><strong className="text-indigo-700">Finding HCF (The "Strict Bouncer"):</strong> The HCF is very strict. It only looks at primes that are present in BOTH numbers. Once it finds a common prime, it picks the one with the smallest power. Why? Because the factor must be able to divide both numbers without leaving a remainder.</li>
            <li><strong className="text-indigo-700">Finding LCM (The "Greedy Collector"):</strong> The LCM wants everything. It looks at every single prime number present across all the numbers. When it sees the same prime in multiple numbers, it grabs the one with the highest power. Why? Because a multiple must be big enough to "contain" all the original numbers perfectly.</li>
            <li><strong className="text-indigo-700">The Relationship:</strong> When you multiply two numbers, you are multiplying all their prime factors together. The HCF extracts the overlapping smallest parts, and the LCM collects the highest parts. Multiplying HCF and LCM back together perfectly reconstructs the original multiplication of the two numbers.</li>
          </ul>
        </div>

        {/* 4. Mental Anchor */}
        <div className="mb-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-emerald-800 flex items-center gap-2 mb-2">
            <Anchor className="w-5 h-5" /> 4. The "Bestest" Mental Anchor
          </h3>
          <p className="font-semibold text-emerald-900 mb-2 text-sm sm:text-base">The Genetic Traits Anchor:</p>
          <p className="text-sm sm:text-base text-emerald-800">Imagine two brothers, A and B. Their prime factors are their "DNA".<br/><br/>
          <strong>HCF is the "Shared Traits":</strong> What do both brothers definitely have? If Brother A has blue eyes (Power 1) and Brother B has dark blue eyes (Power 2), the common trait is just "blue eyes" (Smallest Power).<br/><br/>
          <strong>LCM is the "Ultimate Super-Child":</strong> If you wanted to build a robot that has the best traits of both brothers, you'd take every single trait available, and whenever they share a trait, you take the strongest version of it (Highest Power).</p>
        </div>

        {/* 5. Solved Problems */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 px-2 sm:px-5">
            <PenTool className="w-5 h-5 text-indigo-600" /> 5. Segment 4 Prep (Textbook Solved Problems)
          </h3>
          
          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden mb-3">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 2</span> 
                <span className="text-sm sm:text-base">HCF and LCM of 6 and 20</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Step 1 (Factorize):</strong><br/>{String.raw`$6 = 2^1 \times 3^1$`}<br/>{String.raw`$20 = 2^2 \times 5^1$`}</p>
              <p><strong>Step 2 (HCF - Strict Bouncer):</strong> The only common prime is 2. The smallest power is {String.raw`$2^1$`}.<br/>So, $HCF = 2$.</p>
              <p><strong>Step 3 (LCM - Greedy Collector):</strong> Write down all primes seen: 2, 3, 5. Take their highest powers: {String.raw`$2^2, 3^1, 5^1$`}.<br/>So, {String.raw`$LCM = 2^2 \times 3 \times 5 = 4 \times 15 = 60$`}.</p>
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded font-semibold overflow-x-auto whitespace-nowrap">
                Verification: {String.raw`$HCF \times LCM = 2 \times 60 = 120$`}. Product of numbers {String.raw`$6 \times 20 = 120$`}. (Match!)
              </div>
            </div>
          </details>

          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden mb-3">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 3</span> 
                <span className="text-sm sm:text-base">Smart LCM using Formula (96 and 404)</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Step 1 (Factorize):</strong><br/>{String.raw`$96 = 2^5 \times 3$`}<br/>{String.raw`$404 = 2^2 \times 101$`}</p>
              <p><strong>Step 2 (HCF):</strong> Common prime is 2. Smallest power is {String.raw`$2^2$`}.<br/>$HCF = 4$.</p>
              <p><strong>Step 3 (Smart LCM):</strong> Instead of multiplying big powers, use the master formula:</p>
              <div className="overflow-x-auto p-2">
                {String.raw`$$LCM = \frac{a \times b}{HCF}$$`}
                <br/>
                {String.raw`$$LCM = \frac{96 \times 404}{4} = 96 \times 101 = 9696$$`}
              </div>
            </div>
          </details>

          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 4</span> 
                <span className="text-sm sm:text-base">HCF and LCM of 3 Numbers (6, 72, 120)</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Step 1 (Factorize):</strong><br/>{String.raw`$6 = 2^1 \times 3^1$`}<br/>{String.raw`$72 = 2^3 \times 3^2$`}<br/>{String.raw`$120 = 2^3 \times 3 \times 5$`}</p>
              <p><strong>Step 2 (HCF):</strong> Common primes in ALL THREE are 2 and 3. Smallest powers are {String.raw`$2^1$`} and {String.raw`$3^1$`}.<br/>{String.raw`$HCF = 2 \times 3 = 6$`}.</p>
              <p><strong>Step 3 (LCM):</strong> All primes are 2, 3, 5. Highest powers are {String.raw`$2^3, 3^2, 5^1$`}.<br/>{String.raw`$LCM = 2^3 \times 3^2 \times 5 = 8 \times 9 \times 5 = 360$`}.</p>
            </div>
          </details>
        </div>

        {/* 6. Technical Anchors */}
        <div className="mb-8 bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5 text-slate-600" /> 6. Technical Anchors
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700 overflow-x-auto">
            <li><strong>Master Formula (Two Numbers only):</strong> {String.raw`$LCM(a,b) = \frac{a \times b}{HCF(a,b)}$`}</li>
          </ul>
        </div>

        {/* 7. Exam Nuance */}
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-rose-800 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5" /> 7. Exam / Concept Nuance
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-rose-900">
            <li><strong>⚠️ THE ULTIMATE 3-NUMBER TRAP:</strong> Examiners love giving you three numbers (like 6, 72, 120) and asking you to verify if {String.raw`$HCF \times LCM = a \times b \times c$`}. IT DOES NOT! From Example 4: {String.raw`$HCF \times LCM = 6 \times 360 = 2160$`}. But {String.raw`$6 \times 72 \times 120 = 51840$`}. The master formula is strictly for TWO numbers.</li>
            <li><strong>⚠️ "Common" Requirement for HCF:</strong> If two numbers have absolutely NO prime factors in common (e.g., 8 and 9), their HCF is automatically 1, because 1 is a universal factor. These numbers are called <strong>Co-prime numbers</strong>.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
