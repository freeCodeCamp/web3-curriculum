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
    id: "description",
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
      id: "project-heading"
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
    children: [" ", "- Lesson", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
      id: "lesson-number",
      className: "sparkle"
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
    className: "project-controls"
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

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      content = _b[0],
      setContent = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("tests"),
      selectedBtn = _c[0],
      setSelectedBtn = _c[1];

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", __assign({
    className: "project-output"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: "output-btn",
          disabled: selectedBtn === "tests",
          onClick: function onClick() {
            setSelectedBtn("tests");
          }
        }, {
          children: "Tests"
        }))
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: "output-btn",
          disabled: selectedBtn === "console",
          onClick: function onClick() {
            setContent(cons);
            setSelectedBtn("console");
          }
        }, {
          children: "Console"
        }))
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
          className: "output-btn",
          disabled: selectedBtn === "hints",
          onClick: function onClick() {
            setContent(hints);
            setSelectedBtn("hints");
          }
        }, {
          children: "Hints"
        }))
      })]
    }), isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : selectedBtn === "tests" ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "project-output-content"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_project_tests__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tests: tests
      })
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "project-output-content",
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
  width: "80%",
  height: "1px",
  backgroundColor: "#ccc",
  margin: "0 auto"
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
      className: passed ? "passed" : "failed"
    }, {
      children: [isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: "20"
      }) : passed ? "✓" : "✗", " ", testText]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19wcm9qZWN0X3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBa0M7TUFBL0JDLFdBQVc7RUFDaEMsT0FDRUMsc0RBQUFBO0lBQ0VDLEVBQUUsRUFBQyxhQURMO0lBRUVDLHVCQUF1QixFQUFFO01BQUVDLE1BQU0sRUFBRUo7SUFBVjtFQUYzQixFQURGO0FBTUQsQ0FQRDs7QUFTQSwrREFBZUYsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ04sRUFBRCxFQU1EO01BTGJPLEtBQUs7TUFDTEMsS0FBSztNQUNMQyxZQUFZO01BQ1pDLGNBQWM7TUFDZEMsa0JBQWtCO0VBRWxCLE9BQ0VDLHVEQUFBQTtJQUFBQyxXQUNHRixrQkFBa0IsSUFDakJULHNEQUFBQTtNQUFRWSxPQUFPLEVBQUU7UUFBTSx5QkFBa0IsRUFBbEI7TUFBb0I7SUFBM0MsR0FBMkM7TUFBQUQ7SUFBQSxDQUEzQyxFQUZKLEVBSUVELHVEQUFBQTtNQUFJVCxFQUFFLEVBQUM7SUFBUCxHQUF3QjtNQUFBVSxXQUNyQk4sS0FEcUIsRUFDaEIsS0FEZ0IsRUFDWEMsS0FEVyxFQUVyQkMsWUFBWSxJQUFJUCxzREFBQUEsQ0FBQ2EsWUFBRCxFQUFhO1FBQUNOLFlBQVksRUFBRUE7TUFBZixDQUFiLENBRks7SUFBQSxDQUF4QixFQUpGLEVBUUdDLGNBQWMsSUFBSVIsc0RBQUFBO01BQVFZLE9BQU8sRUFBRTtRQUFNLHFCQUFjLEVBQWQ7TUFBZ0I7SUFBdkMsR0FBdUM7TUFBQUQ7SUFBQSxDQUF2QyxFQVJyQjtFQUFBLEVBREY7QUFZRCxDQW5CRDs7QUFxQkEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2YsRUFBRCxFQUEyQztNQUF4Q1MsWUFBWTtFQUNsQyxPQUNFRyx1REFBQUEsQ0FB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dUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDbDdOO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTywrREFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtY29udHJvbHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LW91dHB1dC50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtdGVzdHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9ydWxlci50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Rlc3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzIiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzP2U0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERlc2NyaXB0aW9uUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IGRlc2NyaXB0aW9uIH06IERlc2NyaXB0aW9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgPjwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uO1xuIiwiaW1wb3J0IHsgRiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSGVhZGluZ1Byb3BzIHtcbiAgdG9waWM6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbGVzc29uTnVtYmVyPzogbnVtYmVyO1xuICBnb1RvTmV4dExlc3Nvbj86IEY8dm9pZCwgdm9pZD47XG4gIGdvVG9QcmV2aW91c0xlc3Nvbj86IEY8dm9pZCwgdm9pZD47XG59XG5cbmNvbnN0IEhlYWRpbmcgPSAoe1xuICB0b3BpYyxcbiAgdGl0bGUsXG4gIGxlc3Nvbk51bWJlcixcbiAgZ29Ub05leHRMZXNzb24sXG4gIGdvVG9QcmV2aW91c0xlc3Nvbixcbn06IEhlYWRpbmdQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICB7Z29Ub1ByZXZpb3VzTGVzc29uICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb1RvUHJldmlvdXNMZXNzb24oKX0+Jmx0OzwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxoMSBpZD1cInByb2plY3QtaGVhZGluZ1wiPlxuICAgICAgICB7dG9waWN9IC0ge3RpdGxlfVxuICAgICAgICB7bGVzc29uTnVtYmVyICYmIDxMZXNzb25OdW1iZXIgbGVzc29uTnVtYmVyPXtsZXNzb25OdW1iZXJ9IC8+fVxuICAgICAgPC9oMT5cbiAgICAgIHtnb1RvTmV4dExlc3NvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvVG9OZXh0TGVzc29uKCl9PiZndDs8L2J1dHRvbj59XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBMZXNzb25OdW1iZXIgPSAoeyBsZXNzb25OdW1iZXIgfTogeyBsZXNzb25OdW1iZXI6IG51bWJlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcIiBcIn1cbiAgICAgIC0gTGVzc29ue1wiIFwifVxuICAgICAgPHNwYW4gaWQ9XCJsZXNzb24tbnVtYmVyXCIgY2xhc3NOYW1lPVwic3BhcmtsZVwiPlxuICAgICAgICB7bGVzc29uTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCB7IEYgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb2plY3RDb250cm9sc1Byb3BzIHtcbiAgcnVuVGVzdHM6IEY8dm9pZCwgdm9pZD47XG4gIHJlc2V0UHJvamVjdDogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgUHJvamVjdENvbnRyb2xzID0gKHsgcnVuVGVzdHMsIHJlc2V0UHJvamVjdCB9OiBQcm9qZWN0Q29udHJvbHNQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3QtY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdHMoKX0+UnVuIFRlc3RzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlc2V0UHJvamVjdCgpfT5SZXNldCBTdGVwPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRyb2xzO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgeyBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFByb2plY3RUZXN0cyBmcm9tIFwiLi9wcm9qZWN0LXRlc3RzXCI7XG5cbmludGVyZmFjZSBQcm9qZWN0T3V0cHV0UHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGhpbnRzOiBzdHJpbmc7XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2plY3RPdXRwdXQgPSAoe1xuICBpc0xvYWRpbmcsXG4gIGhpbnRzLFxuICB0ZXN0cyxcbiAgY29ucyxcbn06IFByb2plY3RPdXRwdXRQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRCdG4sIHNldFNlbGVjdGVkQnRuXSA9IHVzZVN0YXRlKFwidGVzdHNcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0LW91dHB1dFwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0LWJ0blwiXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRCdG4gPT09IFwidGVzdHNcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJ0ZXN0c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVzdHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dC1idG5cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSBcImNvbnNvbGVcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q29udGVudChjb25zKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJjb25zb2xlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25zb2xlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQtYnRuXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJ0biA9PT0gXCJoaW50c1wifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb250ZW50KGhpbnRzKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJoaW50c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGludHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApIDogc2VsZWN0ZWRCdG4gPT09IFwidGVzdHNcIiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW91dHB1dC1jb250ZW50XCI+XG4gICAgICAgICAgPFByb2plY3RUZXN0cyB0ZXN0cz17dGVzdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3Qtb3V0cHV0LWNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RPdXRwdXQ7XG4iLCJpbXBvcnQgeyBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdFwiO1xuXG5pbnRlcmZhY2UgUHJvamVjdFRlc3RzUHJvcHMge1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbn1cblxuY29uc3QgUHJvamVjdFRlc3RzID0gKHsgdGVzdHMgfTogUHJvamVjdFRlc3RzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7dGVzdHMubWFwKCh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZywgdGVzdElkIH0sIGkpID0+IChcbiAgICAgICAgPFRlc3RcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIHRlc3RUZXh0LFxuICAgICAgICAgICAgcGFzc2VkLFxuICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRlc3RzO1xuIiwiY29uc3QgcnVsZXJTdHlsZSA9IHtcbiAgd2lkdGg6IFwiODAlXCIsXG4gIGhlaWdodDogXCIxcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIixcbiAgbWFyZ2luOiBcIjAgYXV0b1wiLFxufTtcbmNvbnN0IFJ1bGVyID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBzdHlsZT17cnVsZXJTdHlsZX0+PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXI7XG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xuaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgVGVzdCA9ICh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZyB9OiBUZXN0VHlwZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cGFzc2VkID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCJ9PlxuICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRlciBzaXplPXtcIjIwXCJ9IC8+IDogcGFzc2VkID8gXCLinJNcIiA6IFwi4pyXXCJ9IHt0ZXN0VGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCBcIi4vcHJvamVjdC5jc3NcIjtcbmltcG9ydCB7IEYsIFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUnVsZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcnVsZXJcIjtcbmltcG9ydCBQcm9qZWN0Q29udHJvbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdC1jb250cm9sc1wiO1xuaW1wb3J0IFByb2plY3RPdXRwdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdC1vdXRwdXRcIjtcblxuaW50ZXJmYWNlIFByb2plY3RQcm9wcyB7XG4gIHJ1blRlc3RzOiBGPHZvaWQsIHZvaWQ+O1xuICByZXNldFByb2plY3Q6IEY8dm9pZCwgdm9pZD47XG4gIGdvVG9OZXh0TGVzc29uOiBGPHZvaWQsIHZvaWQ+O1xuICBnb1RvUHJldmlvdXNMZXNzb246IEY8dm9pZCwgdm9pZD47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdG9waWM6IHN0cmluZztcbiAgbGVzc29uTnVtYmVyOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBoaW50czogc3RyaW5nO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2plY3QgPSAoe1xuICBydW5UZXN0cyxcbiAgcmVzZXRQcm9qZWN0LFxuICBnb1RvTmV4dExlc3NvbixcbiAgZ29Ub1ByZXZpb3VzTGVzc29uLFxuICBpc0xvYWRpbmcsXG4gIHRpdGxlLFxuICB0b3BpYyxcbiAgbGVzc29uTnVtYmVyLFxuICBkZXNjcmlwdGlvbixcbiAgdGVzdHMsXG4gIGhpbnRzLFxuICBjb25zLFxufTogUHJvamVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgZ29Ub05leHRMZXNzb24sXG4gICAgICAgICAgZ29Ub1ByZXZpb3VzTGVzc29uLFxuICAgICAgICAgIHRvcGljLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGxlc3Nvbk51bWJlcixcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPFByb2plY3RDb250cm9scyB7Li4ueyBydW5UZXN0cywgcmVzZXRQcm9qZWN0IH19IC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8UHJvamVjdE91dHB1dCB7Li4ueyBpc0xvYWRpbmcsIGhpbnRzLCB0ZXN0cywgY29ucyB9fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcbm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbn1cXG5cXG4jcHJvamVjdC1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbGVzc29uLW51bWJlciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnNwYXJrbGUge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGFya2xlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwYXJrbGUge1xcbiAgMCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XFxuICAgIG91dGxpbmUtc3R5bGU6IGRvdHRlZDtcXG4gICAgb3V0bGluZS1zaXplOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC4zZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxuICAgIGNvbG9yOiByZ2IoMjUxLCAyNTUsIDApO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3V0bGluZS1zdHlsZTogZG90dGVkO1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgY29sb3I6IHJnYigwLCAyNTUsIDApO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgICBjb2xvcjogcmdiKDAsIDE2MiwgMjU1KTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxuICAgIGNvbG9yOiByZ2IoMTc0LCAwLCAyNTUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbiA+IHByZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1saWdodC15ZWxsb3cpLCB2YXIoLS1kYXJrLXllbGxvdykpO1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay0xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnByb2plY3QtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5wcm9qZWN0LW91dHB1dCB7XFxuICBtYXgtd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLnByb2plY3Qtb3V0cHV0ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucHJvamVjdC1vdXRwdXQgPiB1bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5vdXRwdXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm91dHB1dC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm91dHB1dC1idG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnByb2plY3Qtb3V0cHV0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLDBFQUEwRTtFQUMxRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcbm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbn1cXG5cXG4jcHJvamVjdC1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbGVzc29uLW51bWJlciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnNwYXJrbGUge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1uYW1lOiBzcGFya2xlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwYXJrbGUge1xcbiAgMCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XFxuICAgIG91dGxpbmUtc3R5bGU6IGRvdHRlZDtcXG4gICAgb3V0bGluZS1zaXplOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC4zZW07XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxuICAgIGNvbG9yOiByZ2IoMjUxLCAyNTUsIDApO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3V0bGluZS1zdHlsZTogZG90dGVkO1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgY29sb3I6IHJnYigwLCAyNTUsIDApO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgICBjb2xvcjogcmdiKDAsIDE2MiwgMjU1KTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxuICAgIGNvbG9yOiByZ2IoMTc0LCAwLCAyNTUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbiA+IHByZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1saWdodC15ZWxsb3cpLCB2YXIoLS1kYXJrLXllbGxvdykpO1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay0xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnByb2plY3QtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5wcm9qZWN0LW91dHB1dCB7XFxuICBtYXgtd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLnByb2plY3Qtb3V0cHV0ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucHJvamVjdC1vdXRwdXQgPiB1bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5vdXRwdXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm91dHB1dC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm91dHB1dC1idG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnByb2plY3Qtb3V0cHV0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsIl9hIiwiZGVzY3JpcHRpb24iLCJfanN4IiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkhlYWRpbmciLCJ0b3BpYyIsInRpdGxlIiwibGVzc29uTnVtYmVyIiwiZ29Ub05leHRMZXNzb24iLCJnb1RvUHJldmlvdXNMZXNzb24iLCJfanN4cyIsImNoaWxkcmVuIiwib25DbGljayIsIkxlc3Nvbk51bWJlciIsImNsYXNzTmFtZSIsIlByb2plY3RDb250cm9scyIsInJ1blRlc3RzIiwicmVzZXRQcm9qZWN0IiwidXNlU3RhdGUiLCJMb2FkZXIiLCJQcm9qZWN0VGVzdHMiLCJQcm9qZWN0T3V0cHV0IiwiaXNMb2FkaW5nIiwiaGludHMiLCJ0ZXN0cyIsImNvbnMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJkaXNhYmxlZCIsIlRlc3QiLCJtYXAiLCJpIiwidGVzdFRleHQiLCJwYXNzZWQiLCJ0ZXN0SWQiLCJfX2Fzc2lnbiIsInJ1bGVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIlJ1bGVyIiwic3R5bGUiLCJzaXplIiwiUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=