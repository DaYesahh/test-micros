interface InitState {
    bookTypes: string[];
}

interface Props {
    onGlobalStateChange: Function;
    setGlobalState: Function;
}

function emptyAction(args: InitState) {
    console.warn("Current execute action is empty!");
}

class Actions {

    actions: Props = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    };

    setActions(actions: Props) {
        this.actions = actions;
    }

    onGlobalStateChange(argFunc: (prev: any, next: any) => void, arg: boolean) {
      return this.actions.onGlobalStateChange(argFunc, arg);
    }

    setGlobalState(args: InitState) {
      return this.actions.setGlobalState(args);
    }
}

const actions = new Actions();
export default actions;