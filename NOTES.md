# Neon Speedrun Notes

## How to run it

Open `index.html` in a modern browser. If the browser blocks local scripts, run a small local server from this folder, then open the local address. For example:

```text
python -m http.server 8000
```

Open `http://localhost:8000`.

## Where it is published

It is not published online yet. The prototype runs locally and loads Phaser 3.90.0 from jsDelivr.

## What is done

- Ten playable neon maze levels that get harder from Easy to Final.
- Arrow-key movement and Space boost.
- On-screen touch controls for phones.
- Lasers, moving drones, electric barriers, walls, and a finish line.
- Timer, score, best-time saving, crash penalty, Game Over / finish screen, and Play Again.
- Lasers pulse on and off, and Play Again resets the level cleanly.
- Hazard and finish checks are explicit, so waiting at the start will not cause a false crash.
- Each new run waits for the player to move before checking hazard collisions.
- The timer starts on first movement, Boost works while held, and top/bottom wall shortcuts are closed.
- Finishing a level unlocks the next harder level; best times are saved separately for each level.
- The start menu lists each level with its best time and score, and Customize lets players save a car color.
- The level menu uses two columns so all ten levels fit on screen.
- The main menu now has Easy and Hard timer modes, an Overall Best time, and a Level Select button.
- Easy carries the timer across levels; Hard resets the displayed timer per level while tracking the full-run time.
- Level, next-level, replay, and menu buttons start their destinations directly for reliable mouse and touch navigation.
- Overall Times is now a working menu button showing the best full-run time for Easy and Hard.
- Choosing Easy or Hard now starts Level 1 immediately; Level Select remains available for jumping to a specific level.
- The first level waits for movement before starting its timer; later levels start timing immediately.
- In Easy mode, Play Again after a death keeps the elapsed overall time and waits for movement before continuing.
- In Hard mode, dying resets the full run to Level 1 and resets the timer.
- Gameplay has a top-right pause button with Resume and Main Menu choices.
- Main Menu saves unfinished overall progress; choosing the same difficulty resumes at the saved level and time.
- Added a Polytrack-style local leaderboard with Easy/Hard tabs, rank, driver, time, and score. It records the best full run as “You”; shared online scores need a server later.
- Added Settings on the main menu so the player can save a custom name for leaderboard entries.
- Replaced the blocked pop-up name editor with an in-game text box and Save Name button.
- Made name saving work from both the Save Name button and the Enter key.
- Expanded the challenge to 100 harder mazes, with faster enemies, quicker laser cycles, extra hazards, and paged level selection.
- Added Normal mode inside Level Select; its timer starts over for each level while Easy keeps its full-run timer.
- Menu tabs now explicitly disable every button behind them until the tab is closed.
- Level Select now opens in Normal mode automatically, with extra spacing to prevent text overlap.
- Each Level Select card now has a Scores button that opens that level's leaderboard.
- Tuning values are together in the `CONFIG` object at the top of `game.js`.

## What is next

- Playtest all ten levels and adjust each maze for a fair 30-second run.
- Add simple sound effects and more feedback when hazards are hit.
- Add more maps and online racing only after the one-level loop feels good.
