# Wallpaper Studio — Desktop (Windows)

An elegant wallpaper studio built with **React Native + Expo** and packaged as a native **Windows** app using **Tauri**.  
Browse, preview, download, and manage wallpapers with a responsive UI that works seamlessly on desktop and adapts to mobile-style interactions.

---

## Features

- **High-quality Wallpapers** — Browse curated wallpaper collections and categories.
- **Preview & Download** — Preview wallpapers in full-screen and save to your local filesystem.
- **Set as Desktop Background** — Uses native Tauri APIs to save and optionally trigger OS-level actions.
- **Favorites & Collections** — Mark wallpapers as favorites and manage local collections.
- **Responsive UI** — Built with React Native for Web, adapting to both small and large screens.
- **Native Integration via Tauri** — Access to filesystem, notifications, and optional auto-updates.
- **Adaptive Theme** — Supports light and dark modes based on system preferences.
- **Offline-first** — Recently viewed wallpapers are cached for faster access and offline viewing.

---

## Getting Started

Follow these steps to set up, run, and package **Wallpaper Studio** as a Windows desktop application.

### Prerequisites (Windows)

Make sure the following are installed:

- **Node.js (LTS)**
- **Rust toolchain (`rustup`)** — ensure both `cargo` and `rustc` are on your PATH
- **Visual Studio Build Tools** (select _Desktop development with C++_)
- **Expo CLI (optional)**: `pnpm dlx expo-cli` or use `npx`
- **pnpm** (recommended package manager)

Verify Rust and Cargo installation:

```bash
rustc --version
cargo --version
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/lexizuchenna/hng-wallpaperstudio.git
cd hng-wallpaperstudio
pnpm install
```

### Development (Web)

Develop the app using Expo’s web server (React Native for Web):

# start web dev server

```bash
pnpm expo start --web
```

Then open the URL shown in your terminal (typically http://localhost:8081) to preview the app in your browser.

Prepare Web Build for Tauri

Export a static web build that Tauri will use:

```bash
pnpm expo export --platform web
```

By default, Expo outputs to dist/ or .expo/output/web.
Ensure the directory contains an index.html file.

### Add Tauri and Configure

From the project root, initialize Tauri:

```bash
pnpm create tauri-app@latest
# or
pnpm dlx create-tauri-app
```

When prompted:

Choose “Vanilla” as the frontend type.

Set the directory to src-tauri.

After initialization, edit src-tauri/tauri.conf.json to point to your Expo build:

```json
{
  "build": {
    "beforeBuildCommand": "pnpm expo export --platform web",
    "beforeDevCommand": "pnpm expo start --web",
    "distDir": "../dist",
    "devPath": "http://localhost:19006"
  },
  "package": {
    "productName": "Wallpaper Studio",
    "version": "1.0.0"
  },
  "tauri": {
    "windows": [
      {
        "title": "Wallpaper Studio",
        "width": 1200,
        "height": 800
      }
    ]
  }
}
```

Note: Ensure that "distDir" matches the folder Expo actually outputs to after running the export command.

## Tauri Development & Build

Run the desktop app in development mode (live reload enabled):

pnpm tauri dev

Build the final Windows executable:

pnpm tauri build

The final .exe file will be located in:

src-tauri/target/release/bundle/windows

Example package.json Scripts

```json
{
  "scripts": {
    "start": "expo start",
    "start:web": "expo start --web",
    "build:web": "expo export --platform web",
    "tauri:init": "pnpm create tauri-app@latest",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build"
  }
}
```

## Native Capabilities & Notes

- Filesystem: Use @tauri-apps/api/fs to write downloaded wallpapers to user folders.

- Notifications: Use `@tauri-apps/api/notification` to alert users when downloads complete.

- Auto-updates: Configure the Tauri updater for shipping versioned releases.

- Permissions: Some features, like setting the desktop wallpaper, may require OS-level permissions.

- Security: Tauri bundles a minimal Rust core; avoid enabling unneeded APIs for maximum security.

## Recommended Folder Structure

wallpaperstudio/
├─ app/ # Expo Router (or src/) if using file-based routes
├─ src/ # Core components and screens
│ ├─ components/
│ └─ screens/
├─ assets/ # Images, icons, fonts
├─ dist/ # Expo export output (Tauri dist target)
├─ src-tauri/ # Tauri backend folder
├─ App.tsx
├─ package.json
└─ src-tauri/tauri.conf.json
