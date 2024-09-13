# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is a simple web application that displays news articles fetched from the GNews API based on different categories. It uses React for the frontend, Bootstrap for styling, and React Router for handling routing.

Features
View top news articles by category (e.g., business, technology, sports).
Click on an article to read the full details.
Responsive design using Bootstrap.

Getting Started
Clone the Repository:
git clone https://github.com/Vinayak/newsapp.git
cd newsapp

Install Dependencies:
npm install

Set Up Your API Key:
Visit GNews API and sign up to get an API key.
Create a .env file in the root directory and add your API key:
REACT_APP_GNEWS_API_KEY=your-api-key-here

Run the App:
npm start

Open in Browser: Open your browser and navigate to http://localhost:5173.
If you want to change the port number then change it in vite.config.js and add server:{ port:3000} under plugins
Project Structure
src/
components/: Contains React components (e.g., NewsItem, NewsList).
pages/: Contains different category pages (e.g., BusinessPage, TechPage).
services/: API service for fetching news data.
App.js: Main application component.
index.js: Entry point.
Routing
We use React Router for category-based routing. Each category (e.g., business, technology) has its own route. For example:

/business: Displays business-related news.
/technology: Displays technology-related news.
Styling
Bootstrap is used for styling components. You can customize the design by modifying the Bootstrap classes or adding your own CSS.

Contributing
Feel free to contribute to this project! You can add more features, improve the UI, or enhance error handling.