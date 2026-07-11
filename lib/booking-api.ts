// Публичный эндпоинт админ-панели, который пересылает заявки в Telegram.
export const BOOKING_API_URL =
  process.env.NEXT_PUBLIC_BOOKING_API_URL || "https://zilolamed-admin.vercel.app/api/book";
