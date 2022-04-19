import countries from "./scripts/countries"
import * as d3 from "d3"

document.addEventListener('DOMContentLoaded', () => {
  const dataset = [countries]
console.log(countries)
console.log(dataset[0].children)
  // d3.select("div")
  //   .append("p")
  //   .text("hello Word")

  // d3.select("body").selectAll("p")
  //   .data(dataset)
  //   .enter()
  //   .append("p")
  //   .text((d) => {
  //     console.log(d[0])
  //   });

  const margin = { 
    top: 20, 
    right: 90, 
    bottom: 20, 
    left: 90 
  };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  // setting  margins for the svg so inner svg won't cut off and will be within the main svg window 

  const svg = d3.select(".car-tree") // calling the class name of "car-tree"
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append("g") // g is to group items together
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  let i = 0;
  const duration = 750;
  let root;

  const treeMap = d3.tree().size([height, width]);
  root = d3.hierarchy(countries, (d) => {
    console.log("d",d.children)
    return d.children
  })

  root.x0 = height/2;
  root.y0 = 0;
  // the above makes sure that the root node starts at the left-mid of the window
  console.log("root", root)

  update(root);

  // const update = (carsData) => {
  //   let countries = treeMap(root);
  //   // calling in the treemap function while passing in the root data, while redifining the orginal countries data
  //   let nodes = countries.descendants();
  //   nodes.forEach((d) => {
  //     console.log("nodes d", d)
  //     d.y = d.depth * 180;

  //   });
  //   let node = svg.selectAll("g.node")
  //     .data(nodes, (d) => {
  //       return d.id || (d.id = ++ i)
  //     })

  //   let nodeEnter = node
  //     .enter()
  //     .append('g')
  //     .attr("class", "node")
  //     .attr("transform", (d) => {
  //       return "translate(" + carsData.y0 + ", " + carsData.x0 + ")";
  //     })
  //     .on('click', click)
  //     console.log("nodes")
  // }

  function update(carsData) {
    let countries = treeMap(root);
    // calling in the treemap function while passing in the root data, while redifining the orginal countries data
    let nodes = countries.descendants();
    nodes.forEach((d) => {
      console.log("nodes d", d)
      d.y = d.depth * 180;

    });
    let node = svg.selectAll("g.node")
      .data(nodes, (d) => {
        return d.id || (d.id = ++i)
      })

    let nodeEnter = node
      .enter()
      .append('g')
      .attr("class", "node")
      .attr("transform", (d) => {
      return "translate(" + carsData.y0 + ", " + carsData.x0 + ")";
    })
    .on('click', click)
    console.log("nodes")
  }


//   const center = document.getElementsByClassName('center')[0];
//   const node1 = document.getElementsByClassName('node1')[0];
//   const node2 = document.getElementsByClassName('node2')[0];
//   const node3 = document.getElementsByClassName('node3')[0];
//   const node4 = document.getElementsByClassName('node4')[0];
//   const node5 = document.getElementsByClassName('node5')[0];
//   const node6 = document.getElementsByClassName('node6')[0];
//   const carsImg = document.getElementsByClassName('carsImg');
//   // fetchCarInfo();
//   // console.log(test);

//   console.log("countries object", Object.entries(countries))

//   center.addEventListener('click', () => {
//     // let countries = [USA, Korea, Japan, Italy, Germany, Uk];
//     // if I click on one of these countries then the array axis 
//     // will change to the car makers of that specific county
//     // the array axis 
//     let center = document.createElement('div');
//     center.classList.add('mainCountries');
//     node1.innerText = 'USA'
//     node2.innerText = 'Korea'
//     node3.innerText = 'Japan'
//     node4.innerText = 'Italy'
//     node5.innerText = 'Germany'
//     node6.innerText = 'UK'
//     center.append(center)
//     node1.append(center);
//     node2.append(center);
//     node3.append(center);
//     node4.append(center);
//     node5.append(center);
//     node6.append(center);
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//   })
  
//   // console.log()
//   // if (node1.innerText !== 'USA') {
//   //   console.log(node1.innerText === 'USA')
//   //   node1.style.backgroundImage = 'none';
//   //   node1.style.backgroundColor = 'gainsboro';
//   // }
//   node1.addEventListener('click', () => {
//     let newNode1 = document.createElement('div');
//     newNode1.classList.add('usa_cars');
//     center.innerText = 'USA'
//     node1.innerText = 'Ford'
//     node2.innerText = 'Tesla'
//     node3.innerText = 'Dodge'
//     node4.innerText = 'Jeep'
//     node5.innerText = 'Chevrolet'
//     node6.innerText = 'Cadillac'
//     center.append(newNode1)
//     node1.append(newNode1);
//     node2.append(newNode1);
//     node3.append(newNode1);
//     node4.append(newNode1);
//     node5.append(newNode1);
//     node6.append(newNode1);
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//     node2.style.backgroundImage = 'none';
//     node2.style.backgroundColor = 'gainsboro';
//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';
//     node4.style.backgroundImage = 'none';
//     node4.style.backgroundColor = 'gainsboro';
//     node5.style.backgroundImage = 'none';
//     node5.style.backgroundColor = 'gainsboro';
//     node6.style.backgroundImage = 'none';
//     node6.style.backgroundColor = 'gainsboro';
//   })

//   node3.addEventListener('click', () => {
//     let newNode3 = document.createElement('div');
//     newNode3.classList.add('volkwagen_cars');
//     center.innerText = 'Volkswagen'
//     node1.innerText = 'Atlas'
//     node2.innerText = 'Tiguan'
//     node3.innerText = 'Golf'
//     node4.innerText = 'Jetta'
//     node5.innerText = 'Passat'
//     node6.innerText = 'id.4'
//     center.append(newNode3)
//     node1.append(newNode3);
//     node2.append(newNode3);
//     node3.append(newNode3);
//     node4.append(newNode3);
//     node5.append(newNode3);
//     node6.append(newNode3);
    
//     console.log(center[0]);
//     console.log(center);

    
//     node1.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/atlas.png"
//       carsImg[0].style = 'display: true'
//     })
//     node1.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/atlas.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/

//     node2.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/tiguan.png"
//       carsImg[0].style = 'display: true'
//     })
//     node2.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/tiguan.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/

//     node3.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/golf.png"
//       carsImg[0].style = 'display: true'
//     })
//     node3.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/golf.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/

//     node4.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/jetta.png"
//       carsImg[0].style = 'display: true'
//     })
//     node4.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/jetta.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/

//     node5.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/passat.png"
//       carsImg[0].style = 'display: true'
//     })
//     node5.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/passat.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/

//     node6.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/id.4.png"
//       carsImg[0].style = 'display: true'
//     })
//     node6.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/id.4.png"
//       carsImg[0].style = 'display: none'
//     })

//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';

//   })

//   node2.addEventListener('click', () => {
//     let newNode2 = document.createElement('div');
//     newNode2.classList.add('japan_cars');
//     center.innerText = 'Japan'
//     node1.innerText = 'Honda'
//     node2.innerText = 'Acura'
//     node3.innerText = 'Toyota'
//     node4.innerText = 'Lexus'
//     node5.innerText = 'Nissan'
//     node6.innerText = 'Infiniti'
//     center.append(newNode2)
//     node1.append(newNode2);
//     node2.append(newNode2);
//     node3.append(newNode2);
//     node4.append(newNode2);
//     node5.append(newNode2);
//     node6.append(newNode2);
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//     node2.style.backgroundImage = 'none';
//     node2.style.backgroundColor = 'gainsboro';
//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';
//     node4.style.backgroundImage = 'none';
//     node4.style.backgroundColor = 'gainsboro';
//     node5.style.backgroundImage = 'none';
//     node5.style.backgroundColor = 'gainsboro';
//     node6.style.backgroundImage = 'none';
//     node6.style.backgroundColor = 'gainsboro';
//   })

//   node4.addEventListener('click', () => {
//     let newNode4 = document.createElement('div');
//     newNode4.classList.add('italy_cars');
//     center.innerText = 'Italy'
//     node1.innerText = 'Ferrari'
//     node2.innerText = 'Maserati'
//     node3.innerText = 'Lamborghini'
//     node4.innerText = 'Fiat'
//     node5.innerText = 'Alfa Romeo'
//     node6.innerText = 'Pagani'
//     center.append(newNode4)
//     node1.append(newNode4);
//     node2.append(newNode4);
//     node3.append(newNode4);
//     node4.append(newNode4);
//     node5.append(newNode4);
//     node6.append(newNode4);
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//     node2.style.backgroundImage = 'none';
//     node2.style.backgroundColor = 'gainsboro';
//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';
//     node4.style.backgroundImage = 'none';
//     node4.style.backgroundColor = 'gainsboro';
//     node5.style.backgroundImage = 'none';
//     node5.style.backgroundColor = 'gainsboro';
//     node6.style.backgroundImage = 'none';
//     node6.style.backgroundColor = 'gainsboro';
//   })

//   node5.addEventListener('click', () => {
//     let newNode5 = document.createElement('div');
//     newNode5.classList.add('german_cars');
//     center.innerText = 'German'
//     node1.innerText = 'Bmw'
//     node2.innerText = 'Mercedes'
//     node3.innerText = 'Volkswagen'
//     node4.innerText = 'Audi'
//     node5.innerText = 'Maybach'
//     node6.innerText = 'Porsche'
//     center.append(newNode5)
//     node1.append(newNode5);
//     node2.append(newNode5);
//     node3.append(newNode5);
//     node4.append(newNode5);
//     node5.append(newNode5);
//     node6.append(newNode5);
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//     node2.style.backgroundImage = 'none';
//     node2.style.backgroundColor = 'gainsboro';
//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';
//     node4.style.backgroundImage = 'none';
//     node4.style.backgroundColor = 'gainsboro';
//     node5.style.backgroundImage = 'none';
//     node5.style.backgroundColor = 'gainsboro';
//     node6.style.backgroundImage = 'none';
//     node6.style.backgroundColor = 'gainsboro';
//   })

//   node6.addEventListener('click', () => {
//     let newNode6 = document.createElement('div');
//     newNode6.classList.add('porsche_cars');
//     center.innerText = 'Porsche'
//     node1.innerText = '718'
//     node2.innerText = '911'
//     node3.innerText = 'Taycan'
//     node4.innerText = 'Panamera'
//     node5.innerText = 'Macan'
//     node6.innerText = 'Cayenne'
//     center.append(newNode6)
//     node1.append(newNode6);
//     node2.append(newNode6);
//     node3.append(newNode6);
//     node4.append(newNode6);
//     node5.append(newNode6);
//     node6.append(newNode6);

//     node1.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/718gt4.png"
//       carsImg[0].style = 'display: true'
//     })
//     node1.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/718gt4.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/
    
//     node2.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/911.png"
//       carsImg[0].style = 'display: true'
//     })
//     node2.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/911.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/
    
//     node3.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/taycan.png"
//       carsImg[0].style = 'display: true'
//     })
//     node3.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/taycan.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/
    
//     node4.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/panamera.png"
//       carsImg[0].style = 'display: true'
//     })
//     node4.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/panamera.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/
    
//     node5.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/macan.png"
//       carsImg[0].style = 'display: true'
//     })
//     node5.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/macan.png"
//       carsImg[0].style = 'display: none'
//     })
//     /*** *******************************/
    
//     node6.addEventListener('mouseover', () => {
//       carsImg[0].src = "./png/cayenne.png"
//       carsImg[0].style = 'display: true'
//     })
//     node6.addEventListener('mouseout', () => {
//       carsImg[0].src = "./png/cayenne.png"
//       carsImg[0].style = 'display: none'
//     })
//     node1.style.backgroundImage = 'none';
//     node1.style.backgroundColor = 'gainsboro';
//     node2.style.backgroundImage = 'none';
//     node2.style.backgroundColor = 'gainsboro';
//     node3.style.backgroundImage = 'none';
//     node3.style.backgroundColor = 'gainsboro';
//     node4.style.backgroundImage = 'none';
//     node4.style.backgroundColor = 'gainsboro';
//     node5.style.backgroundImage = 'none';
//     node5.style.backgroundColor = 'gainsboro';
//     node6.style.backgroundImage = 'none';
//     node6.style.backgroundColor = 'gainsboro';
//   })

//   // const cars = document.getElementById("cars");
//   // const carButton = document.getElementById("carButton");
//   // const close = document.getElementsByClassName("close")[0];

//   // carButton.addEventListener('click', openInfo);
  
//   // function openInfo() {
//   //   cars.style.display = "block";
//   // }

//   // carButton.addEventListener('click', closeInfo);

//   // function closeInfo() {
//   //   cars.style.display = "none";
//   // }

//   // window.addEventListener('click', outsideClose);

//   // function outsideClose (event) {
//   //   if (event.target == cars) {
//   //     cars.style.display = "none";
//   //   }
//   // }

})