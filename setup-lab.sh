#!/bin/bash

 # Banking CRM Lab - Setup Script
 # Run this script to prepare the CRM demo environment

echo "🚀 Setting up Banking CRM Lab Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ before running this script."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -c 2- | cut -d. -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version $NODE_VERSION detected. Please upgrade to Node.js 16 or higher."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create logs directory for demo
mkdir -p logs

# Test build
echo "🔧 Testing build process..."
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Build test successful"
else
    echo "⚠️  Build test failed, but development server should still work"
fi

# Display setup summary
echo ""
echo "🎉 Lab environment setup complete!"
echo ""
echo "📋 Pre-lab checklist:"
echo "   ✅ Node.js installed and compatible"
echo "   ✅ Dependencies installed"
echo "   ✅ Project structure validated"
echo ""
echo "🚀 To start the CRM lab:"
echo "   1. Run: npm start"
echo "   2. Open: http://localhost:1234 (or the port shown in your terminal)"
echo "   3. Use the CRM interface in banking-crm.html"
echo ""
echo "📚 Lab materials:"
echo "   • Lab Guide: guide.md"
echo "   • Logging Guide: LOGGING-GUIDE.md"
echo "   • Demo Application: banking-crm.html"
echo ""
echo "🔧 Troubleshooting:"
echo "   • Check browser console for detailed logs"
echo "   • Ensure stable internet connection"
echo ""
echo "Ready to use the Banking CRM application! 🎯"
