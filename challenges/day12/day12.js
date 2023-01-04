function selectSleigh(distance, sleighs) {
  const filteredSleighs = sleighs.filter(
    (sleigh) => distance * sleigh.consumption <= 20
  );
  if (filteredSleighs.length === 0) {
    return null;
  }
  return filteredSleighs[filteredSleighs.length - 1].name;
}
