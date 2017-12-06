export const TakeMethodInfo = <T extends {new(...args:any[]):{}}>(...args) => {
    console.log("Console", ...args);
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        console.log("Method info decorator log >>>>>>  ", target, " >>> " , propertyName, " >>> ", descriptor);
    };
}


export const TakeClassInfo = <T extends {new(...args:any[]):{}}>(constructor:T) => {
    return class extends constructor {

    }
}
