let netflixData = [
   {year: 2004, revenue:500.6}, 
   {year: 2005, revenue:682.2}, 
   {year: 2006, revenue:996.7}, 
   {year: 2007, revenue:1205.3}, 
   {year: 2008, revenue:1364.7}, 
   {year: 2009, revenue:1670.3}, 
   {year: 2010, revenue:2162.6}, 
   {year: 2011, revenue:3204.6}, 
   {year: 2012, revenue:3609.3}, 
   {year: 2013, revenue:4374.6}, 
   {year: 2014, revenue:5504.7}, 
   {year: 2015, revenue:6779.5}, 
   {year: 2016, revenue:8830.7} 
];

let blockbusterData = [
   {year: 2004, revenue:5932.5}, 
   {year: 2005, revenue:5721.8}, 
   {year: 2006, revenue:5522.2}, 
   {year: 2007, revenue:5314.0}, 
   {year: 2008, revenue:5065.4}, 
   {year: 2009, revenue:4051.1}, 
   {year: 2010, revenue:3240.7}, 
   {year: 2011, revenue:0}, 
   {year: 2012, revenue:0}, 
   {year: 2013, revenue:0}, 
   {year: 2014, revenue:0}, 
   {year: 2015, revenue:0}, 
   {year: 2016, revenue:0} 
];

// set the dimensions and margins of the graph
let margin = {top: 20, right: 20, bottom: 50, left: 60},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

let tooltip = d3.select("body").append("div").attr("class", "tooltip");

// append the svg object to the body of the page
let svg = d3.select("#graphContainer")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// X axis
let x = d3.scaleBand()
  .range([ 0, width ])
  .domain(netflixData.map(function(d) { return d.year; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))

// Add Y axis
let y = d3.scaleLinear()
  .domain([0, 9000])
  .range([ height, 0]);
svg.append("g")
  .attr("class", "myYaxis")
  .call(d3.axisLeft(y));


// A function that create / update the plot for a given letiable:
function update(data) {
	
	let dataColor;
	let dataName;
	
	if(data[0].revenue == 500.6){
		dataName = "Netflix";
		dataColor = "#E32212";
	} else if (data[0].revenue == 5932.5){
		dataName = "Blockbuster";
		dataColor = "#1254e2";
	}
	
  let u = svg.selectAll("rect")
    .data(data)

  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.year); })
      .attr("y", function(d) { return y(d.revenue); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.revenue); })
      .attr("fill", dataColor)
	  .selection()
	  .on("mousemove", function(d){
		  tooltip.style("left", (event.pageX)+"px")
		  .style("top", (event.pageY)-65+"px")
		  .style("display", "inline-block")
		  .html("In " + d.year + ", " + dataName + " made <b>$" + d.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " million</b> in sales.");
	  })
	  .on("mouseout", function(){
		tooltip.style("display", "none");
	  });

}

// Initialize the plot with the first dataset
update(netflixData)



$("#blockbusterButton").click(function(){
	$("#netflixButton").removeClass("activeData");
	$("#blockbusterButton").addClass("activeData");
});

$("#netflixButton").click(function(){
	$("#blockbusterButton").removeClass("activeData");
	$("#netflixButton").addClass("activeData");
});