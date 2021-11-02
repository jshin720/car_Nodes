
const node1 = document.getElementsByClassName('node1');
const node2 = document.getElementsByClassName('node2');
const node3 = document.getElementsByClassName('node3');
const node4 = document.getElementsByClassName('node4');
const node5 = document.getElementsByClassName('node5');
const node6 = document.getElementsByClassName('node6');


node1.addEventListener("mouseover", () => {
  console.log(node1)
  node1.style.resize = 'both';
}); 

node2.addEventListener("mouseover", () => {
  node2.style.resize = 'both';
});

node3.addEventListener("mouseover", () => {
  node3.style.resize = 'both';
});

node4.addEventListener("mouseover", () => {
  node4.style.resize = 'both';
});

node5.addEventListener("mouseover", () => {
  node5.style.resize = 'both';
});

node6.addEventListener("mouseover", () => {
  node6.style.resize = 'both';
});
