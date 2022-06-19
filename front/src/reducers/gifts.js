import { createSlice } from "@reduxjs/toolkit";
///////////리듀서
const initialState = {
  allGifts: [],
  giftsLoading: false,
  giftsDone: false,
  giftsError: null,
};

export const GIFTS_REQUEST = "GIFTS_REQUEST";
export const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";
export const FAILED_REQUEST = "FAILED_REQUEST";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const UPDATE_VIEW = "UPDATE_VIEW";

export const selectAllGifts = (data) => {
  console.log("action / selectAllGifts");
  return {
    type: GIFTS_REQUEST,
    data: data,
  };
};

export const searchGifts = (data) => {
  console.log("action / searchGifts");
  return {
    type: SEARCH_REQUEST,
    data: data,
  };
};

export const updateView = (data) => {
  console.log("action / updateView");
  return {
    type: UPDATE_VIEW,
    data: data,
  };
};

const gifts = (state = initialState, action) => {
  switch (action.type) {
    case GIFTS_REQUEST: {
      console.log("reducer / 사진 가져오기 요청");
      return {
        ...state,
        allGifts: [],
        giftsLoading: true,
        giftsDone: false,
        giftsError: null,
      };
    }
    case SEARCH_REQUEST: {
      console.log("reducer / 사진 검색하기 요청");
      return {
        ...state,
        allGifts: [],
        giftsLoading: true,
        giftsDone: false,
        giftsError: null,
      };
    }
    case SELECT_ALL_GIFTS: {
      console.log("reducer / 사진 가져오기 완료");
      console.log("reducer / ", action.payload);
      return {
        ...state,
        allGifts: action.payload,
        giftsLoading: false,
        giftsDone: true,
      };
    }
    case FAILED_REQUEST: {
      console.log("reducer / 사진 가져오기 실패");
      return {
        giftsLoading: false,
        giftsError: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default gifts;

// const giftsSlice = createSlice({
//   name: "gifts",
//   initialState,
//   reducers: {
//     selectAllGifts: (state, { payload }) => {
//       console.log(payload);
//       state.allGifts = payload;
//     },
//     load: (state) => {
//       state.isLoading = true;
//     },
//     selectAllGiftsFail: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { load, selectAllGiftsFail } = giftsSlice.actions;

// const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";

// export const selectAllgifts = createAsyncThunk(SELECT_ALL_GIFTS, async () => {
//   return await giftsApi();
// });
// export const selectAllgifts = (payload) => {
//   return {
//     type: SELECT_ALL_GIFTS,
//     payload: payload,
//   };
// };

// export const usersSlice = createSlice({
//   name: "gifts",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(selectAllgifts.pending, (state, { payload }) => {
//         const newGifts = { ...state.allGifts };
//         newGifts.loading = true;
//         return { ...state, allGifts: newGifts };
//       })
//       .addCase(selectAllgifts.fulfilled, (state, { payload }) => {
//         const newGifts = { ...state.allGifts };
//         newGifts.loading = true;
//         if (payload) {
//           newGifts.gifts = payload;
//           return { ...state, allGifts: newGifts };
//         } else {
//           newGifts.message = "선물이 없습니다";
//           return { ...state, allGifts: newGifts };
//         }
//       })
//       .addCase(selectAllgifts.rejected, (state, { error }) => {
//         const newGifts = { ...state.allGifts };
//         newGifts.loading = false;
//         newGifts.message = error.message;
//         return { ...state, allGifts: newGifts };
//       });
//   },
// });
// export default usersSlice.reducer;
