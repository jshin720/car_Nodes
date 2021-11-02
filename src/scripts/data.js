const node1 = document.getElementsByClassName('node1');
const node2 = document.getElementsByClassName('node2');
const node3 = document.getElementsByClassName('node3');
const node4 = document.getElementsByClassName('node4');
const node5 = document.getElementsByClassName('node5');
const node6 = document.getElementsByClassName('node6');

const brands = ['', '', '', '', 'Germany', 'UK']

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));