function dryNumber(dry, numbers) {
  const result = [];
  for (let i = 1; i <= numbers; i++) {
    if (i.toString().includes(dry.toString())) {
      result.push(i);
    }
  }
  return result;
}
