function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((obj, i) => {
      if (i === 0) return true;
      return (
        obj.l > boxes[i - 1].l &&
        obj.w > boxes[i - 1].w &&
        obj.h > boxes[i - 1].h
      );
    });
}