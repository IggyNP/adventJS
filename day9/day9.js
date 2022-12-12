function countTime(leds) {
  const arr = leds.join("").split("1");
  arr[0] += arr[arr.length - 1];
  return Math.max(...arr.map((led) => led.length)) * 7;
}
