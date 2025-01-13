# React Movie Browser TS 🎥

A simple movie browsing application built with React, TypeScript, and Vite. The app leverages The Movie Database (TMDb) API to fetch and display popular movies and TV shows, with features like a search bar, video playback, and responsive design.

## Features 🚀

- Display popular movies and TV shows in a carousel layout.
- Search functionality to find movies dynamically.
- Video playback for movie trailers with full-screen support.
- Responsive design for mobile and desktop.
- Error handling and loading states for a smooth user experience.
- Fully configured for testing with Jest and React Testing Library.

---

## Setup Instructions 🛠️

### 1. Clone the Repository

```bash
git clone https://github.com/paimdev/react-movie-browser-ts.git
cd react-movie-browser-ts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project based on the provided `.env.example` file:

```bash
cp .env.example .env
```

Open the `.env` file and add your TMDb API key:

```env
VITE_API_KEY=your_api_key_here
```

To obtain an API key:

1. Sign up at [TMDb](https://www.themoviedb.org/).
2. Navigate to **Account Settings -> API -> Create API Key**.

---

## Development 💻

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Testing 🧪

Run all tests:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

---

## Build 🔧

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Project Structure 📂

```
src/
|-- components/         # Reusable React components
|   |-- Carousel.tsx
|   |-- SearchBar.tsx
|   |-- VideoPlayer.tsx
|
|-- pages/              # Page-level components
|   |-- Home.tsx
|   |-- Details.tsx
|
|-- services/           # API and utility functions
|   |-- api.ts
|
|-- types/              # TypeScript type definitions
|   |-- Movie.ts
|
|-- tests/              # Test files
|   |-- SearchBar.test.tsx
|
|-- App.tsx             # Main app component
|-- main.tsx            # Entry point
|-- setupTests.ts       # Jest setup
|-- styles/             # Global and component-specific styles
|   |-- global.css
```

---

## Environment Variables 🌍

Use the `.env` file to store sensitive data like your API key. Example:

```
# TMDb API Key
VITE_TMDB_API_KEY=your_api_key_here
```

---

## API Integration 🌐

This project uses The Movie Database (TMDb) API:

- **Popular Movies**: `/movie/popular`
- **Popular TV Shows**: `/tv/popular`
- **Search Movies**: `/search/movie`
- **Fetch Movie Details**: `/movie/{movie_id}`

**API base URL**: `https://api.themoviedb.org/3`

---

## Testing Details ✅

The project includes unit tests using Jest and React Testing Library:

- **SearchBar**: Tests input behavior and callback functionality.
- **VideoPlayer**: Verifies playback and full-screen functionality.
- **Carousel**: Tests rendering of items and skeleton loaders during loading.

Run the tests with:

```bash
npm run test
```

---

## Deployment 🚀

To deploy the project:

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service (e.g., [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/)).

---
