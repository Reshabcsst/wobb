# Wobb Influencer Portal - Web App Redesign

This project is a responsive redesign of the Wobb mobile app for web, created as part of the React.js Developer Intern assignment. The application displays available campaign listings for influencers in a clean, organized, and user-friendly interface.

## Features

- Responsive design that works seamlessly on desktop, tablet, and mobile devices
- Campaign filtering by payout type (Fixed Pay, Barter, Refund, Mixed)
- Search functionality to find campaigns by brand name, title, or category
- Visual progress indicators for hiring status
- Organized information display with clear hierarchy
- Mobile navigation menu
- Clean, modern UI with consistent design elements

## Technologies Used

- React.js
- Tailwind CSS for styling
- React Hooks for state management

## Project Structure

The project follows a component-based architecture:

- **WobbHomepage**: The main component that renders the entire homepage and contains the application state
- **CampaignCard**: A reusable component for displaying individual campaign details
- Additional utility functions for filtering and formatting data

## Installation and Setup

1. Clone the repository:
```
git clone https://github.com/your-username/wobb-web-redesign.git
cd wobb-web-redesign
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Design Choices

### Color Scheme
- Primary Blue (#3B82F6): Used for primary actions, links, and accent elements
- White (#FFFFFF): Primary background color for cards and content areas
- Light Gray (#F9FAFB): Secondary background color for page
- Dark Gray (#111827): Used for primary text
- Medium Gray (#6B7280): Used for secondary and descriptive text
- Various accent colors for badges and status indicators

### Typography
- Clear hierarchy with consistent font sizes:
  - Large headers: 24px (1.5rem)
  - Section headers: 20px (1.25rem)
  - Card titles: 18px (1.125rem)
  - Body text: 16px (1rem)
  - Detail text: 14px (0.875rem)
  - Small text: 12px (0.75rem)

### Spacing
- Consistent spacing pattern using a 4px base unit (4px, 8px, 16px, 24px, 32px, etc.)
- Tighter spacing on mobile views
- More generous spacing on desktop views
- Consistent padding within cards and containers

### Component Design
- Cards with subtle shadows and hover states
- Progress indicators with color coding
- Clear visual hierarchy of information
- Prominent call-to-action buttons

## Responsive Design

The application uses a mobile-first approach with breakpoints at:
- Mobile: Default styles (< 768px)
- Tablet: 768px and above
- Desktop: 1024px and above

Key responsive features:
- Single column layout on mobile, multi-column grid on larger screens
- Bottom navigation bar on mobile
- Horizontal filters that scroll on smaller screens
- Adjusted spacing and typography for different screen sizes

## Future Improvements

- Implement user authentication
- Add campaign detail pages
- Create application tracking functionality
- Add notifications system
- Implement dark mode
- Add analytics for user engagement

## Contact

For any questions or feedback, please reach out to [naskarreshab2003@gmail.com]