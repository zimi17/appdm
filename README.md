# Interactive University Website

A modern, responsive university website inspired by Harvard Business School's design, built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🎯 Interactive Navigation
- **Dropdown Menus**: Hover-activated dropdown navigation with smooth animations
- **Full-Screen Overlay**: Dark-themed full-screen navigation menu
- **Mobile Responsive**: Collapsible mobile menu with hamburger icon
- **Search Integration**: Search icon for future search functionality

### 🎨 Modern Design
- **Clean Layout**: Professional and minimalist design inspired by top university websites
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Hover effects and transitions for enhanced user experience
- **Accessibility**: Proper ARIA labels and semantic HTML

### 📱 Components

#### Navigation Component
- Sticky header with logo and branding
- Interactive dropdown menus for main navigation items
- Full-screen overlay navigation with dark theme
- Mobile-responsive hamburger menu
- Search and menu icons

#### Hero Section
- Compelling headline with call-to-action
- Program showcase card
- Statistics display
- Gradient background with decorative elements

#### Programs Section
- Grid layout showcasing different academic programs
- Interactive cards with hover effects
- Program details and features
- Call-to-action section

#### Faculty Section
- Featured faculty members with avatars
- Research areas with icons
- Statistics and achievements
- Professional presentation

#### Footer
- Comprehensive footer with multiple link sections
- Contact information
- Social media links
- Legal links and copyright

## Technology Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd university-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Interactive navigation component
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Programs.tsx      # Academic programs showcase
│   │   ├── Faculty.tsx       # Faculty and research section
│   │   └── Footer.tsx        # Footer with links and contact
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage component
├── assets/                   # Static assets
└── components/               # Shared components
```

## Key Features Implementation

### Interactive Navigation
The navigation system includes:
- **Hover Dropdowns**: CSS-based dropdown menus that appear on hover
- **Full-Screen Overlay**: JavaScript-controlled overlay navigation
- **State Management**: React hooks for managing navigation states
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Design System
- **Color Palette**: Red (#dc2626) as primary color with gray scale
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable component patterns

## Customization

### Colors
Update the color scheme by modifying the Tailwind classes in the components. The primary color is currently set to red (`red-600`).

### Content
All content is easily customizable by editing the data objects in each component:
- Navigation items in `Navigation.tsx`
- Program details in `Programs.tsx`
- Faculty information in `Faculty.tsx`
- Footer links in `Footer.tsx`

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added to `tailwind.config.ts` or using CSS modules.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Optimized Images**: Next.js Image component for optimized image loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered static pages for better performance
- **Lazy Loading**: Components loaded on demand

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspiration from Harvard Business School website
- Icons from React Icons (Feather Icons)
- Built with Next.js and Tailwind CSS
