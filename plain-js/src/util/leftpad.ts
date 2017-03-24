export function leftpad(
  str: string,
  len: number,
  ch: string = " "
) {
  let i = -1;
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}
