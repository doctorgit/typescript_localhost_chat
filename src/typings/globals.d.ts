declare type AnyObject = any;
declare type AnyArray = any[];

declare type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

interface ActionCreator<A> {
    (...args: any[]): A
}

declare type Action = ActionCreator<{ type: string }>
declare type ActionWithPayload<P> = ActionCreator<{
    type: string,
    payload: P
}>

