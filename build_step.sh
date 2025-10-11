#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run linting (optional - remove if you want faster builds)
echo "Running ESLint..."
npm run eslint

# Build the production bundle
echo "Building production bundle with webpack..."
npm run build

echo "Build completed successfully!"