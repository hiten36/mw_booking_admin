# Booking Admin Dashboard

A modern React + TypeScript admin dashboard for managing appointment bookings, built with Vite and Redux Toolkit.

## Features

- **Modern Authentication**: Beautiful login form with JWT token management
- **Dashboard Overview**: Statistics cards showing total bookings, today's bookings, and weekly trends
- **Bookings Management**: Comprehensive table view of all bookings with customer details
- **Responsive Design**: Mobile-friendly interface with modern UI components
- **Real-time Data**: RTK Query for efficient data fetching and caching
- **Professional UI**: Clean, modern design with gradients and smooth animations

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and building
- **State Management**: Redux Toolkit + RTK Query
- **Styling**: CSS-in-JS with inline styles for component isolation
- **Authentication**: JWT tokens with localStorage persistence
- **Development**: ESLint for code quality

## Project Structure

```
booking_admin/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── features/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── useAdminAuth.ts
│   │   └── bookings/
│   │       └── BookingsTable.tsx
│   ├── pages/
│   │   └── AdminDashboard.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── store.ts
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API running on port 4000

### Installation

1. **Navigate to the admin directory**

   ```bash
   cd booking_admin
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create or verify `.env` file:

   ```env
   VITE_API_URL=http://localhost:4000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## Features Overview

### Authentication System

- **Secure Login**: JWT-based authentication with form validation
- **Token Management**: Automatic token storage and retrieval from localStorage
- **Session Persistence**: Users remain logged in across browser sessions
- **Error Handling**: Clear error messages for failed login attempts

### Dashboard Interface

- **Statistics Cards**: Visual overview of booking metrics
  - Total bookings count
  - Today's bookings
  - This week's bookings
- **Modern Design**: Gradient backgrounds and smooth animations
- **Responsive Layout**: Works on desktop, tablet, and mobile devices

### Bookings Management

- **Comprehensive Table**: All booking details in an organized format
- **Customer Information**: Name, email, and contact details
- **Appointment Details**: Date, time, and booking timestamp
- **Status Indicators**: Color-coded badges for dates and times
- **Loading States**: Smooth loading animations during data fetching
- **Empty States**: Helpful messages when no bookings exist

## API Integration

The admin dashboard integrates with the backend API using RTK Query:

### Endpoints Used

- `POST /admin/login` - Admin authentication
- `GET /admin/bookings` - Fetch all bookings (protected)

### Authentication Flow

1. User enters credentials in login form
2. App sends POST request to `/admin/login`
3. Backend returns JWT token on success
4. Token stored in localStorage and used for subsequent requests
5. Protected routes automatically include token in Authorization header

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Code Organization

**Features-Based Structure**: Code is organized by features rather than file types, making it easier to locate related functionality.

**Custom Hooks**: Authentication logic is abstracted into `useAdminAuth` hook for reusability.

**Component Composition**: Large components are broken down into smaller, focused components.

## Styling Approach

### CSS-in-JS Strategy

- **Component Isolation**: Styles are defined within components to prevent conflicts
- **Dynamic Styling**: Easy to create conditional styles based on props or state
- **Type Safety**: TypeScript ensures style object correctness
- **Performance**: No external CSS files to load

### Design System

- **Color Palette**: Consistent use of modern colors (blues, purples, grays)
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Shadows**: Subtle shadows for depth and modern appearance

## Thinking Log

### Key Decisions Made

1. **Vite over Create React App**: Chose Vite for faster development builds and better performance. The hot module replacement is significantly faster than CRA.

2. **RTK Query for API Management**: Selected RTK Query over plain fetch or axios because it provides automatic caching, loading states, and error handling out of the box.

3. **CSS-in-JS Approach**: Used inline styles instead of CSS modules or styled-components to keep components self-contained and avoid build complexity.

4. **Feature-Based Folder Structure**: Organized code by features (auth, bookings) rather than file types (components, hooks) for better maintainability.

5. **TypeScript Integration**: Full TypeScript setup for better developer experience and fewer runtime errors.

6. **localStorage for Token Storage**: Simple and effective for this use case, though would consider httpOnly cookies for production.

### What I Found Challenging

1. **Responsive Design with Inline Styles**: Creating responsive layouts with CSS-in-JS required more verbose code compared to CSS media queries.

2. **Component Styling**: Balancing between component reusability and specific styling needs without creating overly complex prop interfaces.

### What I Would Improve

1. **Component Library**: Implement a proper design system with reusable UI components (Button, Card, Input, etc.) instead of inline styles everywhere.

2. **Form Validation**: Add comprehensive form validation using libraries like React Hook Form + Yup for better user experience.

3. **Error Boundaries**: Implement React Error Boundaries to gracefully handle component crashes.

4. **Accessibility**: Add proper ARIA labels, keyboard navigation, and screen reader support throughout the application.

5. **Testing**: Add unit tests with React Testing Library and integration tests for critical user flows.

6. **Performance Optimization**: Implement React.memo, useMemo, and useCallback where appropriate to prevent unnecessary re-renders.

7. **Internationalization**: Add i18n support for multiple languages.

8. **Theme System**: Implement a proper theme system with light/dark mode support.

9. **Data Visualization**: Add charts and graphs to better visualize booking trends and statistics.

10. **Real-time Updates**: Implement WebSocket connections for real-time booking updates without manual refresh.

## Environment Variables

| Variable       | Description          | Default                 |
| -------------- | -------------------- | ----------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:4000` |
