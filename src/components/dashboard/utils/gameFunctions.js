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

export const initialPlayerScores = { player1: 0, player2: 0 };

export const board = [
  {
    id: 1,
    name: "pot_1",
    seed: [
      {
        name: "pot_1_seed_1",
        key: "pot_1",
      },
      {
        name: "pot_1_seed_2",
        key: "pot_1",
      },
      {
        name: "pot_1_seed_3",
        key: "pot_1",
      },
      {
        name: "pot_1_seed_4",
        key: "pot_1",
      },
    ],
  },
  {
    id: 2,
    name: "pot_2",
    seed: [
      {
        name: "pot_2_seed_1",
        key: "pot_2",
      },
      {
        name: "pot_2_seed_2",
        key: "pot_2",
      },
      {
        name: "pot_2_seed_3",
        key: "pot_2",
      },
      {
        name: "pot_2_seed_4",
        key: "pot_2",
      },
    ],
  },

  {
    id: 3,
    name: "pot_3",
    seed: [
      {
        name: "pot_3_seed_1",
        key: "pot_3",
      },
      {
        name: "pot_3_seed_2",
        key: "pot_3",
      },
      {
        name: "pot_3_seed_3",
        key: "pot_3",
      },
      {
        name: "pot_3_seed_4",
        key: "pot_3",
      },
    ],
  },
  {
    id: 4,
    name: "pot_4",
    seed: [
      {
        name: "pot_4_seed_1",
        key: "pot_4",
      },
      {
        name: "pot_4_seed_2",
        key: "pot_4",
      },
      {
        name: "pot_4_seed_3",
        key: "pot_4",
      },
      {
        name: "pot_4_seed_4",
        key: "pot_4",
      },
    ],
  },
  {
    id: 5,
    name: "pot_5",
    seed: [
      {
        name: "pot_5_seed_1",
        key: "pot_5",
      },
      {
        name: "pot_5_seed_2",
        key: "pot_5",
      },
      {
        name: "pot_5_seed_3",
        key: "pot_5",
      },
      {
        name: "pot_5_seed_4",
        key: "pot_5",
      },
    ],
  },

  {
    id: 6,
    name: "pot_6",
    seed: [
      {
        name: "pot_6_seed_1",
        key: "pot_6",
      },
      {
        name: "pot_6_seed_2",
        key: "pot_6",
      },
      {
        name: "pot_6_seed_3",
        key: "pot_6",
      },
      {
        name: "pot_6_seed_4",
        key: "pot_6",
      },
    ],
  },

  {
    id: 7,
    name: "pot_7",
    seed: [
      {
        name: "pot_7_seed_1",
        key: "pot_7",
      },
      {
        name: "pot_7_seed_2",
        key: "pot_7",
      },
      {
        name: "pot_7_seed_3",
        key: "pot_7",
      },
      {
        name: "pot_7_seed_4",
        key: "pot_7",
      },
    ],
  },
  {
    id: 8,
    name: "pot_8",
    seed: [
      {
        name: "pot_8_seed_1",
        key: "pot_8",
      },
      {
        name: "pot_8_seed_2",
        key: "pot_8",
      },
      {
        name: "pot_8_seed_3",
        key: "pot_8",
      },
      {
        name: "pot_8_seed_4",
        key: "pot_8",
      },
    ],
  },

  {
    id: 9,
    name: "pot_9",
    seed: [
      {
        name: "pot_9_seed_1",
        key: "pot_9",
      },
      {
        name: "pot_9_seed_2",
        key: "pot_9",
      },
      {
        name: "pot_9_seed_3",
        key: "pot_9",
      },
      {
        name: "pot_9_seed_4",
        key: "pot_9",
      },
    ],
  },

  {
    id: 10,
    name: "pot_10",
    seed: [
      {
        name: "pot_10_seed_1",
        key: "pot_10",
      },
      {
        name: "pot_10_seed_2",
        key: "pot_10",
      },
      {
        name: "pot_10_seed_3",
        key: "pot_10",
      },
      {
        name: "pot_10_seed_4",
        key: "pot_10",
      },
    ],
  },
  {
    id: 11,
    name: "pot_11",
    seed: [
      {
        name: "pot_11_seed_1",
        key: "pot_11",
      },
      {
        name: "pot_11_seed_2",
        key: "pot_11",
      },
      {
        name: "pot_11_seed_3",
        key: "pot_11",
      },
      {
        name: "pot_11_seed_4",
        key: "pot_11",
      },
    ],
  },

  {
    id: 12,
    name: "pot_12",
    seed: [
      {
        name: "pot_12_seed_1",
        key: "pot_12",
      },
      {
        name: "pot_12_seed_2",
        key: "pot_12",
      },
      {
        name: "pot_12_seed_3",
        key: "pot_12",
      },
      {
        name: "pot_12_seed_4",
        key: "pot_12",
      },
    ],
  },
];
