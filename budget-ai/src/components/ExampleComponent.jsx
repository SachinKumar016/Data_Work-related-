import React, { useEffect, useState } from "react";
import axios from "axios";

const ExampleComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("API error:", err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div>
      <h2>Backend Says:</h2>
      <p>{message}</p>
    </div>
  );
};
export default ExampleComponent;