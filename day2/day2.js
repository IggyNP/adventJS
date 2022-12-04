function countHours(year, holidays) {
  let hours = 0;

  holidays.forEach((h) => {
    const day = new Date(h + "/" + year).getDay();
    if (day != 0 && day != 6) hours += 2;
  });
  return hours;
}