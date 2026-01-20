export class ResultModel<T> {
    data?: T;
    errorMessage?: string[]
    isSuccessful: boolean = true;
    statusCode: number=200;
}