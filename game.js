// Change the numbers below to tune the whole game in one place.
const CONFIG = {
  width: 900, // Game canvas width in pixels.
  height: 600, // Game canvas height in pixels.
  playerSpeed: 225, // Normal car speed.
  boostSpeed: 390, // Speed while Space or the boost button is held.
  playerSize: 24, // Car width and height.
  levelSeconds: 30, // Target length for a level; individual levels can tune this below.
  laserOnMs: 850, // Time a pulsing laser stays active.
  laserOffMs: 650, // Time a pulsing laser stays quiet.
  startGraceSeconds: 0.75, // Brief safe time at the start of a run.
  droneSpeed: 115, // Moving enemy speed.
  scoreStart: 10000, // Starting score before time and crash penalties.
  scorePerSecond: 180, // Points lost each second.
  crashPenalty: 750, // Points lost when a run ends in a crash.
  bestTimeKey: "neon-speedrun-best-time", // Browser save key for the best time.
  bestScoreKey: "neon-speedrun-best-score", // Browser save key for the best score.
  overallBestKey: "neon-speedrun-overall-best", // Browser save key for the full-run best time.
  overallBestScoreKey: "neon-speedrun-overall-best-score", // Browser save key for the full-run best score.
  leaderboardKey: "neon-speedrun-leaderboard", // Browser save key for local leaderboard entries.
  levelLeaderboardKey: "neon-speedrun-level-leaderboard", // Browser save key for per-level leaderboard entries.
  overallProgressKey: "neon-speedrun-overall-progress", // Browser save key for an unfinished full run.
  characterColorKey: "neon-speedrun-character-color", // Browser save key for the car color.
  playerNameKey: "neon-speedrun-player-name", // Browser save key for the player's name.
  wallThickness: 16, // Thickness of maze walls.
  touchButtonSize: 64, // Size of phone control buttons.
  touchButtonGap: 8, // Gap between phone control buttons.
  levels: [ // Level layouts, from easy to hard.
    {
      name: "Neon Warmup", difficulty: "EASY", levelSeconds: 30, droneSpeed: 90, laserOnMs: 1050, laserOffMs: 750,
      lasers: [[435, 425, 120, 12, 0], [790, 145, 100, 12, 0]],
      electricWalls: [[460, 430, 12, 95]], drones: [[475, 205, -1]], extraWalls: []
    },
    {
      name: "Pulse District", difficulty: "MEDIUM", levelSeconds: 30, droneSpeed: 115, laserOnMs: 850, laserOffMs: 650,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95]], drones: [[285, 300, 1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120]]
    },
    {
      name: "Overdrive Core", difficulty: "HARD", levelSeconds: 30, droneSpeed: 145, laserOnMs: 650, laserOffMs: 450,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1], [790, 145, 100, 12, 0]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, 1], [475, 205, -1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100]]
    },
    {
      name: "Laser Alley", difficulty: "HARD+", levelSeconds: 30, droneSpeed: 150, laserOnMs: 620, laserOffMs: 430,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1], [790, 145, 100, 12, 0]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, 1], [475, 205, -1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16]]
    },
    {
      name: "Voltage Run", difficulty: "HARD+", levelSeconds: 30, droneSpeed: 155, laserOnMs: 590, laserOffMs: 410,
      lasers: [[240, 160, 120, 12, 0], [435, 425, 120, 12, 1], [635, 250, 12, 145, 0], [790, 145, 100, 12, 1]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, -1], [475, 205, 1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [580, 280, 80, 16]]
    },
    {
      name: "Crossfire", difficulty: "VERY HARD", levelSeconds: 30, droneSpeed: 160, laserOnMs: 560, laserOffMs: 390,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1], [790, 145, 100, 12, 0]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, 1], [475, 205, -1], [690, 420, 1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16], [580, 300, 80, 16]]
    },
    {
      name: "Neon Gauntlet", difficulty: "VERY HARD", levelSeconds: 30, droneSpeed: 165, laserOnMs: 530, laserOffMs: 370,
      lasers: [[240, 160, 120, 12, 0], [435, 425, 120, 12, 1], [635, 250, 12, 145, 0], [790, 145, 100, 12, 1]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, -1], [475, 205, 1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16], [580, 300, 80, 16]]
    },
    {
      name: "Redline Maze", difficulty: "EXTREME", levelSeconds: 30, droneSpeed: 170, laserOnMs: 500, laserOffMs: 350,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1], [790, 145, 100, 12, 0]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, 1], [475, 205, -1], [690, 420, 1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16], [580, 300, 80, 16], [390, 150, 70, 16]]
    },
    {
      name: "Pulse Storm", difficulty: "EXTREME", levelSeconds: 30, droneSpeed: 180, laserOnMs: 470, laserOffMs: 320,
      lasers: [[240, 160, 120, 12, 0], [435, 425, 120, 12, 1], [635, 250, 12, 145, 0], [790, 145, 100, 12, 1]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, -1], [475, 205, 1], [690, 420, -1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16], [580, 300, 80, 16], [390, 410, 70, 16]]
    },
    {
      name: "Final Overdrive", difficulty: "FINAL", levelSeconds: 30, droneSpeed: 195, laserOnMs: 430, laserOffMs: 290,
      lasers: [[240, 160, 120, 12, 1], [435, 425, 120, 12, 0], [635, 250, 12, 145, 1], [790, 145, 100, 12, 0]],
      electricWalls: [[275, 75, 12, 95], [460, 430, 12, 95], [660, 75, 12, 95]],
      drones: [[285, 300, 1], [475, 205, -1], [690, 420, 1]],
      extraWalls: [[455, 220, 18, 120], [650, 300, 18, 100], [260, 300, 80, 16], [580, 300, 80, 16], [390, 150, 70, 16], [390, 410, 70, 16]]
    }
  ]
};

// Build the rest of the 100-level challenge from the hand-made layouts above.
const handMadeLevels = CONFIG.levels.map(level => ({ ...level }));
for (let index = CONFIG.levels.length; index < 100; index += 1) {
  const base = handMadeLevels[index % handMadeLevels.length];
  const variant = index % 6;
  const extraLaserX = 105 + ((index * 83) % 650);
  const extraLaserY = 115 + ((index * 47) % 350);
  CONFIG.levels.push({
    ...base,
    name: `Neon Maze ${index + 1}`,
    difficulty: index < 20 ? "HARD" : "EXTREME",
    droneSpeed: Math.min(240, base.droneSpeed + 20 + Math.floor(index / 8)),
    laserOnMs: Math.max(300, base.laserOnMs - 40),
    laserOffMs: Math.max(200, base.laserOffMs - 35),
    lasers: [...base.lasers, [extraLaserX, extraLaserY, 90 + variant * 8, 12, index % 2]],
    extraWalls: [...base.extraWalls, [300 + variant * 55, 245 + (index % 3) * 55, 65, 16]]
  });
}

// Make every maze a little more challenging than the original prototype.
CONFIG.levels = CONFIG.levels.map((level, index) => ({
  ...level,
  droneSpeed: Math.min(240, level.droneSpeed + 20),
  laserOnMs: Math.max(300, level.laserOnMs - 40),
  laserOffMs: Math.max(200, level.laserOffMs - 35),
  lasers: [...level.lasers, [115 + ((index * 67) % 650), 180 + ((index * 31) % 300), 80, 10, (index + 1) % 2]]
}));

const COLORS = {
  bg: 0x07091c, cyan: 0x28f7ff, pink: 0xff3bd4, purple: 0x8b5cff,
  yellow: 0xffe66d, red: 0xff3864, green: 0x6dff9b, white: 0xf4f7ff,
  wall: 0x18245b
};

class NeonSpeedrun extends Phaser.Scene {
  constructor() { super("NeonSpeedrun"); }

  makeButton(button, baseColor, baseAlpha = 0.22) {
    button.on("pointerover", () => { button.setFillStyle(COLORS.white, 0.28); button.setScale(1.04); });
    button.on("pointerout", () => { button.setFillStyle(baseColor, baseAlpha); button.setScale(1); });
    return button;
  }

  addModalBlocker(items) {
    this.children.list.forEach(child => {
      if (child.input && child.input.enabled) {
        child.setData("disabledBehindModal", true);
        child.disableInteractive();
      }
    });
    items.push(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, CONFIG.width, CONFIG.height, 0x000000, 0).setInteractive().setDepth(39));
  }

  enableBackgroundButtons() {
    this.children.list.forEach(child => {
      if (child.getData?.("disabledBehindModal")) {
        child.setInteractive();
        child.setData("disabledBehindModal", false);
      }
    });
  }

  create() {
    this.cameras.main.setBackgroundColor(COLORS.bg);
    this.keys = this.input.keyboard.addKeys("UP,DOWN,LEFT,RIGHT,SPACE");
    if (typeof this.levelIndex !== "number") this.levelIndex = 0;
    this.difficultyMode = localStorage.getItem("neon-speedrun-difficulty") || "easy";
    this.playerColor = Number(localStorage.getItem(CONFIG.characterColorKey)) || COLORS.yellow;
    this.playerName = localStorage.getItem(CONFIG.playerNameKey) || "You";
    this.showMenu();
  }

  showMenu() {
    this.gameState = "menu";
    this.children.removeAll();
    this.drawBackground();
    this.add.text(CONFIG.width / 2, 66, "NEON SPEEDRUN", { fontSize: "52px", color: "#28f7ff", fontStyle: "bold" }).setOrigin(0.5);
    const overallBest = Number(localStorage.getItem(`${CONFIG.overallBestKey}-${this.difficultyMode}`));
    const overallText = overallBest ? `${overallBest.toFixed(2)}s` : "--";
    const savedProgress = this.readOverallProgress(this.difficultyMode);
    this.add.text(CONFIG.width / 2, 112, `Overall best (${this.difficultyMode.toUpperCase()}): ${overallText}`, { fontSize: "18px", color: "#9da8ff" }).setOrigin(0.5);
    this.add.text(CONFIG.width / 2, 145, savedProgress ? `Saved run: Level ${savedProgress.levelIndex + 1} · ${savedProgress.overallElapsed.toFixed(2)}s` : "Choose a mode to start Level 1", { fontSize: "16px", color: "#9da8ff" }).setOrigin(0.5);
    this.add.text(CONFIG.width / 2, 165, `Player: ${this.playerName}`, { fontSize: "15px", color: "#6dff9b" }).setOrigin(0.5);
    const easy = this.makeButton(this.add.rectangle(335, 205, 210, 58, this.difficultyMode === "easy" ? COLORS.green : COLORS.cyan, 0.24).setStrokeStyle(2, COLORS.green, 0.9).setInteractive(), this.difficultyMode === "easy" ? COLORS.green : COLORS.cyan, 0.24);
    const hard = this.makeButton(this.add.rectangle(565, 205, 210, 58, this.difficultyMode === "hard" ? COLORS.red : COLORS.pink, 0.24).setStrokeStyle(2, COLORS.pink, 0.9).setInteractive(), this.difficultyMode === "hard" ? COLORS.red : COLORS.pink, 0.24);
    this.add.text(335, 205, "EASY\nTimer carries", { fontSize: "17px", color: "#f4f7ff", align: "center", fontStyle: "bold" }).setOrigin(0.5);
    this.add.text(565, 205, "HARD\nTimer resets", { fontSize: "17px", color: "#f4f7ff", align: "center", fontStyle: "bold" }).setOrigin(0.5);
    easy.on("pointerdown", () => this.chooseDifficulty("easy"));
    hard.on("pointerdown", () => this.chooseDifficulty("hard"));
    const levels = this.makeButton(this.add.rectangle(CONFIG.width / 2, 300, 330, 58, COLORS.cyan, 0.2).setStrokeStyle(2, COLORS.cyan, 0.9).setInteractive(), COLORS.cyan, 0.2);
    this.add.text(CONFIG.width / 2, 300, "LEVEL SELECT", { fontSize: "21px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5);
    levels.on("pointerdown", () => {
      this.difficultyMode = "normal";
      localStorage.setItem("neon-speedrun-difficulty", "normal");
      this.levelPage = 0;
      this.showLevelSelect();
    });
    const customize = this.makeButton(this.add.rectangle(CONFIG.width / 2, 380, 250, 52, COLORS.pink, 0.24).setStrokeStyle(2, COLORS.pink, 0.9).setInteractive(), COLORS.pink, 0.24);
    this.add.text(CONFIG.width / 2, 380, "CUSTOMIZE CAR", { fontSize: "19px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5);
    customize.on("pointerdown", () => this.showCustomize());
    const settings = this.makeButton(this.add.rectangle(CONFIG.width / 2, 535, 190, 42, COLORS.green, 0.22).setStrokeStyle(2, COLORS.green, 0.9).setInteractive(), COLORS.green, 0.22);
    this.add.text(CONFIG.width / 2, 535, "SETTINGS", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5);
    settings.on("pointerdown", () => this.showSettings());
    const overall = this.makeButton(this.add.rectangle(325, 465, 210, 52, COLORS.purple, 0.25).setStrokeStyle(2, COLORS.purple, 0.95).setInteractive(), COLORS.purple, 0.25);
    this.add.text(325, 465, "OVERALL TIMES", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5);
    overall.on("pointerdown", () => this.showOverallTimes());
    const leaderboard = this.makeButton(this.add.rectangle(575, 465, 210, 52, COLORS.yellow, 0.22).setStrokeStyle(2, COLORS.yellow, 0.95).setInteractive(), COLORS.yellow, 0.22);
    this.add.text(575, 465, "LEADERBOARD", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5);
    leaderboard.on("pointerdown", () => this.showLeaderboard());
  }

  showSettings() {
    this.settingsItems = [];
    const add = item => { this.settingsItems.push(item); return item; };
    this.addModalBlocker(this.settingsItems);
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 620, 370, 0x090b27, 0.98).setStrokeStyle(3, COLORS.green, 1).setInteractive().setDepth(40));
    add(this.add.text(CONFIG.width / 2, 170, "SETTINGS", { fontSize: "34px", color: "#6dff9b", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 220, "Your player name", { fontSize: "18px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    const input = add(this.add.dom(CONFIG.width / 2, 275).createFromHTML(`<input type="text" maxlength="18" value="${this.playerName.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}" aria-label="Player name" style="width:260px;height:38px;padding:0 12px;border:2px solid #28f7ff;border-radius:8px;background:#11153d;color:#f4f7ff;font-size:18px;text-align:center;box-sizing:border-box;">`));
    const save = add(this.makeButton(this.add.rectangle(350, 365, 220, 50, COLORS.cyan, 0.24).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.24));
    add(this.add.text(350, 365, "SAVE NAME", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    const saveName = () => {
      const nameField = input.node.matches?.("input") ? input.node : input.node.querySelector?.("input");
      const trimmedName = String(nameField?.value || "").trim().slice(0, 18);
      if (!trimmedName) return;
      this.playerName = trimmedName;
      localStorage.setItem(CONFIG.playerNameKey, this.playerName);
      this.closeSettings();
      this.showSettings();
    };
    save.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); saveName(); });
    input.node.addEventListener("keydown", event => { if (event.key === "Enter") saveName(); });
    const back = add(this.makeButton(this.add.rectangle(550, 365, 120, 50, COLORS.purple, 0.28).setStrokeStyle(2, COLORS.purple, 1).setInteractive().setDepth(41), COLORS.purple, 0.28));
    add(this.add.text(550, 365, "BACK", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    back.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.closeSettings(); });
  }

  closeSettings() {
    this.settingsItems?.forEach(item => item.destroy());
    this.settingsItems = [];
    this.enableBackgroundButtons();
  }

  chooseDifficulty(mode) {
    this.difficultyMode = mode;
    localStorage.setItem("neon-speedrun-difficulty", mode);
    const savedProgress = this.readOverallProgress(mode);
    this.levelIndex = savedProgress ? savedProgress.levelIndex : 0;
    this.overallElapsed = savedProgress ? savedProgress.overallElapsed : 0;
    this.newRun = savedProgress ? false : true;
    this.startRun();
  }

  readOverallProgress(mode) {
    try {
      const saved = JSON.parse(localStorage.getItem(`${CONFIG.overallProgressKey}-${mode}`));
      if (saved && Number.isInteger(saved.levelIndex) && Number.isFinite(saved.overallElapsed)) return saved;
    } catch (_error) { /* Ignore malformed old browser data. */ }
    return null;
  }

  saveOverallProgress() {
    localStorage.setItem(`${CONFIG.overallProgressKey}-${this.difficultyMode}`, JSON.stringify({ levelIndex: this.levelIndex, overallElapsed: this.overallElapsed }));
  }

  showLevelSelect() {
    this.levelMenuItems = [];
    const add = item => { this.levelMenuItems.push(item); return item; };
    this.addModalBlocker(this.levelMenuItems);
    const pageSize = 20;
    const totalPages = Math.ceil(CONFIG.levels.length / pageSize);
    this.levelPage = Math.min(this.levelPage || 0, totalPages - 1);
    const pageStart = this.levelPage * pageSize;
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 860, 580, 0x090b27, 0.98).setStrokeStyle(3, COLORS.cyan, 1).setInteractive().setDepth(40));
    add(this.add.text(CONFIG.width / 2, 55, "LEVEL SELECT", { fontSize: "32px", color: "#28f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 88, `Choose a mode · LEVELS ${pageStart + 1}-${Math.min(pageStart + pageSize, CONFIG.levels.length)}`, { fontSize: "16px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    [["easy", "EASY"], ["normal", "NORMAL"], ["hard", "HARD"]].forEach(([mode, label], index) => {
      const x = 320 + index * 130;
      const color = mode === "easy" ? COLORS.green : (mode === "normal" ? COLORS.cyan : COLORS.red);
      const modeButton = add(this.makeButton(this.add.rectangle(x, 112, 110, 32, this.difficultyMode === mode ? COLORS.yellow : color, 0.22).setStrokeStyle(2, color, 1).setInteractive().setDepth(41), this.difficultyMode === mode ? COLORS.yellow : color, 0.22));
      add(this.add.text(x, 112, label, { fontSize: "13px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
      modeButton.on("pointerdown", () => { this.difficultyMode = mode; localStorage.setItem("neon-speedrun-difficulty", mode); this.levelPage = 0; this.closeLevelSelect(); this.showLevelSelect(); });
    });
    CONFIG.levels.slice(pageStart, pageStart + pageSize).forEach((level, localIndex) => {
      const index = pageStart + localIndex;
      const bestTime = Number(localStorage.getItem(`${CONFIG.bestTimeKey}-${index}`));
      const bestScore = Number(localStorage.getItem(`${CONFIG.bestScoreKey}-${index}`));
      const timeText = bestTime ? `${bestTime.toFixed(2)}s` : "--";
      const scoreText = bestScore ? `${bestScore}` : "--";
      const column = localIndex % 4;
      const row = Math.floor(localIndex / 4);
      const x = [125, 345, 565, 785][column];
      const y = 160 + row * 68;
      const button = add(this.makeButton(this.add.rectangle(x, y, 205, 52, COLORS.cyan, 0.14).setStrokeStyle(2, COLORS.cyan, 0.85).setInteractive().setDepth(41), COLORS.cyan, 0.14));
      add(this.add.text(x - 92, y - 9, `L${index + 1} · ${level.name}`, { fontSize: "13px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0, 0.5).setDepth(42));
      add(this.add.text(x - 92, y + 13, `${level.difficulty} · ${timeText} · ${scoreText}`, { fontSize: "11px", color: "#9da8ff" }).setOrigin(0, 0.5).setDepth(42));
      const scores = add(this.makeButton(this.add.rectangle(x + 68, y, 58, 28, COLORS.yellow, 0.2).setStrokeStyle(1, COLORS.yellow, 0.9).setInteractive().setDepth(43), COLORS.yellow, 0.2));
      add(this.add.text(x + 68, y, "SCORES", { fontSize: "9px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(44));
      button.on("pointerdown", () => this.launchLevel(index));
      scores.on("pointerdown", () => { this.closeLevelSelect(); this.showLeaderboard(this.difficultyMode, index); });
    });
    const previous = add(this.makeButton(this.add.rectangle(155, 548, 125, 38, COLORS.cyan, 0.24).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.24));
    const next = add(this.makeButton(this.add.rectangle(745, 548, 125, 38, COLORS.cyan, 0.24).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.24));
    add(this.add.text(CONFIG.width / 2, 548, `PAGE ${this.levelPage + 1}/${totalPages}`, { fontSize: "16px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    add(this.add.text(155, 548, "PREVIOUS", { fontSize: "13px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    add(this.add.text(745, 548, "NEXT", { fontSize: "13px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    previous.on("pointerdown", () => { if (this.levelPage > 0) { this.levelPage -= 1; this.closeLevelSelect(); this.showLevelSelect(); } });
    next.on("pointerdown", () => { if (this.levelPage < totalPages - 1) { this.levelPage += 1; this.closeLevelSelect(); this.showLevelSelect(); } });
    const close = add(this.makeButton(this.add.rectangle(CONFIG.width / 2, 585, 120, 28, COLORS.purple, 0.3).setStrokeStyle(2, COLORS.purple, 1).setInteractive().setDepth(41), COLORS.purple, 0.3));
    add(this.add.text(CONFIG.width / 2, 585, "BACK", { fontSize: "14px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    close.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.closeLevelSelect(); });
  }

  closeLevelSelect() {
    this.levelMenuItems?.forEach(item => item.destroy());
    this.levelMenuItems = [];
    this.enableBackgroundButtons();
  }

  showOverallTimes() {
    this.overallItems = [];
    const add = item => { this.overallItems.push(item); return item; };
    this.addModalBlocker(this.overallItems);
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 620, 360, 0x090b27, 0.98).setStrokeStyle(3, COLORS.purple, 1).setInteractive().setDepth(40));
    add(this.add.text(CONFIG.width / 2, 165, "OVERALL TIMES", { fontSize: "34px", color: "#8b5cff", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 215, "Time to finish all 100 levels", { fontSize: "18px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    const easyBest = Number(localStorage.getItem(`${CONFIG.overallBestKey}-easy`));
    const normalBest = Number(localStorage.getItem(`${CONFIG.overallBestKey}-normal`));
    const hardBest = Number(localStorage.getItem(`${CONFIG.overallBestKey}-hard`));
    add(this.add.text(CONFIG.width / 2, 285, `EASY  ·  ${easyBest ? `${easyBest.toFixed(2)}s` : "Not finished yet"}`, { fontSize: "25px", color: "#6dff9b", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 330, `NORMAL  ·  ${normalBest ? `${normalBest.toFixed(2)}s` : "Not finished yet"}`, { fontSize: "25px", color: "#28f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 375, `HARD  ·  ${hardBest ? `${hardBest.toFixed(2)}s` : "Not finished yet"}`, { fontSize: "25px", color: "#ff3864", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    const back = add(this.makeButton(this.add.rectangle(CONFIG.width / 2, 445, 150, 44, COLORS.cyan, 0.22).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.22));
    add(this.add.text(CONFIG.width / 2, 445, "BACK", { fontSize: "18px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    back.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.closeOverallTimes(); });
  }

  closeOverallTimes() {
    this.overallItems?.forEach(item => item.destroy());
    this.overallItems = [];
    this.enableBackgroundButtons();
  }

  showLeaderboard(mode = this.difficultyMode, levelIndex = this.leaderboardLevel || 0) {
    this.leaderboardMode = mode;
    this.leaderboardLevel = levelIndex;
    this.leaderboardItems = [];
    const add = item => { this.leaderboardItems.push(item); return item; };
    this.addModalBlocker(this.leaderboardItems);
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 800, 550, 0x090b27, 0.98).setStrokeStyle(3, COLORS.yellow, 1).setInteractive().setDepth(40));
    add(this.add.text(CONFIG.width / 2, 50, `LEADERBOARD · LEVEL ${levelIndex + 1}`, { fontSize: "30px", color: "#ffe66d", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 82, "Best level times on this device", { fontSize: "16px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    ["easy", "normal", "hard"].forEach((tabMode, index) => {
      const x = 320 + index * 130;
      const tab = add(this.makeButton(this.add.rectangle(x, 115, 140, 36, tabMode === mode ? COLORS.yellow : COLORS.cyan, 0.22).setStrokeStyle(2, tabMode === mode ? COLORS.yellow : COLORS.cyan, 1).setInteractive().setDepth(41), tabMode === mode ? COLORS.yellow : COLORS.cyan, 0.22));
      add(this.add.text(x, 115, tabMode.toUpperCase(), { fontSize: "16px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
      tab.on("pointerdown", () => { this.closeLeaderboard(); this.showLeaderboard(tabMode, levelIndex); });
    });
    for (let index = 0; index < CONFIG.levels.length; index += 1) {
      const x = 105 + index * 77;
      const levelButton = add(this.makeButton(this.add.rectangle(x, 160, 68, 30, index === levelIndex ? COLORS.yellow : COLORS.cyan, 0.2).setStrokeStyle(1, index === levelIndex ? COLORS.yellow : COLORS.cyan, 1).setInteractive().setDepth(41), index === levelIndex ? COLORS.yellow : COLORS.cyan, 0.2));
      add(this.add.text(x, 160, `L${index + 1}`, { fontSize: "13px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
      levelButton.on("pointerdown", () => { this.closeLeaderboard(); this.showLeaderboard(mode, index); });
    }
    add(this.add.text(150, 205, "RANK", { fontSize: "14px", color: "#9da8ff", fontStyle: "bold" }).setDepth(41));
    add(this.add.text(245, 205, "DRIVER", { fontSize: "14px", color: "#9da8ff", fontStyle: "bold" }).setDepth(41));
    add(this.add.text(510, 205, "TIME", { fontSize: "14px", color: "#9da8ff", fontStyle: "bold" }).setDepth(41));
    add(this.add.text(650, 205, "SCORE", { fontSize: "14px", color: "#9da8ff", fontStyle: "bold" }).setDepth(41));
    let entries = [];
    try { entries = JSON.parse(localStorage.getItem(CONFIG.levelLeaderboardKey)) || []; } catch (_error) { entries = []; }
    entries = entries.filter(entry => entry.difficulty === mode && entry.level === levelIndex).sort((a, b) => a.time - b.time).slice(0, 8);
    if (!entries.length) add(this.add.text(CONFIG.width / 2, 300, "Finish this level to enter its leaderboard.", { fontSize: "18px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    entries.forEach((entry, index) => {
      const y = 245 + index * 34;
      add(this.add.rectangle(CONFIG.width / 2, y, 650, 32, index === 0 ? 0xffe66d : COLORS.cyan, index === 0 ? 0.16 : 0.07).setDepth(40));
      add(this.add.text(150, y, `${index + 1}`, { fontSize: "18px", color: index === 0 ? "#ffe66d" : "#f4f7ff", fontStyle: "bold" }).setOrigin(0, 0.5).setDepth(41));
      add(this.add.text(245, y, entry.name, { fontSize: "17px", color: "#f4f7ff" }).setOrigin(0, 0.5).setDepth(41));
      add(this.add.text(510, y, `${entry.time.toFixed(2)}s`, { fontSize: "17px", color: "#6dff9b" }).setOrigin(0, 0.5).setDepth(41));
      add(this.add.text(650, y, `${entry.score}`, { fontSize: "17px", color: "#f4f7ff" }).setOrigin(0, 0.5).setDepth(41));
    });
    add(this.add.text(CONFIG.width / 2, 505, "Local leaderboard for now — online classmates need a shared server.", { fontSize: "13px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    const back = add(this.makeButton(this.add.rectangle(CONFIG.width / 2, 545, 130, 38, COLORS.purple, 0.3).setStrokeStyle(2, COLORS.purple, 1).setInteractive().setDepth(41), COLORS.purple, 0.3));
    add(this.add.text(CONFIG.width / 2, 545, "BACK", { fontSize: "16px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    back.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.closeLeaderboard(); });
  }

  closeLeaderboard() {
    this.leaderboardItems?.forEach(item => item.destroy());
    this.leaderboardItems = [];
    this.enableBackgroundButtons();
  }

  launchLevel(index) {
    this.levelIndex = index;
    this.newRun = true;
    this.startRun();
  }

  showCustomize() {
    this.customizeItems = [];
    const add = item => { this.customizeItems.push(item); return item; };
    this.addModalBlocker(this.customizeItems);
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 680, 410, 0x090b27, 0.98).setStrokeStyle(3, COLORS.pink, 1).setInteractive().setDepth(40));
    add(this.add.text(CONFIG.width / 2, 155, "CUSTOMIZE YOUR CAR", { fontSize: "32px", color: "#ff3bd4", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    add(this.add.text(CONFIG.width / 2, 200, "Pick a color. Your choice is saved on this device.", { fontSize: "17px", color: "#9da8ff" }).setOrigin(0.5).setDepth(41));
    const colors = [[COLORS.yellow, "Neon Gold"], [COLORS.cyan, "Electric Blue"], [COLORS.pink, "Hot Pink"], [COLORS.green, "Laser Green"]];
    colors.forEach(([color, name], index) => {
      const x = 300 + index * 100;
      const swatch = add(this.makeButton(this.add.rectangle(x, 290, 64, 64, color, 1).setStrokeStyle(3, COLORS.white, color === this.playerColor ? 1 : 0.25).setInteractive().setDepth(41), color, 1));
      add(this.add.text(x, 345, name, { fontSize: "12px", color: "#f4f7ff" }).setOrigin(0.5).setDepth(41));
      swatch.on("pointerdown", () => {
        this.playerColor = color;
        localStorage.setItem(CONFIG.characterColorKey, String(color));
        this.closeCustomize();
        this.showCustomize();
      });
    });
    const close = add(this.makeButton(this.add.rectangle(CONFIG.width / 2, 430, 170, 52, COLORS.cyan, 0.22).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.22));
    add(this.add.text(CONFIG.width / 2, 430, "DONE", { fontSize: "20px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    close.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.closeCustomize(); });
  }

  closeCustomize() {
    this.customizeItems?.forEach(item => item.destroy());
    this.customizeItems = [];
    this.enableBackgroundButtons();
  }

  startRun() {
    this.gameState = "running";
    this.elapsed = 0;
    if (this.newRun !== false) this.overallElapsed = 0;
    this.newRun = false;
    this.hasMoved = this.levelIndex > 0;
    this.levelData = CONFIG.levels[this.levelIndex];
    this.bestTime = Number(localStorage.getItem(`${CONFIG.bestTimeKey}-${this.levelIndex}`)) || null;
    this.buildLevel();
  }

  buildLevel() {
    this.physics.world.colliders.destroy();
    this.walls?.destroy(true);
    this.drones?.destroy(true);
    this.lasers?.forEach(laser => laser.destroy());
    this.electricWalls?.forEach(barrier => barrier.destroy());
    this.finish?.destroy();
    this.player?.destroy();
    this.children.removeAll();
    this.drawBackground();
    this.walls = this.physics.add.staticGroup();
    this.addWall(0, 0, CONFIG.width, CONFIG.wallThickness);
    this.addWall(0, CONFIG.height - CONFIG.wallThickness, CONFIG.width, CONFIG.wallThickness);
    this.addWall(0, 0, CONFIG.wallThickness, CONFIG.height);
    this.addWall(CONFIG.width - CONFIG.wallThickness, 0, CONFIG.wallThickness, CONFIG.height);

    // The small maze creates readable lanes and one risky shortcut.
    this.addWall(170, 75, 18, 220);
    this.addWall(170, 390, 18, 135);
    this.addWall(365, 75, 18, 190);
    this.addWall(365, 340, 18, 185);
    this.addWall(555, 75, 18, 220);
    this.addWall(555, 390, 18, 135);
    this.addWall(745, 75, 18, 155);
    this.addWall(745, 325, 18, 200);
    // Close the top and bottom shortcuts; the middle openings are the intended routes.
    [170, 365, 555, 745].forEach(x => {
      this.addWall(x, 25, 18, 50);
      this.addWall(x, 525, 18, 50);
    });
    this.levelData.extraWalls.forEach(wall => this.addWall(...wall));

    this.lasers = [];
    this.levelData.lasers.forEach(laser => this.addLaser(...laser));

    this.electricWalls = [];
    this.levelData.electricWalls.forEach(barrier => this.addElectricWall(...barrier));

    this.drones = this.physics.add.group();
    this.levelData.drones.forEach(drone => this.addDrone(...drone));

    this.finish = this.add.rectangle(842, 300, 12, 150, COLORS.green, 0.45);
    this.finish.setStrokeStyle(2, COLORS.green, 1);
    this.physics.add.existing(this.finish, true);
    this.add.text(810, 215, "FINISH", { fontSize: "16px", color: "#6dff9b", fontStyle: "bold" });

    this.player = this.add.rectangle(82, 510, CONFIG.playerSize, CONFIG.playerSize, this.playerColor);
    this.player.setStrokeStyle(3, COLORS.white, 1);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.walls);

    this.hud = this.add.text(28, 20, "", { fontSize: "22px", color: "#f4f7ff", fontStyle: "bold" }).setDepth(10);
    this.status = this.add.text(28, 52, "", { fontSize: "15px", color: "#9da8ff" }).setDepth(10);
    const pause = this.makeButton(this.add.rectangle(CONFIG.width - 48, 34, 64, 42, COLORS.purple, 0.3).setStrokeStyle(2, COLORS.purple, 0.95).setInteractive().setDepth(20), COLORS.purple, 0.3);
    this.add.text(CONFIG.width - 48, 34, "Ⅱ", { fontSize: "24px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(21);
    pause.on("pointerdown", () => this.showPauseMenu());
    this.createTouchControls();
  }

  showPauseMenu() {
    if (this.gameState !== "running") return;
    this.gameState = "paused";
    this.physics.pause();
    this.tweens.pauseAll();
    this.pauseItems = [];
    const add = item => { this.pauseItems.push(item); return item; };
    this.addModalBlocker(this.pauseItems);
    add(this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, 470, 300, 0x050615, 0.95).setStrokeStyle(3, COLORS.purple, 1).setDepth(40));
    add(this.add.text(CONFIG.width / 2, 205, "PAUSED", { fontSize: "42px", color: "#8b5cff", fontStyle: "bold" }).setOrigin(0.5).setDepth(41));
    const resume = add(this.makeButton(this.add.rectangle(360, 330, 170, 58, COLORS.green, 0.24).setStrokeStyle(2, COLORS.green, 1).setInteractive().setDepth(41), COLORS.green, 0.24));
    const menu = add(this.makeButton(this.add.rectangle(540, 330, 170, 58, COLORS.cyan, 0.22).setStrokeStyle(2, COLORS.cyan, 1).setInteractive().setDepth(41), COLORS.cyan, 0.22));
    add(this.add.text(360, 330, "RESUME", { fontSize: "19px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    add(this.add.text(540, 330, "MAIN MENU", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(42));
    resume.on("pointerdown", () => this.resumeGame());
    menu.on("pointerdown", () => this.pauseToMenu());
  }

  resumeGame() {
    this.pauseItems?.forEach(item => item.destroy());
    this.pauseItems = [];
    this.enableBackgroundButtons();
    this.physics.resume();
    this.tweens.resumeAll();
    this.gameState = "running";
  }

  pauseToMenu() {
    this.pauseItems?.forEach(item => item.destroy());
    this.pauseItems = [];
    this.physics.resume();
    this.tweens.resumeAll();
    this.saveOverallProgress();
    this.showMenu();
  }

  drawBackground() {
    const graphics = this.add.graphics();
    graphics.fillStyle(COLORS.bg, 1).fillRect(0, 0, CONFIG.width, CONFIG.height);
    graphics.lineStyle(1, 0x17215a, 0.55);
    for (let x = 25; x < CONFIG.width; x += 25) graphics.lineBetween(x, 0, x, CONFIG.height);
    for (let y = 25; y < CONFIG.height; y += 25) graphics.lineBetween(0, y, CONFIG.width, y);
    graphics.lineStyle(2, COLORS.purple, 0.65).strokeRect(25, 25, CONFIG.width - 50, CONFIG.height - 50);
  }

  addWall(x, y, width, height) {
    const wall = this.add.rectangle(x + width / 2, y + height / 2, width, height, COLORS.wall);
    wall.setStrokeStyle(2, COLORS.cyan, 0.75);
    this.walls.add(wall);
  }

  addLaser(x, y, width, height, phase) {
    const laser = this.add.rectangle(x + width / 2, y + height / 2, width, height, COLORS.red, 0.95);
    laser.setStrokeStyle(3, COLORS.pink, 1);
    laser.activeLaser = true;
    laser.phase = phase;
    this.lasers.push(laser);
    this.tweens.add({ targets: laser, alpha: 0.12, duration: this.levelData.laserOnMs, delay: phase ? 0 : this.levelData.laserOffMs, yoyo: true, repeat: -1 });
    this.physics.add.existing(laser, true);
  }

  addElectricWall(x, y, width, height) {
    const barrier = this.add.rectangle(x + width / 2, y + height / 2, width, height, COLORS.purple, 0.85);
    barrier.setStrokeStyle(2, COLORS.pink, 1);
    this.electricWalls.push(barrier);
    this.physics.add.existing(barrier, true);
  }

  addDrone(x, y, direction) {
    const drone = this.add.circle(x, y, 13, COLORS.pink);
    drone.setStrokeStyle(3, COLORS.white, 0.9);
    this.drones.add(drone);
    drone.body.setCircle(13);
    drone.body.setVelocityX(this.levelData.droneSpeed * direction);
    drone.body.setBounce(1, 0);
    drone.body.setCollideWorldBounds(true);
    this.physics.add.collider(drone, this.walls);
  }

  createTouchControls() {
    const size = CONFIG.touchButtonSize;
    const gap = CONFIG.touchButtonGap;
    const baseX = 85;
    const baseY = CONFIG.height - 82;
    const buttons = [
      ["←", baseX - size - gap, baseY, "LEFT"], ["→", baseX + size + gap, baseY, "RIGHT"],
      ["↑", baseX, baseY - size - gap, "UP"], ["↓", baseX, baseY, "DOWN"]
    ];
    this.touchState = {};
    buttons.forEach(([label, x, y, key]) => this.touchButton(label, x, y, key));
    const boost = this.touchButton("BOOST", CONFIG.width - 100, baseY, "SPACE", 92, 64);
    boost.setFillStyle(COLORS.pink, 0.65);
  }

  touchButton(label, x, y, key, width = CONFIG.touchButtonSize, height = CONFIG.touchButtonSize) {
    const button = this.makeButton(this.add.rectangle(x, y, width, height, COLORS.cyan, 0.22).setStrokeStyle(2, COLORS.cyan, 0.85).setDepth(20).setInteractive(), COLORS.cyan, 0.22);
    this.add.text(x, y, label, { fontSize: label === "BOOST" ? "14px" : "28px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(21);
    button.on("pointerdown", () => { this.touchState[key] = true; });
    button.on("pointerup", () => { this.touchState[key] = false; });
    button.on("pointerout", () => { this.touchState[key] = false; });
    return button;
  }

  update(_time, delta) {
    if (this.gameState !== "running") return;
    this.lasers.forEach(laser => { laser.body.enable = laser.alpha > 0.45; });
    const input = key => this.keys[key].isDown || this.touchState?.[key];
    const horizontal = (input("RIGHT") ? 1 : 0) - (input("LEFT") ? 1 : 0);
    const vertical = (input("DOWN") ? 1 : 0) - (input("UP") ? 1 : 0);
    const boost = input("SPACE");
    const speed = boost ? CONFIG.boostSpeed : CONFIG.playerSpeed;
    const vector = new Phaser.Math.Vector2(horizontal, vertical);
    if (vector.lengthSq() > 0) vector.normalize();
    if (horizontal !== 0 || vertical !== 0 || boost) this.hasMoved = true;
    if (this.hasMoved) {
      this.elapsed += delta / 1000;
      this.overallElapsed += delta / 1000;
    }
    this.player.body.setVelocity(vector.x * speed, vector.y * speed);
    if (this.hasMoved && this.elapsed > CONFIG.startGraceSeconds) {
      const playerBounds = this.player.getBounds();
      const laserHit = this.lasers.some(laser => laser.body.enable && Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, laser.getBounds()));
      const electricHit = this.electricWalls.some(barrier => Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, barrier.getBounds()));
      const droneHit = this.drones.getChildren().some(drone => Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(drone.x, drone.y, 13), playerBounds));
      const finishHit = Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, this.finish.getBounds());
      if (laserHit || electricHit || droneHit) this.endRun(false);
      else if (finishHit) this.endRun(true);
    }
    const displayTime = this.difficultyMode === "easy" ? this.overallElapsed : this.elapsed;
    const score = this.currentScore();
    this.hud.setText(`${this.difficultyMode.toUpperCase()}  LEVEL ${this.levelIndex + 1}/${CONFIG.levels.length}     TIME  ${displayTime.toFixed(2)}s     SCORE  ${score}`);
    this.status.setText(boost ? "BOOST ACTIVE" : (this.hasMoved ? "Reach the finish without crashing" : "Move to start the timer"));
    if (this.elapsed > this.levelData.levelSeconds + 12) this.endRun(false, "Time out!");
  }

  endRun(won, message = won ? "FINISH!" : "CRASH!") {
    if (this.gameState !== "running") return;
    this.gameState = won ? "won" : "lost";
    this.player.body.setVelocity(0, 0);
    const finalScore = this.currentScore(won);
    const displayTime = this.difficultyMode === "easy" ? this.overallElapsed : this.elapsed;
    let bestMessage = "";
    if (won && (!this.bestTime || this.elapsed < this.bestTime)) {
      localStorage.setItem(`${CONFIG.bestTimeKey}-${this.levelIndex}`, this.elapsed.toFixed(2));
      this.bestTime = this.elapsed;
      bestMessage = "NEW BEST TIME!";
    } else if (this.bestTime) bestMessage = `Best: ${this.bestTime.toFixed(2)}s`;
    if (won) {
      const oldBestScore = Number(localStorage.getItem(`${CONFIG.bestScoreKey}-${this.levelIndex}`)) || 0;
      if (finalScore > oldBestScore) localStorage.setItem(`${CONFIG.bestScoreKey}-${this.levelIndex}`, String(finalScore));
      let levelEntries = [];
      try { levelEntries = JSON.parse(localStorage.getItem(CONFIG.levelLeaderboardKey)) || []; } catch (_error) { levelEntries = []; }
      const existingLevelEntry = levelEntries.find(entry => entry.name === this.playerName && entry.difficulty === this.difficultyMode && entry.level === this.levelIndex);
      if (!existingLevelEntry || this.elapsed < existingLevelEntry.time) {
        levelEntries = levelEntries.filter(entry => !(entry.name === this.playerName && entry.difficulty === this.difficultyMode && entry.level === this.levelIndex));
        levelEntries.push({ name: this.playerName, difficulty: this.difficultyMode, level: this.levelIndex, time: this.elapsed, score: finalScore });
        localStorage.setItem(CONFIG.levelLeaderboardKey, JSON.stringify(levelEntries));
      }
      if (this.levelIndex === CONFIG.levels.length - 1) {
        const overallKey = `${CONFIG.overallBestKey}-${this.difficultyMode}`;
        const overallScore = this.overallScore();
        const oldOverall = Number(localStorage.getItem(overallKey)) || 0;
        if (!oldOverall || this.overallElapsed < oldOverall) localStorage.setItem(overallKey, this.overallElapsed.toFixed(2));
        const oldOverallScore = Number(localStorage.getItem(`${CONFIG.overallBestScoreKey}-${this.difficultyMode}`)) || 0;
        if (overallScore > oldOverallScore) localStorage.setItem(`${CONFIG.overallBestScoreKey}-${this.difficultyMode}`, String(overallScore));
        let entries = [];
        try { entries = JSON.parse(localStorage.getItem(CONFIG.leaderboardKey)) || []; } catch (_error) { entries = []; }
        const existing = entries.find(entry => entry.name === this.playerName && entry.difficulty === this.difficultyMode);
        if (!existing || this.overallElapsed < existing.time) {
          const nextEntry = { name: this.playerName, difficulty: this.difficultyMode, time: this.overallElapsed, score: overallScore };
          entries = entries.filter(entry => !(entry.name === this.playerName && entry.difficulty === this.difficultyMode));
          entries.push(nextEntry);
          localStorage.setItem(CONFIG.leaderboardKey, JSON.stringify(entries));
        }
        localStorage.removeItem(`${CONFIG.overallProgressKey}-${this.difficultyMode}`);
      }
    }
    const shade = this.add.rectangle(CONFIG.width / 2, CONFIG.height / 2, CONFIG.width, CONFIG.height, 0x050615, 0.82).setInteractive().setDepth(30);
    const levelMessage = won && this.levelIndex < CONFIG.levels.length - 1 ? `${this.levelData.name} CLEAR!` : message;
    this.add.text(CONFIG.width / 2, 185, levelMessage, { fontSize: "52px", color: won ? "#6dff9b" : "#ff3864", fontStyle: "bold" }).setOrigin(0.5).setDepth(31);
    this.add.text(CONFIG.width / 2, 270, `Time: ${displayTime.toFixed(2)}s\nOverall: ${this.overallElapsed.toFixed(2)}s\nScore: ${finalScore}\n${bestMessage}`, { fontSize: "24px", color: "#f4f7ff", align: "center", lineSpacing: 10 }).setOrigin(0.5).setDepth(31);
    const nextLevel = won && this.levelIndex < CONFIG.levels.length - 1;
    const button = this.makeButton(this.add.rectangle(CONFIG.width / 2, 420, 250, 64, COLORS.cyan, 0.28).setStrokeStyle(3, COLORS.cyan, 1).setInteractive().setDepth(31), COLORS.cyan, 0.28);
    this.add.text(CONFIG.width / 2, 420, nextLevel ? "NEXT LEVEL" : "PLAY AGAIN", { fontSize: "24px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(32);
    button.on("pointerdown", () => {
      if (nextLevel) this.levelIndex += 1;
      else if (this.difficultyMode === "easy" && !won) {
        this.newRun = false;
      } else {
        if (!won && this.difficultyMode === "hard") this.levelIndex = 0;
        this.newRun = true;
      }
      this.startRun();
    });
    const menuButton = this.makeButton(this.add.rectangle(CONFIG.width / 2, 505, 150, 42, COLORS.purple, 0.28).setStrokeStyle(2, COLORS.purple, 1).setInteractive().setDepth(31), COLORS.purple, 0.28);
    this.add.text(CONFIG.width / 2, 505, "MENU", { fontSize: "17px", color: "#f4f7ff", fontStyle: "bold" }).setOrigin(0.5).setDepth(32);
    menuButton.on("pointerdown", (_pointer, _x, _y, event) => { event?.preventDefault?.(); event?.stopPropagation?.(); this.saveOverallProgress(); this.showMenu(); });
  }

  currentScore(won = true) {
    const scoreTime = this.difficultyMode === "easy" ? this.overallElapsed : this.elapsed;
    return Math.max(0, Math.round(CONFIG.scoreStart - scoreTime * CONFIG.scorePerSecond - (won ? 0 : CONFIG.crashPenalty)));
  }

  overallScore() {
    return Math.max(0, Math.round(CONFIG.scoreStart - this.overallElapsed * CONFIG.scorePerSecond));
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game",
  width: CONFIG.width,
  height: CONFIG.height,
  backgroundColor: COLORS.bg,
  physics: { default: "arcade", arcade: { debug: false } },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  dom: { createContainer: true },
  scene: [NeonSpeedrun]
});
