import { Skull, History, AlertCircle, Globe, Clapperboard } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
          Origin Story
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          The History of Real Numbers
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
          Aaya kahan se? Naam aise kyun pada? Aaj ke time mein zaroorat kya hai? Let's decode the story before the math.
        </p>
      </div>

      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
        
        {/* Phase 1 */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-lg text-indigo-700 shrink-0">
            <Skull className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phase 1: The Dark Origin & The Genesis</h2>
            <p className="text-slate-700 mb-3 text-sm sm:text-base leading-relaxed">
              <strong>The Ancient Cult:</strong> In 5th Century BC Greece, there was a secret society led by the legendary mathematician Pythagoras. Unka ek hi belief tha: "All is Number". They believed the entire universe was perfectly balanced and could be written as simple fractions (Rational Numbers).
            </p>
            <p className="text-slate-700 mb-3 text-sm sm:text-base leading-relaxed">
              <strong>The Accident:</strong> A brilliant student named Hippasus was trying to find the length of the diagonal of a square with sides of 1 unit. Using Pythagoras's own theorem, he got {String.raw`$\sqrt{2}$`}.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>The Crisis & Murder:</strong> When Hippasus tried to write {String.raw`$\sqrt{2}$`} as a fraction, he realized it was impossible. The decimal never ended and never repeated. He accidentally discovered Irrational Numbers. The Pythagoreans were terrified. Legend has it that to keep this dark secret from leaking, they tied Hippasus up and threw him off a boat to drown at sea. Class 10 ki Maths ki shuruaat literally ek cover-up murder se hui hai!
            </p>
          </div>
        </div>
        
        <hr className="border-slate-100" />
        
        {/* Phase 2 */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-700 shrink-0">
            <History className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phase 2: The Etymology (Naam Aise Kyun Pada?)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <li><strong>"Real" Numbers:</strong> 17th Century mein equations solve karte waqt ajeeb answers aa rahe the (square root of negative numbers). Philosopher René Descartes decided to call normal numbers "Real" to mock the weird new ones, which he sarcastically named "Imaginary" numbers.</li>
              <li><strong>Rational (The Rule Followers):</strong> From the root word "Ratio". Any number neatly packed into a ratio ({String.raw`$p/q$`}).</li>
              <li><strong>Irrational (The Rebels):</strong> Prefix "Ir" (without) + "Ratio". Refuse to be boxed into a neat fraction. They are infinite and wild.</li>
              <li><strong>Algorithm:</strong> Comes from the name of the 9th-century Persian mathematician, Al-Khwarizmi.</li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Phase 3 */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-rose-100 p-3 rounded-lg text-rose-700 shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phase 3: The "Villain" & The Need</h2>
            <p className="text-slate-700 mb-3 text-sm sm:text-base leading-relaxed">
              <strong>The Void in the Universe:</strong> Agar hum sirf fractions (rational numbers) use karte, toh number line par chote-chote "holes" reh jaate. You literally wouldn't be able to measure a circle's circumference properly (because of {String.raw`$\pi$`}) or a square's diagonal. Real Numbers came to "fill the gaps" and make the universe continuous.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>The Hidden Agenda of the Board:</strong> Kyun padha rahe hain ye? The board isn't just teaching you numbers; they are secretly training your brain to spot logical fallacies and fake news in the real world using "Proof by Contradiction". You prove a lie to find the truth.
            </p>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Phase 4 */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-emerald-100 p-3 rounded-lg text-emerald-700 shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phase 4: The Modern-Day Matrix</h2>
            <p className="text-slate-700 mb-3 text-sm sm:text-base font-medium">If Real Numbers and Prime Factorization are deleted tonight, tomorrow the world burns.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <li><strong>Military-Grade Cybersecurity (RSA Encryption):</strong> Every time you send a WhatsApp message or do a UPI payment, your data is locked using a giant mathematical padlock. The keys? Two massive Prime Numbers multiplied together. Prime Factorization protects your bank account from hackers.</li>
              <li><strong>Space Travel & GPS Physics Engines:</strong> Irrational numbers like {String.raw`$\pi$`} and {String.raw`$e$`} are the language of curves and orbits. Without them, our satellites' GPS systems would drift by kilometers every day. ISRO's rockets would crash blindly!</li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Phase 5 */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-amber-100 p-3 rounded-lg text-amber-700 shrink-0">
            <Clapperboard className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phase 5: The Cinematic Analogies</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              <li><strong>Prime Numbers = Vibranium:</strong> Just like Captain America's shield is made of Vibranium—the most unbreakable metal in the MCU—Prime Numbers are the Vibranium of the mathematical universe. Composite numbers are just alloys.</li>
              <li><strong>Rational vs. Irrational = Minecraft vs. The Matrix Glitch:</strong> Rational Numbers are like Minecraft blocks. Clean, predictable, easily stacked. Irrational Numbers ({String.raw`$\sqrt{2}, \pi$`}) are like a glitch in The Matrix. An infinite code generating new random numbers forever.</li>
              <li><strong>Proof by Contradiction = The "Among Us" Strategy:</strong> Start by saying "Let's assume {String.raw`$\sqrt{2}$`} is an Innocent Crewmate (Rational)". Follow its logic, track its movements, and suddenly it vents (contradiction). You press the emergency button: "It's an Impostor (Irrational)!" You prove what it IS, by proving what it CANNOT BE.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
