# Instructions to Move Gallery Folder

## Step-by-Step Guide

### Option 1: Using File Explorer (Easiest)

1. Open File Explorer and navigate to:
   ```
   C:\Users\BabuAkula\birds-society-website
   ```

2. You should see a folder named `Gallery` in the project root

3. **Copy** (don't move yet) the entire `Gallery` folder

4. Navigate into the `public` folder (you should now see it in the project)

5. **Paste** the `Gallery` folder inside the `public` folder

6. Final structure should be:
   ```
   C:\Users\BabuAkula\birds-society-website\public\Gallery\
   ```

7. Inside `public\Gallery\` you should see all your images:
   - Logo.png
   - Background_image.png
   - School.jpg
   - Yoga.jpg
   - Machine.jpg
   - Vegetable.jpg
   - Water.jpg
   - Rangoli.jpg
   - Village.jpg
   - amaraveerulu.jpg
   - And all other images

### Option 2: Using Command Prompt

1. Open Command Prompt

2. Run these commands:
   ```cmd
   cd C:\Users\BabuAkula\birds-society-website
   xcopy Gallery public\Gallery\ /E /I /Y
   ```

### Verify the Move

After moving, check that this path exists and contains images:
```
C:\Users\BabuAkula\birds-society-website\public\Gallery\Logo.png
```

### After Moving

1. Stop the development server (Ctrl+C in the terminal)
2. Start it again: `npm run dev`
3. Refresh your browser at http://localhost:3000
4. All images should now load correctly!

## Why This is Needed

Next.js serves static files (like images) from the `public` directory. Files in the `public` folder are accessible at the root URL path. So:

- `public/Gallery/Logo.png` → accessible at `/Gallery/Logo.png`
- `public/Gallery/School.jpg` → accessible at `/Gallery/School.jpg`

The code is already configured to use `/Gallery/` paths, so once you move the folder to `public/Gallery/`, everything will work perfectly!