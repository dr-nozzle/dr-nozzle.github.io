---
layout: page
icon: fas fa-book
order: 6
---

## Final Grade Calculator 

<div class="gc card">
  <div class="card-content">

    <h2>Final Grade Calculator</h2>

    <label>Academic (50%)</label>
    <input id="acad" type="number" min="0" max="100" step="0.01">

    <label>PST (30%)</label>
    <input id="pst" type="number" min="0" max="100" step="0.01">

    <label>FST (20%)</label>
    <input id="fst" type="number" min="0" max="100" step="0.01">

    <button id="calc" class="btn">Calculate</button>

    <p id="out" class="result"></p>

  </div>
</div>

<style>
.gc.card {
  padding: 1rem;
  border-radius: 1rem;
  background: var(--main-bg);
  box-shadow: 0 2px 16px rgba(0,0,0,.08);
}

.gc label {
  display: block;
  margin-top: .75rem;
  font-weight: 600;
  color: var(--text-color);
}

.gc input {
  width: 100%;
  padding: .6rem;
  border-radius: .75rem;
  border: 1px solid rgba(0,0,0,.15);
}

.gc .btn {
  margin-top: 1rem;
  padding: .6rem .9rem;
  border-radius: .75rem;

  /* MAKE IT VISIBLE */
  border: 1px solid rgba(0,0,0,.25);
  color: fieldtext;
  background: field;

  cursor: pointer;
}

.gc .result {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--text-color);
}
</style>

<script>
document.getElementById("calc").addEventListener("click", () => {

  const a = parseFloat(acad.value);
  const p = parseFloat(pst.value);
  const f = parseFloat(fst.value);

  const out = document.getElementById("out");

  if ([a, p, f].some(isNaN)) {
    out.textContent = "Please enter all three grades.";
    return;
  }

  const final =
      a * 0.50 +
      p * 0.30 +
      f * 0.20;

  // TRUNCATE to 2 decimals (no rounding)
  const truncated = Math.floor(final * 100) / 100;

  out.textContent = "Final Grade = " + truncated;
});
</script>


## Quiz Grade Calculator 

<div class="gc card">
  <div class="card-content">

    <h2>Quiz Grade Calculator</h2>

    <label>Q1</label>
    <input id="q1" type="number" min="0" max="100" step="0.01">

    <label>Q2</label>
    <input id="q2" type="number" min="0" max="100" step="0.01">

    <label>Q3</label>
    <input id="q3" type="number" min="0" max="100" step="0.01">

    <label>Q4</label>
    <input id="q4" type="number" min="0" max="100" step="0.01">

    <label>Q5</label>
    <input id="q5" type="number" min="0" max="100" step="0.01">

    <label>Q6</label>
    <input id="q6" type="number" min="0" max="100" step="0.01">

    <label>Q7</label>
    <input id="q7" type="number" min="0" max="100" step="0.01">

    <label>Q8</label>
    <input id="q8" type="number" min="0" max="100" step="0.01">

    <label>Q9</label>
    <input id="q9" type="number" min="0" max="100" step="0.01">

    <label>Q10</label>
    <input id="q10" type="number" min="0" max="100" step="0.01">

    <label>Q11</label>
    <input id="q11" type="number" min="0" max="100" step="0.01">

    <label>Q12</label>
    <input id="q12" type="number" min="0" max="100" step="0.01">

    <label>MT</label>
    <input id="mt" type="number" min="0" max="100" step="0.01">

    <label>Final</label>
    <input id="finalExam" type="number" min="0" max="100" step="0.01">

    <button id="quizCalc" class="btn">Calculate</button>

    <p id="quizOut" class="result"></p>

  </div>
</div>


<script>
document.getElementById("quizCalc").addEventListener("click", () => {

  const quizIds = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12"];
  const out = document.getElementById("quizOut");

  let totalPoints = 0;
  let totalWeights = 0;

  // Process quizzes (weight = 1 each)
  quizIds.forEach(id => {
    const val = parseFloat(document.getElementById(id).value);

    if (!Number.isNaN(val)) {
      totalPoints += val * 1;
      totalWeights += 1;
    }
  });

  // MT (weight = 3)
  const mt = parseFloat(document.getElementById("mt").value);
  if (!Number.isNaN(mt)) {
    totalPoints += mt * 3;
    totalWeights += 3;
  }

  // Final (weight = 5)
  const finalExam = parseFloat(document.getElementById("finalExam").value);
  if (!Number.isNaN(finalExam)) {
    totalPoints += finalExam * 5;
    totalWeights += 5;
  }

  if (totalWeights === 0) {
    out.textContent = "Enter at least one grade.";
    return;
  }

  const grade = totalPoints / totalWeights;

  // TRUNCATE to 2 decimals (no rounding)
  const truncated = Math.floor(grade * 100) / 100;

  out.textContent =
    "Current Grade = " + truncated ;
});
</script>

## PST Grade Calculator 


<div class="gc card">
  <div class="card-content">

    <h2>PST Grade Calculator</h2>

    <label>How many PSTs have been given so far?</label>
    <small style="color: var(--text-color)">Total will be about 60 by graduation</small>
    <input id="taken" type="number" min="1" max="100" step="1" placeholder="60" value="60">

    <label>Number signed for (FAILED)</label>
    <input id="signed" type="number" min="0" max="100" step="1">


    <button id="pstCalc" class="btn">Calculate</button>

    <p id="pstOut" class="result"></p>

  </div>
</div>

<script>
document.getElementById("pstCalc").addEventListener("click", () => {

  const taken = parseInt(document.getElementById("taken").value);
  const signed = parseInt(document.getElementById("signed").value);
  const out = document.getElementById("pstOut");

  if (Number.isNaN(taken) || Number.isNaN(signed)) {
    out.textContent = "Please enter both values.";
    return;
  }

  if (taken < 1 || taken > 100) {
    return;
  }

  if (signed < 0 || signed > taken) {
    out.textContent = "Fails cannot be more than PSTs taken.";
    return;
  }

  const passed = taken - signed;
  const percent = (passed / taken) * 100;

  // TRUNCATE to 2 decimals (no rounding)
  const truncated = Math.floor(percent * 100) / 100;

  out.textContent =
    "Current PST Grade = " + truncated + "%  (" +
    passed + "/" + taken + " passed, " +
    signed + " failed)";
});
</script>

## FST Grade Calculator 

<div class="gc card">
  <div class="card-content">

    <h2>FST Calculator</h2>

    <label>FST Time (mm:ss)</label>
    <input id="fstTime" type="text" placeholder="e.g., 12:34">

    <button id="fstCalc" class="btn">Calculate</button>

    <p id="fstOut" class="result"></p>

  </div>
  <small style="color: var(--text-color)">
  Disclaimer: This score is an estimate using a 14.7-second-per-point rule and does not use the official grading table.
</small>

</div>

<script>
function secToTime(sec) {
  const m = Math.floor(sec / 60);
  const s = String(sec % 60).padStart(2, "0");
  return m + ":" + s;
}

document.getElementById("fstCalc").addEventListener("click", () => {
  const out = document.getElementById("fstOut");
  const raw = (document.getElementById("fstTime").value || "").trim();

  const m = raw.match(/^(\d{1,2}):([0-5]\d)$/);
  if (!m) {
    out.textContent = "Enter time in mm:ss format (example: 12:34).";
    return;
  }

  const minutes = parseInt(m[1], 10);
  const seconds = parseInt(m[2], 10);
  const t = minutes * 60 + seconds;

  const base = 9 * 60 + 10; // 9:10
  const step = 14.7;          // 14 seconds per point
  const passScore = 75;

  let score;
  if (t <= base) {
    score = 100;
  } else {
    const pointsLost = Math.ceil((t - base) / step);
    score = 100 - pointsLost;
  }

  if (score > 100) score = 100;
  if (score < 0) score = 0;

  const status = score >= passScore ? "PASS" : "FAIL";

  // Time bracket for this score (whole seconds)
  // For score S (<100): k = 100 - S (points lost)
  // Condition: (k-1)*step < (t - base) <= k*step
  // => base + (k-1)*step < t <= base + k*step
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

  // Passing time threshold for 75
  // score = 75 => pointsLost = 25 => t <= base + 25*14
  const passLatest = Math.floor(base + (100 - passScore) * step);
  out.textContent =
    "Score = " + score + " (" + status + ")\n" +
    "Time bracket for this score: " + bracket + "\n" +
    "Passing is 75 (≈ " + secToTime(passLatest) + " or faster).";
});
</script>
