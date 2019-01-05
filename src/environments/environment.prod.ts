export const environment = {
  production: true,
  apiUrl: 'https://infinite-mesa-78891.herokuapp.com',

  tokenWhitelistedDomains: [ /algamoney-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
