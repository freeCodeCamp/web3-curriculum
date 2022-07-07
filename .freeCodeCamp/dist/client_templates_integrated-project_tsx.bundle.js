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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/heading */ "./client/components/heading.tsx");
/* harmony import */ var _integrated_project_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integrated-project.css */ "./client/templates/integrated-project.css");
/* harmony import */ var _components_ruler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ruler */ "./client/components/ruler.tsx");
/* harmony import */ var _components_integrated_project_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/integrated-project-controls */ "./client/components/integrated-project-controls.tsx");
/* harmony import */ var _components_integrated_project_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/integrated-project-output */ "./client/components/integrated-project-output.tsx");
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
      title = _a.title,
      tests = _a.tests,
      cons = _a.cons,
      isLoading = _a.isLoading;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      topic: topic,
      title: title
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_description__WEBPACK_IMPORTED_MODULE_1__["default"], {
      description: description
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_integrated_project_controls__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, {
      runTests: runTests
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ruler__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_integrated_project_output__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, {
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
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n#description > p {\n  line-height: 2.6ch;\n  margin: 1.3em 0;\n}\n\n.integrated-project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.integrated-project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.integrated-project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.integrated-project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.integrated-project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  margin-bottom: 0;\n}\n.integrated-project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.integrated-project-output-content {\n  background-color: black;\n  color: white;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n  overflow: auto;\n}\n", "",{"version":3,"sources":["webpack://./client/templates/integrated-project.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,0EAA0E;EAC1E,iBAAiB;EACjB,gCAAgC;EAChC,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":["nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#description {\n  margin: 0 auto;\n  width: 80%;\n  text-align: left;\n}\n\n#description > pre {\n  background-color: black !important;\n  padding: 1rem;\n}\n\n#description > p {\n  line-height: 2.6ch;\n  margin: 1.3em 0;\n}\n\n.integrated-project-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  margin: 1rem auto;\n  padding: 1rem;\n}\n.integrated-project-controls > button {\n  width: 30%;\n  margin: 0 auto;\n  height: 100%;\n  background-image: linear-gradient(var(--light-yellow), var(--dark-yellow));\n  border-width: 3px;\n  border-color: var(--dark-yellow);\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--dark-1);\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.integrated-project-controls > button:hover {\n  background-image: none;\n  background-color: var(--light-yellow);\n}\n\n.integrated-project-output {\n  max-width: 95%;\n  margin: 1rem;\n  overflow-x: hidden;\n}\n.integrated-project-output > ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  margin-bottom: 0;\n}\n.integrated-project-output > ul > li {\n  list-style: none;\n}\n.output-btn {\n  background-color: var(--dark-3);\n  color: var(--light-1);\n  font-size: 1.5rem;\n}\n.output-btn:hover {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: pointer;\n}\n.output-btn:disabled {\n  background-color: var(--light-blue);\n  color: var(--dark-3);\n  cursor: default;\n}\n\n.integrated-project-output-content {\n  background-color: black;\n  color: white;\n  height: fit-content;\n  min-height: 100px;\n  padding: 1rem 2rem;\n  margin-top: 0;\n  text-align: left;\n  overflow: auto;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19pbnRlZ3JhdGVkLXByb2plY3RfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFrQztNQUEvQkMsV0FBVztFQUNoQyxPQUNFQyxzREFBQUE7SUFDRUMsRUFBRSxFQUFDLGFBREw7SUFFRUMsdUJBQXVCLEVBQUU7TUFBRUMsTUFBTSxFQUFFSjtJQUFWO0VBRjNCLEVBREY7QUFNRCxDQVBEOztBQVNBLCtEQUFlRixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixFQUFELEVBTUQ7TUFMYk8sS0FBSztNQUNMQyxLQUFLO01BQ0xDLFlBQVk7TUFDWkMsY0FBYztNQUNkQyxrQkFBa0I7RUFFbEIsT0FDRUMsdURBQUFBO0lBQUFDLFdBQ0dGLGtCQUFrQixJQUNqQlQsc0RBQUFBO01BQVFZLE9BQU8sRUFBRTtRQUFNLHlCQUFrQixFQUFsQjtNQUFvQjtJQUEzQyxHQUEyQztNQUFBRDtJQUFBLENBQTNDLEVBRkosRUFJRUQsdURBQUFBO01BQUlULEVBQUUsRUFBQztJQUFQLEdBQXdCO01BQUFVLFdBQ3JCTixLQURxQixFQUNoQixLQURnQixFQUNYQyxLQURXLEVBRXJCQyxZQUFZLElBQUlQLHNEQUFBQSxDQUFDYSxZQUFELEVBQWE7UUFBQ04sWUFBWSxFQUFFQTtNQUFmLENBQWIsQ0FGSztJQUFBLENBQXhCLEVBSkYsRUFRR0MsY0FBYyxJQUFJUixzREFBQUE7TUFBUVksT0FBTyxFQUFFO1FBQU0scUJBQWMsRUFBZDtNQUFnQjtJQUF2QyxHQUF1QztNQUFBRDtJQUFBLENBQXZDLEVBUnJCO0VBQUEsRUFERjtBQVlELENBbkJEOztBQXFCQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDZixFQUFELEVBQTJDO01BQXhDUyxZQUFZO0VBQ2xDLE9BQ0VH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QkFBd0IsZUFBZSxzQkFBc0Isa0JBQWtCLEdBQUcseUNBQXlDLGVBQWUsbUJBQW1CLGlCQUFpQiwrRUFBK0Usc0JBQXNCLHFDQUFxQyxzQkFBc0Isc0JBQXNCLHlCQUF5QixvQkFBb0Isb0JBQW9CLEdBQUcsK0NBQStDLDJCQUEyQiwwQ0FBMEMsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQ0FBbUMsa0JBQWtCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHFCQUFxQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxlQUFlLG9DQUFvQywwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLEdBQUcsd0JBQXdCLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLEdBQUcsd0NBQXdDLDRCQUE0QixpQkFBaUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDaDlJO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW1IO0FBQ25IO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUdBQU87Ozs7QUFJNkQ7QUFDckYsT0FBTywrREFBZSxtR0FBTyxJQUFJLDBHQUFjLEdBQUcsMEdBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1jb250cm9scy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LXRlc3RzLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvcnVsZXIudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy90ZXN0LnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L3RlbXBsYXRlcy9pbnRlZ3JhdGVkLXByb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL2ludGVncmF0ZWQtcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC90ZW1wbGF0ZXMvaW50ZWdyYXRlZC1wcm9qZWN0LmNzcz80NWRhIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEZXNjcmlwdGlvblByb3BzIHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRGVzY3JpcHRpb24gPSAoeyBkZXNjcmlwdGlvbiB9OiBEZXNjcmlwdGlvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgID48L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiIsImltcG9ydCB7IEYgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIEhlYWRpbmdQcm9wcyB7XG4gIHRvcGljOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxlc3Nvbk51bWJlcj86IG51bWJlcjtcbiAgZ29Ub05leHRMZXNzb24/OiBGPHZvaWQsIHZvaWQ+O1xuICBnb1RvUHJldmlvdXNMZXNzb24/OiBGPHZvaWQsIHZvaWQ+O1xufVxuXG5jb25zdCBIZWFkaW5nID0gKHtcbiAgdG9waWMsXG4gIHRpdGxlLFxuICBsZXNzb25OdW1iZXIsXG4gIGdvVG9OZXh0TGVzc29uLFxuICBnb1RvUHJldmlvdXNMZXNzb24sXG59OiBIZWFkaW5nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAge2dvVG9QcmV2aW91c0xlc3NvbiAmJiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ29Ub1ByZXZpb3VzTGVzc29uKCl9PiZsdDs8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8aDEgaWQ9XCJwcm9qZWN0LWhlYWRpbmdcIj5cbiAgICAgICAge3RvcGljfSAtIHt0aXRsZX1cbiAgICAgICAge2xlc3Nvbk51bWJlciAmJiA8TGVzc29uTnVtYmVyIGxlc3Nvbk51bWJlcj17bGVzc29uTnVtYmVyfSAvPn1cbiAgICAgIDwvaDE+XG4gICAgICB7Z29Ub05leHRMZXNzb24gJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb1RvTmV4dExlc3NvbigpfT4mZ3Q7PC9idXR0b24+fVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgTGVzc29uTnVtYmVyID0gKHsgbGVzc29uTnVtYmVyIH06IHsgbGVzc29uTnVtYmVyOiBudW1iZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XCIgXCJ9XG4gICAgICAtIExlc3NvbntcIiBcIn1cbiAgICAgIDxzcGFuIGlkPVwibGVzc29uLW51bWJlclwiIGNsYXNzTmFtZT1cInNwYXJrbGVcIj5cbiAgICAgICAge2xlc3Nvbk51bWJlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgeyBGIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzUHJvcHMge1xuICBydW5UZXN0czogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgSW50ZWdyYXRlZFByb2plY3RDb250cm9scyA9ICh7XG4gIHJ1blRlc3RzLFxufTogSW50ZWdyYXRlZFByb2plY3RDb250cm9sc1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3RzKCl9PlJ1biBUZXN0czwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcbmltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUHJvamVjdFRlc3RzIGZyb20gXCIuL3Byb2plY3QtdGVzdHNcIjtcblxuaW50ZXJmYWNlIEludGVncmF0ZWRQcm9qZWN0T3V0cHV0UHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0ID0gKHtcbiAgaXNMb2FkaW5nLFxuICB0ZXN0cyxcbiAgY29ucyxcbn06IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0UHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZEJ0biwgc2V0U2VsZWN0ZWRCdG5dID0gdXNlU3RhdGUoXCJ0ZXN0c1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludGVncmF0ZWQtcHJvamVjdC1vdXRwdXRcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dC1idG5cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSBcInRlc3RzXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKFwidGVzdHNcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRlc3RzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQtYnRuXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJ0biA9PT0gXCJjb25zb2xlXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbnRlbnQoY29ucyk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKFwiY29uc29sZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29uc29sZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICkgOiBzZWxlY3RlZEJ0biA9PT0gXCJ0ZXN0c1wiID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQtY29udGVudFwiPlxuICAgICAgICAgIDxQcm9qZWN0VGVzdHMgdGVzdHM9e3Rlc3RzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0LWNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0O1xuIiwiaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL3Rlc3RcIjtcblxuaW50ZXJmYWNlIFByb2plY3RUZXN0c1Byb3BzIHtcbiAgdGVzdHM6IFRlc3RUeXBlW107XG59XG5cbmNvbnN0IFByb2plY3RUZXN0cyA9ICh7IHRlc3RzIH06IFByb2plY3RUZXN0c1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Rlc3RzLm1hcCgoeyB0ZXN0VGV4dCwgcGFzc2VkLCBpc0xvYWRpbmcsIHRlc3RJZCB9LCBpKSA9PiAoXG4gICAgICAgIDxUZXN0XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXN0VGV4dCxcbiAgICAgICAgICAgIHBhc3NlZCxcbiAgICAgICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgICAgIHRlc3RJZCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUZXN0cztcbiIsImNvbnN0IHJ1bGVyU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjgwJVwiLFxuICBoZWlnaHQ6IFwiMXB4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsXG4gIG1hcmdpbjogXCIwIGF1dG9cIixcbn07XG5jb25zdCBSdWxlciA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3J1bGVyU3R5bGV9PjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVyO1xuIiwiaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcbmltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IFRlc3QgPSAoeyB0ZXN0VGV4dCwgcGFzc2VkLCBpc0xvYWRpbmcgfTogVGVzdFR5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Bhc3NlZCA/IFwicGFzc2VkXCIgOiBcImZhaWxlZFwifT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkZXIgc2l6ZT17XCIyMFwifSAvPiA6IHBhc3NlZCA/IFwi4pyTXCIgOiBcIuKcl1wifSB7dGVzdFRleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkaW5nXCI7XG5pbXBvcnQgeyBGLCBQcm9qZWN0LCBUZXN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9pbnRlZ3JhdGVkLXByb2plY3QuY3NzXCI7XG5pbXBvcnQgUnVsZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcnVsZXJcIjtcbmltcG9ydCBJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzIGZyb20gXCIuLi9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1jb250cm9sc1wiO1xuaW1wb3J0IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1vdXRwdXRcIjtcblxuaW50ZXJmYWNlIEludGVncmF0ZWRQcm9qZWN0UHJvcHMge1xuICBydW5UZXN0czogRjx2b2lkLCB2b2lkPjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdG9waWM6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdGVzdHM6IFRlc3RUeXBlW107XG4gIGNvbnM6IHN0cmluZztcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBJbnRlZ3JhdGVkUHJvamVjdCA9ICh7XG4gIHJ1blRlc3RzLFxuICBkZXNjcmlwdGlvbixcbiAgdG9waWMsXG4gIHRpdGxlLFxuICB0ZXN0cyxcbiAgY29ucyxcbiAgaXNMb2FkaW5nLFxufTogSW50ZWdyYXRlZFByb2plY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZyB0b3BpYz17dG9waWN9IHRpdGxlPXt0aXRsZX0gLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxEZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8SW50ZWdyYXRlZFByb2plY3RDb250cm9scyB7Li4ueyBydW5UZXN0cyB9fSAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPEludGVncmF0ZWRQcm9qZWN0T3V0cHV0IHsuLi57IGlzTG9hZGluZywgdGVzdHMsIGNvbnMgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVncmF0ZWRQcm9qZWN0O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbiA+IHByZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uID4gcCB7XFxuICBsaW5lLWhlaWdodDogMi42Y2g7XFxuICBtYXJnaW46IDEuM2VtIDA7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMgPiBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXllbGxvdyksIHZhcigtLWRhcmsteWVsbG93KSk7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCB7XFxuICBtYXgtd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCA+IHVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm91dHB1dC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC0xKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ub3V0cHV0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3V0cHV0LWJ0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3RlbXBsYXRlcy9pbnRlZ3JhdGVkLXByb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWiwwRUFBMEU7RUFDMUUsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uID4gcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAyLjZjaDtcXG4gIG1hcmdpbjogMS4zZW0gMDtcXG59XFxuXFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbGlnaHQteWVsbG93KSwgdmFyKC0tZGFyay15ZWxsb3cpKTtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0ID4gdWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ub3V0cHV0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5vdXRwdXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vdXRwdXQtYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJfYSIsImRlc2NyaXB0aW9uIiwiX2pzeCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJIZWFkaW5nIiwidG9waWMiLCJ0aXRsZSIsImxlc3Nvbk51bWJlciIsImdvVG9OZXh0TGVzc29uIiwiZ29Ub1ByZXZpb3VzTGVzc29uIiwiX2pzeHMiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJMZXNzb25OdW1iZXIiLCJjbGFzc05hbWUiLCJJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzIiwicnVuVGVzdHMiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsIlByb2plY3RUZXN0cyIsIkludGVncmF0ZWRQcm9qZWN0T3V0cHV0IiwiaXNMb2FkaW5nIiwidGVzdHMiLCJjb25zIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZWxlY3RlZEJ0biIsInNldFNlbGVjdGVkQnRuIiwiZGlzYWJsZWQiLCJUZXN0IiwibWFwIiwiaSIsInRlc3RUZXh0IiwicGFzc2VkIiwidGVzdElkIiwiX19hc3NpZ24iLCJydWxlclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJSdWxlciIsInN0eWxlIiwic2l6ZSIsIkludGVncmF0ZWRQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==