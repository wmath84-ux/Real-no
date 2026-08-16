import { Layers, Bookmark, BookOpenCheck, Anchor, PenTool, Settings, AlertTriangle, ChevronDown } from 'lucide-react';

export default function Concept1Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 border-b-2 border-indigo-500 pb-3">
          Concept 1: The Fundamental Theorem of Arithmetic (The DNA of Numbers)
        </h2>

        {/* 1. Prerequisite Logic */}
        <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-lg">
          <h3 className="text-base sm:text-lg font-bold text-blue-800 flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5" /> 1. Prerequisite Logic (The Building Blocks)
          </h3>
          <p className="text-sm sm:text-base text-slate-700 mb-3">Before we even touch the theorem, we must establish the universe we are playing in. Understanding these basics is absolutely critical:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li><strong>The Number System Universe:</strong> We are dealing with Integers (specifically positive integers or Natural numbers like 1, 2, 3...).</li>
            <li><strong>Factors vs. Multiples:</strong>
              <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                <li><em>Factor (The Divider):</em> Numbers that can perfectly divide another number. (e.g., Factors of 12 are 1, 2, 3, 4, 6, 12). They are always smaller than or equal to the number.</li>
                <li><em>Multiple (The Table):</em> Results you get when multiplying a number. (e.g., Multiples of 12 are 12, 24, 36...). They are always greater than or equal to the number.</li>
              </ul>
            </li>
            <li><strong>Prime vs. Composite Numbers:</strong>
              <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-600">
                <li><em>Prime Numbers:</em> The "Atoms" of math. Cannot be broken down further (e.g., 2, 3, 5, 7, 11). Exactly two factors: 1 and themselves.</li>
                <li><em>Composite Numbers:</em> The "Molecules." Made by multiplying Prime numbers together (e.g., {String.raw`$4 = 2 \times 2$`} ; {String.raw`$6 = 2 \times 3$`}).</li>
                <li><em>The Number 1:</em> It is the "loner"—neither Prime nor Composite (it only has one factor).</li>
              </ul>
            </li>
            <li><strong>Exponents and Powers:</strong> To write factorizations cleanly and solve equations, we group identical primes. Instead of {String.raw`$2 \times 2 \times 2$`}, we write {String.raw`$2^3$`}.</li>
          </ul>
        </div>

        {/* 2. Core Essence */}
        <div className="mb-8 bg-amber-50 border border-amber-200 p-5 sm:p-6 rounded-xl text-center shadow-sm">
          <h3 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
            <Bookmark className="w-4 h-4" /> 2. Core Essence (Theorem 1.1)
          </h3>
          <p className="text-base sm:text-lg font-medium text-amber-900 italic">"Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur."</p>
        </div>

        {/* 3. Deep Explanation */}
        <div className="mb-8 px-2 sm:px-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <BookOpenCheck className="w-5 h-5 text-indigo-600" /> 3. Deep Explanation (The "Meat")
          </h3>
          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-3">Seedhi Baat: Think of every single composite number as having its own unique "Fingerprint" or "DNA."</p>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700">
            <li><strong className="text-indigo-700">The "What":</strong> Any number that isn't prime (like 100) is really just a bunch of prime numbers hiding in a trench coat. If you break 100 down, it is purely made of {String.raw`$2 \times 2 \times 5 \times 5$`}. There is absolutely no other combination of primes in the universe that will give you exactly 100.</li>
            <li><strong className="text-indigo-700">The "Uniqueness":</strong> If I factorize 12, I get {String.raw`$2 \times 2 \times 3$`}. If you factorize 12, you might do it differently and write {String.raw`$3 \times 2 \times 2$`}. The order changed, but the ingredients (exactly two 2s and exactly one 3) are 100% the same.</li>
            <li><strong className="text-indigo-700">The "Why":</strong> Why is this called the "Fundamental" theorem? Because the entire Number System relies on this stability! If numbers didn't have unique prime factorizations, finding HCF, LCM, and adding simple Fractions would be chaotic and impossible.</li>
          </ul>
        </div>

        {/* 4. Mental Anchor */}
        <div className="mb-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-emerald-800 flex items-center gap-2 mb-2">
            <Anchor className="w-5 h-5" /> 4. The "Bestest" Mental Anchor
          </h3>
          <p className="font-semibold text-emerald-900 mb-2 text-sm sm:text-base">The Lego Set Anchor:</p>
          <p className="text-sm sm:text-base text-emerald-800">Imagine you have a massive box of Lego bricks, but the bricks only come in specific sizes: 2, 3, 5, 7, 11, etc. (These are your Prime sizes). Any structure you build (a Composite number) is just a combination of these specific bricks.<br/><br/>
          If the instruction manual tells you to build the "Red House" (Number 30), you will always need exactly one '2' brick, one '3' brick, and one '5' brick. No matter if you pick up the '5' brick first or the '2' brick first, the "bill of materials" for that exact house never, ever changes.</p>
        </div>

        {/* 5. Solved Problems */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 px-2 sm:px-5">
            <PenTool className="w-5 h-5 text-indigo-600" /> 5. Segment 4 Prep (Textbook Solved Problems)
          </h3>
          
          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden mb-3">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">PROBLEM 1</span> 
                <span className="text-sm sm:text-base">The Factor Tree of 32760</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 border-t border-slate-200 bg-white text-sm sm:text-base space-y-2">
              <p><strong>Goal:</strong> Break down a massive number into its prime DNA to understand its structure.</p>
              <div className="font-mono bg-slate-50 p-3 rounded text-slate-700 space-y-1 overflow-x-auto text-sm">
                <p>Step 1: {String.raw`$32760 \div 2 = 16380$`}</p>
                <p>Step 2: {String.raw`$16380 \div 2 = 8190$`}</p>
                <p>Step 3: {String.raw`$8190 \div 2 = 4095$`}</p>
                <p>Step 4: {String.raw`$4095 \div 3 = 1365$`}</p>
                <p>Step 5: {String.raw`$1365 \div 3 = 455$`}</p>
                <p>Step 6: {String.raw`$455 \div 5 = 91$`}</p>
                <p>Step 7: {String.raw`$91 \div 7 = 13$`} (13 is prime, so we stop here!)</p>
              </div>
              <p className="font-bold text-indigo-700 mt-2">Final Factorization: {String.raw`$2^3 \times 3^2 \times 5 \times 7 \times 13$`}</p>
              <p className="text-xs text-slate-500">(Note: As per the theorem, no other prime numbers can ever create 32760).</p>
            </div>
          </details>

          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 1</span> 
                <span className="text-sm sm:text-base">The {String.raw`$4^n$`} Logic</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Question:</strong> Can the number {String.raw`$4^n$`} ever end with the digit 0 for any natural number $n$?</p>
              <p><strong>Logic Setup:</strong> For ANY number to end in the digit 0 (like 10, 20, 50, 100), it MUST have both 2 and 5 as prime factors (because {String.raw`$2 \times 5 = 10$`}).</p>
              <p><strong>Solution:</strong> Let's look at the DNA of {String.raw`$4^n$`}.<br/>
              {String.raw`$4^n = (2^2)^n = 2^{2n}$`}.<br/>
              The only prime factor in this entire structure is 2.</p>
              <p><strong>Application of Theorem:</strong> Since 5 is missing, and the Fundamental Theorem of Arithmetic guarantees that prime factorization is strictly unique, a 5 can never magically enter this party.</p>
              <p className="font-bold text-indigo-700">Conclusion: Therefore, {String.raw`$4^n$`} can never end with zero.</p>
            </div>
          </details>
        </div>

        {/* 6. Technical Anchors */}
        <div className="mb-8 bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5 text-slate-600" /> 6. Technical Anchors (For Phase 4 Accuracy)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li><strong>Standard Form:</strong> Prime factors are conventionally written in ascending order ({String.raw`$p_1 \le p_2 \le ... \le p_n$`}). Example: {String.raw`$2 \times 3 \times 5$`} instead of {String.raw`$5 \times 2 \times 3$`}.</li>
            <li><strong>Historical Anchor:</strong> Carl Friedrich Gauss, the "Prince of Mathematicians," gave the first correct proof of this theorem.</li>
          </ul>
        </div>

        {/* 7. Exam Nuance */}
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-rose-800 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5" /> 7. Exam / Concept Nuance
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-rose-900">
            <li><strong>⚠️ The "Order" Trap:</strong> Examiners might ask in an MCQ: "Are {String.raw`$2 \times 3 \times 5$`} and {String.raw`$5 \times 2 \times 3$`} considered different factorizations?" No. They are the exact same factorization because the theorem explicitly states "apart from the order."</li>
            <li><strong>⚠️ The "1" Trap:</strong> Never, ever include the number 1 in a prime factorization. If you write {String.raw`$12 = 1 \times 2^2 \times 3$`}, examiners will deduct marks because 1 is NOT a prime number. Prime factorization strictly requires primes.</li>
            <li><strong>⚠️ The "Only if for 0" Rule:</strong> A number will end in zero if and only if its prime factors are of the exact form {String.raw`$2^m \times 5^n$`}. Both must be present.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
