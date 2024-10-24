// Progress bar
// Skill1
var bar = new ProgressBar.Line(skill1, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.95); // Number from 0.0 to 1.0

// Skill2
var bar = new ProgressBar.Line(skill2, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.9); // Number from 0.0 to 1.0

// Skill3
var bar = new ProgressBar.Line(skill3, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.8); // Number from 0.0 to 1.0

// Skill4
var bar = new ProgressBar.Line(skill4, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.9); // Number from 0.0 to 1.0

// Skill5
var bar = new ProgressBar.Line(skill5, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.75); // Number from 0.0 to 1.0

// Skill6
var bar = new ProgressBar.Line(skill6, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.95); // Number from 0.0 to 1.0

// Skill7
var bar = new ProgressBar.Line(skill7, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.8); // Number from 0.0 to 1.0

// Skill8
var bar = new ProgressBar.Line(skill8, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.8); // Number from 0.0 to 1.0

// Skill9
var bar = new ProgressBar.Line(skill9, {
  strokeWidth: 1.72,
  easing: "easeInOut",
  duration: 1400,
  color: "#99F7AB",
  trailColor: "#eee",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});

bar.animate(0.8); // Number from 0.0 to 1.0

// Typewriter

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});

typewriter
  .typeString("Turning Data into Insights")
  .pauseFor(350)
  .deleteAll()
  .typeString("Expert in Data Cleaning, Exploration, and Visualization")
  .pauseFor(350)
  .deleteAll()
  .typeString("Predictive Modeling & Statistical Analysis")
  .pauseFor(300)
  .deleteAll()
  .typeString("Automating Reports and Dashboards")
  .pauseFor(300)
  .deleteAll()
  .typeString("Telling Stories with Data")
  .pauseFor(300)
  .deleteAll()
  .typeString("Driving Business Decisions with Data")
  .pauseFor(300)
  .deleteAll()
  .typeString("<strong>altered!</strong>")
  .pauseFor(300)
  .deleteAll()
  .start();
