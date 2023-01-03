function checkPart(part) {
  for (let i = 0; i < part.length; i++) {
    let temp = part.slice(0, i) + part.slice(i + 1);
    if (
      part.slice(0, i) + part.slice(i + 1) ===
      temp.split("").reverse().join("")
    ) {
      return true;
    }
  }
  return false;
}