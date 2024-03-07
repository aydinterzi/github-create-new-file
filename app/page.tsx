"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {
  const [files, setFiles] = useState(["app", "test", ""]);
  const lastValue = files.at(-1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes("/")) {
      setFiles((files) => [...files, ""]);
    } else {
      setFiles((files) => [...files.slice(0, -1), e.target.value]);
    }
  };

  const handleDelete = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Backspace" && event.target.value === "") {
      event.preventDefault();
      setFiles((files) => [...files.slice(0, -1)]);
    }
  };

  return (
    <>
      <div className="flex gap-2 ml-20 mt-20">
        {files.slice(0, -1).map((file, index) => (
          <div key={index} className="flex gap-2">
            <div> {file} </div>
            <div>/</div>
          </div>
        ))}
        <input
          value={lastValue}
          onKeyDown={handleDelete}
          className="border text-white bg-transparent"
          type="text"
          onChange={handleChange}
        />
      </div>
      <pre className="mt-20 ml-20">{JSON.stringify(files, null, 2)}</pre>
    </>
  );
}
