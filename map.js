let mapMargin = {
	top: 10,
	bottom: 10,
	left: 10,
	right:10
}, mapWidth = parseInt(d3.select('.viz').style('width'))
	, mapRatio = 0.5
	, mapHeight = mapWidth * mapRatio
	, active = d3.select(null);


mapWidth = mapWidth - mapMargin.left - mapMargin.right;

let mapSvg = d3.select('.viz').append('svg')
	.attr('fill', 'none')
	.attr('height', mapHeight + mapMargin.top + mapMargin.bottom)
	.attr('width', mapWidth + mapMargin.left + mapMargin.right);

mapSvg.append('rect')
	.attr('height', mapHeight + mapMargin.top + mapMargin.bottom)
	.attr('width', mapWidth + mapMargin.left + mapMargin.right)
	.on('click', clicked);

let normalize = d3.scaleLinear()
	.domain([2,12])
	.range([0,1]);

let data = d3.map();
let promises = [d3.json('us-counties.topojson'), d3.csv("mapData.csv", function(d){data.set(d.id, +d.value);})];

Promise.all(promises)
	.then(ready);

let projection = d3.geoAlbersUsa()
	.translate([mapWidth /2 , mapHeight / 2])
	.scale(mapWidth);

let path = d3.geoPath()
	.projection(projection);

let g = mapSvg.append("g")
	.attr('class', 'us-state')
	.attr('transform', 'translate('+mapMargin.left+','+mapMargin.top+')')
	.attr('width', mapWidth + mapMargin.left + mapMargin.right)
	.attr('height', mapHeight + mapMargin.top + mapMargin.bottom)

function ready(us) {

	g.append("g")
		.attr("id", "counties")
		.selectAll("path")
		.data(topojson.feature(us[0], us[0].objects.counties).features)
		.enter().append("path")
		.attr("d", path)
		.attr("class", "county-boundary")
		.attr("fill", function(d) {
			return d3.interpolateBlues(normalize(data.get(d.id)));
		})
		.on("click", reset)
		.on("mousemove", function(d){
		  tooltip.style("left", (event.pageX)+"px")
		  .style("top", (event.pageY)-65+"px")
		  .style("display", "inline-block")
		  .html(d.properties.name + ": " + data.get(d.id) + "%");
	  })
	  .on("mouseout", function(){
		tooltip.style("display", "none");
	  });

	g.append("g")
		.attr("id", "states")
		.selectAll("path")
		.data(topojson.feature(us[0], us[0].objects.states).features)
		.enter().append("path")
		.attr("d", path)
		.attr("class", "state")
		.attr("fill", function(d) {
			return d3.interpolateBlues(normalize(data.get(d.id)));
		})
		.on("click", clicked)
		.on("mousemove", function(d){
		  tooltip.style("left", (event.pageX)+"px")
		  .style("top", (event.pageY)-65+"px")
		  .style("display", "inline-block")
		  .html(d.properties.name + ": " + data.get(d.id) + "%");
	  })
	  .on("mouseout", function(){
		tooltip.style("display", "none");
	  });


	g.append("path")
		.datum(topojson.mesh(us[0], us[0].objects.states, function(a, b) { return a !== b; }))
		.attr("id", "state-borders")
		.attr("d", path);
}

function clicked(d) {
	if (d3.select('.background').node() === this) return reset();

	if (active.node() === this) return reset();

	active.classed("active", false);
	active = d3.select(this).classed("active", true);

	let bounds = path.bounds(d),
		dx = bounds[1][0] - bounds[0][0],
		dy = bounds[1][1] - bounds[0][1],
		x = (bounds[0][0] + bounds[1][0]) / 2,
		y = (bounds[0][1] + bounds[1][1]) / 2,
		scale = .9 / Math.max(dx / mapWidth, dy / mapHeight),
		translate = [mapWidth / 2 - scale * x, mapHeight / 2 - scale * y];

	g.transition()
		.duration(750)
		.style("stroke-width", 1.5 / scale + "px")
		.attr("transform", "translate(" + translate + ")scale(" + scale + ")");
}


function reset() {
	active.classed("active", false);
	active = d3.select(null);

	g.transition()
		.delay(100)
		.duration(750)
		.style("stroke-width", "1.5px")
		.attr('transform', 'translate('+mapMargin.left+','+mapMargin.top+')');

}