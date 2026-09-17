
/*
*
* Production environment configuration file for the Angular application. This file contains settings and variables that are specific to the production environment. It is used to configure the application when it is built for production deployment.
*
* */

export const environment = {

  production: true, // Indicates to app that it is running in the production environment
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpoint: '/top-headlines',
  newsProviderSourcerEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWS_API_KEY', // Replace with your actual API key
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishablekey: 'YOUR_LOGO_API_KEY', // This means that the key is public and can be used in the frontend, but it should be kept secret in production
};
