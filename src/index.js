document.addEventListener('DOMContentLoaded', () => {
  const center = document.getElementsByClassName('center')[0]
  const node1 = document.getElementsByClassName('node1')[0];
  const node2 = document.getElementsByClassName('node2')[0];
  const node3 = document.getElementsByClassName('node3')[0];
  const node4 = document.getElementsByClassName('node4')[0];
  const node5 = document.getElementsByClassName('node5')[0];
  const node6 = document.getElementsByClassName('node6')[0];


  node1.addEventListener('click', () => {
    let newNode1 = document.createElement('div');
    newNode1.classList.add('usa_cars');
    center.innerText = 'USA'
    node1.innerText = 'Ford'
    node2.innerText = 'Tesla'
    node3.innerText = 'Dodge'
    node4.innerText = 'Jeep'
    node5.innerText = 'Chevrolet'
    node6.innerText = 'Cadillac'
    center.append(newNode1)
    node1.append(newNode1);
    node2.append(newNode1);
    node3.append(newNode1);
    node4.append(newNode1);
    node5.append(newNode1);
    node6.append(newNode1);
  })

  node2.addEventListener('click', () => {
    let newNode2 = document.createElement('div');
    newNode2.classList.add('korea_cars');
    center.innerText = 'Korea'
    node1.innerText = 'Kia'
    node2.innerText = 'Hyundai'
    node3.innerText = 'Genesis'
    node4.innerText = 'Ssangyong'
    node5.innerText = 'Daewoo'
    node6.innerText = 'Samsung'
    center.append(newNode2)
    node1.append(newNode2);
    node2.append(newNode2);
    node3.append(newNode2);
    node4.append(newNode2);
    node5.append(newNode2);
    node6.append(newNode2);
  })

  node3.addEventListener('click', () => {
    let newNode3 = document.createElement('div');
    newNode3.classList.add('japan_cars');
    center.innerText = 'Japan'
    node1.innerText = 'Honda'
    node2.innerText = 'Acura'
    node3.innerText = 'Toyota'
    node4.innerText = 'Lexus'
    node5.innerText = 'Nissan'
    node6.innerText = 'Infiniti'
    center.append(newNode3)
    node1.append(newNode3);
    node2.append(newNode3);
    node3.append(newNode3);
    node4.append(newNode3);
    node5.append(newNode3);
    node6.append(newNode3);
  })


  node4.addEventListener('click', () => {
    let newNode4 = document.createElement('div');
    newNode4.classList.add('italy_cars');
    center.innerText = 'Italy'
    node1.innerText = 'Ferrari'
    node2.innerText = 'Maserati'
    node3.innerText = 'Lamborghini'
    node4.innerText = 'Fiat'
    node5.innerText = 'Alfa Romeo'
    node6.innerText = 'Pagani'
    center.append(newNode4)
    node1.append(newNode4);
    node2.append(newNode4);
    node3.append(newNode4);
    node4.append(newNode4);
    node5.append(newNode4);
    node6.append(newNode4);
  })

  node5.addEventListener('click', () => {
    let newNode5 = document.createElement('div');
    newNode5.classList.add('german_cars');
    center.innerText = 'German'
    node1.innerText = 'Bmw'
    node2.innerText = 'Audi'
    node3.innerText = 'Mercedes'
    node4.innerText = 'Volskwagen'
    node5.innerText = 'Porsche'
    node6.innerText = 'Maybach'
    center.append(newNode5)
    node1.append(newNode5);
    node2.append(newNode5);
    node3.append(newNode5);
    node4.append(newNode5);
    node5.append(newNode5);
    node6.append(newNode5);
  })


  node6.addEventListener('click', () => {
    let newNode6 = document.createElement('div');
    newNode6.classList.add('uk_cars');
    center.innerText = 'UK'
    node1.innerText = 'Aston Martin'
    node2.innerText = 'Bently'
    node3.innerText = 'Jaguar'
    node4.innerText = 'Land Rover'
    node5.innerText = 'Mclaren'
    node6.innerText = 'Lotus'
    center.append(newNode6)
    node1.append(newNode6);
    node2.append(newNode6);
    node3.append(newNode6);
    node4.append(newNode6);
    node5.append(newNode6);
    node6.append(newNode6);
  })

  function enlarge(ele) {
    ele.style.width = "25px";
    ele.style.height = "25px";
  }


})