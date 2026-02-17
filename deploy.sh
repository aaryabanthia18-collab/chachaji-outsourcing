#!/bin/bash

# Deploy script for ChachaJi Outsourcing Website
# This script builds and deploys the website to Vercel

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel (if Vercel CLI is installed)
if command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
else
    echo "⚠️  Vercel CLI not found. Install with: npm i -g vercel"
    echo "📁 Build output is in the 'dist' folder."
    echo "🌐 You can manually deploy to Vercel:"
    echo "   1. Go to https://vercel.com"
    echo "   2. Import your GitHub repository"
    echo "   3. Deploy"
fi

echo "✨ Deployment process complete!"
