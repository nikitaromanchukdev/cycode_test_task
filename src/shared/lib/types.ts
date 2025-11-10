type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

export type Path<T extends object, Depth extends number = 4> = Depth extends never
    ? never
    : {
          [K in keyof T & string]: T[K] extends object
              ? `${K}${DotPrefix<Path<T[K], Prev[Depth]>>}`
              : K;
      }[keyof T & string];
