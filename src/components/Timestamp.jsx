import { useState } from "react";
import "../styles/timestamp.css";
import clipboard from "../assets/clipboard.svg";

function Timestamp() {
  const [date, setDate] = useState();
  const [result, setResult] = useState();

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/${date}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const data = await response.json();
    setResult(data);
  };
  return (
    <div className="timestamp">
      <form>
        <label htmlFor="date">/api/</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
          placeholder="date - ex: 1451001600000"
        />
        <button onClick={fetchData}>send</button>
      </form>
      <section>
        <p>Output</p>
        <div className="output">
          <p>JSON</p>
          <p className="result">{result}</p>
          <img src={clipboard} alt="copy" />
        </div>
      </section>
    </div>
  );
}

export default Timestamp;
