import Loader from "./loader";
import { TestType } from "../types";

const Test = ({ testText, passed, isLoading }: TestType) => {
  return (
    <li>
      <span className={passed ? "passed" : "failed"}>
        {isLoading ? <Loader size={"20"} /> : passed ? "✓" : "✗"} {testText}
      </span>
    </li>
  );
};

export default Test;
