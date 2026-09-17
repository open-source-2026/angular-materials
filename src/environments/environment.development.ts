
/*
*
* Development environment configuration for the News and Logo Provider application.
*
* This configuration file contains settings specific to the development environment, including API base URLs and endpoints for news and logo providers.
*
* */

export const environment = {

  production: false, // Indicates to app that it is running in the development environment
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpoint: '/top-headlines',
  newsProviderSourcerEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWS_API_KEY', // Replace with your actual API key
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishablekey: 'YOUR_LOGO_API_KEY', // This means that the key is public and can be used in the frontend, but it should be kept secret in production
};
