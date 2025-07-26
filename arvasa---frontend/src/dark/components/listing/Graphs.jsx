import React, { useState, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import Page from './Page';

const Graphs = () => {
  const [selectedMetric, setSelectedMetric] = useState("Locality Average Price");
  const [propertyType, setPropertyType] = useState("Flat");
  const [visibleLocations, setVisibleLocations] = useState({
    Bannerughatta: true,
    Rachenahalli: true,
    Marathahalli: true,
    Varthur: true,
    "Stage 2 RMV": true,
  });
  const chartRef = useRef(null);

  const handleLocationToggle = (location) => {
    setVisibleLocations((prev) => ({
      ...prev,
      [location]: !prev[location],
    }));
  };

  const metricOptions = [
    "Locality Average Price",
    "Locality Rental Yield",
    "Demand Index",
  ];

  const propertyTypes = ["Flat", "Land", "Bungalow", "Villa", "Apartment"];

  const allChartData = {
    "Locality Average Price": {
      labels: ["Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24"],
      datasets: [
        {
          label: "Bannerughatta",
          data: [7800, 8100, 7900, 8300, 8600, 8200, 8800, 9100, 8700],
          gradientStart: "#34C759",
          gradientEnd: "#A3E635",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Rachenahalli",
          data: [9500, 9300, 9700, 9900, 9600, 10100, 9800, 9500, 10000],
          gradientStart: "#8B4513",
          gradientEnd: "#D2B48C",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Marathahalli",
          data: [9200, 9400, 9100, 9600, 9800, 10200, 9900, 10500, 10300],
          gradientStart: "#800080",
          gradientEnd: "#DA70D6",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Varthur",
          data: [8800, 8600, 9000, 9200, 8900, 9400, 9600, 9300, 9700],
          gradientStart: "#00CED1",
          gradientEnd: "#40E0D0",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Stage 2 RMV",
          data: [10000, 10200, 9900, 10400, 10600, 10300, 10800, 11000, 10700],
          gradientStart: "#FF0000",
          gradientEnd: "#FF6347",
          fill: false,
          tension: 0.1,
        },
      ],
    },
    "Locality Rental Yield": {
      labels: ["Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24"],
      datasets: [
        {
          label: "Bannerughatta",
          data: [3.9, 3.7, 4.0, 3.8, 4.1, 4.0, 3.9, 4.2, 4.1],
          gradientStart: "#34C759",
          gradientEnd: "#A3E635",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Rachenahalli",
          data: [3.4, 3.5, 3.3, 3.6, 3.5, 3.4, 3.7, 3.6, 3.8],
          gradientStart: "#8B4513",
          gradientEnd: "#D2B48C",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Marathahalli",
          data: [4.2, 4.1, 4.3, 4.0, 4.2, 4.4, 4.1, 4.3, 4.2],
          gradientStart: "#800080",
          gradientEnd: "#DA70D6",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Varthur",
          data: [3.6, 3.8, 3.7, 3.9, 3.6, 3.8, 4.0, 3.7, 3.9],
          gradientStart: "#00CED1",
          gradientEnd: "#40E0D0",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Stage 2 RMV",
          data: [4.0, 4.1, 3.9, 4.2, 4.0, 4.3, 4.2, 4.4, 4.3],
          gradientStart: "#FF0000",
          gradientEnd: "#FF6347",
          fill: false,
          tension: 0.1,
        },
      ],
    },
    "Demand Index": {
      labels: ["Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24"],
      datasets: [
        {
          label: "Bannerughatta",
          data: [70, 72, 68, 74, 71, 76, 73, 78, 75],
          gradientStart: "#34C759",
          gradientEnd: "#A3E635",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Rachenahalli",
          data: [65, 63, 67, 66, 69, 68, 71, 70, 72],
          gradientStart: "#8B4513",
          gradientEnd: "#D2B48C",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Marathahalli",
          data: [75, 77, 73, 78, 76, 80, 78, 82, 79],
          gradientStart: "#800080",
          gradientEnd: "#DA70D6",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Varthur",
          data: [68, 66, 70, 69, 72, 71, 74, 73, 76],
          gradientStart: "#00CED1",
          gradientEnd: "#40E0D0",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Stage 2 RMV",
          data: [80, 82, 78, 83, 81, 85, 83, 87, 84],
          gradientStart: "#fff",
          gradientEnd: "#FF6347",
          fill: false,
          tension: 0.1,
        },
      ],
    },
  };

  const chartDataWithGradients = {
    ...allChartData[selectedMetric],
    datasets: allChartData[selectedMetric].datasets.map((dataset) => ({
      ...dataset,
      borderColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;
        if (!chartArea) return dataset.gradientStart;
        const gradient = canvasCtx.createLinearGradient(
          chartArea.left,
          0,
          chartArea.right,
          0
        );
        gradient.addColorStop(0, dataset.gradientStart);
        gradient.addColorStop(1, dataset.gradientEnd);
        return gradient;
      },
      backgroundColor: dataset.gradientStart, 
    })),
  };

  const chartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text:
            selectedMetric === "Locality Average Price"
              ? "Price (Rs. per sqft)"
              : selectedMetric === "Locality Rental Yield"
              ? "Rental Yield (per sqft)"
              : "Demand Index (Rs. per sqft)",
          color: "#4B5563",
        },
        beginAtZero: false,
        min: selectedMetric === "Locality Average Price" ? 6000 : selectedMetric === "Locality Rental Yield" ? 2.5 : undefined,
        max: selectedMetric === "Locality Average Price" ? 14000 : selectedMetric === "Locality Rental Yield" ? 5 : undefined,
        ticks: {
          stepSize: selectedMetric === "Locality Average Price" ? 2000 : undefined,
          color: "#6B7280",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
          color: "#4B5563",
        },
        ticks: {
          color: "#6B7280",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        mode: "index",
        intersect: false,
        external: (context) => {
          let tooltipEl = document.getElementById("chartjs-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.background = "rgba(255, 255, 255, 0.1)";
            tooltipEl.style.backdropFilter = "blur(10px)";
            tooltipEl.style.borderRadius = "8px";
            tooltipEl.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            tooltipEl.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            tooltipEl.style.padding = "10px";
            tooltipEl.style.fontFamily = "'Poppins', sans-serif";
            tooltipEl.style.pointerEvents = "none";
            document.body.appendChild(tooltipEl);
          }

          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          tooltipEl.style.opacity = "1";
          const titleLines = tooltipModel.title || [];
          const bodyLines = tooltipModel.body.map((bodyItem) => bodyItem.lines);

          let innerHtml = "<div>";
          titleLines.forEach((title) => {
            innerHtml += `<div style="font-weight: bold; font-size: 12px; color: #4B5563; text-transform: uppercase; margin-bottom: 5px;">${title}</div>`;
          });
          bodyLines.forEach((body, i) => {
            const colors = tooltipModel.labelColors[i];
            const [label, value] = body[0].split(": ");
            innerHtml += `
              <div style="display: flex; justify-content: space-between; font-size: 12px; color: #4B5563; margin-bottom: 2px;">
                <span>${label}:</span>
                <span style="font-weight: bold; color: ${colors.borderColor};"> ${value}</span>
              </div>`;
          });
          innerHtml += "</div>";

          tooltipEl.innerHTML = innerHtml;

          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 10 + "px";
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 10 + "px";
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,

  };

  const filteredChartData = {
    ...chartDataWithGradients,
    datasets: chartDataWithGradients.datasets.filter(
      (dataset) => visibleLocations[dataset.label]
    ),
  };

  const locations = [
    { name: "Bannerughatta", color: "#34C759", count: 72 },
    { name: "Rachenahalli", color: "#8B4513", count: 409 },
    { name: "Marathahalli", color: "#800080", count: 287 },
    { name: "Varthur", color: "#00CED1", count: 1360 },
    { name: "Stage 2 RMV", color: "#FF0000", count: 171 },
  ];

  return (
    <>
    <div className="flex items-center flex-wrap mt-8 md:mx-12 justify-center md:p-4">
      <div className="w-full scrollbar-hidden px-2 md:px-10">
        <h2 className="font-['Poppins'] text-2xl font-semibold text-gray-800 mb-4">
          Property Market Insights
        </h2>
        <div className="justify-start border-0 text-black font-bold font-['Poppins'] mb-4">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="md:px-2 w-full md:w-fit p-2 py-2 bg-white-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {metricOptions.map((option) => (
              <option key={option} className='p-2' value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="rounded-lg bg-clip-padding backdrop-filter shadow-lg bg-opacity-1 overflow-auto border border-gray-100 md:p-5 shadow-lg">
          <div className="flex justify-between items-center mb-4 font-['Poppins']">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="md:px-3 p-2 py-2 w-full md:w-fit bg-white rounded-md text-gray-800 font-['Poppins'] font-semibold border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  For {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex md:pr-5 items-center justify-center flex-wrap lg:flex-nowrap">

            {/* graph control */}
            
            <div className="w-[700px] h-[360px] pr-5">     
              <Line ref={chartRef} data={filteredChartData} options={chartOptions} />
            </div>
            <div className="w-full md:w-2/5 pl-10">
              <h4 className="text-md font-semibold text-gray-800 mb-10 font-['Poppins']">
                Top 5 Localities
              </h4>
              {locations.map((location) => (
                <div key={location.name} className="flex items-center mb-2 pb-5">
                  <input
                    type="checkbox"
                    checked={visibleLocations[location.name]}
                    onChange={() => handleLocationToggle(location.name)}
                    className="mr-2"
                  />
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: location.color }}
                  ></span>
                  <div className='flex flex-wrap justify-between items-center w-full'>
                    <span className="text-black text-sm font-['Poppins']">
                      {location.name}
                    </span>
                    <span className="text-gray-400 text-sm pr-2 font-['Poppins']">
                      See {location.count} Properties
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-neutral-500 mt-10 font-['Poppins']">
          {selectedMetric === "Locality Average Price"
            ? "In Bangalore, Developed localities take up the majority of the positions in the list of localities which have shown a high growth. Rachenahalli tops the list with 58.0% growth, followed by Bannerughatta with 39.2% growth, Stage 2 RMV with 37.5% growth, Marathahalli with 32.3% growth, and Varthur with 28.7% growth."
            : selectedMetric === "Locality Rental Yield"
            ? <div>
              <p className="text-neutral-500 mt-10 font-['Poppins']">
                *Rental Yield represents annual return from renting your house in that locality.
              </p>
              <p className="text-neutral-500 mt-3 font-['Poppins']">
                Among the localities in Bangalore that have shown a high growth in rental yield in past 9 months, Rashtriya Vidyalaya Road tops the list with 11.0% growth, followed by Kogilu with 1.9% decline, Doddakannelli with 2.4% decline, Bagalur Main Road with 14.7% decline, and Gunjur with 16.4% decline.
              </p>
            </div>
            : "The Demand Index reflects the market demand for properties in this locality, based on buyer interest and transaction volume."}
        </p>
      </div>
    </div>
   </>
  );
};

export default Graphs;