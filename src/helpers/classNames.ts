type Mods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mods,
  additional?: Array<string>
): string => {
  console.log(
    "!",
    Object.entries(mods).filter(([key, value]) => Boolean(value))
  );
  return [
    cls,
    [...additional],
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
