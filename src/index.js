import countries from "./scripts/countries"
import * as d3 from "d3"
import { count } from "d3";


document.addEventListener('DOMContentLoaded', () => {
  const dataset = [countries]
  // console.log(countries)
  // console.log(dataset[0].children)
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
    top: 10,
    right: 40,
    bottom: 10,
    left: 100
  };
  let width = 2500 - margin.left - margin.right;
  let height = 2500 - margin.top - margin.bottom;

  // setting  margins for the svg so inner svg won't cut off and will be within the main svg window 

  const svg = d3.select(".car-tree") // calling the class name of "class of car-tree"
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append("g") // g is to group items together
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  let i = 0;
  const duration = 750;
  let root

  const treeMap = d3.tree().size([height, width]); // makes the height and width of the tree
  root = d3.hierarchy(countries, (d) => {
    // console.log("d", d)
    return d._children
  });

  root.x0 = height / 2;
  root.y0 = 0;
  // the above makes sure that the root node starts at the left-mid of the window
  // console.log("root", root)



  // update(root);



  function update(source) {
    let countries = treeMap(root);
    // calling in the treemap function while passing in the root data, while redifining the orginal countries data
    let nodes = countries.descendants(); // actual children node -- returns an array 
    // console.log("nodes", countries.links())
    nodes.forEach((d) => {
      // console.log("nodes d", d.children)
      d.y = d.depth * 300; // depth is the length of the path from the node up to the root

    });
    let node = svg.selectAll("g.node")
      .data(nodes, (d) => {
        return d.id || (d.id = ++i)
      });

    let nodeEnter = node // children node starting at the parent position
      .enter()
      .append('g')
      .attr("class", "node")
      .attr("transform", (d) => {
        return "translate(" + source.y0 + "," + source.x0 + ")"; // this is the parent position  (root.x0, root.y0)
      })
      .on('click', click);
    // "click is the event listener and click is a function getting called into the .on method"
    // console.log("nodes")

    nodeEnter
      .append("circle")
      .attr("class", "node")
      .attr("r", 0)
      .style("fill", (d) => {
        // console.log("nodeEnter d", d)
        return d._children ? "red" : "black";
      })


    nodeEnter
      .append("text")
      .attr('dy', '.30em')
      .attr('x', (d) => {
        return d.children || d._children ? -13 : 13
      })
      .attr("text-anchor", (d) => {
        return d.children || d._children ? "end" : "start"
      })
      .text((d) => {
        return d.data.name;
      })

    let nodeUpdate = nodeEnter.merge(node);

    //making the new  nodes and transitions for the children and
    nodeUpdate
      .transition()
      .duration(duration) // already made a variable for duration on line 39
      .attr("transform", (d) => {
        return "translate(" + d.y + "," + d.x + ")";
      });

    nodeUpdate
      .select('circle.node') // this refers to the "node" on line 81 
      .attr("r", 8)
      .style('fill', (d) => {
        return d._children ? "red" : "black"
      })
      .attr("cursor", "pointer");

    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", (d) => {
        return "translate(" + source.y + "," + source.x + ")"
      })
      .remove();

    nodeExit
      .select("circle")
      .attr("r", 0);

    nodeExit
      .select("text")
      .style("fill-opacity", 0);


    const connections = svg.append("g").selectAll("path")
      .data(countries.links());
    connections.enter().append("path")
      .attr("d", (d) => {

      })

   
    //lines that connect between the nodes 
    
    function diagonal(s, d) { // s = source and d = destination
      console.log("source", s)
      console.log("destination", d)
      let path = `M ${s.y} ${s.x}
      C ${(s.y + d.y) / 2} ${s.x} 
        ${(s.y + d.y) / 2} ${d.x} 
        ${d.y} ${d.x}`; // end point 
      return path;
    }
    //lines 163 and 164 are control points for the lines 
    // line 165 is the end point for destination points
    // M is the starting point or node 
    // C is the control points for the lines 

    // console.log("countries", countries.descendants().slice(1))
    const links = countries.descendants().slice(1);
    const link = svg.selectAll('path.link')
      .data(links, (d) => {
        return d.id;
      });
    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr('d', (d) => {
        let o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal(o, o)
      });

    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d) => {
        console.log("linkupdate", d)
        return diagonal(d, d.parent);
      })
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d) => {
        let o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal(o, o);
      })
      .remove();
  }

  function click(e, d) {
    console.log("click", d)
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }


  let nodes = treeMap(root).descendants();

  nodes.forEach((d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  })
})