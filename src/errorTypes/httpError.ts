export type HttpBody = { code: number, message: string, type: string };
export class HttpError extends Error {
    protected httpBody: HttpBody;
    protected code: number;
    protected errorType: string;

    constructor(message: string, statusCode: number, type: string, stack?: string) {
        super(message);
        this.code = statusCode;
        this.errorType = type;
        this.stack = stack;

        this.httpBody = {
            code: statusCode,
            message: message,
            type: type
        };
    }

    public static FromError(error: unknown) {
        const err = error as Error;
        const msg = err?.message ?? 'internal server error';
        const e = new HttpError(msg, 500, 'server-error', err?.stack);
        return e;
    }


    public get statusCode(): number {
        return this.code;
    }

    public get body(): HttpBody {
        return this.httpBody;
    }

    public get type(): string {
        return this.errorType;
    }



}