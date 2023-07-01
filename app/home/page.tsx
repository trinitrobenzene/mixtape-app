import Row from "@/components/Home/Row";
import React from "react";

function Home() {
  return (
    <div>
      {Array(4)
        .fill(0)
        .map((e, i) => (
          <Row key={i} />
        ))}
    </div>
  );
}

export default Home;
