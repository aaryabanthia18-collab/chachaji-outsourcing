# ChachaJi Outsourcing Website

A complete business website for an India-based accounting outsourcing company targeting US CPA firms.

## Features

### Main Pages
- **Homepage** - Hero section, value proposition, client logos, services overview, cost calculator, testimonials, case studies
- **Services** - Detailed service pages (Tax Prep, Bookkeeping, Payroll, Audit Support)
- **Pricing** - Pricing plans with cost savings calculator
- **About** - Company story, team, values, stats
- **Case Studies** - Success stories from client firms
- **Blog** - Resources and articles for CPA firms
- **Contact** - Contact form with CRM integration

### Key Features
- Cost savings calculator (US vs India rates)
- Live chat widget
- Booking calendar integration (Calendly-ready)
- Email signup for newsletter
- Social proof section with testimonials
- Mobile responsive design
- Fast loading with Next.js

### CRM Integration
- HubSpot integration for lead capture
- Contact form with email notifications (Resend)
- Lead scoring and tracking
- Newsletter signup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chachaji-outsourcing.git
cd chachaji-outsourcing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
# HubSpot API (optional - for CRM integration)
HUBSPOT_API_KEY=your_hubspot_api_key

# Resend API (optional - for email notifications)
RESEND_API_KEY=your_resend_api_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## Project Structure

```
chachaji-outsourcing/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components (shadcn)
│   └── *.tsx             # Page components
├── lib/                   # Utility functions
├── public/               # Static assets
├── next.config.js        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── package.json          # Dependencies
```

## Customization

### Colors
The website uses a blue color scheme. To customize:

1. Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    // Change these values
  },
}
```

2. Edit `app/globals.css` for CSS variables.

### Content
- Update company information in components
- Replace placeholder images in `public/images/`
- Update contact details in `components/footer.tsx`

### Integrations

#### HubSpot CRM
1. Get your API key from HubSpot
2. Add to `.env.local`: `HUBSPOT_API_KEY=your_key`
3. Contacts will automatically sync

#### Email Notifications (Resend)
1. Sign up at [resend.com](https://resend.com)
2. Add API key to `.env.local`
3. Update sender email in `app/api/contact/route.ts`

#### Calendly
1. Get your Calendly link
2. Update the booking link in components
3. Or use the `react-calendly` package for embedded scheduling

## SEO

The website includes:
- Meta tags in `app/layout.tsx`
- Semantic HTML structure
- Open Graph tags
- Structured data ready for implementation

## Performance

- Static site generation for fast loading
- Optimized images with Next.js Image
- Lazy loading for components
- Minimal JavaScript bundle

## Support

For questions or support, contact:
- Email: info@chachaji.com
- Phone: +91 98765 43210

## License

MIT License - feel free to use this for your own projects.
