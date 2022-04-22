import countries from "./scripts/countries"
import * as d3 from "d3"


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
  // let width = 500 - margin.left - margin.right;
  let height = 250 - margin.top - margin.bottom;
  let width = 640;
  let padding = 1;
console.log("height", height)
  // setting  margins for the svg so inner svg won't cut off and will be within the main svg window 

  const svg = d3.select(".car-tree") // calling the class name of "class of car-tree"
    .append("svg")
    .attr("viewbox", "0 0 100 100")
    // .attr("width", width + margin.right + margin.left)
    // .attr('height', height + margin.top + margin.bottom)
    .append("g") // g is to group items together
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  let i = 0;
  const duration = 750;
  let root

  root = d3.hierarchy(countries, (d) => {
    // console.log("d", d)
    return d._children
  });

  const treeMap = d3.tree().size([height, width]); // makes the height and width of the tree

  root.x0 = height / 2;
  root.y0 = 0;
  // the above makes sure that the root node starts at the left-mid of the window
  console.log("root", root)



  // update(root);



  function update(source) {
    let countries = treeMap(root);
    // calling in the treemap function while passing in the root data, while redifining the orginal countries data
    let nodes = countries.descendants(); // actual children node -- returns an array 
    // console.log("nodes", countries.links())
    nodes.forEach((d) => {
      // console.log("nodes d", d.children)
      d.y = d.depth * 500; // depth is the length of the path from the node up to the root

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
        return "translate(" + source.y + "," + source.x + ")"; // this is the parent position  (root.x0, root.y0)
      })
      .on('click', click)
      
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
      .attr('dy', '.35em')
      .attr('x', (d) => {
        return d.children || d._children ? -15 : 15
      })
      .attr("text-anchor", (d) => {
        return d.children || d._children ? "end" : "start"
      })
      .text((d) => {
        return d.data.name;
      });

    let nodeUpdate = nodeEnter.merge(node);

    //making the new  nodes and transitions for the children and
    nodeUpdate
      .transition()
      .duration(duration) // already made a variable for duration on line 39
      .attr("transform", (d) => {
        return "translate(" + d.y + "," + d.x + ")";
      })
  

    nodeUpdate
      .select('circle.node') // this refers to the "node" on line 81 
      .attr("r", 5)
      .style('fill', (d) => {
        return d._children ? "red" : "black"
      })
      .attr("cursor", "pointer")
      

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


    // const connections = svg.append("g").selectAll("path")
    //   .data(countries.links());
    // connections.enter().append("path")
    //   .attr("d", (d) => {

    //   })
    // this creates the tooltip
  

    // function mouseover() {
    //   console.log("mouseover", source)
    //   if (source.depth === 3) {
    //     tooltip
    //       .style("opacity", 1)
    //   } else {
    //     tooltip
    //       .style("opacity", 0)
    //   }
    // }

    
    //lines that connect between the nodes 
    
    function diagonal(s, d) { // s = source and d = destination
      // console.log("source", s)
      // console.log("destination", d)
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
          x: source.parent ? source.x : source.x0,
          y: source.parent ? source.y : source.y0
        };
        // console.log("linkenter-d", d)
        // console.log("linkenter-o", o)
        // console.log("linkenter-source", source)
        return diagonal(o, o)
      });

    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d) => {
        // console.log("linkupdate-d", d)
      
        return diagonal(d, d.parent);
      })
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d) => {
        let o = {
          x: source.parent ? source.x : source.x0,
          y: source.parent ? source.y : source.y0
        };
        // console.log("linkexit-d", d)
        // console.log("linkexit- o", o)
        return diagonal(o, o);
      })
      .remove();
  }

  const tooltip = d3.select(".car-tree")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "blue")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")


  function click(e, d) {
    console.log("click", d)
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      height = 5000
      d.children = d._children;
      d._children = null;
    }
    if (d.depth === 3) {
      tooltip
        .html("Name: " + d.data.name +
          "<br> Price: " + d.data.price +
          "<br> Type: " + d.data.type +
          "<br> Engine " + d.data.engine +
          "<br> Mileage " + d.data.gasMileage +
          "<br> Description " + d.data.description
        )
        .style("left", (d.x + 70) + "px")
        .style("top", (d.y) + "px")
        .style("opacity", 1)
    } else {
      tooltip
        .style("opacity", 0)
    }

    update(d);
  }



  let nodes = treeMap(root).descendants();

  nodes.forEach((d) => {
    if (d.children) {
      // console.log("click", d.children)
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  })

 
})