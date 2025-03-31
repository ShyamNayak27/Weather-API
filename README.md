# Weather-API
# Modern Weather Application


A sleek, responsive weather application that provides real-time weather information for any city worldwide using the OpenWeatherMap API. The application features a modern, glassmorphic UI design with a clean and intuitive interface.

## Features

- **Real-time Weather Data**: Get current weather conditions for any city globally
- **Temperature Details**: View current, maximum, and minimum temperatures
- **Weather Description**: Clear weather descriptions with corresponding icons
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Modern UI**: Glassmorphic design with smooth animations and transitions


## Technologies Used

- HTML5
- CSS3 (with modern features like CSS variables, flexbox, and animations)
- JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome icons

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShyamNayak27/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Open `app.js` and replace the API key with your own from [OpenWeatherMap](https://openweathermap.org/api):
   ```javascript
   const apiKey = "YOUR_API_KEY";
   ```

4. Open `index.html` in your browser or use a local development server.

## Usage

1. Enter a city name in the search bar
2. Click the search icon or press Enter
3. View the current weather information for the specified city

The app displays:
- Current date
- City name
- Weather icon representing current conditions
- Weather description
- Current temperature
- Daily high and low temperatures

## API Reference

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

API endpoint used:
```
https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric
```

## Customization

You can customize the app's appearance by modifying the CSS variables in the `:root` section of `style.css`:

```css
:root {
  --primary-color: #4361ee;
  --secondary-color: #3a0ca3;
  --text-light: #f8f9fa;
  --text-dark: #212529;
  --bg-gradient: linear-gradient(135deg, #4361ee, #3a0ca3);
  /* More variables... */
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
