/**
 * Configuration file for environment-specific settings
 */

const ENV = process.env.NODE_ENV || 'development';

const config = {
  // Common configuration across all environments
  common: {
    siteName: 'Adapt AI Training',
    version: '1.0.0'
  },
  
  // Development environment (local)
  development: {
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:3000/api',
    debug: true
  },
  
  // Staging environment (for testing before production)
  staging: {
    baseUrl: 'https://staging-adapt-ai.vercel.app',
    apiUrl: 'https://staging-adapt-ai.vercel.app/api',
    debug: true
  },
  
  // Production environment
  production: {
    baseUrl: 'https://adapt-ai-training.vercel.app',
    apiUrl: 'https://adapt-ai-training.vercel.app/api',
    debug: false
  }
};

// Export the configuration for the current environment
module.exports = {
  ...config.common,
  ...config[ENV],
  env: ENV
}; 