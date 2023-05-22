const response = {
  "2023-04": {
    inflow: 11149.46,
    outflow: -504.22,
  },
  "2023-03": {
    inflow: 11179.859999999999,
    outflow: -504.22,
  },
};

function adaptData(data) {
  const adaptedData = Object.entries(data).map(([date, overview]) => {
    const dateString = date;
    const [year, month] = dateString.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1);
    const monthName = newDate.toLocaleString("en-US", { month: "short" });

    return {
      name: monthName,
      uv: overview.inflow,
      pv: overview.outflow,
    };
  });

  return adaptedData;
}

console.log(adaptData(response));
