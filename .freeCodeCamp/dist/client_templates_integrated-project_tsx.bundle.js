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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50X3RlbXBsYXRlc19pbnRlZ3JhdGVkLXByb2plY3RfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFrQztNQUEvQkMsV0FBVztFQUNoQyxPQUNFQyxzREFBQUE7SUFDRUMsRUFBRSxFQUFDLGFBREw7SUFFRUMsdUJBQXVCLEVBQUU7TUFBRUMsTUFBTSxFQUFFSjtJQUFWO0VBRjNCLEVBREY7QUFNRCxDQVBEOztBQVNBLCtEQUFlRixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDTixFQUFELEVBTUQ7TUFMYk8sS0FBSztNQUNMQyxLQUFLO01BQ0xDLFlBQVk7TUFDWkMsY0FBYztNQUNkQyxrQkFBa0I7RUFFbEIsT0FDRUMsdURBQUFBO0lBQUFDLFdBQ0dGLGtCQUFrQixJQUNqQlQsc0RBQUFBO01BQVFZLE9BQU8sRUFBRTtRQUFNLHlCQUFrQixFQUFsQjtNQUFvQjtJQUEzQyxHQUEyQztNQUFBRDtJQUFBLENBQTNDLEVBRkosRUFJRUQsdURBQUFBO01BQUlULEVBQUUsRUFBQztJQUFQLEdBQXdCO01BQUFVLFdBQ3JCTixLQURxQixFQUNoQixLQURnQixFQUNYQyxLQURXLEVBRXJCQyxZQUFZLElBQUlQLHNEQUFBQSxDQUFDYSxZQUFELEVBQWE7UUFBQ04sWUFBWSxFQUFFQTtNQUFmLENBQWIsQ0FGSztJQUFBLENBQXhCLEVBSkYsRUFRR0MsY0FBYyxJQUFJUixzREFBQUE7TUFBUVksT0FBTyxFQUFFO1FBQU0scUJBQWMsRUFBZDtNQUFnQjtJQUF2QyxHQUF1QztNQUFBRDtJQUFBLENBQXZDLEVBUnJCO0VBQUEsRUFERjtBQVlELENBbkJEOztBQXFCQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDZixFQUFELEVBQTJDO01BQXhDUyxZQUFZO0VBQ2xDLE9BQ0VH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QkFBd0IsZUFBZSxzQkFBc0Isa0JBQWtCLEdBQUcseUNBQXlDLGVBQWUsbUJBQW1CLGlCQUFpQiwrRUFBK0Usc0JBQXNCLHFDQUFxQyxzQkFBc0Isc0JBQXNCLHlCQUF5QixvQkFBb0Isb0JBQW9CLEdBQUcsK0NBQStDLDJCQUEyQiwwQ0FBMEMsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQ0FBbUMsa0JBQWtCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHFCQUFxQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxlQUFlLG9DQUFvQywwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLEdBQUcsd0JBQXdCLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLEdBQUcsd0NBQXdDLDRCQUE0QixpQkFBaUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDaDlJO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW1IO0FBQ25IO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUdBQU87Ozs7QUFJNkQ7QUFDckYsT0FBTywrREFBZSxtR0FBTyxJQUFJLDBHQUFjLEdBQUcsMEdBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1jb250cm9scy50c3giLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC9jb21wb25lbnRzL2ludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy9wcm9qZWN0LXRlc3RzLnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L2NvbXBvbmVudHMvcnVsZXIudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvY29tcG9uZW50cy90ZXN0LnRzeCIsIndlYnBhY2s6Ly9leHRlcm5hbC1wcm9qZWN0Ly4vY2xpZW50L3RlbXBsYXRlcy9pbnRlZ3JhdGVkLXByb2plY3QudHN4Iiwid2VicGFjazovL2V4dGVybmFsLXByb2plY3QvLi9jbGllbnQvdGVtcGxhdGVzL2ludGVncmF0ZWQtcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZXh0ZXJuYWwtcHJvamVjdC8uL2NsaWVudC90ZW1wbGF0ZXMvaW50ZWdyYXRlZC1wcm9qZWN0LmNzcz80NWRhIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEZXNjcmlwdGlvblByb3BzIHtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRGVzY3JpcHRpb24gPSAoeyBkZXNjcmlwdGlvbiB9OiBEZXNjcmlwdGlvblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICA+PC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb247XG4iLCJpbXBvcnQgeyBGIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgSGVhZGluZ1Byb3BzIHtcbiAgdG9waWM6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbGVzc29uTnVtYmVyPzogbnVtYmVyO1xuICBnb1RvTmV4dExlc3Nvbj86IEY8dm9pZCwgdm9pZD47XG4gIGdvVG9QcmV2aW91c0xlc3Nvbj86IEY8dm9pZCwgdm9pZD47XG59XG5cbmNvbnN0IEhlYWRpbmcgPSAoe1xuICB0b3BpYyxcbiAgdGl0bGUsXG4gIGxlc3Nvbk51bWJlcixcbiAgZ29Ub05leHRMZXNzb24sXG4gIGdvVG9QcmV2aW91c0xlc3NvblxufTogSGVhZGluZ1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtnb1RvUHJldmlvdXNMZXNzb24gJiYgKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvVG9QcmV2aW91c0xlc3NvbigpfT4mbHQ7PC9idXR0b24+XG4gICAgICApfVxuICAgICAgPGgxIGlkPSdwcm9qZWN0LWhlYWRpbmcnPlxuICAgICAgICB7dG9waWN9IC0ge3RpdGxlfVxuICAgICAgICB7bGVzc29uTnVtYmVyICYmIDxMZXNzb25OdW1iZXIgbGVzc29uTnVtYmVyPXtsZXNzb25OdW1iZXJ9IC8+fVxuICAgICAgPC9oMT5cbiAgICAgIHtnb1RvTmV4dExlc3NvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvVG9OZXh0TGVzc29uKCl9PiZndDs8L2J1dHRvbj59XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBMZXNzb25OdW1iZXIgPSAoeyBsZXNzb25OdW1iZXIgfTogeyBsZXNzb25OdW1iZXI6IG51bWJlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsnICd9XG4gICAgICAtIExlc3NvbnsnICd9XG4gICAgICA8c3BhbiBpZD0nbGVzc29uLW51bWJlcicgY2xhc3NOYW1lPSdzcGFya2xlJz5cbiAgICAgICAge2xlc3Nvbk51bWJlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgeyBGIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzUHJvcHMge1xuICBydW5UZXN0czogRjx2b2lkLCB2b2lkPjtcbn1cblxuY29uc3QgSW50ZWdyYXRlZFByb2plY3RDb250cm9scyA9ICh7XG4gIHJ1blRlc3RzLFxufTogSW50ZWdyYXRlZFByb2plY3RDb250cm9sc1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3RzKCl9PlJ1biBUZXN0czwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcbmltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUHJvamVjdFRlc3RzIGZyb20gXCIuL3Byb2plY3QtdGVzdHNcIjtcblxuaW50ZXJmYWNlIEludGVncmF0ZWRQcm9qZWN0T3V0cHV0UHJvcHMge1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHRlc3RzOiBUZXN0VHlwZVtdO1xuICBjb25zOiBzdHJpbmc7XG59XG5cbmNvbnN0IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0ID0gKHtcbiAgaXNMb2FkaW5nLFxuICB0ZXN0cyxcbiAgY29ucyxcbn06IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0UHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZEJ0biwgc2V0U2VsZWN0ZWRCdG5dID0gdXNlU3RhdGUoXCJ0ZXN0c1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludGVncmF0ZWQtcHJvamVjdC1vdXRwdXRcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dC1idG5cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQnRuID09PSBcInRlc3RzXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKFwidGVzdHNcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRlc3RzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQtYnRuXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJ0biA9PT0gXCJjb25zb2xlXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbnRlbnQoY29ucyk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQnRuKFwiY29uc29sZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29uc29sZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICkgOiBzZWxlY3RlZEJ0biA9PT0gXCJ0ZXN0c1wiID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQtY29udGVudFwiPlxuICAgICAgICAgIDxQcm9qZWN0VGVzdHMgdGVzdHM9e3Rlc3RzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0LWNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVncmF0ZWRQcm9qZWN0T3V0cHV0O1xuIiwiaW1wb3J0IHsgVGVzdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL3Rlc3RcIjtcblxuaW50ZXJmYWNlIFByb2plY3RUZXN0c1Byb3BzIHtcbiAgdGVzdHM6IFRlc3RUeXBlW107XG59XG5cbmNvbnN0IFByb2plY3RUZXN0cyA9ICh7IHRlc3RzIH06IFByb2plY3RUZXN0c1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Rlc3RzLm1hcCgoeyB0ZXN0VGV4dCwgcGFzc2VkLCBpc0xvYWRpbmcsIHRlc3RJZCB9LCBpKSA9PiAoXG4gICAgICAgIDxUZXN0XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICB0ZXN0VGV4dCxcbiAgICAgICAgICAgIHBhc3NlZCxcbiAgICAgICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgICAgIHRlc3RJZCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUZXN0cztcbiIsImNvbnN0IHJ1bGVyU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjgwJVwiLFxuICBoZWlnaHQ6IFwiMXB4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsXG4gIG1hcmdpbjogXCIwIGF1dG9cIixcbn07XG5jb25zdCBSdWxlciA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3J1bGVyU3R5bGV9PjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVyO1xuIiwiaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcbmltcG9ydCB7IFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IFRlc3QgPSAoeyB0ZXN0VGV4dCwgcGFzc2VkLCBpc0xvYWRpbmcgfTogVGVzdFR5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Bhc3NlZCA/IFwicGFzc2VkXCIgOiBcImZhaWxlZFwifT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkZXIgc2l6ZT17XCIyMFwifSAvPiA6IHBhc3NlZCA/IFwi4pyTXCIgOiBcIuKcl1wifSB7dGVzdFRleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJpbXBvcnQgRGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25cIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IEYsIFRlc3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIjtcbmltcG9ydCBSdWxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ydWxlclwiO1xuaW1wb3J0IEludGVncmF0ZWRQcm9qZWN0Q29udHJvbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzXCI7XG5pbXBvcnQgSW50ZWdyYXRlZFByb2plY3RPdXRwdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dFwiO1xuXG5pbnRlcmZhY2UgSW50ZWdyYXRlZFByb2plY3RQcm9wcyB7XG4gIHJ1blRlc3RzOiBGPHZvaWQsIHZvaWQ+O1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0b3BpYzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXN0czogVGVzdFR5cGVbXTtcbiAgY29uczogc3RyaW5nO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IEludGVncmF0ZWRQcm9qZWN0ID0gKHtcbiAgcnVuVGVzdHMsXG4gIGRlc2NyaXB0aW9uLFxuICB0b3BpYyxcbiAgdGl0bGUsXG4gIHRlc3RzLFxuICBjb25zLFxuICBpc0xvYWRpbmcsXG59OiBJbnRlZ3JhdGVkUHJvamVjdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nIHRvcGljPXt0b3BpY30gdGl0bGU9e3RpdGxlfSAvPlxuXG4gICAgICA8UnVsZXIgLz5cblxuICAgICAgPERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuICAgICAgPFJ1bGVyIC8+XG5cbiAgICAgIDxJbnRlZ3JhdGVkUHJvamVjdENvbnRyb2xzIHsuLi57IHJ1blRlc3RzIH19IC8+XG5cbiAgICAgIDxSdWxlciAvPlxuXG4gICAgICA8SW50ZWdyYXRlZFByb2plY3RPdXRwdXQgey4uLnsgaXNMb2FkaW5nLCB0ZXN0cywgY29ucyB9fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdyYXRlZFByb2plY3Q7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uID4gcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAyLjZjaDtcXG4gIG1hcmdpbjogMS4zZW0gMDtcXG59XFxuXFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbGlnaHQteWVsbG93KSwgdmFyKC0tZGFyay15ZWxsb3cpKTtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3QtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LW91dHB1dCA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0ID4gdWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ub3V0cHV0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLTMpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LTEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5vdXRwdXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5vdXRwdXQtYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jbGllbnQvdGVtcGxhdGVzL2ludGVncmF0ZWQtcHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLDBFQUEwRTtFQUMxRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24gPiBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNkZXNjcmlwdGlvbiA+IHAge1xcbiAgbGluZS1oZWlnaHQ6IDIuNmNoO1xcbiAgbWFyZ2luOiAxLjNlbSAwO1xcbn1cXG5cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaW50ZWdyYXRlZC1wcm9qZWN0LWNvbnRyb2xzID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1saWdodC15ZWxsb3cpLCB2YXIoLS1kYXJrLXllbGxvdykpO1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay0xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1jb250cm9scyA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG59XFxuXFxuLmludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQge1xcbiAgbWF4LXdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDFyZW07XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5pbnRlZ3JhdGVkLXByb2plY3Qtb3V0cHV0ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQgPiB1bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5vdXRwdXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstMyk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm91dHB1dC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm91dHB1dC1idG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay0zKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmludGVncmF0ZWQtcHJvamVjdC1vdXRwdXQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW50ZWdyYXRlZC1wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW50ZWdyYXRlZC1wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsIl9hIiwiZGVzY3JpcHRpb24iLCJfanN4IiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkhlYWRpbmciLCJ0b3BpYyIsInRpdGxlIiwibGVzc29uTnVtYmVyIiwiZ29Ub05leHRMZXNzb24iLCJnb1RvUHJldmlvdXNMZXNzb24iLCJfanN4cyIsImNoaWxkcmVuIiwib25DbGljayIsIkxlc3Nvbk51bWJlciIsImNsYXNzTmFtZSIsIkludGVncmF0ZWRQcm9qZWN0Q29udHJvbHMiLCJydW5UZXN0cyIsInVzZVN0YXRlIiwiTG9hZGVyIiwiUHJvamVjdFRlc3RzIiwiSW50ZWdyYXRlZFByb2plY3RPdXRwdXQiLCJpc0xvYWRpbmciLCJ0ZXN0cyIsImNvbnMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInNlbGVjdGVkQnRuIiwic2V0U2VsZWN0ZWRCdG4iLCJkaXNhYmxlZCIsIlRlc3QiLCJtYXAiLCJpIiwidGVzdFRleHQiLCJwYXNzZWQiLCJ0ZXN0SWQiLCJfX2Fzc2lnbiIsInJ1bGVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIlJ1bGVyIiwic3R5bGUiLCJzaXplIiwiSW50ZWdyYXRlZFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9