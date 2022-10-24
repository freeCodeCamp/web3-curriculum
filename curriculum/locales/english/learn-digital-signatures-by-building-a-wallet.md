# Web3 - Learn Digital Signatures by Building a Wallet

## 1

### --description--

Create a new directory named `src` with:

```bash
mkdir src
```

### --tests--

You should use the `mkdir src` command to create a new directory.

```js
const files = await __helpers.getDirectory(".");
// console.log("Test 1: ", files);
assert.include(files ?? "", "src");
```

This test always passes, as an example.

```js
assert(true);
assert.equal(1, "1");
assert.strictEqual(1, 1);
assert.include("foobar", "bar");
```

This test takes 4 seconds to complete.

```js
await new Promise((resolve) => setTimeout(resolve, 4000));
assert(true);
```

### --seed--

#### --cmd--

```bash
echo "Tom should be able to see this, if he looks quick enough"
```

## 2

### --description--

Change into the `src` directory.

### --test--

You should use `cd src` to change into the directory.

```js
const cwd = await __helpers.getCWD();
// console.log("Test 2: ", cwd);
assert.include(cwd, "src");
```

### --seed--

#### --cmd--

```bash
mkdir src
```

## 3

### --description--

Within `src`, create a file named `index.js`.

### --tests--

You should be within the `src/` directory.

```js
const cwd = await __helpers.getCWD();
// console.log("Test 3: ", cwd);
assert.include(cwd, "src");
```

You can use `touch index.js` to create a file.

```js
const files = await __helpers.getDirectory(".");
// console.log("Test 3: ", files);
assert.include(files ?? "", "index.js");
```

## 4

### --description--

Within `src/index.js`, add the following code:

```js
const TOM = "TOMTOM";
```

### --tests--

You should declare a variable `TOM` using `const`.

```js
const code = await __helpers.getFile("src/index.js");
console.log("Test 5: ", code);
assert.match(code, /const\s+TOM/);
```

### --seed--

#### --cmd--

```bash
touch src/index.js
```

## 5

### --description--

Add code to print the `TOM` variable to the console.

### --tests--

You should add `console.log(TOM)` to the `src/index.js` file.

```js
const stdout = await __helpers.getCommandOutput("node src/index.js");
// console.log("Test 6: ", stdout);
assert.include(stdout, "TOMTOM");
```

### --seed--

#### --"src/index.js"--

```rust
const TOM = "TOMTOM";

```

## 6

### --description--

Run your code using:

```bash
node src/index.js
```

### --tests--

You should run your code using `node src/index.js`.

```js
const lastCommand = await __helpers.getLastCommand();
// console.log("Test 7: ", lastCommand);
assert.include(lastCommand, "node src/index.js");
```

`"TOMTOM"` should be printed to the console.

```js
const termOutput = await __helpers.getTerminalOutput();
// console.log("Test 8: ", termOutput);
assert.include(termOutput, "TOMTOM");
```

## 7

### --description--

Well done! You are likely one of the first people to use _ShaunOS_.

### --tests--

Something to always fail. Did you know emojis are supported? 🤔

```js
assert(false);
```

This test takes a while so you can see the loader 😄

```js
const p = await new Promise((resolve) => setTimeout(resolve, 4000));
assert(p === true);
```

## 8

### --description--

Is this necessary?

### --tests--

Hi, I'm a test.

```js
assert(false);
```
