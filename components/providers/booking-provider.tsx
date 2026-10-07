"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const BookingModal = dynamic(
  () => import("@/components/contact/booking-modal").then((module) => module.BookingModal),
  { ssr: false, loading: () => <div role="status" className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-xl bg-white px-6 py-3 shadow-float">Загружаем форму записи…</div> },
);

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
  const [hasOpened, setHasOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<BookingPrefill | undefined>(undefined);

  const open = useCallback((p?: BookingPrefill) => {
    setHasOpened(true);
    setPrefill(p);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {hasOpened && <BookingModal isOpen={isOpen} onClose={close} prefill={prefill} />}
    </BookingContext.Provider>
  );
}
