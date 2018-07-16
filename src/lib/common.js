export const ratingView = (rating) => {
  const star = Math.ceil(rating/2);
  const emoji = star > 3 ? `😍` : star === 3 ? `🙂` : `🤢`;
  return emoji.repeat(star);
}
