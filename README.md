# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Navigation Bar**: Fixed navigation bar at the top with mobile hamburger menu
- **Centered Content Layout**: Clean, centered content design with maximum width constraints
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Modern UI**: Beautiful, professional design with smooth transitions and hover effects
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Marketing_Portfolio/
├── app/
│   ├── components/
│   │   └── Navbar.tsx      # Navigation bar component
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page with portfolio sections
│   └── globals.css         # Global styles and Tailwind imports
├── public/                 # Static assets (images, etc.)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Update Navigation Links

Edit the `navLinks` array in `app/components/Navbar.tsx`:

```typescript
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  // Add your custom links here
];
```

### Update Content

Edit `app/page.tsx` to customize:
- Hero section text
- About section content
- Projects showcase
- Contact information

### Styling

The project uses Tailwind CSS. You can:
- Modify colors in `tailwind.config.ts`
- Update global styles in `app/globals.css`
- Use Tailwind utility classes directly in components

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

Alternatively, you can deploy to other platforms like Netlify, AWS, or any Node.js hosting service.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is open source and available under the MIT License.
