// https://calculator.swiftutors.com/froude-number-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const froudeNumberRadio = document.getElementById('froudeNumberRadio');
const flowVelocityRadio = document.getElementById('flowVelocityRadio');
const meanDepthRadio = document.getElementById('meanDepthRadio');

let froudeNumber;
const g = 9.80665;
let flowVelocity = v1;
let meanDepth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

froudeNumberRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Flow Velocity (m/s)';
  variable2.textContent = '(hm) Mean Depth (m)';
  flowVelocity = v1;
  meanDepth = v2;
  result.textContent = '';
});

flowVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Fr) Froude Number ';
  variable2.textContent = '(hm) Mean Depth (m)';
  froudeNumber = v1;
  meanDepth = v2;
  result.textContent = '';
});

meanDepthRadio.addEventListener('click', function() {
  variable1.textContent = '(Fr) Froude Number ';
  variable2.textContent = '(V) Flow Velocity (m/s)';
  froudeNumber = v1;
  flowVelocity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(froudeNumberRadio.checked)
    result.textContent = `Froude Number  = ${computeFroudeNumber().toFixed(2)}`;

  else if(flowVelocityRadio.checked)
    result.textContent = `Flow Velocity = ${computeFlowVelocity().toFixed(2)} m/s`;

  else if(meanDepthRadio.checked)
    result.textContent = `Mean Depth = ${computeMeanDepth().toFixed(2)} m`;
})

// calculation

function computeFroudeNumber() {
  return Number(flowVelocity.value) / Math.sqrt(g * Number(meanDepth.value));
}

function computeFlowVelocity() {
  return Number(froudeNumber.value) * Math.sqrt(g * Number(meanDepth.value));
}

function computeMeanDepth() {
  return Math.pow(Number(flowVelocity.value), 2) / (g * Math.pow(Number(froudeNumber.value), 2));
}