
import {createStore} from 'redux';



const incrementCount= ({incrementBy = 1 }= { }) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount =  ({decrementBy = 1} = { }) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

//Reducers
//1. reducers are pure functions 
// 2. never change state or action 

const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':  
             return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }  
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));



store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 15}));


store.dispatch (setCount({count: 101}));

