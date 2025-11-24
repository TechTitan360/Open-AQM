# 🌍 Open AQM - Air Quality Monitoring Platform

<div align="center">

![Open AQM Logo](public/placeholder-logo.svg)

**An open-source, comprehensive air quality monitoring and prediction platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.6.0-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🌟 About

**Open AQM (Air Quality Monitoring)** is a modern, full-featured web application designed to monitor, analyze, and predict air quality metrics in real-time. Built with cutting-edge technologies, it provides an intuitive interface for environmental data visualization, community engagement, and data-driven insights into air pollution patterns.

### Why Open AQM?

- 🌱 **Environmental Awareness**: Help communities understand their local air quality
- 📊 **Data-Driven Decisions**: ML-powered predictions for proactive planning
- 🤝 **Community Engagement**: Connect people concerned about air quality
- 🔓 **Open Source**: Transparent, extensible, and free for everyone
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

---

## ✨ Features

### 📊 Real-Time AQI Dashboard
- **Live Monitoring**: Track PM2.5, PM10, Ozone (O₃), and NO₂ levels in real-time
- **Visual Indicators**: Color-coded air quality ratings (Good, Moderate, Unhealthy, etc.)
- **Historical Trends**: 24-hour AQI history with interactive charts
- **Weather Integration**: Current weather conditions affecting air quality

### 🗺️ Interactive Map View
- **Geographic Visualization**: View air quality across different locations
- **Sensor Networks**: Monitor multiple sensor stations simultaneously
- **Location-Based Data**: Filter and analyze by specific areas

### 🤖 ML-Powered Predictions
- **Forecasting**: 24-hour and 7-day AQI predictions
- **Contributing Factors**: Analyze traffic, industry, weather impacts
- **Multiple Locations**: Compare predictions across different zones
- **Accuracy Metrics**: Confidence intervals and model performance

### 💬 Community Platform
- **Discussion Forums**: Share insights and concerns about air quality
- **Category Filtering**: Organize posts by topics (Health, Data, Policy, etc.)
- **User Authentication**: Secure Firebase authentication
- **Engagement Features**: Likes, comments, and real-time updates

### 📤 Data Upload & Integration
- **Multiple Formats**: Support for CSV, JSON, and XML
- **API Integration**: Connect external sensor networks
- **Manual Entry**: Direct data input capabilities
- **Validation**: Automated data quality checks

### 🛠️ Admin Panel
- **Sensor Management**: Monitor and configure connected sensors
- **User Administration**: Manage community members and permissions
- **Content Moderation**: Review and moderate community posts
- **Analytics Dashboard**: Track platform usage and sensor health

### 🎨 Modern UI/UX
- **Dark/Light Themes**: Automatic theme switching with system preferences
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Accessible**: WCAG 2.1 compliant components
- **Fast Performance**: Optimized with Next.js 15 features

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) (React 18.3.1)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Charts**: [Recharts 2.15.0](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form with Zod validation

### Backend & Services
- **Authentication**: [Firebase Auth](https://firebase.google.com/products/auth)
- **Database**: [Cloud Firestore](https://firebase.google.com/products/firestore)
- **Real-time Updates**: Firebase Realtime capabilities

### UI Libraries & Tools
- **Component Library**: Custom components built with Radix UI
- **State Management**: React Hooks & Context API
- **Date Handling**: date-fns
- **Rich Text Editor**: React Quill
- **Notifications**: Sonner (toast notifications)
- **Theme Management**: next-themes

### Development Tools
- **Package Manager**: npm/pnpm
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript compiler
- **CSS Processing**: PostCSS with Autoprefixer

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 8.x or higher (comes with Node.js)
  - *Alternative*: pnpm 8.x or higher
- **Git**: For version control ([Download](https://git-scm.com/))

### Optional
- **Firebase Account**: For authentication and database features ([Sign up](https://firebase.google.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/TechTitan360/Open-AQM.git
cd Open-AQM
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm:
```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (Optional - already configured)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Optional: External API Keys
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
```

> **Note**: The project comes with a default Firebase configuration. For production use, please set up your own Firebase project.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

### Firebase Setup (Optional)

If you want to use your own Firebase instance:

1. Create a new project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password provider)
3. Create a Firestore Database
4. Copy your Firebase configuration
5. Update `lib/firebase/firebase.ts` with your credentials

### Customization

#### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

#### Components
All UI components are located in the `components/` directory and can be customized.

---

## 📖 Usage

### Running the Application

#### Development Mode
```bash
npm run dev
```
Hot-reload enabled for rapid development.

#### Production Build
```bash
npm run build
npm start
```

#### Linting
```bash
npm run lint
```

### Key Pages

| Route | Description |
|-------|-------------|
| `/` | Main AQI Dashboard with real-time data |
| `/community` | Community discussion forum |
| `/prediction` | ML-based AQI predictions |
| `/upload` | Upload sensor data |
| `/admin` | Admin panel (authentication required) |

### User Actions

#### Viewing Air Quality Data
1. Navigate to the dashboard (`/`)
2. View current AQI metrics in the overview cards
3. Check the 24-hour trend chart
4. Switch between Map View and Sensor List tabs

#### Community Engagement
1. Visit `/community`
2. Sign in using the Login/Signup button
3. Browse posts or create new discussions
4. Filter by categories: Health, Data, Policy, Technology
5. Like and comment on posts

#### Uploading Sensor Data
1. Go to `/upload`
2. Choose upload method:
   - File Upload (CSV, JSON, XML)
   - API Integration
   - Manual Entry
3. Select sensor type and location
4. Submit data for processing

#### Viewing Predictions
1. Navigate to `/prediction`
2. Select a location and timeframe
3. View forecasted AQI values
4. Analyze contributing factors

---

## 📁 Project Structure

```
Open-AQM/
├── app/                          # Next.js 15 App Router
│   ├── admin/                    # Admin panel page
│   ├── community/                # Community forum pages
│   │   ├── [postId]/            # Dynamic post detail pages
│   │   └── new/                 # Create new post page
│   ├── prediction/               # AQI prediction page
│   ├── upload/                   # Data upload page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page (Dashboard)
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Radix)
│   ├── auth/                    # Authentication components
│   ├── community/               # Community forum components
│   ├── aqi-dashboard.tsx        # Main dashboard component
│   ├── aqi-chart.tsx            # AQI trend visualization
│   ├── aqi-map.tsx              # Interactive map component
│   ├── aqi-prediction.tsx       # Prediction interface
│   ├── weather-info.tsx         # Weather widget
│   ├── upload-sensor-data.tsx   # Data upload interface
│   ├── admin-panel.tsx          # Admin dashboard
│   ├── main-sidebar.tsx         # Navigation sidebar
│   └── theme-provider.tsx       # Theme management
│
├── lib/                         # Utility libraries
│   ├── firebase/                # Firebase configuration & helpers
│   │   ├── firebase.ts         # Firebase initialization
│   │   ├── auth.ts             # Authentication utilities
│   │   ├── auth-context.tsx    # Auth context provider
│   │   ├── posts.ts            # Firestore posts operations
│   │   └── comments.ts         # Firestore comments operations
│   ├── types.ts                # TypeScript type definitions
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── hooks/                       # Custom React hooks
├── public/                      # Static assets
├── styles/                      # Additional stylesheets
│
├── components.json              # UI components configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                 # Dependencies and scripts
```

---

## 🔌 API Integration

### Sensor Data API

Open AQM supports integration with external sensor networks. Example API endpoint format:

```javascript
// POST /api/sensor-data
{
  "sensorId": "AQM-1001",
  "timestamp": "2024-11-24T10:00:00Z",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060,
    "name": "Downtown"
  },
  "measurements": {
    "pm25": 42,
    "pm10": 78,
    "o3": 0.031,
    "no2": 102
  }
}
```

### External Weather API

Integrate weather data for better predictions:
```javascript
// Configure in lib/weather-api.ts
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: Open an issue with detailed information
- 💡 **Suggest Features**: Share your ideas for improvements
- 📝 **Improve Documentation**: Help make our docs better
- 🔧 **Submit Pull Requests**: Fix bugs or add features
- 🧪 **Testing**: Help test new features and report issues

### Development Workflow

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Open-AQM.git
   cd Open-AQM
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes in detail

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all TypeScript types are properly defined
- Run `npm run lint` before committing

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Example**:
```
feat(dashboard): add real-time AQI updates
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

### Manual Testing Checklist

- [ ] Dashboard loads and displays AQI data
- [ ] Charts render correctly
- [ ] Map view is interactive
- [ ] Community posts load and display
- [ ] Authentication flow works
- [ ] Data upload accepts valid files
- [ ] Predictions generate correctly
- [ ] Responsive design works on mobile
- [ ] Theme switching works
- [ ] All links navigate properly

---

## 📱 Screenshots

### Dashboard View
> The main dashboard displays real-time AQI metrics, historical trends, and weather information.

### Community Forum
> Engage with other users to discuss air quality concerns and share insights.

### Prediction Interface
> View ML-powered forecasts for AQI levels up to 7 days in advance.

### Admin Panel
> Manage sensors, users, and content from a centralized dashboard.

---

## 🔐 Security

### Reporting Security Issues

If you discover a security vulnerability, please create a private security advisory on GitHub or report it via the repository's security tab. Do not open public issues for security concerns.

### Best Practices

- Never commit API keys or credentials
- Use environment variables for sensitive data
- Keep dependencies up to date
- Follow Firebase security rules
- Implement proper authentication checks

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Open AQM Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🌐 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

### Related Projects
- [OpenAQ](https://openaq.org/) - Open air quality data platform
- [PurpleAir](https://www.purpleair.com/) - Air quality monitoring network
- [AirNow](https://www.airnow.gov/) - U.S. EPA air quality data

### Air Quality Resources
- [EPA AQI Guide](https://www.airnow.gov/aqi/aqi-basics/)
- [WHO Air Quality Guidelines](https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health)

---

## 💬 Support

### Get Help

- **📚 Documentation**: Check this README and inline code comments
- **🐛 Bug Reports**: [Open an issue](https://github.com/TechTitan360/Open-AQM/issues)
- **💡 Feature Requests**: [Start a discussion](https://github.com/TechTitan360/Open-AQM/discussions)
- **💬 Questions**: Use GitHub Discussions for general questions

### Community

- **GitHub Discussions**: Join conversations with other users
- **Contributing**: See [Contributing](#-contributing) section above

---

## 🙏 Acknowledgments

- Thanks to all contributors who help improve Open AQM
- Built with amazing open-source technologies
- Inspired by the global air quality monitoring community
- Special thanks to environmental activists and data scientists

---

## 🗺️ Roadmap

### Version 1.0 (Current)
- [x] Real-time AQI dashboard
- [x] Community forum
- [x] Basic predictions
- [x] Data upload
- [x] Admin panel

### Version 1.1 (Planned)
- [ ] Mobile app (React Native)
- [ ] Email notifications for AQI alerts
- [ ] Advanced ML models (LSTM, Prophet)
- [ ] Public API for developers
- [ ] Multi-language support

### Version 2.0 (Future)
- [ ] IoT sensor integration (Arduino, Raspberry Pi)
- [ ] Historical data analysis tools
- [ ] Comparison with regulatory standards
- [ ] Export reports in PDF format
- [ ] Integration with smart home devices

---

## 📊 Project Status

- **Status**: Active Development 🚀
- **Version**: 0.1.0
- **Last Updated**: November 2024
- **Maintenance**: Actively maintained

---

<div align="center">

**Made with ❤️ for a cleaner, healthier planet**

[⬆ Back to Top](#-open-aqm---air-quality-monitoring-platform)

[![GitHub Stars](https://img.shields.io/github/stars/TechTitan360/Open-AQM?style=social)](https://github.com/TechTitan360/Open-AQM)
[![GitHub Forks](https://img.shields.io/github/forks/TechTitan360/Open-AQM?style=social)](https://github.com/TechTitan360/Open-AQM)
[![GitHub Watchers](https://img.shields.io/github/watchers/TechTitan360/Open-AQM?style=social)](https://github.com/TechTitan360/Open-AQM)

</div>
