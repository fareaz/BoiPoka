export const getStoredBook = () => {
  const stored = localStorage.getItem("readList");
  return stored ? JSON.parse(stored) : [];
};

export const addToStoredDB = (id) => {
  const stored = getStoredBook(); 

  if (stored.includes(id)) {
    alert("Already added to Read List!");
    return;
  }

  stored.push(id);
  localStorage.setItem("readList", JSON.stringify(stored));
};
