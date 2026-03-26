import { useState } from "react";
import { predict } from "../services/api";

export default function Prediction() {
  const [data, setData] = useState({});

  const submit = async () => {
    await predict(data, localStorage.getItem("token"));
    alert("Prediction submitted!");
  };

  return (
    <div className="p-4 text-white">
      <h2>Make Prediction</h2>

      <input
        className="bg-gray-800 p-2 mt-2"
        placeholder="Toss Winner"
        onChange={(e) =>
          setData({ ...data, toss: e.target.value })
        }
      />

      <button
        onClick={submit}
        className="bg-blue-500 mt-3 p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
