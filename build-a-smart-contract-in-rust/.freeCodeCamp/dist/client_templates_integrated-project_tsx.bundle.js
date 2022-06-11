"use strict";
(self["webpackChunkexternal_project"] = self["webpackChunkexternal_project"] || []).push([["client_templates_integrated-project_tsx"],{

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

/***/ "./client/components/header.tsx":
/*!**************************************!*\
  !*** ./client/components/header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Header = function Header() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg",
      id: "logo",
      alt: "freeCodeCamp logo"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
      project = _a.project,
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
      children: [topic, " - ", project, lessonNumber && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LessonNumber, {
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

/***/ "./client/components/integrated-project-controls.tsx":
/*!***********************************************************!*\
  !*** ./client/components/integrated-project-controls.tsx ***!
  \***********************************************************/
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



var IntegratedProjectControls = function IntegratedProjectControls(_a) {
  var runTests = _a.runTests;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", __assign({
    className: "integrated-project-controls"
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({
      onClick: function onClick() {
        return runTests();
      }
    }, {
      children: "Run Tests"
    }))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IntegratedProjectControls);

/***/ }),

/***/ "./client/components/integrated-project-output.tsx":
/*!*********************************************************!*\
  !*** ./client/components/integrated-project-output.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./client/components/loader.tsx");
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






var IntegratedProjectOutput = function IntegratedProjectOutput(_a) {
  var isLoading = _a.isLoading,
      tests = _a.tests,
      cons = _a.cons;

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      content = _b[0],
      setContent = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("tests"),
      selectedBtn = _c[0],
      setSelectedBtn = _c[1];

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", __assign({
    className: "integrated-project-output"
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
      })]
    }), isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : selectedBtn === "tests" ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "integrated-project-output-content"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_project_tests__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tests: tests
      })
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "integrated-project-output-content",
      dangerouslySetInnerHTML: {
        __html: content
      }
    })]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IntegratedProjectOutput);

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

/***/ "./client/templates/integrated-project.tsx":
/*!*************************************************!*\
  !*** ./client/templates/integrated-project.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/description */ "./client/components/description.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./client/components/header.tsx");
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/heading */ "./client/components/heading.tsx");
/* harmony import */ var _integrated_project_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrated-project.css */ "./client/templates/integrated-project.css");
/* harmony import */ var _components_ruler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ruler */ "./client/components/ruler.tsx");
/* harmony import */ var _components_integrated_project_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/integrated-project-controls */ "./client/components/integrated-project-controls.tsx");
/* harmony import */ var _components_integrated_project_output__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/integrated-project-output */ "./client/components/integrated-project-output.tsx");
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










var IntegratedProject = function IntegratedProject(_a) {
  var runTests = _a.runTests,
      description = _a.description,
      topic = _a.topic,
      project = _a.project,
      tests = _a.tests,
      cons = _a.cons,
      isLoading = _a.isLoading;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      topic: topic,
      project: project
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_5__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_description__WEBPACK_IMPORTED_MODULE_1__["default"], {
      description: description
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_5__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_integrated_project_controls__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, {
      runTests: runTests
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_5__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_integrated_project_output__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({}, {
      isLoading: isLoading,
      tests: tests,
      cons: cons
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IntegratedProject);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/templates/integrated-project.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/templates/integrated-project.css ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n.integrated-project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.integrated-project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.integrated-project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.integrated-project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.integrated-project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  margin-bottom: 0;\n}\n.integrated-project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.integrated-project-output-content {\n  background-color: black;\n  color: white;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n  overflow: auto;\n}\n", "",{"version":3,"sources":["webpack://./client/templates/integrated-project.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,0EAA0E;EAC1E,iBAAiB;EACjB,gCAAgC;EAChC,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":["nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n.integrated-project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.integrated-project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.integrated-project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.integrated-project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.integrated-project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  margin-bottom: 0;\n}\n.integrated-project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.integrated-project-output-content {\n  background-color: black;\n  color: white;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n  overflow: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/templates/integrated-project.css":
/*!*************************************************!*\
  !*** ./client/templates/integrated-project.css ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_integrated_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./integrated-project.css */ "./node_modules/css-loader/dist/cjs.js!./client/templates/integrated-project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_integrated_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_integrated_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_integrated_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_integrated_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19pbnRlZ3JhdGVkLXByb2plY3RfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFrQztNQUEvQkMsV0FBVztFQUNoQyxPQUNFQyxzREFBQUE7SUFDRUMsRUFBRSxFQUFDLGFBREw7SUFFRUMsdUJBQXVCLEVBQUU7TUFBRUMsTUFBTSxFQUFFSjtJQUFWO0VBRjNCLEVBREY7QUFNRCxDQVBEOztBQVNBLCtEQUFlRixXQUFmOzs7Ozs7Ozs7Ozs7OztBQ2JBLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0VBQ2IsT0FDRUosc0RBQUFBO0lBQUFLLFVBQ0VMLHNEQUFBQTtNQUNFTSxHQUFHLEVBQUMsa0dBRE47TUFFRUwsRUFBRSxFQUFDLE1BRkw7TUFHRU0sR0FBRyxFQUFDO0lBSE47RUFERixFQURGO0FBU0QsQ0FWRDs7QUFZQSwrREFBZUgsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1YsRUFBRCxFQU1EO01BTGJXLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxZQUFZO01BQ1pDLGNBQWM7TUFDZEMsa0JBQWtCO0VBRWxCLE9BQ0VDLHVEQUFBQTtJQUFBVCxXQUNHUSxrQkFBa0IsSUFDakJiLHNEQUFBQTtNQUFRZSxPQUFPLEVBQUU7UUFBTSx5QkFBa0IsRUFBbEI7TUFBb0I7SUFBM0MsR0FBMkM7TUFBQVY7SUFBQSxDQUEzQyxFQUZKLEVBSUVTLHVEQUFBQTtNQUFJYixFQUFFLEVBQUM7SUFBUCxHQUF3QjtNQUFBSSxXQUNyQkksS0FEcUIsRUFDaEIsS0FEZ0IsRUFDWEMsT0FEVyxFQUVyQkMsWUFBWSxJQUFJWCxzREFBQUEsQ0FBQ2dCLFlBQUQsRUFBYTtRQUFDTCxZQUFZLEVBQUVBO01BQWYsQ0FBYixDQUZLO0lBQUEsQ0FBeEIsRUFKRixFQVFHQyxj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TyxJQUFJLDBHQUFjLEdBQUcsMEdBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1jb250cm9scy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LXRlc3RzLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvcnVsZXIudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy90ZXN0LnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L3RlbXBsYXRlcy9pbnRlZ3JhdGVkLXByb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL2ludGVncmF0ZWQtcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC90ZW1wbGF0ZXMvaW50ZWdyYXRlZC1wcm9qZWN0LmNzcz80NWRhIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEZXNjcmlwdGlvblByb3BzIHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRGVzY3JpcHRpb24gPSAoeyBkZXNjcmlwdGlvbiB9OiBEZXNjcmlwdGlvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgID48L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZnJlZUNvZGVDYW1wL2Nkbi9tYWluL2J1aWxkL3BsYXRmb3JtL3VuaXZlcnNhbC9mY2NfcHJpbWFyeS5zdmdcIlxuICAgICAgICBpZD1cImxvZ29cIlxuICAgICAgICBhbHQ9XCJmcmVlQ29kZUNhbXAgbG9nb1wiXG4gICAgICAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgRiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSGVhZGluZ1Byb3BzIHtcbiAgdG9waWM6IHN0cmluZztcbiAgcHJvamVjdDogc3RyaW5nO1xuICBsZXNzb25OdW1iZXI/OiBudW1iZXI7XG4gIGdvVG9OZXh0TGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbiAgZ29Ub1ByZXZpb3VzTGVzc29uPzogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgSGVhZGluZyA9ICh7XG4gIHRvcGljLFxuICBwcm9qZWN0LFxuICBsZXNzb25OdW1iZXIsXG4gIGdvVG9OZXh0TGVzc29uLFxuICBnb1RvUHJldmlvdXNMZXNzb24sXG59OiBIZWFkaW5nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2dvVG9QcmV2aW91c0xlc3NvbiAmJiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub1ByZXZpb3VzTGVzc29uKCl9PiZsdDs8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8aDEgaWQ9XCJwcm9qZWN0LWhlYWRpbmdcIj5cbiAgICAgICAge3RvcGljfSAtIHtwcm9qZWN0fVxuICAgICAgICB7bGVzc29uTnVtYmVyICYmIDxMZXNzb25OdW1iZXIgbGVzc29uTnVtYmVyPXtsZXNzb25OdW1iZXJ9IC8+fVxuICAgICAgPC9oMT5cbiAgICAgIHtnb1RvTmV4dExlc3NvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvVG9OZXh0TGVzc29uKCl9PiZndDs8L2J1dHRvbj59XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBMZXNzb25OdW1iZXIgPSAoeyBsZXNzb25OdW1iZXIgfTogeyBsZXNzb25OdW1iZXI6IG51bWJlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcIiBcIn1cbiAgICAgIC0gTGVzc29ue1wiIFwifVxuICAgICAgPHNwYW4gaWQ9XCJsZXNzb24tbnVtYmVyXCIgY2xhc3NOYW1lPVwic3BhcmtsZVwiPlxuICAgICAgICB7bGVzc29uTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCB7IEYgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHNQcm9wcyB7XG4gIHJ1blRlc3RzOiBGPHZvaWQsIHZvaWQ+O1xufVxuXG5jb25zdCBJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzID0gKHtcbiAgcnVuVGVzdHMsXG59OiBJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdHMoKX0+UnVuIFRlc3RzPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdyYXRlZFByb2plY3RDb250cm9scztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xuaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBQcm9qZWN0VGVzdHMgZnJvbSBcIi4vcHJvamVjdC10ZXN0c1wiO1xuXG5pbnRlcmZhY2UgSW50ZWdyYXRlZFByb2plY3RPdXRwdXRQcm9wcyB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgdGVzdHM6IFRlc3RUeXBlW107XG4gIGNvbnM6IHN0cmluZztcbn1cblxuY29uc3QgSW50ZWdyYXRlZFByb2plY3RPdXRwdXQgPSAoe1xuICBpc0xvYWRpbmcsXG4gIHRlc3RzLFxuICBjb25zLFxufTogSW50ZWdyYXRlZFByb2plY3RPdXRwdXRQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkQnRuLCBzZXRTZWxlY3RlZEJ0bl0gPSB1c2VTdGF0ZShcInRlc3RzXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dFwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0LWJ0blwiXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRCdG4gPT09IFwidGVzdHNcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJ0ZXN0c1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVzdHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dC1idG5cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSBcImNvbnNvbGVcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q29udGVudChjb25zKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJjb25zb2xlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25zb2xlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRlciAvPlxuICAgICAgKSA6IHNlbGVjdGVkQnRuID09PSBcInRlc3RzXCIgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dC1jb250ZW50XCI+XG4gICAgICAgICAgPFByb2plY3RUZXN0cyB0ZXN0cz17dGVzdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQtY29udGVudFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdyYXRlZFByb2plY3RPdXRwdXQ7XG4iLCJpbXBvcnQgeyBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdFwiO1xuXG5pbnRlcmZhY2UgUHJvamVjdFRlc3RzUHJvcHMge1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbn1cblxuY29uc3QgUHJvamVjdFRlc3RzID0gKHsgdGVzdHMgfTogUHJvamVjdFRlc3RzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7dGVzdHMubWFwKCh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZywgdGVzdElkIH0sIGkpID0+IChcbiAgICAgICAgPFRlc3RcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIHRlc3RUZXh0LFxuICAgICAgICAgICAgcGFzc2VkLFxuICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRlc3RzO1xuIiwiY29uc3QgcnVsZXJTdHlsZSA9IHtcbiAgd2lkdGg6IFwiODAlXCIsXG4gIGhlaWdodDogXCIxcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIixcbiAgbWFyZ2luOiBcIjAgYXV0b1wiLFxufTtcbmNvbnN0IFJ1bGVyID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBzdHlsZT17cnVsZXJTdHlsZX0+PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXI7XG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xuaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgVGVzdCA9ICh7IHRlc3RUZXh0LCBwYXNzZWQsIGlzTG9hZGluZyB9OiBUZXN0VHlwZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cGFzc2VkID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCJ9PlxuICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRlciBzaXplPXtcIjIwXCJ9IC8+IDogcGFzc2VkID8gXCLinJNcIiA6IFwi4pyXXCJ9IHt0ZXN0VGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiIsImltcG9ydCBEZXNjcmlwdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IEYsIFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbmltcG9ydCBSdWxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ydWxlclwiO1xuaW1wb3J0IEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzXCI7XG5pbXBvcnQgSW50ZWdyYXRlZFByb2plY3RPdXRwdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dFwiO1xuXG5pbnRlcmZhY2UgSW50ZWdyYXRlZFByb2plY3RQcm9wcyB7XG4gIHJ1blRlc3RzOiBGPHZvaWQsIHZvaWQ+O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0b3BpYzogc3RyaW5nO1xuICBwcm9qZWN0OiBzdHJpbmc7XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgSW50ZWdyYXRlZFByb2plY3QgPSAoe1xuICBydW5UZXN0cyxcbiAgZGVzY3JpcHRpb24sXG4gIHRvcGljLFxuICBwcm9qZWN0LFxuICB0ZXN0cyxcbiAgY29ucyxcbiAgaXNMb2FkaW5nLFxufTogSW50ZWdyYXRlZFByb2plY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8SGVhZGluZyB0b3BpYz17dG9waWN9IHByb2plY3Q9e3Byb2plY3R9IC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHMgey4uLnsgcnVuVGVzdHMgfX0gLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxJbnRlZ3JhdGVkUHJvamVjdE91dHB1dCB7Li4ueyBpc0xvYWRpbmcsIHRlc3RzLCBjb25zIH19IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlZ3JhdGVkUHJvamVjdDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXllbGxvdyksIHZhcigtLWRhcmsteWVsbG93KSk7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCB7XFxuICBtYXgtd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCA+IHVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm91dHB1dC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ub3V0cHV0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3V0cHV0LWJ0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3RlbXBsYXRlcy9pbnRlZ3JhdGVkLXByb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEVBQTBFO0VBQzFFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbiA+IHByZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbGlnaHQteWVsbG93KSwgdmFyKC0tZGFyay15ZWxsb3cpKTtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0ID4gdWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ub3V0cHV0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5vdXRwdXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vdXRwdXQtYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJfYSIsImRlc2NyaXB0aW9uIiwiX2pzeCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJIZWFkZXIiLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIkhlYWRpbmciLCJ0b3BpYyIsInByb2plY3QiLCJsZXNzb25OdW1iZXIiLCJnb1RvTmV4dExlc3NvbiIsImdvVG9QcmV2aW91c0xlc3NvbiIsIl9qc3hzIiwib25DbGljayIsIkxlc3Nvbk51bWJlciIsImNsYXNzTmFtZSIsIkludGVncmF0ZWRQcm9qZWN0Q29udHJvbHMiLCJydW5UZXN0cyIsInVzZVN0YXRlIiwiTG9hZGVyIiwiUHJvamVjdFRlc3RzIiwiSW50ZWdyYXRlZFByb2plY3RPdXRwdXQiLCJpc0xvYWRpbmciLCJ0ZXN0cyIsImNvbnMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJkaXNhYmxlZCIsIlRlc3QiLCJtYXAiLCJpIiwidGVzdFRleHQiLCJwYXNzZWQiLCJ0ZXN0SWQiLCJfX2Fzc2lnbiIsInJ1bGVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIlJ1bGVyIiwic3R5bGUiLCJzaXplIiwiSW50ZWdyYXRlZFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9