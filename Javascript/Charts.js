document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("chart");

    Chart.defaults.color = "#272626";
    // Chart.defaults.font.family = "Poppins";

    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Monthly Income",
            data: [2235, 3250, 1890, 5400, 20240, 6254,  12325, 4856, 10325, 2254, 22356, 8486],
            backgroundColor: "black",
            borderColor: "coral",
            borderRadius: 6,
            cubicInterpolationMode: 'monotone',
            fill: false,
            borderSkipped: false,
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
          mode: 'index'
        },
        elements: {
          point:{
              radius: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Yearly Income",
            padding: {bottom: 24},
            font: {
              size: 16,
              weight: "normal",
            },
          },
          tooltip: {
            backgroundColor: "orange",
            bodyColor: "#272626",
            yAlign: "bottom",
            cornerRadius: 4,
            titleColor: "#272626",
            usePointStyle: true,
            callbacks: {
              label: function(context) {
                  if (context.parsed.y !== null) {
                    const label = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    return label;
                  }
                  return null;
              }
            }
          },
        },
        scales: {
          x: {
            border: {
              dash: [4, 4],
            },
            title: {
              text: "2023",
            },
          },
          y: {
            grid: {
              color: "#27292D",
            },
            border: {
              dash: [1, 2],
            },
            title: {
              display: true,
              text: "Income [USD]",
              padding: {bottom: 16}
            },
          },
        },
      },
    });
});
