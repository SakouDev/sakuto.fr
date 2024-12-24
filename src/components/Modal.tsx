"use client";

import React from "react";
import NextImage, { StaticImageData }  from "next/image";

interface DialogModalProps {
  Image: string | StaticImageData;
  Title: string; 
}

export default function DialogModal({ Image, Title }: DialogModalProps): React.JSX.Element {

  const [open, setOpen] = React.useState(false);

  const ChangeState = () => {
    setOpen(!open);
  }

  return (
    <>
    <button className="btn neon-button  btn-success" onClick={ChangeState}>{Title}</button>
    <dialog id="my-modal" className="modal" open={open}>
      <div onClick={ChangeState} className="modal-box w-11/12 max-w-full h-5/6 cursor-pointer">
        <NextImage src={Image} alt="T1" layout="fill" />
      </div>	
      <form method="dialog" className="modal-backdrop">
        <button onClick={ChangeState}>close</button>
      </form>
    </dialog>
    </>
  );
}
