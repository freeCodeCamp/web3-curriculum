import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/navigation";
import MainView from "./components/main-view";
import { clientWebSocket } from "./tools/handle-tasks";
import { NameContext } from "./node-state";
import { chain, SocketContext } from "./tools/socket";
import { sampleChain } from "./tutorial/state";

const App = () => {
  const [socket, setSocket] = React.useState(null);
  const [name, setName] = React.useState("Camper");
  const [isTutorialing, setIsTutorialing] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const socket = await clientWebSocket(isTutorialing);
      setSocket(socket);
      if (!isTutorialing) {
        socket.addEventListener("name", ({ detail: { name } }) => {
          setName(name);
        });
      } else {
        socket.dispatchEvent(chain({ chain: sampleChain }));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTutorialing]);

  return (
    <SocketContext.Provider value={socket}>
      <NameContext.Provider value={name}>
        <Navigation />
        <MainView setIsTutorialing={setIsTutorialing} />
      </NameContext.Provider>
    </SocketContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
