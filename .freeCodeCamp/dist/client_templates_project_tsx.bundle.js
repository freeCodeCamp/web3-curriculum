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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19wcm9qZWN0X3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBa0M7TUFBL0JDLFdBQVc7RUFDaEMsT0FDRUMsc0RBQUFBO0lBQ0VDLEVBQUUsRUFBQyxhQURMO0lBRUVDLHVCQUF1QixFQUFFO01BQUVDLE1BQU0sRUFBRUo7SUFBVjtFQUYzQixFQURGO0FBTUQsQ0FQRDs7QUFTQSwrREFBZUYsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ04sRUFBRCxFQU1EO01BTGJPLEtBQUs7TUFDTEMsS0FBSztNQUNMQyxZQUFZO01BQ1pDLGNBQWM7TUFDZEMsa0JBQWtCO0VBRWxCLE9BQ0VDLHVEQUFBQTtJQUFBQyxXQUNHRixrQkFBa0IsSUFDakJULHNEQUFBQTtNQUFRWSxPQUFPLEVBQUU7UUFBTSx5QkFBa0IsRUFBbEI7TUFBb0I7SUFBM0MsR0FBMkM7TUFBQUQ7SUFBQSxDQUEzQyxFQUZKLEVBSUVELHVEQUFBQTtNQUFJVCxFQUFFLEVBQUM7SUFBUCxHQUF3QjtNQUFBVSxXQUNyQk4sS0FEcUIsRUFDaEIsS0FEZ0IsRUFDWEMsS0FEVyxFQUVyQkMsWUFBWSxJQUFJUCxzREFBQUEsQ0FBQ2EsWUFBRCxFQUFhO1FBQUNOLFlBQVksRUFBRUE7TUFBZixDQUFiLENBRks7SUFBQSxDQUF4QixFQUpGLEVBUUdDLGNBQWMsSUFBSVIsc0RBQUFBO01BQVFZLE9BQU8sRUFBRTtRQUFNLHFCQUFjLEVBQWQ7TUFBZ0I7SUFBdkMsR0FBdUM7TUFBQUQ7SUFBQSxDQUF2QyxFQVJyQjtFQUFBLEVBREY7QUFZRCxDQW5CRDs7QUFxQkEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2YsRUFBRCxFQUEyQztNQUF4Q1MsWUFBWTtFQUNsQyxPQUNFRyx1REFBQUEsQ0FB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dUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDbDdOO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTywrREFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtY29udHJvbHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LW91dHB1dC50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Byb2plY3QtdGVzdHMudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9ydWxlci50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL3Rlc3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzIiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL3Byb2plY3QuY3NzP2U0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERlc2NyaXB0aW9uUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IGRlc2NyaXB0aW9uIH06IERlc2NyaXB0aW9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgID48L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiIsImltcG9ydCB7IEYgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBIZWFkaW5nUHJvcHMge1xuICB0b3BpYzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBsZXNzb25OdW1iZXI/OiBudW1iZXI7XG4gIGdvVG9OZXh0TGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbiAgZ29Ub1ByZXZpb3VzTGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgSGVhZGluZyA9ICh7XG4gIHRvcGljLFxuICB0aXRsZSxcbiAgbGVzc29uTnVtYmVyLFxuICBnb1RvTmV4dExlc3NvbixcbiAgZ29Ub1ByZXZpb3VzTGVzc29uXG59OiBIZWFkaW5nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2dvVG9QcmV2aW91c0xlc3NvbiAmJiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub1ByZXZpb3VzTGVzc29uKCl9PiZsdDs8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8aDEgaWQ9J3Byb2plY3QtaGVhZGluZyc+XG4gICAgICAgIHt0b3BpY30gLSB7dGl0bGV9XG4gICAgICAgIHtsZXNzb25OdW1iZXIgJiYgPExlc3Nvbk51bWJlciBsZXNzb25OdW1iZXI9e2xlc3Nvbk51bWJlcn0gLz59XG4gICAgICA8L2gxPlxuICAgICAge2dvVG9OZXh0TGVzc29uICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub05leHRMZXNzb24oKX0+Jmd0OzwvYnV0dG9uPn1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IExlc3Nvbk51bWJlciA9ICh7IGxlc3Nvbk51bWJlciB9OiB7IGxlc3Nvbk51bWJlcjogbnVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeycgJ31cbiAgICAgIC0gTGVzc29ueycgJ31cbiAgICAgIDxzcGFuIGlkPSdsZXNzb24tbnVtYmVyJyBjbGFzc05hbWU9J3NwYXJrbGUnPlxuICAgICAgICB7bGVzc29uTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCB7IEYgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb2plY3RDb250cm9sc1Byb3BzIHtcbiAgcnVuVGVzdHM6IEY8dm9pZCwgdm9pZD47XG4gIHJlc2V0UHJvamVjdDogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgUHJvamVjdENvbnRyb2xzID0gKHsgcnVuVGVzdHMsIHJlc2V0UHJvamVjdCB9OiBQcm9qZWN0Q29udHJvbHNQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3QtY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdHMoKX0+UnVuIFRlc3RzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlc2V0UHJvamVjdCgpfT5SZXNldCBTdGVwPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRyb2xzO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgeyBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFByb2plY3RUZXN0cyBmcm9tIFwiLi9wcm9qZWN0LXRlc3RzXCI7XG5cbmludGVyZmFjZSBQcm9qZWN0T3V0cHV0UHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGhpbnRzOiBzdHJpbmc7XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2plY3RPdXRwdXQgPSAoe1xuICBpc0xvYWRpbmcsXG4gIGhpbnRzLFxuICB0ZXN0cyxcbiAgY29ucyxcbn06IFByb2plY3RPdXRwdXRQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRCdG4sIHNldFNlbGVjdGVkQnRuXSA9IHVzZVN0YXRlKFwidGVzdHNcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0LW91dHB1dFwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0LWJ0blwiXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRCdG4gPT09IFwidGVzdHNcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJ0ZXN0c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVzdHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dC1idG5cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSBcImNvbnNvbGVcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q29udGVudChjb25zKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJjb25zb2xlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25zb2xlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQtYnRuXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJ0biA9PT0gXCJoaW50c1wifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb250ZW50KGhpbnRzKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJoaW50c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGludHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApIDogc2VsZWN0ZWRCdG4gPT09IFwidGVzdHNcIiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW91dHB1dC1jb250ZW50XCI+XG4gICAgICAgICAgPFByb2plY3RUZXN0cyB0ZXN0cz17dGVzdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3Qtb3V0cHV0LWNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RPdXRwdXQ7XG4iLCJpbXBvcnQgeyBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdFwiO1xuXG5pbnRlcmZhY2UgUHJvamVjdFRlc3RzUHJvcHMge1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbn1cblxuY29uc3QgUHJvamVjdFRlc3RzID0gKHsgdGVzdHMgfTogUHJvamVjdFRlc3RzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7dGVzdHMubWFwKCh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZywgdGVzdElkIH0sIGkpID0+IChcbiAgICAgICAgPFRlc3RcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIHRlc3RUZXh0LFxuICAgICAgICAgICAgcGFzc2VkLFxuICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRlc3RzO1xuIiwiY29uc3QgcnVsZXJTdHlsZSA9IHtcbiAgd2lkdGg6IFwiODAlXCIsXG4gIGhlaWdodDogXCIxcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIixcbiAgbWFyZ2luOiBcIjAgYXV0b1wiLFxufTtcbmNvbnN0IFJ1bGVyID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBzdHlsZT17cnVsZXJTdHlsZX0+PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXI7XG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xuaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgVGVzdCA9ICh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZyB9OiBUZXN0VHlwZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cGFzc2VkID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCJ9PlxuICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRlciBzaXplPXtcIjIwXCJ9IC8+IDogcGFzc2VkID8gXCLinJNcIiA6IFwi4pyXXCJ9IHt0ZXN0VGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCBcIi4vcHJvamVjdC5jc3NcIjtcbmltcG9ydCB7IEYsIFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUnVsZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcnVsZXJcIjtcbmltcG9ydCBQcm9qZWN0Q29udHJvbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdC1jb250cm9sc1wiO1xuaW1wb3J0IFByb2plY3RPdXRwdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvamVjdC1vdXRwdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0UHJvcHMge1xuICBydW5UZXN0czogRjx2b2lkLCB2b2lkPjtcbiAgcmVzZXRQcm9qZWN0OiBGPHZvaWQsIHZvaWQ+O1xuICBnb1RvTmV4dExlc3NvbjogRjx2b2lkLCB2b2lkPjtcbiAgZ29Ub1ByZXZpb3VzTGVzc29uOiBGPHZvaWQsIHZvaWQ+O1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGxlc3Nvbk51bWJlcjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbiAgaGludHM6IHN0cmluZztcbiAgY29uczogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9qZWN0ID0gKHtcbiAgcnVuVGVzdHMsXG4gIHJlc2V0UHJvamVjdCxcbiAgZ29Ub05leHRMZXNzb24sXG4gIGdvVG9QcmV2aW91c0xlc3NvbixcbiAgaXNMb2FkaW5nLFxuICB0aXRsZSxcbiAgdG9waWMsXG4gIGxlc3Nvbk51bWJlcixcbiAgZGVzY3JpcHRpb24sXG4gIHRlc3RzLFxuICBoaW50cyxcbiAgY29ucyxcbn06IFByb2plY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZ1xuICAgICAgICB7Li4ue1xuICAgICAgICAgIGdvVG9OZXh0TGVzc29uLFxuICAgICAgICAgIGdvVG9QcmV2aW91c0xlc3NvbixcbiAgICAgICAgICB0b3BpYyxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBsZXNzb25OdW1iZXIsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxQcm9qZWN0Q29udHJvbHMgey4uLnsgcnVuVGVzdHMsIHJlc2V0UHJvamVjdCB9fSAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPFByb2plY3RPdXRwdXQgey4uLnsgaXNMb2FkaW5nLCBoaW50cywgdGVzdHMsIGNvbnMgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5uYXYgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2xlc3Nvbi1udW1iZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5zcGFya2xlIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tbmFtZTogc3BhcmtsZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGFya2xlIHtcXG4gIDAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBkb3R0ZWQ7XFxuICAgIG91dGxpbmUtc2l6ZTogM3B4O1xcbiAgICBmb250LXNpemU6IDAuM2VtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB9XFxuICAyMCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbiAgICBjb2xvcjogcmdiKDI1MSwgMjU1LCAwKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG91dGxpbmUtc3R5bGU6IGRvdHRlZDtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XFxuICB9XFxuICA4MCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBjb2xvcjogcmdiKDE3NCwgMCwgMjU1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IG5vbmU7XFxuICB9XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbGlnaHQteWVsbG93KSwgdmFyKC0tZGFyay15ZWxsb3cpKTtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4ucHJvamVjdC1vdXRwdXQge1xcbiAgbWF4LXdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDFyZW07XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5wcm9qZWN0LW91dHB1dCA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnByb2plY3Qtb3V0cHV0ID4gdWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ub3V0cHV0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5vdXRwdXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vdXRwdXQtYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wcm9qZWN0LW91dHB1dC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3RlbXBsYXRlcy9wcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWiwwRUFBMEU7RUFDMUUsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5uYXYgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2xlc3Nvbi1udW1iZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5zcGFya2xlIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tbmFtZTogc3BhcmtsZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGFya2xlIHtcXG4gIDAlIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgICBvdXRsaW5lLXN0eWxlOiBkb3R0ZWQ7XFxuICAgIG91dGxpbmUtc2l6ZTogM3B4O1xcbiAgICBmb250LXNpemU6IDAuM2VtO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB9XFxuICAyMCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbiAgICBjb2xvcjogcmdiKDI1MSwgMjU1LCAwKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIG91dGxpbmUtc3R5bGU6IGRvdHRlZDtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XFxuICB9XFxuICA4MCUge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBjb2xvcjogcmdiKDE3NCwgMCwgMjU1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IG5vbmU7XFxuICB9XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1jb250cm9scyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbGlnaHQteWVsbG93KSwgdmFyKC0tZGFyay15ZWxsb3cpKTtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4ucHJvamVjdC1vdXRwdXQge1xcbiAgbWF4LXdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDFyZW07XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5wcm9qZWN0LW91dHB1dCA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnByb2plY3Qtb3V0cHV0ID4gdWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ub3V0cHV0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5vdXRwdXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vdXRwdXQtYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wcm9qZWN0LW91dHB1dC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJfYSIsImRlc2NyaXB0aW9uIiwiX2pzeCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJIZWFkaW5nIiwidG9waWMiLCJ0aXRsZSIsImxlc3Nvbk51bWJlciIsImdvVG9OZXh0TGVzc29uIiwiZ29Ub1ByZXZpb3VzTGVzc29uIiwiX2pzeHMiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJMZXNzb25OdW1iZXIiLCJjbGFzc05hbWUiLCJQcm9qZWN0Q29udHJvbHMiLCJydW5UZXN0cyIsInJlc2V0UHJvamVjdCIsInVzZVN0YXRlIiwiTG9hZGVyIiwiUHJvamVjdFRlc3RzIiwiUHJvamVjdE91dHB1dCIsImlzTG9hZGluZyIsImhpbnRzIiwidGVzdHMiLCJjb25zIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZWxlY3RlZEJ0biIsInNldFNlbGVjdGVkQnRuIiwiZGlzYWJsZWQiLCJUZXN0IiwibWFwIiwiaSIsInRlc3RUZXh0IiwicGFzc2VkIiwidGVzdElkIiwiX19hc3NpZ24iLCJydWxlclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJSdWxlciIsInN0eWxlIiwic2l6ZSIsIlByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9