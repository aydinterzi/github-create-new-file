"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {
  const [files, setFiles] = useState(["app", "test", ""]);

  const inputValue = files.at(-1);
  const handleChange = (e) => {
    if (e.target.value.includes("/")) {
      setFiles((files) => [...files, ""]);
    } else {
      setFiles((files) => [...files.slice(0, -1), e.target.value]);
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
          value={inputValue}
          className="border text-white bg-transparent"
          type="text"
          onChange={handleChange}
        />
      </div>
      <pre className="mt-20 ml-20">{JSON.stringify(files, null, 2)}</pre>
    </>
  );
}
