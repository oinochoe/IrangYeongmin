import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black',
  number: 0
};

// 리듀서 함수를 정의
// 리듀서는 state와 action을 파라미터로 받음
// state가 undefined 일 때 (스토어가 생성될 때) state 기본 값을 initialState로 사용합니다.
// action.types에 따라 다른 작업을 하고, 새 상태를 만들어서 반환
// 이 때 주의할 점은 state를 직접 수정하면 절대 안되고
// 기존 상태 값에 원하는 값을 덮어 쓴 새로운 객체를 만들어서 반환해야함
function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default counter;