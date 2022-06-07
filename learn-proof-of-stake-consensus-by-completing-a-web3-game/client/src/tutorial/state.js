import { chain, tasks, transactionPool } from "../tools/socket";

export const sampleChain = [
  {
    data: [
      {
        name: "Camper",
        racks: 8,
        reputation: 8,
        staked: 90,
        tokens: 100,
      },
    ],
  },
];

export const sampleTask = {
  question: "\nWhat's the correct way to display `Hello world`?\n",
  options: [
    {
      code: '```js\nconsole.log("Hello world");\n```',
      order: 0,
    },
    {
      code: '```py\nprint("Hello world")\n```',
      order: 1,
    },
    {
      code: '```c\nprintf("Hello world");\n```',
      order: 2,
    },
    {
      code: '```java\nSystem.out.println("Hello world");\n```',
      order: 3,
    },
    {
      code: '```ruby\nputs "Hello world"\n```',
      order: 4,
    },
    {
      code: "```php\n<?php echo 'Hello World'; ?>\n```",
      order: 5,
    },
  ],
};

const tutorialState = [...sampleChain];

export function handleTutorial(socket, { type }) {
  switch (type) {
    case "stake":
      tutorialState[0].data[0].staked += 1;
      socket.dispatchEvent(chain({ chain: tutorialState }));
      socket.dispatchEvent(
        transactionPool({
          transactionPool: [{ event: "stake", name: "Camper" }],
        })
      );
      break;
    case "unstake":
      tutorialState[0].data[0].staked -= 1;
      socket.dispatchEvent(chain({ chain: tutorialState }));
      break;
    case "submit-task":
      socket.dispatchEvent(tasks({ tasks: [] }));
      break;
    case "buy-rack":
      tutorialState[0].data[0].racks += 1;
      tutorialState[0].data[0].tokens -= 10;
      socket.dispatchEvent(chain({ chain: tutorialState }));
      break;
    default:
      socket.dispatchEvent(chain({ chain: sampleChain }));
      socket.dispatchEvent(tasks({ tasks: [] }));
      break;
  }
}
