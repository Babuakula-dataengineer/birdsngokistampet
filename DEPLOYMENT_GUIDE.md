# 🚀 Deployment Guide - Birds Society Website

## Quick Deployment Options

### Option 1: Vercel (Recommended - FREE & Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

#### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Push Your Code to GitHub**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Birds Society Website"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/birds-society-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" and use your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live at: `https://your-project-name.vercel.app`

**Benefits:**
- ✅ FREE forever
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploys on git push
- ✅ Custom domain support

---

### Option 2: Netlify (FREE Alternative)

#### Steps:

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

**Your site will be live at:** `https://your-site-name.netlify.app`

---

### Option 3: GitHub Pages (Static Export)

For GitHub Pages, you need to export as static HTML:

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // ... rest of your config
   }
   ```

2. **Build and export**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Push the `out` folder to `gh-pages` branch
   - Enable GitHub Pages in repository settings

---

## Custom Domain Setup

### After deploying to Vercel/Netlify:

1. **Buy a domain** (from GoDaddy, Namecheap, etc.)
   - Example: `birdssociety.org`

2. **Add domain in Vercel/Netlify dashboard**
   - Go to Project Settings → Domains
   - Add your custom domain

3. **Update DNS records** (in your domain registrar)
   - Add the DNS records provided by Vercel/Netlify
   - Usually A record or CNAME record

4. **Wait for DNS propagation** (5 minutes to 48 hours)

---

## Environment Variables (If Needed)

If you have any API keys or secrets:

1. **In Vercel/Netlify Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add your variables (e.g., `NEXT_PUBLIC_API_KEY`)

2. **Never commit secrets to GitHub!**
   - Use `.env.local` for local development
   - Add `.env.local` to `.gitignore`

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are optimized
- [ ] Contact form works (if applicable)
- [ ] All links are working
- [ ] Mobile responsive design tested
- [ ] SEO meta tags added
- [ ] Analytics setup (Google Analytics, if needed)
- [ ] Privacy policy and terms pages completed

---

## Recommended: Vercel Deployment (Step-by-Step)

### Detailed Instructions:

1. **Install Vercel CLI** (optional, for command-line deployment)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? birds-society-website
   - Directory? ./
   - Override settings? No

5. **Production deployment**
   ```bash
   vercel --prod
   ```

**Your site is now live!** 🎉

---

## Post-Deployment

### Monitor Your Site:

1. **Vercel Analytics** (Free)
   - Automatic in Vercel dashboard
   - Shows page views, performance

2. **Google Search Console**
   - Submit your sitemap
   - Monitor search performance

3. **Google Analytics** (Optional)
   - Add tracking code to your site
   - Monitor visitor behavior

---

## Updating Your Site

After making changes:

1. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Automatic deployment**
   - Vercel/Netlify will automatically rebuild and deploy
   - Takes 1-2 minutes

---

## Troubleshooting

### Build Fails:
- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in `package.json`
- Test `npm run build` locally first

### Images Not Loading:
- Ensure images are in `public/` folder
- Check image paths are correct
- For Vercel, images are automatically optimized

### 404 Errors:
- Check your routing in Next.js
- Ensure all pages are in the `app/` directory

---

## Cost Estimate

### FREE Options:
- **Vercel Free Tier:** Unlimited personal projects
- **Netlify Free Tier:** 100GB bandwidth/month
- **GitHub Pages:** Unlimited for public repos

### Paid Options (if you need more):
- **Vercel Pro:** $20/month (team features, more bandwidth)
- **Custom Domain:** $10-15/year
- **Email Hosting:** $5-10/month (Google Workspace, etc.)

---

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs

---

**Recommended Path for Birds Society:**

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel (takes 5 minutes)
3. ✅ Get free `.vercel.app` domain
4. ✅ Later: Add custom domain like `birdssociety.org`

**Total Time: 10-15 minutes**
**Total Cost: FREE**

Good luck with your deployment! 🚀