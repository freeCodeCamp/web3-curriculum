import { marked } from "marked";
import Prism from "prismjs";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../tools/socket";
import "./chain.css";

const Chain = ({ transactionPool }) => {
  const socket = useContext(SocketContext);
  const [chain, setChain] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.addEventListener("chain", ({ detail: { chain } }) => {
        setChain(chain);
      });
    }
  }, [socket]);

  return (
    <>
      <div
        id="chain-container"
        dangerouslySetInnerHTML={{
          __html: parseMarkdown(
            `## Chain\n\n\`\`\`json\n${JSON.stringify(chain, null, 2)}\n\`\`\``
          ),
        }}
      ></div>
      <div
        id="transaction-pool-container"
        dangerouslySetInnerHTML={{
          __html: parseMarkdown(
            `## Transaction Pool \n\n\`\`\`json\n${JSON.stringify(
              transactionPool,
              null,
              2
            )}\n\`\`\``
          ),
        }}
      ></div>
    </>
  );
};

marked.setOptions({
  highlight: (code, lang) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

function parseMarkdown(markdown = "") {
  return marked.parse(markdown, { gfm: true });
}

export default Chain;
