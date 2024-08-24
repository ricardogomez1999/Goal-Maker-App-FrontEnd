export function getWeekDay() {
  const date = Date.now();
  const formatter = new Intl.DateTimeFormat("en-EN", {
    weekday: "long",
  });

  return formatter.format(date);
}

export function getDay() {
  const date = Date.now();
  const formatter = new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
  });

  return formatter.format(date);
}

export function formatDateHour(isoString: string): string {
  const date = new Date(isoString);
  const formatter = new Intl.DateTimeFormat("en-EN", {
    hour: "numeric",
  });
  return formatter.format(date);
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const formatter = new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
  return formatter.format(date);
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getDateRange(rangeType: string): {
  startDate: string;
  endDate: string;
} {
  const now = new Date();
  let startDate: Date, endDate: Date;

  switch (rangeType) {
    case "This month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      break;
    case "Last month":
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      endDate = new Date(now.getFullYear(), now.getMonth(), 0);
      break;
    case "Last 3 months":
      startDate = new Date(now.getFullYear(), now.getMonth() - 2, 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      break;
    default:
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
}
