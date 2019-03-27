let ROOT;

const hostname = window && window.location && window.location.hostname;
if(hostname === 'localhost') {
  ROOT = 'https://'+hostname+':44332';
} else {
  ROOT = 'https://'+hostname+':44331';
}

export {ROOT};
export const API_ROOT = ROOT+'/api';