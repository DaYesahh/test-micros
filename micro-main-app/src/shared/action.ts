import { initGlobalState, MicroAppStateActions } from 'qiankun';

interface InitState {
    bookTypes: string[];
}

export const initState: InitState = {
    bookTypes: [],
};

const actions: MicroAppStateActions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
    console.log(state);
    console.log(prev);
})

export default actions;