#!/bin/bash

# Repository settings
REPO_NAME="adapt-ai-training"
DESCRIPTION="AI survival training platform"
VISIBILITY="public"  # can be private or public

echo "Creating GitHub repository: $REPO_NAME"
echo "Please enter your GitHub username:"
read USERNAME

echo "Please enter your GitHub Personal Access Token (with repo scope):"
read -s TOKEN
echo ""

# Create repository on GitHub
echo "Creating repository on GitHub..."
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"$DESCRIPTION\",\"private\":false}"

# Set up remote origin
echo "Setting up remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main || git push -u origin master

echo "Repository successfully created and code pushed to GitHub!"
echo "Visit your repository at: https://github.com/$USERNAME/$REPO_NAME" 