"use strict";
(self["webpackChunkexternal_project"] = self["webpackChunkexternal_project"] || []).push([["client_templates_project_tsx"],{

/***/ "./client/components/description.tsx":
/*!*******************************************!*\
  !*** ./client/components/description.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Description = function Description(_a) {
  var description = _a.description;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
    id: 'description',
    dangerouslySetInnerHTML: {
      __html: description
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./client/components/heading.tsx":
/*!***************************************!*\
  !*** ./client/components/heading.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



var Heading = function Heading(_a) {
  var topic = _a.topic,
      title = _a.title,
      lessonNumber = _a.lessonNumber,
      goToNextLesson = _a.goToNextLesson,
      goToPreviousLesson = _a.goToPreviousLesson;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
    children: [goToPreviousLesson && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      onClick: function onClick() {
        return goToPreviousLesson();
      }
    }, {
      children: "<"
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", __assign({
      id: 'project-heading'
    }, {
      children: [topic, " - ", title, lessonNumber && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LessonNumber, {
        lessonNumber: lessonNumber
      })]
    })), goToNextLesson && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      onClick: function onClick() {
        return goToNextLesson();
      }
    }, {
      children: ">"
    }))]
  });
};

var LessonNumber = function LessonNumber(_a) {
  var lessonNumber = _a.lessonNumber;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [' ', "- Lesson", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
      id: 'lesson-number',
      className: 'sparkle'
    }, {
      children: lessonNumber
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./client/components/project-controls.tsx":
/*!************************************************!*\
  !*** ./client/components/project-controls.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



var ProjectControls = function ProjectControls(_a) {
  var runTests = _a.runTests,
      resetProject = _a.resetProject;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", __assign({
    className: 'project-controls'
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      onClick: function onClick() {
        return runTests();
      }
    }, {
      children: "Run Tests"
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      onClick: function onClick() {
        return resetProject();
      }
    }, {
      children: "Reset Step"
    }))]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectControls);

/***/ }),

/***/ "./client/components/project-output.tsx":
/*!**********************************************!*\
  !*** ./client/components/project-output.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader */ "./client/components/loader.tsx");
/* harmony import */ var _project_tests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-tests */ "./client/components/project-tests.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};






var ProjectOutput = function ProjectOutput(_a) {
  var isLoading = _a.isLoading,
      hints = _a.hints,
      tests = _a.tests,
      cons = _a.cons;

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      content = _b[0],
      setContent = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('tests'),
      selectedBtn = _c[0],
      setSelectedBtn = _c[1];

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", __assign({
    className: 'project-output'
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: 'output-btn',
          disabled: selectedBtn === 'tests',
          onClick: function onClick() {
            setSelectedBtn('tests');
          }
        }, {
          children: "Tests"
        }))
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: 'output-btn',
          disabled: selectedBtn === 'console',
          onClick: function onClick() {
            setContent(cons);
            setSelectedBtn('console');
          }
        }, {
          children: "Console"
        }))
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: 'output-btn',
          disabled: selectedBtn === 'hints',
          onClick: function onClick() {
            setContent(hints);
            setSelectedBtn('hints');
          }
        }, {
          children: "Hints"
        }))
      })]
    }), isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : selectedBtn === 'tests' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: 'project-output-content'
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_project_tests__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tests: tests
      })
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: 'project-output-content',
      dangerouslySetInnerHTML: {
        __html: content
      }
    })]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectOutput);

/***/ }),

/***/ "./client/components/project-tests.tsx":
/*!*********************************************!*\
  !*** ./client/components/project-tests.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./client/components/test.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var ProjectTests = function ProjectTests(_a) {
  var tests = _a.tests;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
    children: tests.map(function (_a, i) {
      var testText = _a.testText,
          passed = _a.passed,
          isLoading = _a.isLoading,
          testId = _a.testId;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_test__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, {
        testText: testText,
        passed: passed,
        isLoading: isLoading,
        testId: testId
      }), i);
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTests);

/***/ }),

/***/ "./client/components/ruler.tsx":
/*!*************************************!*\
  !*** ./client/components/ruler.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var rulerStyle = {
  width: '80%',
  height: '1px',
  backgroundColor: '#ccc',
  margin: '0 auto'
};

var Ruler = function Ruler() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: rulerStyle
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Ruler);

/***/ }),

/***/ "./client/components/test.tsx":
/*!************************************!*\
  !*** ./client/components/test.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./client/components/loader.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var Test = function Test(_a) {
  var testText = _a.testText,
      passed = _a.passed,
      isLoading = _a.isLoading;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({
      className: passed ? 'passed' : 'failed'
    }, {
      children: [isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: '20'
      }) : passed ? '✓' : '✗', " ", testText]
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./client/templates/project.tsx":
/*!**************************************!*\
  !*** ./client/templates/project.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/description */ "./client/components/description.tsx");
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/heading */ "./client/components/heading.tsx");
/* harmony import */ var _project_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.css */ "./client/templates/project.css");
/* harmony import */ var _components_ruler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ruler */ "./client/components/ruler.tsx");
/* harmony import */ var _components_project_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project-controls */ "./client/components/project-controls.tsx");
/* harmony import */ var _components_project_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project-output */ "./client/components/project-output.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};









var Project = function Project(_a) {
  var runTests = _a.runTests,
      resetProject = _a.resetProject,
      goToNextLesson = _a.goToNextLesson,
      goToPreviousLesson = _a.goToPreviousLesson,
      isLoading = _a.isLoading,
      title = _a.title,
      topic = _a.topic,
      lessonNumber = _a.lessonNumber,
      description = _a.description,
      tests = _a.tests,
      hints = _a.hints,
      cons = _a.cons;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_heading__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, {
      goToNextLesson: goToNextLesson,
      goToPreviousLesson: goToPreviousLesson,
      topic: topic,
      title: title,
      lessonNumber: lessonNumber
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_description__WEBPACK_IMPORTED_MODULE_1__["default"], {
      description: description
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_project_controls__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, {
      runTests: runTests,
      resetProject: resetProject
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_project_output__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, {
      isLoading: isLoading,
      hints: hints,
      tests: tests,
      cons: cons
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/templates/project.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/templates/project.css ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav > button {\n  background-color: var(--dark-3);\n  color: rgb(230, 230, 230);\n  font-size: 1.8rem;\n  font-weight: bold;\n  width: 50px;\n  height: 100%;\n  padding: 0.5rem;\n  cursor: pointer;\n  outline: none;\n  margin: 0 1rem;\n}\nnav > button:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n}\n\n#project-heading {\n  font-size: 1.5rem;\n}\n\n#lesson-number {\n  border-radius: 50%;\n  width: 2rem;\n}\n\n.sparkle {\n  animation-duration: 1s;\n  animation-name: sparkle;\n}\n\n@keyframes sparkle {\n  0% {\n    outline-color: var(--dark-purple);\n    outline-style: dotted;\n    outline-size: 3px;\n    font-size: 0.3em;\n    color: rgb(255, 0, 0);\n  }\n  20% {\n    outline-color: var(--light-purple);\n    color: rgb(251, 255, 0);\n  }\n  40% {\n    outline-style: dotted;\n    outline-color: var(--light-blue);\n    color: rgb(0, 255, 0);\n  }\n  60% {\n    outline-color: var(--light-green);\n    color: rgb(0, 162, 255);\n  }\n  80% {\n    outline-color: var(--light-yellow);\n    color: rgb(174, 0, 255);\n  }\n  100% {\n    font-size: 1em;\n    outline-style: none;\n    color: none;\n  }\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n.project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 0;\n}\n.project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.project-output-content {\n  background-color: black;\n  color: white;\n  width: 100%;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n}\n", "",{"version":3,"sources":["webpack://./client/templates/project.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,eAAe;EACf,aAAa;EACb,cAAc;AAChB;AACA;EACE,mCAAmC;EACnC,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE;IACE,iCAAiC;IACjC,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;EACvB;EACA;IACE,kCAAkC;IAClC,uBAAuB;EACzB;EACA;IACE,qBAAqB;IACrB,gCAAgC;IAChC,qBAAqB;EACvB;EACA;IACE,iCAAiC;IACjC,uBAAuB;EACzB;EACA;IACE,kCAAkC;IAClC,uBAAuB;EACzB;EACA;IACE,cAAc;IACd,mBAAmB;IACnB,WAAW;EACb;AACF;;AAEA;EACE,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,0EAA0E;EAC1E,iBAAiB;EACjB,gCAAgC;EAChC,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB","sourcesContent":["nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav > button {\n  background-color: var(--dark-3);\n  color: rgb(230, 230, 230);\n  font-size: 1.8rem;\n  font-weight: bold;\n  width: 50px;\n  height: 100%;\n  padding: 0.5rem;\n  cursor: pointer;\n  outline: none;\n  margin: 0 1rem;\n}\nnav > button:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n}\n\n#project-heading {\n  font-size: 1.5rem;\n}\n\n#lesson-number {\n  border-radius: 50%;\n  width: 2rem;\n}\n\n.sparkle {\n  animation-duration: 1s;\n  animation-name: sparkle;\n}\n\n@keyframes sparkle {\n  0% {\n    outline-color: var(--dark-purple);\n    outline-style: dotted;\n    outline-size: 3px;\n    font-size: 0.3em;\n    color: rgb(255, 0, 0);\n  }\n  20% {\n    outline-color: var(--light-purple);\n    color: rgb(251, 255, 0);\n  }\n  40% {\n    outline-style: dotted;\n    outline-color: var(--light-blue);\n    color: rgb(0, 255, 0);\n  }\n  60% {\n    outline-color: var(--light-green);\n    color: rgb(0, 162, 255);\n  }\n  80% {\n    outline-color: var(--light-yellow);\n    color: rgb(174, 0, 255);\n  }\n  100% {\n    font-size: 1em;\n    outline-style: none;\n    color: none;\n  }\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n.project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 0;\n}\n.project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.project-output-content {\n  background-color: black;\n  color: white;\n  width: 100%;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/templates/project.css":
/*!**************************************!*\
  !*** ./client/templates/project.css ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./client/templates/project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19wcm9qZWN0X3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBa0M7TUFBL0JDLFdBQVc7RUFDaEMsT0FDRUMsc0RBQUFBO0lBQ0VDLEVBQUUsRUFBQyxhQURMO0lBRUVDLHVCQUF1QixFQUFFO01BQUVDLE1BQU0sRUFBRUo7SUFBVjtFQUYzQixFQURGO0FBTUQsQ0FQRDs7QUFTQSwrREFBZUYsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ04sRUFBRCxFQU1EO01BTGJPLEtBQUs7TUFDTEMsS0FBSztNQUNMQyxZQUFZO01BQ1pDLGNBQWM7TUFDZEMsa0JBQWtCO0VBRWxCLE9BQ0VDLHVEQUFBQTtJQUFBQyxXQUNHRixrQkFBa0IsSUFDakJULHNEQUFBQTtNQUFRWSxPQUFPLEVBQUU7UUFBTSx5QkFBa0IsRUFBbEI7TUFBb0I7SUFBM0MsR0FBMkM7TUFBQUQ7SUFBQSxDQUEzQyxFQUZKLEVBSUVELHVEQUFBQTtNQUFJVCxFQUFFLEVBQUM7SUFBUCxHQUF3QjtNQUFBVSxXQUNyQk4sS0FEcUIsRUFDaEIsS0FEZ0IsRUFDWEMsS0FEVyxFQUVyQkMsWUFBWSxJQUFJUCxzREFBQUEsQ0FBQ2EsWUFBRCxFQUFhO1FBQUNOLFlBQVksRUFBRUE7TUFBZixDQUFiLENBRks7SUFBQSxDQUF4QixFQUpGLEVBUUdDLGNBQWMsSUFBSVIsc0RBQUFBO01BQVFZLE9BQU8sRUFBRTtRQUFNLHFCQUFjLEVBQWQ7TUFBZ0I7SUFBdkMsR0FBdUM7TUFBQUQ7SUFBQSxDQUF2QyxFQVJyQjtFQUFBLEVBREY7QUFZRCxDQW5CRDs7QUFxQkEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2YsRUFBRCxFQUEyQztNQUF4Q1MsWUFBWTtFQUNsQyxPQUNFRyx1REFBQUEsQ0FB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dUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDbDdOO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTywrREFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtY29udHJvbHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LW91dHB1dC50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtdGVzdHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9ydWxlci50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Rlc3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzIiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzP2U0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERlc2NyaXB0aW9uUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IGRlc2NyaXB0aW9uIH06IERlc2NyaXB0aW9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgID48L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiIsImltcG9ydCB7IEYgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBIZWFkaW5nUHJvcHMge1xuICB0b3BpYzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBsZXNzb25OdW1iZXI/OiBudW1iZXI7XG4gIGdvVG9OZXh0TGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbiAgZ29Ub1ByZXZpb3VzTGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgSGVhZGluZyA9ICh7XG4gIHRvcGljLFxuICB0aXRsZSxcbiAgbGVzc29uTnVtYmVyLFxuICBnb1RvTmV4dExlc3NvbixcbiAgZ29Ub1ByZXZpb3VzTGVzc29uXG59OiBIZWFkaW5nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2dvVG9QcmV2aW91c0xlc3NvbiAmJiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub1ByZXZpb3VzTGVzc29uKCl9PiZsdDs8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8aDEgaWQ9J3Byb2plY3QtaGVhZGluZyc+XG4gICAgICAgIHt0b3BpY30gLSB7dGl0bGV9XG4gICAgICAgIHtsZXNzb25OdW1iZXIgJiYgPExlc3Nvbk51bWJlciBsZXNzb25OdW1iZXI9e2xlc3Nvbk51bWJlcn0gLz59XG4gICAgICA8L2gxPlxuICAgICAge2dvVG9OZXh0TGVzc29uICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub05leHRMZXNzb24oKX0+Jmd0OzwvYnV0dG9uPn1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IExlc3Nvbk51bWJlciA9ICh7IGxlc3Nvbk51bWJlciB9OiB7IGxlc3Nvbk51bWJlcjogbnVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeycgJ31cbiAgICAgIC0gTGVzc29ueycgJ31cbiAgICAgIDxzcGFuIGlkPSdsZXNzb24tbnVtYmVyJyBjbGFzc05hbWU9J3NwYXJrbGUnPlxuICAgICAgICB7bGVzc29uTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCB7IEYgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9qZWN0Q29udHJvbHNQcm9wcyB7XG4gIHJ1blRlc3RzOiBGPHZvaWQsIHZvaWQ+O1xuICByZXNldFByb2plY3Q6IEY8dm9pZCwgdm9pZD47XG59XG5cbmNvbnN0IFByb2plY3RDb250cm9scyA9ICh7IHJ1blRlc3RzLCByZXNldFByb2plY3QgfTogUHJvamVjdENvbnRyb2xzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3Byb2plY3QtY29udHJvbHMnPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBydW5UZXN0cygpfT5SdW4gVGVzdHM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVzZXRQcm9qZWN0KCl9PlJlc2V0IFN0ZXA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29udHJvbHM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgUHJvamVjdFRlc3RzIGZyb20gJy4vcHJvamVjdC10ZXN0cyc7XG5cbmludGVyZmFjZSBQcm9qZWN0T3V0cHV0UHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGhpbnRzOiBzdHJpbmc7XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2plY3RPdXRwdXQgPSAoe1xuICBpc0xvYWRpbmcsXG4gIGhpbnRzLFxuICB0ZXN0cyxcbiAgY29uc1xufTogUHJvamVjdE91dHB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlPGFueT4oJycpO1xuICBjb25zdCBbc2VsZWN0ZWRCdG4sIHNldFNlbGVjdGVkQnRuXSA9IHVzZVN0YXRlKCd0ZXN0cycpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0LW91dHB1dCc+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J291dHB1dC1idG4nXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRCdG4gPT09ICd0ZXN0cyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKCd0ZXN0cycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZXN0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRwdXQtYnRuJ1xuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSAnY29uc29sZSd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbnRlbnQoY29ucyk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKCdjb25zb2xlJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnNvbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0cHV0LWJ0bidcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJ0biA9PT0gJ2hpbnRzJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q29udGVudChoaW50cyk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKCdoaW50cycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaW50c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICkgOiBzZWxlY3RlZEJ0biA9PT0gJ3Rlc3RzJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3Qtb3V0cHV0LWNvbnRlbnQnPlxuICAgICAgICAgIDxQcm9qZWN0VGVzdHMgdGVzdHM9e3Rlc3RzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2plY3Qtb3V0cHV0LWNvbnRlbnQnXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE91dHB1dDtcbiIsImltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi90ZXN0JztcblxuaW50ZXJmYWNlIFByb2plY3RUZXN0c1Byb3BzIHtcbiAgdGVzdHM6IFRlc3RUeXBlW107XG59XG5cbmNvbnN0IFByb2plY3RUZXN0cyA9ICh7IHRlc3RzIH06IFByb2plY3RUZXN0c1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Rlc3RzLm1hcCgoeyB0ZXN0VGV4dCwgcGFzc2VkLCBpc0xvYWRpbmcsIHRlc3RJZCB9LCBpKSA9PiAoXG4gICAgICAgIDxUZXN0XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXN0VGV4dCxcbiAgICAgICAgICAgIHBhc3NlZCxcbiAgICAgICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgICAgIHRlc3RJZFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRlc3RzO1xuIiwiY29uc3QgcnVsZXJTdHlsZSA9IHtcbiAgd2lkdGg6ICc4MCUnLFxuICBoZWlnaHQ6ICcxcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcbiAgbWFyZ2luOiAnMCBhdXRvJ1xufTtcbmNvbnN0IFJ1bGVyID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBzdHlsZT17cnVsZXJTdHlsZX0+PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXI7XG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcbmltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBUZXN0ID0gKHsgdGVzdFRleHQsIHBhc3NlZCwgaXNMb2FkaW5nIH06IFRlc3RUeXBlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwYXNzZWQgPyAncGFzc2VkJyA6ICdmYWlsZWQnfT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkZXIgc2l6ZT17JzIwJ30gLz4gOiBwYXNzZWQgPyAn4pyTJyA6ICfinJcnfSB7dGVzdFRleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGluZyc7XG5pbXBvcnQgJy4vcHJvamVjdC5jc3MnO1xuaW1wb3J0IHsgRiwgVGVzdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ydWxlcic7XG5pbXBvcnQgUHJvamVjdENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1jb250cm9scyc7XG5pbXBvcnQgUHJvamVjdE91dHB1dCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3Qtb3V0cHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0UHJvcHMge1xuICBydW5UZXN0czogRjx2b2lkLCB2b2lkPjtcbiAgcmVzZXRQcm9qZWN0OiBGPHZvaWQsIHZvaWQ+O1xuICBnb1RvTmV4dExlc3NvbjogRjx2b2lkLCB2b2lkPjtcbiAgZ29Ub1ByZXZpb3VzTGVzc29uOiBGPHZvaWQsIHZvaWQ+O1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGxlc3Nvbk51bWJlcjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbiAgaGludHM6IHN0cmluZztcbiAgY29uczogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9qZWN0ID0gKHtcbiAgcnVuVGVzdHMsXG4gIHJlc2V0UHJvamVjdCxcbiAgZ29Ub05leHRMZXNzb24sXG4gIGdvVG9QcmV2aW91c0xlc3NvbixcbiAgaXNMb2FkaW5nLFxuICB0aXRsZSxcbiAgdG9waWMsXG4gIGxlc3Nvbk51bWJlcixcbiAgZGVzY3JpcHRpb24sXG4gIHRlc3RzLFxuICBoaW50cyxcbiAgY29uc1xufTogUHJvamVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgZ29Ub05leHRMZXNzb24sXG4gICAgICAgICAgZ29Ub1ByZXZpb3VzTGVzc29uLFxuICAgICAgICAgIHRvcGljLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGxlc3Nvbk51bWJlclxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxEZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8UHJvamVjdENvbnRyb2xzIHsuLi57IHJ1blRlc3RzLCByZXNldFByb2plY3QgfX0gLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxQcm9qZWN0T3V0cHV0IHsuLi57IGlzTG9hZGluZywgaGludHMsIHRlc3RzLCBjb25zIH19IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxubmF2ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNsZXNzb24tbnVtYmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uc3BhcmtsZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNwYXJrbGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BhcmtsZSB7XFxuICAwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcXG4gICAgb3V0bGluZS1zdHlsZTogZG90dGVkO1xcbiAgICBvdXRsaW5lLXNpemU6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjNlbTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gICAgY29sb3I6IHJnYigyNTEsIDI1NSwgMCk7XFxuICB9XFxuICA0MCUge1xcbiAgICBvdXRsaW5lLXN0eWxlOiBkb3R0ZWQ7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XFxuICB9XFxuICA2MCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMCwgMTYyLCAyNTUpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgY29sb3I6IHJnYigxNzQsIDAsIDI1NSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBub25lO1xcbiAgfVxcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uID4gcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnByb2plY3QtY29udHJvbHMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXllbGxvdyksIHZhcigtLWRhcmsteWVsbG93KSk7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG59XFxuXFxuLnByb2plY3Qtb3V0cHV0IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4ucHJvamVjdC1vdXRwdXQgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wcm9qZWN0LW91dHB1dCA+IHVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm91dHB1dC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ub3V0cHV0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3V0cHV0LWJ0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHJvamVjdC1vdXRwdXQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC90ZW1wbGF0ZXMvcHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEVBQTBFO0VBQzFFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxubmF2ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNsZXNzb24tbnVtYmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uc3BhcmtsZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNwYXJrbGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BhcmtsZSB7XFxuICAwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcXG4gICAgb3V0bGluZS1zdHlsZTogZG90dGVkO1xcbiAgICBvdXRsaW5lLXNpemU6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjNlbTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gICAgY29sb3I6IHJnYigyNTEsIDI1NSwgMCk7XFxuICB9XFxuICA0MCUge1xcbiAgICBvdXRsaW5lLXN0eWxlOiBkb3R0ZWQ7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XFxuICB9XFxuICA2MCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGNvbG9yOiByZ2IoMCwgMTYyLCAyNTUpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgY29sb3I6IHJnYigxNzQsIDAsIDI1NSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBub25lO1xcbiAgfVxcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uID4gcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnByb2plY3QtY29udHJvbHMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXllbGxvdyksIHZhcigtLWRhcmsteWVsbG93KSk7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG59XFxuXFxuLnByb2plY3Qtb3V0cHV0IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4ucHJvamVjdC1vdXRwdXQgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wcm9qZWN0LW91dHB1dCA+IHVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm91dHB1dC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ub3V0cHV0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3V0cHV0LWJ0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHJvamVjdC1vdXRwdXQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uIiwiX2EiLCJkZXNjcmlwdGlvbiIsIl9qc3giLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiSGVhZGluZyIsInRvcGljIiwidGl0bGUiLCJsZXNzb25OdW1iZXIiLCJnb1RvTmV4dExlc3NvbiIsImdvVG9QcmV2aW91c0xlc3NvbiIsIl9qc3hzIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiTGVzc29uTnVtYmVyIiwiY2xhc3NOYW1lIiwiUHJvamVjdENvbnRyb2xzIiwicnVuVGVzdHMiLCJyZXNldFByb2plY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsIlByb2plY3RUZXN0cyIsIlByb2plY3RPdXRwdXQiLCJpc0xvYWRpbmciLCJoaW50cyIsInRlc3RzIiwiY29ucyIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2VsZWN0ZWRCdG4iLCJzZXRTZWxlY3RlZEJ0biIsImRpc2FibGVkIiwiVGVzdCIsIm1hcCIsImkiLCJ0ZXN0VGV4dCIsInBhc3NlZCIsInRlc3RJZCIsIl9fYXNzaWduIiwicnVsZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwiUnVsZXIiLCJzdHlsZSIsInNpemUiLCJQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==