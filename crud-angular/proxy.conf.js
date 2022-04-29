const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false, // falso > pq não estou usanso SSL > HTTPS
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
