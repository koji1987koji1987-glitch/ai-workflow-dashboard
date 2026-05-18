const developers = [

  {
    name: "Sarah",
    skill: "Frontend",
    workload: 2,
    performance: 98
  },

  {
    name: "Mike",
    skill: "Backend",
    workload: 5,
    performance: 82
  },

  {
    name: "Emma",
    skill: "Frontend",
    workload: 1,
    performance: 91
  }

];


const task = {

  name: "Build Dashboard",

  requiredSkill: "Frontend"
};


function assignTask() {


  const candidates = developers.filter(

    dev =>

      dev.skill === task.requiredSkill &&
      dev.workload < 4

  );


  if (candidates.length === 0) {

    document.getElementById("result").innerText =

      "No qualified developer available.";

    return;
  }


  candidates.sort(

    (a, b) =>

      b.performance - a.performance

  );


  const recommended = candidates[0];


  document.getElementById("result").innerText =

    "Recommended Developer: " +

    recommended.name +

    " (Performance: " +

    recommended.performance +

    ")";
}


const chartLabels = developers.map(

  dev => dev.name

);


const chartScores = developers.map(

  dev => dev.performance

);


const ctx = document.getElementById(

  "performanceChart"

);


new Chart(ctx, {

  type: "bar",

  data: {

    labels: chartLabels,

    datasets: [

      {

        label: "Performance Score",

        data: chartScores

      }

    ]

  }

});