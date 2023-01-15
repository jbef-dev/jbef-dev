export const unlocalizedPath = (inputPath: string | null): string => {
  if (!inputPath) return '/';

  const findNthOcurrence = (haystack: string, needle: string, n: number) => {
    const arr = haystack.split('').map((c, i) => {
      if (c === needle) return i;
    });
    const resultArray = arr.filter(e => e !== undefined);
    return resultArray[n - 1] || haystack.length;
  };

  const rawPath = inputPath.slice(findNthOcurrence(inputPath, '/', 2));

  if (rawPath === '') {
    return '/';
  } else {
    return rawPath;
  }
};
