Template.d3specdashboard.studentStations = function () {
  var result = SpecResults.find().fetch();
  return result;
};

Template.d3report.rendered = function () {
  if(this.data.users) {
    var latestReport = SpecResults.findOne({users: this.data.users}, {$sort: {timestamp: -1}});
  }
  if(latestReport) {
    JSONScrubber(latestReport);
    renderTestburst(latestReport);
  }
};

var JSONScrubber = function (reportJSON) {
  _(reportJSON).each(function (childvalue, childkey, parent) {
    // clean out null values which would cause errors in d3
    if(childvalue === null) {
      delete parent.splice(childkey);
    // change keys to 'children' to fit d3 convention
    } else if (childkey === "specs" || childkey === "suites") {
      parent.children = childvalue;
    }
    // recurse to deal with nested suites and specs
    if(typeof(childvalue) === "object"){
      JSONScrubber(childvalue)
    }
  });
};

Template.d3report.usernames = function () {
  if(this.users){
    return this.users[0]
  }
}

// drawing the d3 sunbursts
var renderTestburst = function (testJSON) {

  var w = 150,
      h = 150,
      r = Math.min(w, h) / 2,
      // this sets color of a failing ('false') test to red, and passing ('true') to green
      color = d3.scale.ordinal().domain([false,true]).range(["DD2222","22AA22"])

  var selector = ".testburst-"+testJSON.users[0];

  var vis = d3.select(selector).append("svg:svg")
      .attr("width", w)
      .attr("height", h)
    .append("svg:g")
      .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

  var partition = d3.layout.partition()
      .sort(null)
      .size([2 * Math.PI, r * r])
      .value(function(d) { return 1; });

  var arc = d3.svg.arc()
      .startAngle(function(d) { return d.x; })
      .endAngle(function(d) { return d.x + d.dx; })
      .innerRadius(function(d) { return Math.sqrt(d.y); })
      .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

  var path = vis.data([testJSON]).selectAll("path")
      .data(partition.nodes)
    .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .attr("text", function(d) { return d.description })
      .style("stroke", "#fff")
      .style("fill", function(d) { return color(d.passed); })

  // Interpolate the arcs in data space.
  function arcTween(a) {
    var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
    return function(t) {
      var b = i(t);
      a.x0 = b.x;
      a.dx0 = b.dx;
      return arc(b);
    };
  }
}
