import { Layers, Bookmark, BookOpenCheck, Anchor, PenTool, Settings, AlertTriangle, ChevronDown } from 'lucide-react';

export default function Concept3Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 border-b-2 border-indigo-500 pb-3">
          Concept 3: Irrationality Proofs (The Art of Contradiction)
        </h2>

        {/* 1. Prerequisite Logic */}
        <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-lg">
          <h3 className="text-base sm:text-lg font-bold text-blue-800 flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5" /> 1. Prerequisite Logic (The Toolkit)
          </h3>
          <p className="text-sm sm:text-base text-slate-700 mb-3">Before we can prove a number is irrational, we must forge 5 massive logical weapons:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li><strong>Rational Numbers:</strong> Any number written as {String.raw`$p/q$`} ($p, q$ integers, $q \neq 0$). When simplified, $p$ and $q$ can't be reduced further.</li>
            <li><strong className="text-indigo-700">Co-prime Numbers (THE ABSOLUTE HINGE):</strong> Two numbers sharing NO common factors other than 1. In proofs, we assume our simplified fraction {String.raw`$a/b$`} is strictly co-prime.</li>
            <li><strong>Divisibility Algebra:</strong> Translate "divides" into an equation. If 2 perfectly divides $X$, write it as $X = 2c$.</li>
            <li><strong>The Square Drop Theorem (1.2):</strong> If a prime number $p$ divides $a^2$, then $p$ MUST also perfectly divide $a$. (e.g. if 3 divides 36, 3 divides 6).</li>
            <li><strong>Proof by Contradiction:</strong> Assume the exact opposite. If flawless math leads to an absurd conclusion, the starting assumption was a lie!</li>
          </ol>
        </div>

        {/* 2. Core Essence */}
        <div className="mb-8 bg-amber-50 border border-amber-200 p-5 sm:p-6 rounded-xl text-center shadow-sm">
          <h3 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest mb-2 flex justify-center items-center gap-2">
            <Bookmark className="w-4 h-4" /> 2. Core Essence
          </h3>
          <p className="text-base sm:text-lg font-medium text-amber-900">A number is irrational if it cannot be written in the perfect rational form {String.raw`$p/q$`}. We prove that prime roots like {String.raw`$\sqrt{2}$`}, {String.raw`$\sqrt{3}$`}, and {String.raw`$\sqrt{5}$`} are irrational using the logical framework of <strong>"Proof by Contradiction" (Reductio ad absurdum).</strong></p>
        </div>

        {/* 3. Deep Explanation */}
        <div className="mb-8 px-2 sm:px-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <BookOpenCheck className="w-5 h-5 text-indigo-600" /> 3. Deep Explanation (The "Meat")
          </h3>
          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-3">Seedhi Baat: We can't directly calculate an irrational number to infinity. Instead, we play a mind game.</p>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700">
            <li><strong className="text-indigo-700">The Setup:</strong> We want to prove {String.raw`$\sqrt{2}$`} is irrational. We state the exact opposite: "Let's pretend {String.raw`$\sqrt{2}$`} IS rational."</li>
            <li><strong className="text-indigo-700">The Trap:</strong> If it is rational, it can be written as a perfect fraction {String.raw`$a/b$`}, where $a$ and $b$ are strictly <strong>co-prime</strong> (no common factors).</li>
            <li><strong className="text-indigo-700">The Math:</strong> We square both sides. The math forces us to admit $a$ is divisible by 2. We substitute that algebraic fact back, and boom—the math shows $b$ is ALSO divisible by 2.</li>
            <li><strong className="text-indigo-700">The Contradiction:</strong> We started by swearing on our lives that $a$ and $b$ were co-prime. But we mathematically proved they both share a factor of 2.</li>
            <li><strong className="text-indigo-700">The Conclusion:</strong> Since our algebra was flawless, our assumption was a lie. Therefore, {String.raw`$\sqrt{2}$`} is irrational.</li>
          </ul>
        </div>

        {/* 4. Mental Anchor */}
        <div className="mb-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-emerald-800 flex items-center gap-2 mb-2">
            <Anchor className="w-5 h-5" /> 4. The "Bestest" Mental Anchor
          </h3>
          <p className="font-semibold text-emerald-900 mb-2 text-sm sm:text-base">The Vegetarian T-Rex Anchor:</p>
          <p className="text-sm sm:text-base text-emerald-800">Imagine you need to mathematically prove a T-Rex is a carnivore. You use contradiction.<br/><br/>
          You say, "Let's assume the T-Rex is a strict vegetarian." If this is true, its stomach should only contain leaves. But you open its stomach and find a half-eaten Triceratops!<br/><br/>
          This physical evidence directly contradicts the "vegetarian" assumption. Since the evidence is real, the initial assumption was a lie. T-Rex is a carnivore. In our proof, the "Triceratops in the stomach" is that common factor of 2 that we suddenly find!</p>
        </div>

        {/* 5. Solved Problems */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 px-2 sm:px-5">
            <PenTool className="w-5 h-5 text-indigo-600" /> 5. Segment 4 Prep (Textbook Solved Problems)
          </h3>
          
          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden mb-3" open>
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">THEOREM 1.3</span> 
                <span className="text-sm sm:text-base">Prove that {String.raw`$\sqrt{2}$`} is irrational.</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white text-sm sm:text-base space-y-4">
              <p><strong>Step 1 (The Lie):</strong> Let us assume, to the contrary, that {String.raw`$\sqrt{2}$`} is rational. So, {String.raw`$\sqrt{2} = \frac{a}{b}$`} <em>(where $a$ and $b$ are co-prime integers and $b \neq 0$)</em>.</p>
              <p><strong>Step 2 (Squaring):</strong> Square both sides: {String.raw`$2 = \frac{a^2}{b^2}$`}, which rearranges to {String.raw`$2b^2 = a^2$`}.</p>
              <p><strong>Step 3 (First Drop):</strong> This means 2 divides {String.raw`$a^2$`}. By Theorem 1.2, 2 must also divide $a$.</p>
              <p><strong>Step 4 (Substitution):</strong> Since 2 divides $a$, we can write $a = 2c$ (where $c$ is some integer).</p>
              <p><strong>Step 5 (Re-evaluating):</strong> Substitute $a = 2c$ into our earlier equation:</p>
              <div className="overflow-x-auto p-2">
                {String.raw`$$2b^2 = (2c)^2 \Rightarrow 2b^2 = 4c^2 \Rightarrow b^2 = 2c^2$$`}
              </div>
              <p><strong>Step 6 (Second Drop):</strong> This new equation means 2 divides {String.raw`$b^2$`}, and therefore 2 divides $b$.</p>
              <div className="bg-amber-100/50 p-4 rounded-lg font-semibold text-amber-900 border border-amber-200">
                <strong>Step 7 (The Contradiction):</strong> Both $a$ and $b$ are divisible by 2, meaning they have a common factor. But we assumed they were co-prime. Our assumption is wrong. {String.raw`$\sqrt{2}$`} is irrational.
              </div>
            </div>
          </details>

          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden mb-3">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 6</span> 
                <span className="text-sm sm:text-base">Show {String.raw`$5 - \sqrt{3}$`} is irrational. (Composite Form)</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Step 1:</strong> Assume {String.raw`$5 - \sqrt{3}$`} is rational. So, {String.raw`$5 - \sqrt{3} = \frac{a}{b}$`} (where $a, b$ are co-prime).</p>
              <p><strong>Step 2 (Isolate the Root):</strong> Rearrange to get the root alone: {String.raw`$\sqrt{3} = 5 - \frac{a}{b} = \frac{5b - a}{b}$`}.</p>
              <p><strong>Step 3:</strong> Since $a, b$, and 5 are integers, the right side ({String.raw`$\frac{5b - a}{b}$`}) is a pure rational number.</p>
              <p><strong>Step 4:</strong> This forces the left side ({String.raw`$\sqrt{3}$`}) to also be rational.</p>
              <p><strong>Step 5 (Contradiction):</strong> But wait! We already know {String.raw`$\sqrt{3}$`} is irrational. A rational cannot equal an irrational. The assumption is wrong; {String.raw`$5 - \sqrt{3}$`} is irrational.</p>
            </div>
          </details>

          <details className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
            <summary className="flex items-center justify-between p-4 font-medium cursor-pointer hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold shrink-0">EXAMPLE 7</span> 
                <span className="text-sm sm:text-base">Show {String.raw`$3\sqrt{2}$`} is irrational. (Product Form)</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
            </summary>
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white text-sm sm:text-base space-y-3">
              <p><strong>Step 1:</strong> Assume {String.raw`$3\sqrt{2} = \frac{a}{b}$`}.</p>
              <p><strong>Step 2 (Isolate):</strong> Isolate the root: {String.raw`$\sqrt{2} = \frac{a}{3b}$`}.</p>
              <p><strong>Step 3:</strong> Since 3, $a, b$ are integers, {String.raw`$\frac{a}{3b}$`} is rational. This forces {String.raw`$\sqrt{2}$`} to be rational.</p>
              <p><strong>Step 4 (Contradiction):</strong> Contradiction! We know {String.raw`$\sqrt{2}$`} is irrational. Thus, {String.raw`$3\sqrt{2}$`} is irrational.</p>
            </div>
          </details>
        </div>

        {/* 6. Technical Anchors */}
        <div className="mb-8 bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5 text-slate-600" /> 6. Technical Anchors
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
            <li><strong>Proof Type:</strong> Proof by Contradiction (Reductio ad absurdum).</li>
            <li><strong>General Rule:</strong> If $p$ is any prime number, {String.raw`$\sqrt{p}$`} is always irrational.</li>
            <li><strong>Operations Rule:</strong> The sum, difference, product, or quotient of a non-zero rational and an irrational number is ALWAYS irrational.</li>
          </ul>
        </div>

        {/* 7. Exam Nuance */}
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-rose-800 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5" /> 7. Exam / Concept Nuance
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-rose-900">
            <li><strong>⚠️ The "Co-prime" Death Trap:</strong> In the {String.raw`$\sqrt{2}$`} or {String.raw`$\sqrt{3}$`} proof, if you write {String.raw`$\sqrt{2} = a/b$`} but forget to write the magic words <em>"where a and b are co-prime"</em>, your entire proof is mathematically invalid. Examiners will mercilessly deduct marks here!</li>
            <li><strong>⚠️ The "Root Isolation" Shortcut:</strong> Notice Examples 6 and 7. For mixed numbers like {String.raw`$5 - \sqrt{3}$`} or {String.raw`$3\sqrt{2}$`}, we didn't do the long {String.raw`$a^2 = 2b^2$`} squaring method. We just used algebra to isolate the root. Unless a 4-mark question demands you to prove {String.raw`$\sqrt{3}$`} is irrational first, ALWAYS use this isolation shortcut for 2-3 mark composite questions!</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
