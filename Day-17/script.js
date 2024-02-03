const h1el = document.getElementById("head1");
const h2el = document.getElementById("head2");
const h3el = document.getElementById("head3");

console.log(h1el);
console.log(h2el);
console.log(h3el);


const h1elclass = document.getElementsByClassName("heading");

console.log(h1elclass[2].textContent);
h1elclass[2].textContent = "hello world";

h1elclass[0].textContent = "hello ahmedabad";

h1elclass[1].textContent = "hello delhi";

console.log(window);

const mypara = document.getElementsByTagName("p");

console.log(mypara);
mypara[2].innerText = "Oppo smartphone"

const ulel = document.getElementsByTagName("ul");

console.log(ulel);

ulel.Children(0).innerText = "safarjan";

