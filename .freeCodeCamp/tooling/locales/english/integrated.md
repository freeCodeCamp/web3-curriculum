# Web3 - Build a TomTom

## 1

### --description--

**User Stories:**

- Tom can join the meeting
- Tom can see other members in the meeting room
- Tom can present his screen
- Tom can see his screen being presented
- Tom can speak to the other members
- Tom can hear other members speak
- Tom's screen does not freeze mid-presentation
- Tom's TomTom takes Tom to Tennessee to temporarily try towing taxis
- Tom can see `inline-code` and it is `beautiful`

```rust
fn main() {
  let test_tom = Tom::test();
}
```

```typescript
class Tom {
  public static name = "TomTom";
  constructor() {
    this.hunger = true;
  }
  eatFood() {
    this.hunger = false;
  }
  get isHungry() {
    return this.hunger;
  }
}
```

```sql
CREATE TABLE IF NOT EXISTS `tom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hunger` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### --tests--

Tom can join the meeting

```js
await new Promise((resolve) => setTimeout(resolve, 1564));
assert(true);
```

Tom can see other members in the meeting room

```js
await new Promise((resolve) => setTimeout(resolve, 1756));
assert(true);
```

Tom can present his screen

```js
await new Promise((resolve) => setTimeout(resolve, 1863));
assert(false, "Tom cannot present his screen");
```

Tom can see his screen being presented

```js
await new Promise((resolve) => setTimeout(resolve, 1114));
assert(true);
```

Tom can speak to the other members

```js
await new Promise((resolve) => setTimeout(resolve, 2214));
assert(true);
```

Tom can hear other members speak

```js
await new Promise((resolve) => setTimeout(resolve, 4861));
assert(true);
```

Tom's screen does not freeze mid-presentation

```js
await new Promise((resolve) => setTimeout(resolve, 2222));
assert(
  false,
  "Tom's screen still freezes... Probably from the Wisconsin cold."
);
```

Tom's TomTom takes Tom to Tennessee to temporarily try towing taxis

```js
await new Promise((resolve) => setTimeout(resolve, 2000));
assert(true);
```

## --fcc-end--
