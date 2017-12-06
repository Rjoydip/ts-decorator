import { TakeInfo } from "./decorator";

@TakeInfo()
class DecoratorExample {
    constructor() { }

    @TakeInfo()
    public method() {
        return {

        };
    }
}

export default new DecoratorExample();