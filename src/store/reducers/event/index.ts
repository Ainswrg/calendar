import { EventAction, EventActionEnum, EventState } from './types';

const initialState = {
  events: [],
  guests: [],
};

export default function EventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnum.SET_EVENT:
      return { ...state, events: action.payload };
    case EventActionEnum.SET_GUEST:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}
