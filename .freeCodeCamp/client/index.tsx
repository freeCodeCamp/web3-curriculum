import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./styles.css";
import Loader from "./components/loader";
import { Landing } from "./templates/landing";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Landing />
      </Suspense>
    </>
  );
};

const container = document.getElementById("root");
if (!container) throw Error("Element #root not found to mount to");
const root = createRoot(container);
root.render(<App />);
