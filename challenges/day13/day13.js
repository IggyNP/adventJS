function getFilesToBackup(lastBackup, changes) {
  let result = [];

  changes.forEach((change, i) => {
    if (change[1] > lastBackup) result.push(change[0]);
  });
  result = [...new Set(result)];
  result.sort((a, b) => a - b);
  return result;
}
