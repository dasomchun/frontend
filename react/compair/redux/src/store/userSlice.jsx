import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "홍길동",
  age: 25,
};

export const userSlice = createSlice({
  name: "user", //상태를 저장
  initialState,
  reducers: {
    //상태를 변경하는 함수
    updateUserName: (state, action) => {
      state.name = action.payload;
      //   액션이 자동 생성
      // 현재 상태(state)의 name값을 action.payload (사용자가 전달한 값) 으로 변경해라
    },
    updateUserAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { updateUserName, updateUserAge } = userSlice.actions;
export default userSlice.reducer;
