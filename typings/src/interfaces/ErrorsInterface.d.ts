export interface ErrorInterface {
    _errors: {
        code: string;
        message: string;
    }[];
}
export interface ObjectErrorInterface<T> {
    [key: string]: ObjectErrorInterface<T> | T;
}
export interface ErrorsInterface {
    code: number;
    message: string;
    errors: ErrorInterface | ObjectErrorInterface<ErrorInterface>;
}
//# sourceMappingURL=ErrorsInterface.d.ts.map