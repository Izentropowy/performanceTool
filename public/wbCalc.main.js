"use strict";
(self["webpackChunknew"] = self["webpackChunknew"] || []).push([["wbCalc"],{

/***/ "./src/wbCalc.js":
/*!***********************!*\
  !*** ./src/wbCalc.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializer */ "./src/initializer.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");


window.Chart = chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart;

console.log(_initializer__WEBPACK_IMPORTED_MODULE_0__.initialized);


const variables = Array.from(document.querySelectorAll('.form-control'));
console.log(variables);
const blockFuel = document.getElementById('block-fuel');
const row1 = document.getElementById('row-1');
const row2 = document.getElementById('row-2');
const baggage1 = document.getElementById('baggage-1');
const baggage2 = document.getElementById('baggage-2');

const takeoffWeight = document.getElementById('tow');
const moment = document.getElementById('moment');

const ctx = document.getElementById('myChart');

const BEM = 795.8;
const bemARM = 1.0864;
const fuelARM = 1.2192;
const row1ARM = 0.9398;
const row2ARM = 1.8542;
const bag1ARM = 2.413;
const bag2ARM = 3.1242;

function calcFuelMass(fuel){
    return fuel * 0.72;
}

function calcWeight(fuel, row1, row2, bag1, bag2){
    // allow blanks
    let values = [fuel, row1, row2, bag1, bag2, BEM];
    values = values.map(val => val === '' ? 0 : val);
    let totalMass = values.reduce((acc, val) => acc += parseFloat(val));
    return totalMass.toFixed(2);
}

function calcMoment(fuel, row1, row2, bag1, bag2){
    let moment0 = BEM * bemARM;
    let moment1 = fuel * fuelARM;
    let moment2 = row1 * row1ARM;
    let moment3 = row2 * row2ARM;
    let moment4 = bag1 * bag1ARM;
    let moment5 = bag2 * bag2ARM;
    let totalMoment = moment0 + moment1 + moment2 + moment3 + moment4 + moment5;
    return totalMoment.toFixed(2);
}

function updateChart(totalMoment, totalMass){
    chart.data.datasets[2].data[0] = {x: totalMoment, y: totalMass};
    chart.update();
}
function calcWbResults(){
    console.log('lalaa');
    fuel = calcFuelMass(blockFuel.value);
    let m = calcMoment(fuel, row1.value, row2.value, baggage1.value, baggage2.value);
    let w = calcWeight(fuel, row1.value, row2.value, baggage1.value, baggage2.value);
    takeoffWeight.textContent = w + ' kg';
    moment.textContent = m + ' kgm';
    updateChart(m, w);
}

variables.forEach(element => element.addEventListener('change', () => calcWbResults()));

// var chart = new Chart(ctx, {
//   data: {
//     datasets: [{
//         type: 'scatter',
//         label: 'Normal',
//         data: [
//             {x:610.56, y:680.4},
//             {x:783.36, y:884.5},
//             {x:1198.08, y:1156.7},
//             {x:1393.92, y:1156.7},
//             {x:817.92, y:680.4},
//             {x:610.56, y:680.4},
//         ],
//         borderWidth: 2,
//         showLine: true,
//         pointRadius: 0
//     },{
//         type: 'scatter',
//         label: 'Utility',
//         data: [
//             {x:610.56, y:680.4},
//             {x:783.36, y:884.5},
//             {x:956.16, y:997.9},
//             {x:1025.28, y:997.9},
//             {x:691.2, y:680.4},
//             {x:610.56, y:680.4},
//         ],
//         borderWidth: 2,
//         showLine: true,
//         pointRadius: 0
//     },{
//         type: 'scatter',
//         label: 'Position',
//         data: [
//             {x:610, y:680},
//         ],
//         pointBackgroundColor: 'black',
//         pointBorderColor: 'black',
//         pointRadius: 3,
//     }],
//   },
// });

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2JDYWxjLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFDL0IsZUFBZSwyQ0FBSzs7QUFFcEIsWUFBWSxxREFBVzs7O0FBR3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQyxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGdCQUFnQixvQkFBb0I7QUFDcEMsZ0JBQWdCLG9CQUFvQjtBQUNwQyxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQyxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGdCQUFnQixrQkFBa0I7QUFDbEMsZ0JBQWdCLG1CQUFtQjtBQUNuQyxnQkFBZ0IsaUJBQWlCO0FBQ2pDLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9zcmMvd2JDYWxjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVkIH0gZnJvbSAnLi9pbml0aWFsaXplcic7XG5pbXBvcnQge0NoYXJ0fSBmcm9tICdjaGFydC5qcyc7XG53aW5kb3cuQ2hhcnQgPSBDaGFydDtcblxuY29uc29sZS5sb2coaW5pdGlhbGl6ZWQpO1xuXG5cbmNvbnN0IHZhcmlhYmxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbCcpKTtcbmNvbnNvbGUubG9nKHZhcmlhYmxlcyk7XG5jb25zdCBibG9ja0Z1ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvY2stZnVlbCcpO1xuY29uc3Qgcm93MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3ctMScpO1xuY29uc3Qgcm93MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3ctMicpO1xuY29uc3QgYmFnZ2FnZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFnZ2FnZS0xJyk7XG5jb25zdCBiYWdnYWdlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWdnYWdlLTInKTtcblxuY29uc3QgdGFrZW9mZldlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3cnKTtcbmNvbnN0IG1vbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb21lbnQnKTtcblxuY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcblxuY29uc3QgQkVNID0gNzk1Ljg7XG5jb25zdCBiZW1BUk0gPSAxLjA4NjQ7XG5jb25zdCBmdWVsQVJNID0gMS4yMTkyO1xuY29uc3Qgcm93MUFSTSA9IDAuOTM5ODtcbmNvbnN0IHJvdzJBUk0gPSAxLjg1NDI7XG5jb25zdCBiYWcxQVJNID0gMi40MTM7XG5jb25zdCBiYWcyQVJNID0gMy4xMjQyO1xuXG5mdW5jdGlvbiBjYWxjRnVlbE1hc3MoZnVlbCl7XG4gICAgcmV0dXJuIGZ1ZWwgKiAwLjcyO1xufVxuXG5mdW5jdGlvbiBjYWxjV2VpZ2h0KGZ1ZWwsIHJvdzEsIHJvdzIsIGJhZzEsIGJhZzIpe1xuICAgIC8vIGFsbG93IGJsYW5rc1xuICAgIGxldCB2YWx1ZXMgPSBbZnVlbCwgcm93MSwgcm93MiwgYmFnMSwgYmFnMiwgQkVNXTtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiB2YWwgPT09ICcnID8gMCA6IHZhbCk7XG4gICAgbGV0IHRvdGFsTWFzcyA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKz0gcGFyc2VGbG9hdCh2YWwpKTtcbiAgICByZXR1cm4gdG90YWxNYXNzLnRvRml4ZWQoMik7XG59XG5cbmZ1bmN0aW9uIGNhbGNNb21lbnQoZnVlbCwgcm93MSwgcm93MiwgYmFnMSwgYmFnMil7XG4gICAgbGV0IG1vbWVudDAgPSBCRU0gKiBiZW1BUk07XG4gICAgbGV0IG1vbWVudDEgPSBmdWVsICogZnVlbEFSTTtcbiAgICBsZXQgbW9tZW50MiA9IHJvdzEgKiByb3cxQVJNO1xuICAgIGxldCBtb21lbnQzID0gcm93MiAqIHJvdzJBUk07XG4gICAgbGV0IG1vbWVudDQgPSBiYWcxICogYmFnMUFSTTtcbiAgICBsZXQgbW9tZW50NSA9IGJhZzIgKiBiYWcyQVJNO1xuICAgIGxldCB0b3RhbE1vbWVudCA9IG1vbWVudDAgKyBtb21lbnQxICsgbW9tZW50MiArIG1vbWVudDMgKyBtb21lbnQ0ICsgbW9tZW50NTtcbiAgICByZXR1cm4gdG90YWxNb21lbnQudG9GaXhlZCgyKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hhcnQodG90YWxNb21lbnQsIHRvdGFsTWFzcyl7XG4gICAgY2hhcnQuZGF0YS5kYXRhc2V0c1syXS5kYXRhWzBdID0ge3g6IHRvdGFsTW9tZW50LCB5OiB0b3RhbE1hc3N9O1xuICAgIGNoYXJ0LnVwZGF0ZSgpO1xufVxuZnVuY3Rpb24gY2FsY1diUmVzdWx0cygpe1xuICAgIGNvbnNvbGUubG9nKCdsYWxhYScpO1xuICAgIGZ1ZWwgPSBjYWxjRnVlbE1hc3MoYmxvY2tGdWVsLnZhbHVlKTtcbiAgICBsZXQgbSA9IGNhbGNNb21lbnQoZnVlbCwgcm93MS52YWx1ZSwgcm93Mi52YWx1ZSwgYmFnZ2FnZTEudmFsdWUsIGJhZ2dhZ2UyLnZhbHVlKTtcbiAgICBsZXQgdyA9IGNhbGNXZWlnaHQoZnVlbCwgcm93MS52YWx1ZSwgcm93Mi52YWx1ZSwgYmFnZ2FnZTEudmFsdWUsIGJhZ2dhZ2UyLnZhbHVlKTtcbiAgICB0YWtlb2ZmV2VpZ2h0LnRleHRDb250ZW50ID0gdyArICcga2cnO1xuICAgIG1vbWVudC50ZXh0Q29udGVudCA9IG0gKyAnIGtnbSc7XG4gICAgdXBkYXRlQ2hhcnQobSwgdyk7XG59XG5cbnZhcmlhYmxlcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjYWxjV2JSZXN1bHRzKCkpKTtcblxuLy8gdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuLy8gICBkYXRhOiB7XG4vLyAgICAgZGF0YXNldHM6IFt7XG4vLyAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcbi8vICAgICAgICAgbGFiZWw6ICdOb3JtYWwnLFxuLy8gICAgICAgICBkYXRhOiBbXG4vLyAgICAgICAgICAgICB7eDo2MTAuNTYsIHk6NjgwLjR9LFxuLy8gICAgICAgICAgICAge3g6NzgzLjM2LCB5Ojg4NC41fSxcbi8vICAgICAgICAgICAgIHt4OjExOTguMDgsIHk6MTE1Ni43fSxcbi8vICAgICAgICAgICAgIHt4OjEzOTMuOTIsIHk6MTE1Ni43fSxcbi8vICAgICAgICAgICAgIHt4OjgxNy45MiwgeTo2ODAuNH0sXG4vLyAgICAgICAgICAgICB7eDo2MTAuNTYsIHk6NjgwLjR9LFxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBib3JkZXJXaWR0aDogMixcbi8vICAgICAgICAgc2hvd0xpbmU6IHRydWUsXG4vLyAgICAgICAgIHBvaW50UmFkaXVzOiAwXG4vLyAgICAgfSx7XG4vLyAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcbi8vICAgICAgICAgbGFiZWw6ICdVdGlsaXR5Jyxcbi8vICAgICAgICAgZGF0YTogW1xuLy8gICAgICAgICAgICAge3g6NjEwLjU2LCB5OjY4MC40fSxcbi8vICAgICAgICAgICAgIHt4Ojc4My4zNiwgeTo4ODQuNX0sXG4vLyAgICAgICAgICAgICB7eDo5NTYuMTYsIHk6OTk3Ljl9LFxuLy8gICAgICAgICAgICAge3g6MTAyNS4yOCwgeTo5OTcuOX0sXG4vLyAgICAgICAgICAgICB7eDo2OTEuMiwgeTo2ODAuNH0sXG4vLyAgICAgICAgICAgICB7eDo2MTAuNTYsIHk6NjgwLjR9LFxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBib3JkZXJXaWR0aDogMixcbi8vICAgICAgICAgc2hvd0xpbmU6IHRydWUsXG4vLyAgICAgICAgIHBvaW50UmFkaXVzOiAwXG4vLyAgICAgfSx7XG4vLyAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcbi8vICAgICAgICAgbGFiZWw6ICdQb3NpdGlvbicsXG4vLyAgICAgICAgIGRhdGE6IFtcbi8vICAgICAgICAgICAgIHt4OjYxMCwgeTo2ODB9LFxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbi8vICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ2JsYWNrJyxcbi8vICAgICAgICAgcG9pbnRSYWRpdXM6IDMsXG4vLyAgICAgfV0sXG4vLyAgIH0sXG4vLyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=