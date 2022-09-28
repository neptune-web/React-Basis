interface StoreProps {
  type: string;
}

const initialState = {
  viewport: 'desktop',
};
  
const deviceState = (state = initialState, { type, ...rest }: StoreProps) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    default:
      return state;
  }
};
  
export default deviceState;
