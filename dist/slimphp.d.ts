import { TypeCounter, ArrayStringType } from './types';
export declare function is_array(n: any): boolean;
export declare function is_string(n: any): boolean;
export declare function is_int(n: number): boolean;
export declare function is_float(n: number): boolean;
export declare function is_null(n: any): boolean;
/** only js */
export declare function is_undefined(n: any): boolean;
export declare function is_callable(n: any): boolean;
export declare function array_unique(n: any[]): any[];
/**
 * @link https://www.php.net/manual/en/function.date
 */
export declare function date(format: string): string;
/**
 * @Link https://www.php.net/manual/en/function.time.php
 */
export declare function time(): number;
/**
 * sleep
 * @param seconds
 * @returns
 */
export declare function sleep(seconds: number): Promise<unknown>;
/**
 * TODO implements
 * @link https://www.php.net/manual/en/function.sprintf.php
 */
export declare function sprintf(format: string, ...args: any[]): string;
/**
 * @link https://www.php.net/manual/en/function.str-replace.php
 **/
export declare function str_replace(search: ArrayStringType | string, replace: ArrayStringType | string, subject: ArrayStringType | string, count?: TypeCounter | null): ArrayStringType | string;
export declare function substr_replace(string: string, replace: string, offset: number, length?: number | null): string;
//# sourceMappingURL=slimphp.d.ts.map