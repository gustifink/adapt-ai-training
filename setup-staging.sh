#!/bin/bash

# This script sets up a staging branch for testing before production deployment

# Check if there are uncommitted changes
if [[ $(git status --porcelain) ]]; then
  echo "Please commit all changes before setting up a staging branch."
  exit 1
fi

# Create or switch to the staging branch
if git show-ref --verify --quiet refs/heads/staging; then
  echo "Staging branch already exists. Checking out and updating..."
  git checkout staging
  git merge main -m "Merge main into staging for testing"
else
  echo "Creating new staging branch from main..."
  git checkout -b staging
fi

# Add staging-specific configuration
echo "Configuring staging environment..."
git add .env.staging

# Commit the staging configuration
git commit -m "Configure staging environment"

echo "
Staging branch is ready!

To test locally:
- npm run dev:staging

To push to GitHub and trigger a staging deployment:
- git push origin staging

Once the staging deployment is verified, you can deploy to production:
- git checkout main
- git push origin main
" 