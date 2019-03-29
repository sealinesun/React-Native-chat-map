import createConstants from '../utils/createConstants';

const types = createConstants(
  'ON_FETCHING_REQUEST',
  'ON_FETCHING_COMPLETED',
  'ON_FETCHING_ACTIVE_FRIENDS_SUCCESS',
  'ON_FETCHING_FRIENDS_SUCCESS',
  'ON_GET_ACTIVE_CHAT_SESSION',
  'ON_SEARCH_FRIEND_SUCCESS',
  'ON_ADD_CHAT_SESSION',
  'ON_ADD_MEMBER_SUCCESS',
  'ON_REMOVE_MEMBER_SUCCESS',
  'ON_REMOVE_CHAT_SESSION',
  'ON_ACCEPT_CHAT_SUCCESS',
  'ON_REJECT_CHAT_SUCCESS',
  'ON_UPDATE_CHAT_SESSION'
);

export default types;