const follow = () => {
  const stored = localStorage.getItem("wishlist");
  return stored ? JSON.parse(stored) : [];
};

export const addToWishList = (id) => {
  const stored = follow(); 

  if (stored.includes(id)) {
    alert("Already added to Wishlist!");
    return;
  }

  stored.push(id);
  localStorage.setItem("wishlist", JSON.stringify(stored));
};
