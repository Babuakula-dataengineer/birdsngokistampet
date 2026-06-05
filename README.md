<<<<<<< HEAD
# BIRDS Society Website

A premium, production-ready NGO website for **Bright Integrated Rural Development Society (BIRDS)** - empowering Kistampet village through community-driven development initiatives.

![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- ✨ **Modern Design**: Premium UI with glassmorphism effects and smooth animations
- 🎨 **Dark Mode**: Seamless light/dark theme switching
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router for optimal speed
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🎭 **Animations**: Smooth Framer Motion animations throughout
- 🔍 **SEO Optimized**: Complete metadata and Open Graph tags
- 💳 **Donation System**: Integrated bank details and QR code support
- 📝 **Contact Forms**: Volunteer and contact form implementations
- 📰 **Blog/News**: Latest updates and impact stories
- 🖼️ **Gallery**: Showcase community events and programs
- ❓ **FAQ Section**: Comprehensive Q&A with accordion UI

## 📋 Pages Included

1. **Home** - Hero, About preview, Impact stats, Programs, Testimonials
2. **About Us** - Organization story, values, focus areas, impact numbers
3. **Mission & Vision** - Core mission, vision, and strategic objectives
4. **Programs & Projects** - Detailed program information with initiatives
5. **Donate** - Bank details, QR codes, donation impact examples
6. **Volunteer** - Application form and volunteer opportunities
7. **Contact** - Contact form with location and social links
8. **FAQ** - Frequently asked questions with accordion
9. **Gallery** - Image gallery of events and activities
10. **Blog/News** - Latest updates and stories
11. **Privacy Policy** - Comprehensive privacy information
12. **Terms & Conditions** - Terms of service
13. **Custom 404** - Styled error page

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd C:\Users\BabuAkula\birds-society-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

```
birds-society-website/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog/News page
│   ├── contact/             # Contact page
│   ├── donate/              # Donation page
│   ├── faq/                 # FAQ page
│   ├── gallery/             # Gallery page
│   ├── mission/             # Mission & Vision page
│   ├── privacy/             # Privacy Policy page
│   ├── programs/            # Programs page
│   ├── terms/               # Terms & Conditions page
│   ├── volunteer/           # Volunteer page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── not-found.tsx        # 404 page
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── layout/             # Layout components
│   │   ├── Footer.tsx      # Footer component
│   │   └── Navbar.tsx      # Navigation component
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Button component
│   │   ├── Card.tsx        # Card component
│   │   ├── SectionHeader.tsx # Section header
│   │   └── ThemeToggle.tsx # Theme switcher
│   └── theme-provider.tsx  # Theme context provider
├── public/                  # Static assets
│   └── images/             # Image files
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* Deep Blue shades */ },
  secondary: { /* Warm Yellow shades */ },
  accent: { /* Green shades */ },
}
```

### Content

Update content in respective page files:
- NGO information: `app/about/page.tsx`
- Programs: `app/programs/page.tsx`
- Donation details: `app/donate/page.tsx`

### Bank Details

Update donation information in `app/donate/page.tsx`:

```typescript
const bankDetails = {
  accountName: 'Your Account Name',
  bank: 'Your Bank Name',
  accountNumber: 'Your Account Number',
  ifscCode: 'Your IFSC Code',
};
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting platform

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔧 Configuration

### SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your NGO Name",
  description: "Your description",
  // ... other metadata
};
```

### Analytics

Add analytics by including scripts in `app/layout.tsx` or using Next.js Script component.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👥 About BIRDS Society

**Bright Integrated Rural Development Society (BIRDS)** is a nonprofit organization dedicated to the development and empowerment of Kistampet village through:

- 📚 Education Support
- 🏥 Healthcare Awareness
- 🌳 Environmental Protection
- 💡 Youth Empowerment
- 🏗️ Infrastructure Development
- 💻 Digital Literacy

### Contact Information

- **Email**: info@birdssociety.org
- **Phone**: +91 123 456 7890
- **Location**: Kistampet Village, Telangana, India

### Bank Details for Donations

- **Account Name**: Bright Integrated Rural Development Society
- **Bank**: State Bank of India
- **Account Number**: 38618133360
- **IFSC Code**: SBIN0020153

## 🙏 Acknowledgments

- Built with ❤️ for community development
- Designed for maximum impact and accessibility
- Optimized for performance and user experience

## 📞 Support

For support, email info@birdssociety.org or visit our contact page.

---

**Made with 💙 for Kistampet Village**

*Together for Rural Development & Community Empowerment*
=======
# birdsngokistampet
BIRDS society Kistampet
>>>>>>> 15b9a22957ed14a59b7c824452ead919b203ebd5
