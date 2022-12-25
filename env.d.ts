declare module '*.png' {
  const value: string;
  // eslint-disable-next-line no-restricted-syntax
  export default value;
}

declare module '@jiaminghi/color' {
  export const fade: (color: string, opacity: number) => string;
}
