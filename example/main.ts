import { 
    TakeMethodInfo,
    TakeClassInfo
} from "./decorator";

@TakeClassInfo
class DecoratorExample {
    constructor() { }

    @TakeMethodInfo()
    public method() {
        return {

        };
    }
}

export default new DecoratorExample();