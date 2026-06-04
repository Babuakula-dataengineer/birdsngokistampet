# BIRDS Society Website Setup Guide

## Project Overview
Professional NGO website for BRIGHT Integrated Rural Development Society (BIRDS) - Kistampet

## Important Notes

### Gallery Images
The gallery images are located in the `/Gallery` folder at the root of the project. Next.js serves these images directly via the `/Gallery` path.

**To properly set up images:**
1. Ensure the `Gallery` folder exists in the project root (same level as `app` folder)
2. All images should be accessible via `/Gallery/filename.jpg` in the code
3. For production deployment, you may want to move these to the `public` folder:
   - Create `public/images/gallery` folder
   - Copy all images from `Gallery` to `public/images/gallery`
   - Update image paths in components from `/Gallery/` to `/images/gallery/`

### Key Features Implemented

1. **Hero Section** - Full-screen hero with BIRDS logo and tagline
2. **About Section** - Organization information with gallery photos
3. **Mission & Vision** - Cards with images and descriptions
4. **Programs** - 8 program cards with gallery images
5. **Community Events** - 6 major events with actual photos
6. **Our Story** - Timeline-style storytelling section
7. **Gallery Page** - Filterable gallery with lightbox (23 images)
8. **WhatsApp Integration** - Floating button on all pages
9. **Contact Form** - With email and WhatsApp options
10. **Donate Page** - Bank details only (UPI removed as requested)

### Color Palette
- Primary Green: #2E7D32
- Primary Blue: #1565C0
- Accent Orange: #F57C00

### Contact Information
- Email: akulababu20@gmail.com
- Phone: +91-7981974262
- WhatsApp: +91-7981974262

### Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Browser Access
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment Notes

1. **Vercel (Recommended)**
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js
   - Ensure Gallery folder is included in deployment

2. **Other Platforms**
   - Build the project: `npm run build`
   - Deploy the `.next` folder and `Gallery` folder
   - Set Node.js version to 18 or higher

### Image Optimization
For better performance in production:
1. Consider converting images to WebP format
2. Optimize image sizes (recommended max width: 1920px)
3. Use Next.js Image component (already implemented)

### Future Enhancements
- Add blog functionality
- Implement newsletter subscription backend
- Add donation payment gateway integration
- Create admin panel for content management
- Add multilingual support (Telugu/Hindi)

## Support
For technical support or questions, contact: akulababu20@gmail.com

---
Built with ❤️ for BIRDS Society Kistampet