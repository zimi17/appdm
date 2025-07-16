export function getFittingItemsIndex(
  totalWidth: number,
  itemsWidth: Array<number>,
  moreItemWidth?: number,
) {
  let widthLeft = Math.floor(totalWidth);

  const moreIndex = itemsWidth.findIndex((itemWidth) => {
    if (itemWidth) {
      widthLeft = widthLeft - itemWidth;
      return widthLeft <= 0;
    }
    return false;
  });

  if (moreIndex === -1) {
    return itemsWidth.length;
  }

  // Make sure there is still space for the "more" item
  const lastItemWidth = itemsWidth[moreIndex];
  if (
    moreItemWidth &&
    lastItemWidth &&
    widthLeft + lastItemWidth < moreItemWidth
  ) {
    return moreIndex - 1;
  }

  return moreIndex;
}
