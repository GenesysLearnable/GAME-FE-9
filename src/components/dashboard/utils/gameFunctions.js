export function getPitSummary(pit) {
  return pit.parentElement.querySelector(".ugo-count");
}

export function setSummaryTextContent(elem, count) {
  elem.textContent = count === 0 ? "" : String(count);
}

export function getPitPosition(row, column, board) {
  const pit = getPitAtPosition(row, column);
  const pitRect = pit.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  return { left: pitRect.x - boardRect.x, top: pitRect.y - boardRect.y };
}

export function getPitAtPosition(row, column) {
  return document.querySelector(`.side-${row + 1} .pit-${column + 1}`);
}

export function captureStoreByPlayer(player) {
  return document.querySelector(`.player-${player + 1} .captured`);
}

export function getCaptureStoreSummary(captureStore) {
  return captureStore?.querySelector(".ugo-count");
}

export function getCaptureStorePosition(player, board) {
  const captureStore = captureStoreByPlayer(player);
  const captureStoreRect = captureStore.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  return [captureStoreRect.x - boardRect.x, captureStoreRect.y - boardRect.y];
}

export function styleSeed(seed) {
  const parentWidth = seed.parentElement.clientWidth;
  const range = (40 * parentWidth) / 90; // by how much will the random position extend
  const offset = (-20 * parentWidth) / 90; // from what point
  const r = Math.round(Math.random() * 360);
  const x = Math.round(Math.random() * range) + offset;
  const y = Math.round(Math.random() * range) + offset;
  seed.style.transform = `rotate(${r}deg) translate(${x}px, ${y}px)`;
}

export function init() {
  const seeds = document.querySelectorAll(".ugo-seed");
  seeds.forEach((seed) => {
    styleSeed(seed);
  });
}

export function holeCount(index) {
  const parentEl = document.querySelector(`.pit-${index}`);

  return parentEl?.querySelectorAll(".ugo-seed").length;
}
