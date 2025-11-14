declare module "papaparse" {
  interface ParseResult<T> {
    data: T[];
    errors: any[];
    meta: any;
  }

  interface ParseConfig<T> {
    download?: boolean;
    header?: boolean;
    complete?: (result: ParseResult<T>) => void;
  }

  function parse<T>(file: string, config: ParseConfig<T>): void;

  export = { parse };
}
