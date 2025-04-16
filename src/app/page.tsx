"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<Array<String>>([]);

  const [result, setResult] = useState<String>("test");
  const [inputData, setInputData] = useState<String>("");

  function randomData() {
    if (data.length === 0) {
      alert("No more data available");
      return;
    }
    console.log(inputData);

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    setResult(randomItem);
    console.log(randomItem);
    return result;
  }

  function removeItem(index: number) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-1/3 h-1/3 flex flex-col items-center justify-around">
        <input
          type="text"
          placeholder="Type here"
          className="neon-button"
          onChange={(e) => setInputData(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setData((prev: Array<String>) => [...prev, inputData]);
              setInputData("");
            }
          }}
        />
        {data.length > 0 ? (
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById("my_modal_2") as HTMLDialogElement | null;
              if (modal) {
                modal.showModal();
              }
              randomData();
            }}
          >
            Random
          </button>
        ) : (<>Add more data</>)}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Winner :</h3>
            <p className="py-4">{result}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="w-1/4">
        <ul className="list w-full bg-base-100 rounded-box shadow-md">
          <span className="divider"></span>
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide text-center text-3xl neon-text pb-10">
            List
          </li>

          <span className="divider"></span>
          {data.map((item: String , index: number) => (
            <div className="w-full" key={index}>
              <li className="list-row display flex justify-around p-3">
                <div
                  className="text-4xl w-1/2 flex items-center justify-center font-thin opacity-30 tabular-nums"
                  onClick={() => removeItem(index)}
                >
                  {index + 1}
                </div>
                <div className="list-col-grow w-1/2 flex items-center justify-center">
                  <div>{item}</div>
                </div>
              </li>
              <span className="divider"></span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
