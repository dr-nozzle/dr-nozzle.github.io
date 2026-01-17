document.addEventListener("DOMContentLoaded", () => {
    // ---------- Final Grade ----------
    const calcBtn = document.getElementById("calc");
    if (calcBtn) {
      calcBtn.addEventListener("click", () => {
        const a = parseFloat(document.getElementById("acad")?.value);
        const p = parseFloat(document.getElementById("pst")?.value);
        const f = parseFloat(document.getElementById("fst")?.value);
        const out = document.getElementById("out");
  
        if ([a, p, f].some(v => Number.isNaN(v))) {
          out.textContent = "Please enter all three grades.";
          return;
        }
  
        const final = a * 0.50 + p * 0.30 + f * 0.20;
        const truncated = Math.floor(final * 100) / 100; // truncate, no rounding
        out.textContent = "Final Grade = " + truncated;
      });
    }
  
    // ---------- Quiz Grade ----------
    const quizBtn = document.getElementById("quizCalc");
    if (quizBtn) {
      quizBtn.addEventListener("click", () => {
        const quizIds = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12"];
        const out = document.getElementById("quizOut");
  
        let totalPoints = 0;
        let totalWeights = 0;
  
        quizIds.forEach(id => {
          const val = parseFloat(document.getElementById(id)?.value);
          if (!Number.isNaN(val)) { totalPoints += val; totalWeights += 1; }
        });
  
        const mt = parseFloat(document.getElementById("mt")?.value);
        if (!Number.isNaN(mt)) { totalPoints += mt * 3; totalWeights += 3; }
  
        const finalExam = parseFloat(document.getElementById("finalExam")?.value);
        if (!Number.isNaN(finalExam)) { totalPoints += finalExam * 5; totalWeights += 5; }
  
        if (totalWeights === 0) {
          out.textContent = "Enter at least one grade.";
          return;
        }
  
        const grade = totalPoints / totalWeights;
        const truncated = Math.floor(grade * 100) / 100;
        out.textContent = "Current Grade = " + truncated;
      });
    }
  
    // ---------- PST Grade ----------
    const pstBtn = document.getElementById("pstCalc");
    if (pstBtn) {
      pstBtn.addEventListener("click", () => {
        const taken = parseInt(document.getElementById("taken")?.value, 10);
        const signed = parseInt(document.getElementById("signed")?.value, 10);
        const out = document.getElementById("pstOut");
  
        if (Number.isNaN(taken) || Number.isNaN(signed)) {
          out.textContent = "Please enter both values.";
          return;
        }
  
        if (taken < 1 || taken > 100) return;
  
        if (signed < 0 || signed > taken) {
          out.textContent = "Fails cannot be more than PSTs taken.";
          return;
        }
  
        const passed = taken - signed;
        const percent = (passed / taken) * 100;
        const truncated = Math.floor(percent * 100) / 100;
  
        out.textContent =
          "Current PST Grade = " + truncated + "%  (" +
          passed + "/" + taken + " passed, " +
          signed + " failed)";
      });
    }
  
    // ---------- FST Grade ----------
    function secToTime(sec) {
      const m = Math.floor(sec / 60);
      const s = String(sec % 60).padStart(2, "0");
      return m + ":" + s;
    }
  
    const fstBtn = document.getElementById("fstCalc");
    if (fstBtn) {
      fstBtn.addEventListener("click", () => {
        const out = document.getElementById("fstOut");
        const raw = (document.getElementById("fstTime")?.value || "").trim();
  
        const m = raw.match(/^(\d{1,2}):([0-5]\d)$/);
        if (!m) {
          out.textContent = "Enter time in mm:ss format (example: 12:34).";
          return;
        }
  
        const minutes = parseInt(m[1], 10);
        const seconds = parseInt(m[2], 10);
        const t = minutes * 60 + seconds;
  
        const base = 9 * 60 + 10; // 9:10
        const step = 14.7;        // estimate
        const passScore = 75;
  
        let score = (t <= base) ? 100 : (100 - Math.ceil((t - base) / step));
        score = Math.max(0, Math.min(100, score));
  
        const status = score >= passScore ? "PASS" : "FAIL";
  
        let bracket;
        if (score === 100) {
          bracket = secToTime(base) + " and faster";
        } else if (score === 0) {
          bracket = "slower than the 1-point bracket";
        } else {
          const k = 100 - score;
          const lowerExclusive = base + (k - 1) * step;
          const upperInclusive = base + k * step;
  
          const minSec = Math.floor(lowerExclusive) + 1;
          const maxSec = Math.floor(upperInclusive);
  
          bracket = secToTime(minSec) + " – " + secToTime(maxSec);
        }
  
        const passLatest = Math.floor(base + (100 - passScore) * step);
  
        out.textContent =
          "Score = " + score + " (" + status + ")\n" +
          "Time bracket for this score: " + bracket + "\n" +
          "Passing is 75 (≈ " + secToTime(passLatest) + " or faster).";
      });
    }
  });