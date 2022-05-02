const itemsEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemsEl.length}`);
console.log('');

itemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log('');
});
