function createCube(size) {
	let upperSide = "";
	let lowerSide = "";
	let cube = "";
  
	for (let i = 1; i <= size; i++) {
	  upperSide +=
		" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n";
	  lowerSide +=
		" ".repeat(i - 1) + "\\/".repeat(size - i + 1) + "_/".repeat(size) + "\n";
	}
  
	cube = (upperSide + lowerSide).slice(0, -1);
  
	return cube;
  }