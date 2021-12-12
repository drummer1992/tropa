import {IncomingMessage, ServerResponse} from "http";

export declare enum HttpCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    FOUND = 302,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

declare type StatusCodeType = HttpCode.OK
    | HttpCode.CREATED
    | HttpCode.NO_CONTENT
    | HttpCode.FOUND
    | HttpCode.BAD_REQUEST
    | HttpCode.UNAUTHORIZED
    | HttpCode.FORBIDDEN
    | HttpCode.NOT_FOUND
    | HttpCode.INTERNAL_SERVER_ERROR

declare class TropaError extends Error {
    constructor(message: string, statusCode: StatusCodeType)

    message: string
    statusCode: string
    name: string
}

export declare class NotFoundError extends TropaError {
}

export declare class InternalServerError extends TropaError {
}

export class TropaHooks {
    onRequest(ctx: TropaContext): void

    onResponse(ctx: TropaContext): void

    beforeParsing(ctx: TropaContext): void

    beforeHandler(ctx: TropaContext): void

    errorHandler(ctx: TropaContext): void
}


export function listener(req: IncomingMessage, res: ServerResponse): void

export function loadControllers(absolutePathToFolderWithControllers: string): void

export function setHooks(CustomHooks: TropaHooks): void

export function setApiPrefix(prefix: string): void

declare class TropaRequest {
    readonly raw: IncomingMessage
    readonly id: string
    url: string
    method: string
    headers: { [key: string]: string }
    params: { [key: string]: string }
    query: { [key: string]: string }
    body: any
}

declare class TropaResponse {
    readonly raw: ServerResponse
    readonly handovered: boolean
    statusCode: StatusCodeType
    headers: { [key: string]: string }
    body: any
}

declare class TropaContext {
    readonly request: TropaRequest
    readonly response: TropaResponse
}

export function getContext(): TropaContext

export function StatusCode(statusCode: StatusCodeType): MethodDecorator

export function Headers(headers: { [key: string]: string }): MethodDecorator

export function Prefix(prefix: string): ClassDecorator

export function Get(path: string): MethodDecorator

export function Post(path: string): MethodDecorator

export function Patch(path: string): MethodDecorator

export function Put(path: string): MethodDecorator

export function Delete(path: string): MethodDecorator

export function Body(): ParameterDecorator
export function Body(path: string, mapFn?: (body: any) => any): ParameterDecorator
export function Body(mapFn: (body: any) => any): ParameterDecorator

export function Param(): ParameterDecorator
export function Param(path: string, mapFn?: (body: any) => any): ParameterDecorator
export function Param(mapFn: (body: any) => any): ParameterDecorator

export function Query(): ParameterDecorator
export function Query(path: string, mapFn?: (body: any) => any): ParameterDecorator
export function Query(mapFn: (body: any) => any): ParameterDecorator


export function Request(): ParameterDecorator

export function Response(): ParameterDecorator

export function Context(): ParameterDecorator

interface Decorator {
    (call: (...args) => any)
}

export function Decorate(...decorators: Decorator[]): MethodDecorator | ClassDecorator