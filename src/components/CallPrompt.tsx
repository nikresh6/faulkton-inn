"use client";

import { useRef } from "react";
import { hotel } from "@/lib/data";

type CallPromptProps = {
  label?: string;
  className?: string;
};

export function CallPrompt({ label = "Check availability", className = "button" }: CallPromptProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className={className} type="button" onClick={() => dialogRef.current?.showModal()}>
        {label}
      </button>
      <dialog className="call-dialog" ref={dialogRef} onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}>
        <button className="call-dialog-close" type="button" aria-label="Close" onClick={() => dialogRef.current?.close()}>×</button>
        <p className="eyebrow">Reserve directly</p>
        <h2>Give us a call.</h2>
        <p>Faulkton Inn confirms room availability, current rates, and reservations by phone.</p>
        <a className="call-dialog-number" href={hotel.phoneHref}>{hotel.phone}</a>
        <a className="button" href={hotel.phoneHref}>Call Faulkton Inn</a>
        <small>Tap the number to open your phone app.</small>
      </dialog>
    </>
  );
}
