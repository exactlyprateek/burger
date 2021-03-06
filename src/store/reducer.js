import * as actionTypes from "./action";
const InitialState = {
  ingredients: {
    salad : 0,
    cheese : 0,
    meat : 0,
    bacon : 0
  },
  totalPrice: 4
};
const INGREDIENT_PRICE = {
    salad: 0.4,
    cheese: 0.3,
    meat: 1.4,
    bacon: 0.8,
  };
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
          ...state,
          ingredients :{
              ...state.ingredients,
              [action.ingredientName] : state.ingredients[action.ingredientName] + 1,
            },
            totalPrice : state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients :{
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] - 1
        },
        totalPrice : state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
      };
    default :
      return state;
  }
};

export default reducer;
