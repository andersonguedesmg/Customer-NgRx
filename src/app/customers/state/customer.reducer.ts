const initialState = {
  customers: [
    {
      id: 1,
      name: 'Hambúrguer',
      address: 'Rua I',
      phone: '1935353535',
      membeship: 'Platinum',
    },
  ],
  loading: false,
  loaded: true,
};

export function customerReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS': {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    default: {
      return state;
    }
  }
}
