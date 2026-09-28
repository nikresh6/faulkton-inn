"use client";
import { FormEvent, useState } from "react";
import { hotel } from "@/lib/data";
function iso(offset: number) { const d = new Date(); d.setDate(d.getDate() + offset); return d.toISOString().slice(0, 10); }
export function BookingBar({ compact = false }: { compact?: boolean }) {
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const data = new FormData(e.currentTarget); const checkIn = String(data.get("checkIn")); const checkOut = String(data.get("checkOut")); if (!checkIn || !checkOut || checkOut <= checkIn) { setError("Choose a checkout date after your check-in date."); return; } sessionStorage.setItem("faulkton-booking-intent", JSON.stringify(Object.fromEntries(data))); window.open(hotel.bookingUrl, "_blank", "noopener,noreferrer"); }
  return <form className={`booking-bar ${compact ? "booking-compact" : ""}`} onSubmit={submit}><label><span>Check in</span><input name="checkIn" type="date" defaultValue={iso(7)} min={iso(0)} required /></label><label><span>Check out</span><input name="checkOut" type="date" defaultValue={iso(8)} min={iso(1)} required /></label><label><span>Guests</span><select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label><button className="button" type="submit">Check availability <span aria-hidden="true">→</span></button>{error && <p className="form-error" role="alert">{error}</p>}</form>;
}
