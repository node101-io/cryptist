import "./animation-cipher.ts";
import "./cursor-filter.ts";
import "./scale-on-scroll.ts";
import "./fade.ts";

// Schedule column auto-sizing (date and speaker) based on content
function computeMaxWidth(elements: NodeListOf<HTMLElement>): number {
  let max = 0;
  elements.forEach((el) => {
    const width = el.getBoundingClientRect().width;
    if (width > max) max = width;
  });
  return max;
}

function setScheduleColumns(): void {
  const scheduleEl = document.getElementById("schedule");
  if (!scheduleEl) return;

  const speakerEls = scheduleEl.querySelectorAll<HTMLElement>("[data-schedule-speaker]");

  if (!speakerEls.length) return;

  const maxSpeaker = computeMaxWidth(speakerEls);

  const root = scheduleEl as HTMLElement;
  root.style.setProperty("--schedule-speaker-col", `${Math.ceil(maxSpeaker)}px`);
}

window.addEventListener("load", setScheduleColumns);
