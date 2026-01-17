---
layout: page
icon: fas fa-book
order: 6
---
<script src="/assets/js/calculators.js" defer></script>

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

    <button id="calc" class="btn" type="button">Calculate</button>


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
  text-align: center;

  /* iOS friendliness */
  -webkit-appearance: button;
  touch-action: manipulation;
}

.gc .result {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--text-color);
}
</style>



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

    <button id="quizCalc" class="btn" type="button">Calculate</button>


    <p id="quizOut" class="result"></p>

  </div>
</div>


## PST Grade Calculator 


<div class="gc card">
  <div class="card-content">

    <h2>PST Grade Calculator</h2>

    <label>How many PSTs have been given so far?</label>
    <small style="color: var(--text-color)">Total will be about 60 by graduation</small>
    <input id="taken" type="number" min="1" max="100" step="1" placeholder="60" value="60">

    <label>Number signed for (FAILED)</label>
    <input id="signed" type="number" min="0" max="100" step="1">


    <button id="pstCalc" class="btn" type="button">Calculate</button>


    <p id="pstOut" class="result"></p>

  </div>
</div>


## FST Grade Calculator 

<div class="gc card">
  <div class="card-content">

    <h2>FST Calculator</h2>

    <label>FST Time (mm:ss)</label>
    <input id="fstTime" type="text" placeholder="e.g., 12:34">

    <button id="fstCalc" class="btn" type="button">Calculate</button>


    <p id="fstOut" class="result"></p>

  </div>
  <small style="color: var(--text-color)">
  Disclaimer: This score is an estimate using a 14.7-second-per-point rule and does not use the official grading table.
</small>

</div>

