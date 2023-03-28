const getUnlocalizedPath = (pathName: string | null): string => {
  if (!pathName) return '/';

  const segments = pathName.split('/');
  segments[1] = '';
  console.log(segments.join('/'));
  // return segments.join('/');

  const findNthOcurrence = (haystack: string, needle: string, n: number) => {
    const arr = haystack.split('').map((c, i) => {
      if (c === needle) return i;
    });
    const resultArray = arr.filter(e => e !== undefined);
    return resultArray[n - 1] || haystack.length;
  };

  const rawPath = pathName.slice(findNthOcurrence(pathName, '/', 2));

  if (rawPath === '') {
    return '/';
  } else {
    return rawPath;
  }
};

export { getUnlocalizedPath };
