export interface IInitialLogin {
    password: FieldStateType;
    email: FieldStateType;
}

export type FieldStateType = {
    value: string;
    touched: boolean;
}
