const initialState = {
    arrayOfSelectedUsers: null,
    showSuggestion: false,
    showSelectedUsers: false,
    searchUserValue: '',
    searchTeamValue: '',
    activePage: 1,
    totalPage: 1,
    selectTeams: '5',
    teamsAmount: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEAM_TOTAL_PAGE_VALUE': {
            return {
              ...state,
              totalPage: action.payload,
            };
          }

        case 'TEAM_ACTIVE_PAGE': {
            return {
              ...state,
              activePage: action.payload,
            };
          }
          case 'RESET_TEAM_ACTIVE_PAGE': {
            return {
              ...state,
              activePage: 1,
            };
          }
        default:
        return state;
    }
};

