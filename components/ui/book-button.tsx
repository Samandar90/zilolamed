"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useBooking, type BookingPrefill } from "@/components/providers/booking-provider";

type BookButtonProps = Omit<ComponentProps<typeof Button>, "href" | "onClick"> & {
  prefill?: BookingPrefill;
};

export function BookButton({ prefill, ...props }: BookButtonProps) {
  const { open } = useBooking();
  return <Button type="button" onClick={() => open(prefill)} {...props} />;
}
