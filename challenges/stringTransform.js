function stringTransform(input) {
  const wordLength = input.length;
  let result = input;
  if (wordLength % 3 === 0) {
    result = result.split("").reverse().join("");
  }
  if (wordLength % 5 === 0) {
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  return result;
}
