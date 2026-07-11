"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, CalendarCheck, UserRound, AlertTriangle } from "lucide-react";
import { specialties } from "@/lib/data/specialties";
import { cn } from "@/lib/utils";
import { company } from "@/lib/data/company";
import { BOOKING_API_URL } from "@/lib/booking-api";

const schema = z.object({
  name: z.string().min(2, "Укажите ваше имя"),
  phone: z.string().min(7, "Укажите корректный номер телефона"),
  specialty: z.string().min(1, "Выберите направление"),
  date: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentForm({
  defaultSpecialty,
  defaultMessage,
  doctor,
  source,
  onSuccess,
}: {
  defaultSpecialty?: string;
  defaultMessage?: string;
  doctor?: { name: string; primary: string };
  source?: string;
  onSuccess?: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      specialty: doctor?.primary ?? defaultSpecialty ?? "",
      message: defaultMessage ?? "",
    },
  });

  useEffect(() => {
    setValue("specialty", doctor?.primary ?? defaultSpecialty ?? "");
    setValue("message", defaultMessage ?? "");
  }, [doctor, defaultSpecialty, defaultMessage, setValue]);

  async function onSubmit(data: FormValues) {
    setSubmitError(null);
    try {
      const res = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, doctor: doctor?.name, source }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Не удалось отправить заявку");
      }
    } catch {
      setSubmitError(
        `Не получилось отправить заявку онлайн. Пожалуйста, позвоните нам: ${company.phones[0].value}`,
      );
      return;
    }
    setSent(true);
    reset({ specialty: doctor?.primary ?? defaultSpecialty ?? "", message: "" });
    onSuccess?.();
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-white/90 backdrop-blur"
          >
            <div className="text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal-500 text-white">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">Заявка принята</h3>
              <p className="mt-1.5 max-w-xs text-sm text-muted">
                Спасибо! Администратор перезвонит вам в ближайшее время.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3.5">
        {doctor && (
          <div className="flex items-center gap-2.5 rounded-xl border border-teal-500/20 bg-teal-500/5 px-3 py-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-aurora text-white">
              <UserRound className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink-900">{doctor.name}</p>
              <p className="text-xs text-muted">{doctor.primary}</p>
            </div>
          </div>
        )}

        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Ваше имя" error={errors.name?.message}>
            <input {...register("name")} className={inputCls(!!errors.name)} placeholder="Как к вам обращаться" />
          </Field>
          <Field label="Телефон" error={errors.phone?.message}>
            <input {...register("phone")} className={inputCls(!!errors.phone)} placeholder="+998 90 000 00 00" />
          </Field>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {doctor ? (
            <input type="hidden" {...register("specialty")} />
          ) : (
            <Field label="Направление" error={errors.specialty?.message}>
              <select
                {...register("specialty")}
                className={cn(inputCls(!!errors.specialty), "appearance-none")}
                defaultValue={defaultSpecialty ?? ""}
              >
                <option value="" disabled>Выберите…</option>
                {specialties.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
                <option value="Другое">Другое / не знаю</option>
              </select>
            </Field>
          )}
          <Field label="Желаемая дата" error={errors.date?.message}>
            <input {...register("date")} type="date" className={inputCls(!!errors.date)} />
          </Field>
        </div>
        <Field label="Комментарий (необязательно)" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={2}
            className={cn(inputCls(!!errors.message), "h-auto py-2.5 resize-none")}
            placeholder="Коротко опишите, что вас беспокоит"
          />
        </Field>

        {submitError && (
          <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-sheen group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-aurora font-medium text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.55)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            {isSubmitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Отправляем…</>
            ) : (
              <>Записаться на приём <CalendarCheck className="h-4 w-4" /></>
            )}
          </span>
        </button>
        <p className="text-center text-xs text-muted">
          Отправляя заявку, вы соглашаетесь на обработку данных для записи.
        </p>
      </form>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "h-10 w-full rounded-lg border bg-mist-50/60 px-3.5 text-sm text-ink-900 outline-none transition-all placeholder:text-muted/70 focus:bg-white focus:ring-4 min-h-10",
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
      : "border-line focus:border-teal-500/40 focus:ring-teal-500/10",
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-800">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
