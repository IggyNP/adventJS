function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(
    (reindeers.join("").length * 2) / packOfGifts.join("").length
  );
}
