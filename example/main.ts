import { 
    TakeMethodInfo,
    TakeClassInfo
} from "./decorator";

@TakeClassInfo
class DecoratorExample {
    constructor() { }

    @TakeMethodInfo(true)
    public method() {
        return {

        };
    }
}

export default new DecoratorExample();