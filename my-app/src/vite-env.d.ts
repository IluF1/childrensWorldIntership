/// <reference types="vite/client" />
declare module '*.css' {
  const exports: { [exportName: string]: string }
  export = exports
}
