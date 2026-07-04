import { Home, Stethoscope } from "lucide-react";
import { Aurora } from "@/components/ui/aurora";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-20">
      <Aurora intensity="bold" />
      <div className="container-x relative text-center">
        <p className="font-display text-[8rem] font-bold leading-none text-aurora sm:text-[12rem]">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink-900 sm:text-4xl">Страница не найдена</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          Возможно, страница была перемещена. Вернитесь на главную или запишитесь на приём — мы всегда рядом.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="dark"><Home className="h-5 w-5" /> На главную</Button>
          <Button href="/vrachi" variant="outline"><Stethoscope className="h-5 w-5" /> Наши врачи</Button>
        </div>
      </div>
    </section>
  );
}
