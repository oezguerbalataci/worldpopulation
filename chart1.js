Chart.defaults.font.size = 14;
const labels = ["China", "India", "United States", "Indonesia", "Pakistan", "Brazil","Nigeria","Bangladesh","Russia","Mexico"];
const labelsLang = ["English", "Mandarin", "Hindi", "Spanish", "French","Arabic","Bengali","Russian","Portuegese","Indonesian"];
const data= {
  labels: labels,
  datasets: [
    {
      label: "Population",
      backgroundColor: "rgb(218, 217, 146)",
      borderColor: "rgb(243, 237, 158)",
      data: [1439323776, 1380004385, 331002651, 273523615, 220892340, 212559417, 206139589,163689383,145934462,128932753],
    },
  ],
};
const data1 = {
  labels: labelsLang,
  datasets: [
    {
      label: "Language",
      backgroundColor: "rgb(218, 217, 146)",
      borderColor: "rgb(243, 237, 158)",
      data: [1132000000, 1117000000, 615000000, 534000000, 280000000, 274000000, 265000000, 258000000, 234000000, 198000000],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
      indexAxis:'y',
      elements:{
          bar:{
              borderWidth:2,
          }
      },
      responsive:true,
      plugins:{
        legend:{
          labels:{
            font:{
              size:16
            }
          }
        }
      }
  },
};
const configLang = {
  type: "bar",
  data: data1,
  options: {
      indexAxis:'y',
      elements:{
          bar:{
              borderWidth:2,
          }
      },
      responsive:true,
       plugins:{
        legend:{
          labels:{
            font:{
              size:16
            }
          }
        }
      }
  },
};

let ctx = document.getElementById('populationChart');
let popChart = new Chart(ctx,config);

let ctxLang = document.getElementById('langChart');
const langChart = new Chart(ctxLang,configLang);