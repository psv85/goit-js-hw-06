const navEl = document.querySelector('#categories');

const navItemEl = navEl.children;
console.log('Number of categories:', navItemEl.length);

const listCategories = document.querySelectorAll('.item');

for (const argList of listCategories) {
  const titleEl = Object.keys(argList.children);
  console.log(`Category: ${argList.children[titleEl[0]].textContent}`);
  const listItem = argList.children[titleEl[1]];
  console.log(`Elements: ${listItem.children.length}`);
}
