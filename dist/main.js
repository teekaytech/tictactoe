/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameBoard = (tictactoebord) => {\n  const moves = ['', '', '', '', '', '', '', '', ''];\n\n  const showBoard = () => {\n    tictactoebord.className = 'board';\n  };\n\n  return { moves, showBoard };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/Gameboard.js?");

/***/ }),

/***/ "./src/Players.js":
/*!************************!*\
  !*** ./src/Players.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (name, mark, score) => ({ name, mark, score });\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/Players.js?");

/***/ }),

/***/ "./src/checkwin.js":
/*!*************************!*\
  !*** ./src/checkwin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Checkwin = (board, mark) => {\n  const ismatch = (val) => val === mark;\n  return board.every(ismatch);\n};\nconst WinCond = (board, mark) => {\n  const con1 = Checkwin(board.slice(0, 3), mark);\n  const con2 = Checkwin(board.slice(3, 6), mark);\n  const con3 = Checkwin(board.slice(6, 9), mark);\n  const con4 = Checkwin([board[0], board[3], board[6]], mark);\n  const con5 = Checkwin([board[1], board[4], board[7]], mark);\n  const con6 = Checkwin([board[2], board[5], board[8]], mark);\n  const con7 = Checkwin([board[0], board[4], board[8]], mark);\n  const con8 = Checkwin([board[2], board[4], board[6]], mark);\n  function checktrue(index) {\n    return index === true;\n  }\n  return [con1, con2, con3, con4, con5, con6, con7, con8].some(checktrue);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WinCond);\n\n\n//# sourceURL=webpack:///./src/checkwin.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: mainContainer, cells, tictactoebord, movehtml, form, player1Score, player2Score, players, startGame, restart, displaymsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainContainer\", function() { return mainContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cells\", function() { return cells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tictactoebord\", function() { return tictactoebord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movehtml\", function() { return movehtml; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"player1Score\", function() { return player1Score; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"player2Score\", function() { return player2Score; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"players\", function() { return players; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restart\", function() { return restart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaymsg\", function() { return displaymsg; });\nconst mainContainer = document.querySelector('.container');\nconst cells = document.querySelectorAll('.cell');\nconst tictactoebord = document.querySelector('#board');\nconst movehtml = document.querySelector('.move');\nconst form = document.querySelector('#form');\nconst player1Score = document.querySelector('#player1_score');\nconst player2Score = document.querySelector('#player2_score');\n\nconst players = document.querySelectorAll('.player');\nconst startGame = document.getElementById('start');\n\nconst restart = document.createElement('button');\nrestart.id = 'restart';\nrestart.className = 'restart';\nrestart.textContent = 'Restart';\n\nconst displaymsg = (msg) => {\n  movehtml.innerHTML = msg;\n};\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _checkwin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkwin */ \"./src/checkwin.js\");\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Players */ \"./src/Players.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n /*eslint-disable-line */\n\n\n\n\nconst showScore = (playersLis) => {\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"player1Score\"].innerHTML = `${playersLis[0].name} score : ${playersLis[0].score}`;\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"player2Score\"].innerHTML = `${playersLis[1].name} score : ${playersLis[1].score}`;\n};\nconst gameController = (board) => {\n  const render = () => {\n    for (let index = 0; index < _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"cells\"].length; index++) {\n      /*eslint-disable-line */\n      _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"cells\"][index].innerHTML = board[index];\n    }\n  };\n\n  const makeMove = (cell, mark) => {\n    if (board[cell.id] === '') {\n      board[cell.id] = mark;\n      render();\n      return board;\n    }\n    return board;\n  };\n\n  const validateMove = (cells, players) => {\n    let player = 0;\n    cells.forEach((cell) => {\n      cell.addEventListener('click', () => {\n        if (cell.innerHTML.length === 0) {\n          board = makeMove(cell, players[player].mark);\n          if (Object(_checkwin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board, players[player].mark)) {\n            Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])(`Game Over!!! ${players[player].name} Won`);\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"mainContainer\"].appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"]);\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"].className = 'none';\n            board = Object(_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"]).moves;\n            players[player].score += 1;\n            showScore(players);\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"].className = 'display';\n          } else if (\n            !Object(_checkwin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board, players[player].mark) &&\n            board.includes('')\n          ) {\n            player === 0 ? (player = 1) : (player = 0); /*eslint-disable-line */\n            Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])(`now it ${players[player].name} turn`);\n          } else {\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"].className = 'none';\n            Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])(' it a draw better luck next match!');\n            board = Object(_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"]).moves;\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"mainContainer\"].appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"]);\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"].className = 'display';\n          }\n        } else {\n          Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])('Invalid move');\n        }\n      });\n    });\n  };\n\n  return { render, validateMove };\n};\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  const playersLis = [];\n  const board = Object(_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"]);\n  playersLis.push(Object(_Players__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"players\"][0].value, 'X', 0));\n  playersLis.push(Object(_Players__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"players\"][1].value, 'O', 0));\n  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])(`hello players , ${playersLis[0].name} will play with ${playersLis[0].mark}\n  and ${playersLis[1].name} will play with ${playersLis[1].mark}`);\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"movehtml\"].style.padding = '10px';\n  const game = gameController(board.moves);\n  board.showBoard();\n  game.render();\n  game.validateMove(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"cells\"], playersLis);\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"form\"].className = 'none';\n  showScore(playersLis);\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"cells\"].forEach((cell) => {\n    cell.innerHTML = '';\n    cell.innerText = '';\n  });\n  const board = Object(_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"tictactoebord\"]);\n  board.showBoard();\n  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"displaymsg\"])('let start again');\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"restart\"].className = 'none';\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });