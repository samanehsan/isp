/* jshint node: true */
require('dotenv').config({silent: false});

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'isp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    i18n: {
      defaultLocale: 'en'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'participate.login',
    routeIfAlreadyAuthenticated: 'participate.survey'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }
  ENV.JAMDB = {};

  if (environment === 'development') {
    ENV.JAMDB = {
      authorizer: 'jam-jwt',
      collection:'accounts',
      namespace: 'isp',
      url: 'http://localhost:1212'
    };
  }

  if (environment === 'staging' || environment === 'production') {
    ENV.JAMDB = {
      authorizer: 'jam-jwt',
      collection:'accounts',
      url: process.env.JAM_URL || 'https://staging-metadata.osf.io',
      namespace: 'isp'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.studyId = process.env.STUDY_ID;

  // Whether to load existing expData into the exp-frames
  ENV.loadData = false;

  return ENV;
};
