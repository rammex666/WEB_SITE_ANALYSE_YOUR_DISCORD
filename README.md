# AnalyseYourDiscord

This project is a React.js application designed to provide advanced analytics for Discord servers, including message statistics, vocal usage, and user rankings.

## Features

- Real-time charts for message and vocal analysis.
- User-friendly interface with a responsive design.
- Sections for project presentation, features, pricing, and statistics.

## Project Structure

```
analyse-your-discord
├── public
│   ├── index.html          # Main HTML file for the React application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # Contains all React components
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── Hero.jsx        # Hero section component
│   │   ├── Section.jsx     # Reusable section layout component
│   │   ├── Cards.jsx       # Component for displaying feature cards
│   │   ├── PricingTable.jsx# Component for pricing options
│   │   ├── Statistics.jsx   # Component for displaying statistics and charts
│   │   └── Footer.jsx      # Footer component
│   ├── charts              # Contains chart components
│   │   ├── MessageChart.jsx# Bar chart for messages sent
│   │   └── VoiceChart.jsx  # Line chart for vocal time
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point of the React application
│   ├── styles              # Contains CSS files
│   │   ├── App.css         # Global styles
│   │   └── index.css       # Styles specific to the index page
├── package.json            # Project metadata and dependencies
└── .gitignore              # Files and directories to ignore by Git
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd analyse-your-discord
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## License

This project is licensed under the MIT License.