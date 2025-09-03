# Cloudflare Pages Deployment Guide

This project has been configured for deployment to Cloudflare Pages. The setup supports Next.js with Sanity CMS integration.

## Prerequisites

1. Cloudflare account
2. Wrangler CLI installed: `npm install -g wrangler`
3. Cloudflare Pages project connected to your GitHub repository

## Configuration Files

### wrangler.toml
```toml
name = "appdm"
compatibility_date = "2024-01-01"

[pages_build_config]
build_command = "npm run build"
destination_dir = ".next"
root_dir = "."
build_caching = true

[vars]
NODE_ENV = "production"
```

### package.json Scripts
- `npm run pages:build` - Build the project for Cloudflare Pages
- `npm run pages:dev` - Run local development server with Wrangler

## Deployment Steps

### Option 1: GitHub Integration (Recommended)

1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)
5. Add environment variables in Cloudflare Pages settings
6. Deploy

### Option 2: Manual Deployment with Wrangler

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler auth login
   ```

3. Build the project:
   ```bash
   npm run pages:build
   ```

4. Deploy:
   ```bash
   npx wrangler pages deploy .next
   ```

## Environment Variables

Set these in your Cloudflare Pages project settings:

- `NODE_ENV`: `production`
- Add any other environment variables your app needs (Sanity tokens, etc.)

## Features Supported

- ✅ Next.js App Router
- ✅ Dynamic routes ([...slug])
- ✅ API routes
- ✅ Static generation
- ✅ Image optimization
- ✅ Sanity CMS integration
- ✅ AI content generation

## Local Development

To test Cloudflare Pages locally:

```bash
npm run pages:dev
```

This will start a local server that mimics Cloudflare Pages behavior.

## Troubleshooting

### Build Failures
- Ensure all dependencies are compatible with Cloudflare's runtime
- Check that API routes don't use Node.js-specific features
- Verify environment variables are set correctly

### Runtime Issues
- Check browser console for errors
- Ensure all external APIs are accessible from Cloudflare's network
- Verify CORS settings if needed

## Performance Considerations

- Cloudflare Pages automatically handles caching and CDN distribution
- Static assets are served from Cloudflare's global network
- API routes run on Cloudflare's edge runtime

## Cost

Cloudflare Pages offers a generous free tier:
- 100 GB bandwidth/month
- 30,000 requests/month
- Unlimited static sites

Additional usage is billed at reasonable rates.