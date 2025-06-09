# MGC: Mobile-Ready Memory Card Game with Angular & Cordova

![Framework](https://img.shields.io/badge/AngularJS-1.x-red)
![Mobile](https://img.shields.io/badge/Mobile-Cordova-blueviolet)
![Task](https://img.shields.io/badge/Task-Memory_Game-orange)
![Last Updated](https://img.shields.io/badge/Last%20Updated-June%202025-blue)

MGC (Memory Game Card) is a simple browser-based memory game built using AngularJS, UI-Router and compiled with [Cordova](https://cordova.apache.org/ "Cordova's Homepage") .  
It offers a modular architecture, responsive gameplay, and animated transitions, making it a lightweight and interactive experience for users.

---

## Author

mrgonzzo  
Fullstack Developer

---

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Script Overview](#script-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Final Words](#final-words)

---

## Introduction

**MGC** (Memory Game Card) is a web-based memory game designed for entertainment and frontend learning purposes.

The game challenges players to match pairs of cards while tracking scores and game states. It is structured as a single-page application using AngularJS 1.x, and includes animated transitions and modular routing for a fluid user experience.

The project was built to showcase:

- SPA routing with Angular UI-Router
- Component-based architecture in AngularJS
- Use of factories for game logic (cards, sound, score)
- A visually engaging and responsive UI

---

## Key Features

- **Interactive Memory Game:** Match card pairs with animations and win logic.
- **Componentized Architecture:** Game views and logic separated into modular AngularJS components.
- **Stateful Routing:** Navigation through UI-Router states (main, play, win, about).
- **Sound Feedback:** Integrated sound effects on actions and victory.
- **Score Tracking:** Track and display score across sessions.
- **Cordova Integration:** Project structure and config prepared for mobile deployment with Apache Cordova.
- **Gulp Dev Server:** Optional live-reloading setup with linting for development.

---

## Project Structure

```bash
MGC/
├── src/                            # Main source folder
│   ├── index.html                  # Main HTML entry point
│   ├── app/
│   │   ├── app.js                  # AngularJS module and router configuration
│   │   ├── components/             # UI components for each view
│   │   │   ├── play/               # Main game view logic
│   │   │   │   ├── play.js
│   │   │   │   ├── card/           # Card component logic and template
│   │   │   │   ├── deck/           # Deck component (card layout)
│   │   │   │   └── counter/        # Move counter display
│   │   │   ├── win/                # Win screen
│   │   │   ├── aboutus/            # About screen
│   │   │   └── commons/            # Header and footer
│   │   ├── services/               # Game logic services (cards, score, sound)
│   │   ├── resources/              # Images and sound files used in-game
│   │   └── styles/                 # CSS styles (bootstrap, normalize, custom)
│
├── gulpfile.js                     # Gulp tasks (dev server, linting)
├── package.json                    # Node.js metadata and dependencies
└── README.md                       # Project documentation
```

---

## Script Overview

| Script / Module                        | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| `src/app/app.js`                       | Defines the AngularJS app module and routing using UI-Router.               |
| `src/app/components/play/play.js`      | Main game controller: initializes deck, handles game logic and win state.   |
| `src/app/components/play/card/card.js` | Component for individual memory cards (flipping, match detection).           |
| `src/app/components/play/deck/deck.js` | Deck renderer: organizes cards and distributes clicks to the logic layer.    |
| `src/app/components/play/counter/counter.js` | Displays and updates the move counter.                                |
| `src/app/components/win/win.js`        | Final screen controller with celebratory animation and reset option.        |
| `src/app/services/card-factory.js`     | Generates random pairs of card identifiers and handles card distribution.   |
| `src/app/services/score-factory.js`    | Tracks moves and scoring logic.                                             |
| `src/app/services/sound-factory.js`    | Provides sound feedback during play and on win.                             |
| `gulpfile.js`                          | Defines linting (`gulp-eslint`) and local server tasks using BrowserSync.   |

---

## Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/MGC.git
cd MGC
```

2. Install development dependencies (requires Node.js):
```bash
npm install
```

3. (Optional) Run a development server with auto-reload using Gulp:
```bash
gulp browserSync
```

---

## Usage
You can play the game directly by opening the index.html file inside the src/ folder in your browser, or by launching a local server.

To run the game locally:

1. Navigate to the project directory:
```bash
cd src
```

2. Launch a basic server (requires http-server or similar tool):
```bash
npx http-server
```

3. Open the game in your browser at:
```bash
http://localhost:8080
```

Alternatively, you can download and install the Android APK GonMGC.1.0.2.FinishVersion.apk for mobile fun from:
[https://drive.google.com/open?id=0B5VfUqfE2ujqOFVSSm1iU09iQTg](https://drive.google.com/file/d/0B5VfUqfE2ujqOFVSSm1iU09iQTg/view?usp=sharing&resourcekey=0-rF777piGb4Fa2Eee630FBg)

---

## Final Words

MGC (Memory Game Card) is a fun, browser-based memory game designed as both a learning project and an enjoyable challenge for players of all ages.

Whether you're improving it, forking it, or simply playing it, enjoy the experience!

You can send comments or feedback to mr.gonzzo@gmail.com. 

**If you’ve found this project useful or inspiring — feel free to build on it, break it, or just drop a star.**





