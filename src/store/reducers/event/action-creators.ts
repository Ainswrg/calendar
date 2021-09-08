import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import { EventActionEnum, SetGuestsAction, SetEventsAction } from './types';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUEST, payload }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENT, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};
