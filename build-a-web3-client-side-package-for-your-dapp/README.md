# freeCodeCamp - External Project Template

## Feature Flags

- `CURRENT_PROJECT` - must match `/tooling/locales/en/<project_name>.md` filename
- `INTEGRATED_PROJECT` - boolean to indicate if project is _Integrated_ or _Practice_
- `LAST_KNOWN_LESSON_WITH_HASH` - legacy, but left in case we want a Git-saving workflow
- `LOCALE` - one of `/tooling/locales/conf.js` - defaults to `english`
- `RUN_TESTS_ON_WATCH` - whether or not to run the tests on every input/save/change - defaults to `false`
- `TEST_POLLING_RATE` - how often to refresh for changes in `ms`

## How To Run A Course

### In Gitpod!

1. Ensure you have the Gitpod extension. _Otherwise [click here](https://gitpod.io/#https://github.com/ShaunSHamilton/external-project)_
2. Once Gitpod opens, ensure it is done doing its stuffs
3. Open Command Palette, run `freeCodeCamp: Run Course`

**Notes**

- When doing the course, ensure you are in the root directory

### Locally

1. Create an empty directory and open VSCode:

```bash
mkdir course
cd course
code .
```

2. Download/Install `freeCodeCamp Courses` extension in VSCode.

3. `Ctrl + Shift + P` and select `freeCodeCamp: Open Course`

4. Choose the course you want to run

5. `Ctrl + Shift + P` and select `Remote-Containers: Rebuild and Reopen in Container`

6. `Ctrl + Shift + P` and select `freeCodeCamp: Run Course`

## Ideal Dev Setup

1. Create an empty directory:

```bash
mkdir course
cd course
code .
```

2. `Ctrl + Shift + P` -> `freeCodeCam: Create New Course`

3. Follow development steps in [Creating a Course](#creating-a-course)

## Creating a Course (_In Progress_)

### General Information

- You should not need to make any changes other than to the following files:
  - `.freeCodeCamp/tooling/locales/english/project-1.md`
  - `.freeCodeCamp/sample.env`
  - `.freeCodeCamp/freecodecamp.conf.json`
  - `.freeCodeCamp/Dockerfile`
  - Edit this `README.md` to include information about the course

### Adding the Course to the `freeCodeCamp Courses` Extension

1. Go to the [freeCodeCamp/freecodecamp-courses repo](https://github.com/freeCodeCamp/freecodecamp-courses)
2. Open a PR adding to the [resources/courses.json](https://github.com/freeCodeCamp/freecodecamp-courses/blob/main/resources/courses.json) file.

## Markdown Syntax

### Headers

- `## <number>` - Lesson number heading _(required)_
- `### --description--` - Lesson description _(required)_
- `### --tests--` - Tests for lesson _(required)_
- `### --seed--` - Seed for lesson _(optional)_
- `#### --cmd--` - Command for lesson seed (Camper will see) _(optional)_
- `#### --"<string>"--` - File name and seed heading _(optional)_

### Example

````markdown
## 1

### --description--

Teach Campers amazing things here...

### --tests--

At least one line as a hint in the tests

```js
assert("Chai.js tests with async code");
```

### --seed--

#### --force--

#### --cmd--

```bash
cd somewhere
```

#### --"somewhere/index.rs"--

```rust
let seed_for_file = "I am what the 'somewhere/index.rs' file should start with'";
```

#### --cmd--

```bash
echo "All seed is run in order"
```

## 2
````

### Notables

- It is very easy to change the course to use multiple markdown files as lessons (e.g. https://github.com/freeCodeCamp/euler-rust)
- Below is the template for the course README

---

# freeCodeCamp - Rust: CLI Calculator

## Course Desciption

Add a description of the course here. Example:

_This course will introduce you to the Rust programming language._

## Prerequisites

- Intermediate knowledge of at least one other programming language
- Basic knowledge of Bash

## Learning Outcomes

- Variables
- Primitives
- Typing
- Ownership
- Handling Environment Arguments
- Parsing Strings into Floats
- Functions
- Structs
- Tuples
- Enums
- Vecs
- Control Flow
- Testing
- Traits
- Decoding Images
- Building
- Error Handling

## How to Get Started

Instructions for how to run the course on different platforms (e.g. Locally, Gitpod, Replit)
