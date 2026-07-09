/**
 * Renders a WordPress ISO date as a relative "Updated x ago" style string,
 * matching the reference design's timestamps.
 */
export function timeAgo(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 0) return "Just now";

  const ranges = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const range of ranges) {
    const count = Math.floor(seconds / range.seconds);
    if (count >= 1) {
      return `${count} ${range.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export function updatedLabel(dateString) {
  return `Updated ${timeAgo(dateString)}`;
}
