function updateYearProgress() {
  const progress = document.getElementById("testbar");
  
  const now = new Date();
  const year = now.getFullYear();

  if (year !== 2026) {
    progress.value = 0;
    progress.max = 365;
    progress.innerText = "Not 2026";
    return;
  }

  const start = new Date(year, 0, 1); // Jan 1, 2026
  const diff = now - start; // milliseconds since Jan 1
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

  progress.value = dayOfYear;
  progress.max = 366; // 2026 is not a leap year, 365 is fine too
  progress.innerText = `${((dayOfYear / 365) * 100).toFixed(2)}%`;
}

// Call it immediately
updateYearProgress();

setInterval(updateYearProgress, 1000 * 60 * 60); // every hour
