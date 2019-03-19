let backendHost;

const hostname = window && window.location && window.location.hostname;
if(hostname == 'localhost') {
  backendHost = 'https://'+hostname+':44332';
} else {
  backendHost = 'https://'+hostname+':44331';
}

export const API_ROOT = backendHost+'/api';