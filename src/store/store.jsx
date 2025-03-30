import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
  name : 'user',
  initialState : 'kim',

  reducers : {
    changeName(state){//state는 기존 state 얘기, 즉 'kim'
      return 'john '+ state
    }
  }
})

export let { changeName } = user.actions



let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Red Knit', count : 1},
    {id : 2, name : 'Grey Yordan', count : 1},
    {id : 3, name : '척 70 클래식 블랙', count : 3}
  ] ,

  reducers: {
    increase(state, action) {
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})//findIndex()는 array 뒤에 붙일 수 있는데 
// 안에 콜백함수넣고 return 뒤에 조건식도 넣으면 됩니다. 
// a라는 파라미터는 array 안에 있던 하나하나의 자료입니다.
// array에 있던 자료를 다 꺼내서 조건식에 대입해보는데 조건식이 참이면 그게 몇번째 자료인지 알려줍니다. 
// 그래서 위의 코드는 a.id와 payload가 같으면 그게 몇번째 자료인지 변수에 저장하라는 소리입니다. 

export let { increase, addItem } = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
}) 