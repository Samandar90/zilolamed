"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { BookingModal } from "@/components/contact/booking-modal";

export type BookingPrefill = {
  specialty?: string;
  doctor?: { name: string; primary: string };
  note?: string;
  source?: string;
};

type BookingContextValue = {
  open: (prefill?: BookingPrefill) => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<BookingPrefill | undefined>(undefined);

  const open = useCallback((p?: BookingPrefill) => {
    setPrefill(p);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} prefill={prefill} />
    </BookingContext.Provider>
  );
}
