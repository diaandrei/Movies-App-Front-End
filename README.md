# Movies Application

A web application built with React that provides information about movies and TV shows. Users can view details, leave reviews, add items to their wishlist, and explore data powered by the OMDb API. An exciting feature allows users to fetch details of missing titles by providing the title and year of release, dynamically creating entries with real-time data.

---

## Features

### Core Functionality:
- **Movie/TV Show Information**: Browse and view detailed information about movies and TV shows.
- **User Reviews**: Add and manage reviews for your favorite titles.
- **Wishlist**: Add movies and TV shows to your personalized wishlist.

### Unique Features:
- **OMDb API Integration**: Access up-to-date, real-world movie and TV show data directly from the OMDb API.
- **Dynamic Title Creation**: If a title is not found, users can provide the title and release year, and the app will fetch the title from OMDb, creating it dynamically.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone
   ```

2. Navigate to the project directory:
    ```bash
   cd Movies-App-Front-End
   ```

4. Install dependencies:
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

5. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## Usage

### Searching for Titles
- Use the search bar to look for specific movies or TV shows.
- If a title is not found, click create, enter the title and year of release, and the app will fetch the information dynamically.

### Adding Reviews
- Navigate to a movie or TV show detail page to leave a review.
- Manage and edit reviews through the user interface.

### Managing Wishlist
- Add movies and TV shows to your wishlist for easy access later.

---

## Technologies Used

- **Frontend**: React, React Router, Redux, TypeScript
- **Styling**: Tailwind CSS
- **API**: OMDb API
- **Backend**: ASP.NET Web API (.NET 8)
- **Database Management**: Entity Framework

---

## Live Demo

You can test the application here: [Movies App](https://moviesfrontend.azurewebsites.net/)

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
