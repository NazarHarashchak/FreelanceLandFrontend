export function saveActivePage(activePage) {
    return { type: 'USER_ACTIVE_PAGE', payload: activePage };
  }
  export function resetActivePage() {
    return { type: 'RESET_USER_ACTIVE_PAGE' };
  }
  export function changeTotalPageValue(totalPage) {
    return { type: 'CHANGE_USER_TOTAL_PAGE_VALUE', payload: totalPage };
  }