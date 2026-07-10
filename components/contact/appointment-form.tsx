"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, CalendarCheck, UserRound } from "lucide-react";
import { specialties } from "@/lib/data/specialties";
import { cn } from "@/lib/utils";

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
  onSuccess,
}: {
  defaultSpecialty?: string;
  defaultMessage?: string;
  doctor?: { name: string; primary: string };
  onSuccess?: () => void;
}) {
  const [sent, setSent] = useState(false);
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
    // Демо-отправка — подключите к API / Telegram-боту клиники.
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.info("Заявка на приём:", doctor ? { ...data, doctor: doctor.name } : data);
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
            className="absolute inset-0 z-10 grid place-items-center rounded-3xl bg-white/90 backdrop-blur"
          >
            <div className="text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-500 text-white">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">Заявка принята</h3>
              <p className="mt-2 max-w-xs text-muted">
                Спасибо! Администратор перезвонит вам в ближайшее время и подтвердит запись.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        {doctor && (
          <div className="flex items-center gap-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 px-4 py-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aurora text-white">
              <UserRound className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink-900">{doctor.name}</p>
              <p className="text-xs text-muted">{doctor.primary}</p>
            </div>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Ваше имя" error={errors.name?.message}>
            <input {...register("name")} className={inputCls(!!errors.name)} placeholder="Как к вам обращаться" />
          </Field>
          <Field label="Телефон" error={errors.phone?.message}>
            <input {...register("phone")} className={inputCls(!!errors.phone)} placeholder="+998 90 000 00 00" />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {doctor ? (
            <input type="hidden" {...register("specialty")} />
          ) : (
            <Field label="Направление / специалист" error={errors.specialty?.message}>
              <select
                {...register("specialty")}
                className={cn(inputCls(!!errors.specialty), "appearance-none")}
                defaultValue={defaultSpecialty ?? ""}
              >
                <option value="" disabled>Выберите направление…</option>
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
            rows={3}
            className={cn(inputCls(!!errors.message), "h-auto py-3 resize-none")}
            placeholder="Коротко опишите, что вас беспокоит"
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-sheen group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-aurora font-medium text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.55)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            {isSubmitting ? (
              <><Loader2 className="h-5 w-5 animate-spin" /> Отправляем…</>
            ) : (
              <>Записаться на приём <CalendarCheck className="h-5 w-5" /></>
            )}
          </span>
        </button>
        <p className="text-center text-xs text-muted">
          Отправляя заявку, вы соглашаетесь на обработку данных для записи. Мы не передаём их третьим лицам.
        </p>
      </form>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "h-12 w-full rounded-xl border bg-mist-50/60 px-4 text-[0.95rem] text-ink-900 outline-none transition-all placeholder:text-muted/70 focus:bg-white focus:ring-4 min-h-12",
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
      <span className="mb-1.5 block text-sm font-medium text-ink-800">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
