export function Counter({
  to,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  return <span className={className}>{prefix}{to.toLocaleString("en-US")}{suffix}</span>;
}
