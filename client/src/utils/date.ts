export const calculateTimeDifference = (tweetCreatedAt: string): string => {
  const tweetCreatedAtTime: Date = new Date(tweetCreatedAt);
  const currentTime: Date = new Date();

  const timeDifferenceInMilliseconds: number =
    currentTime.getTime() - tweetCreatedAtTime.getTime();

  const secondsInMs: number = 1000;
  const minutesInMs: number = secondsInMs * 60;
  const hoursInMs: number = minutesInMs * 60;
  const daysInMs: number = hoursInMs * 24;
  const weeksInMs: number = daysInMs * 7;
  const monthsInMs: number = daysInMs * 30;
  const yearsInMs: number = daysInMs * 365;

  if (timeDifferenceInMilliseconds < minutesInMs) {
    const seconds: number = Math.floor(
      timeDifferenceInMilliseconds / secondsInMs
    );
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInMilliseconds < hoursInMs) {
    const minutes: number = Math.floor(
      timeDifferenceInMilliseconds / minutesInMs
    );
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInMilliseconds < daysInMs) {
    const hours: number = Math.floor(timeDifferenceInMilliseconds / hoursInMs);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInMilliseconds < weeksInMs) {
    const days: number = Math.floor(timeDifferenceInMilliseconds / daysInMs);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInMilliseconds < monthsInMs) {
    const weeks: number = Math.floor(timeDifferenceInMilliseconds / weeksInMs);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInMilliseconds < yearsInMs) {
    const months: number = Math.floor(
      timeDifferenceInMilliseconds / monthsInMs
    );
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years: number = Math.floor(timeDifferenceInMilliseconds / yearsInMs);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};

export const convertIntoMonthYear = (timestamp: string ) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};
