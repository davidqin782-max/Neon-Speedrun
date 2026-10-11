# Neon Speedrun — Game Plan

## Game type

**Racing.** Neon Speedrun is a fast browser game for classmates who play games during lunch break.

## Main idea

The player drives a glowing car through a neon maze. They dodge lasers, reach the finish, and try to beat their best time. A quick round should be fun to play again and again.

## Menu and customization

The start menu lets the player choose any level and see its best time and best score. A Customize button lets the player choose the car color. These choices are saved on the same device.

The menu also has two timer modes. Easy carries one timer across the full ten-level run. Hard resets the level timer each time a new level starts, while still tracking the overall run time.

## Core loop

1. Start the level.
2. Race the car through the maze.
3. Dodge lasers and other hazards.
4. Reach the finish and see the time.
5. Move to the next level or try again to beat the best score.

Version 1 has ten short maps that get harder from Easy to Final. Racing against other players online is a future idea.

## The player

The player controls one small neon race car. The car moves through a top-down maze with bright walls, dark space, and glowing paths. The goal is to finish quickly without hitting a laser.

## Controls

- **Arrow keys:** Move the car.
- **Space:** Hold to boost. Release it to return to normal speed.
- **Phone:** Tap and hold simple on-screen arrow buttons. Tap the boost button for Space.

## Obstacles and enemies

Version 1 will use three simple hazards:

1. **Laser gates:** Red beams that turn on and off.
2. **Moving drones:** Small enemies that travel along set paths.
3. **Electric walls:** Glowing barriers that block shortcuts.

## Win and lose

- **Win:** Reach the finish line.
- **Lose:** Hit a laser, drone, or electric wall. The run ends and the player can restart.

After a win, the game shows the finish time and says whether the player beat their best score.

## Scoring

The main score is the finish time. A lower time is better. The game saves the player’s best time for the level. A small bonus can be given for finishing without a crash, but speed is the most important thing.

## How it gets harder

The levels get harder in three steps:

- **Levels 1–3:** Start gently and introduce the hazards.
- **Levels 4–7:** Add faster hazards and tighter routes.
- **Levels 8–10:** Use the fastest lasers, drones, and maze layouts.

Each level is designed to take about 30 seconds.

The level should stay short, readable, and fair. Players should understand what went wrong and want to try again.

## Version 1 scope

Build **three neon maze levels** that are each fun for about 30 seconds. Include movement, phone controls, the three hazards, a run timer that counts up after the first move, finish-time screens, best-time scoring, level progression, restart, and simple neon sound or visual feedback. Save online multiplayer for a later version.
