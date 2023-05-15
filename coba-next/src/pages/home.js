import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch("/api/api_tester");
    const result = await data.json();
    console.log(result);
  }

  return (
    <>
      <div>
        <p>asd</p>
      </div>
    </>
  );
}
