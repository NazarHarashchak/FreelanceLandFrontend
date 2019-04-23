let ROOT;

const hostname = window && window.location && window.location.hostname;
if(hostname === 'localhost') {
  ROOT = 'https://'+hostname+':44338';
} else {
  ROOT = 'https://freelancelandback.azurewebsites.net';
}

export {ROOT};
export const API_ROOT = ROOT+'/api';