import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../App.css";

export default function GitHubStats() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/dineshkhichar569.json")
      .then((res) => res.json())
      .then((res) => {
        const formatted = res.contributions
          .flat()
          .filter((item) => item.date)
          .map((item) => ({
            date: item.date,
            count: Number(item.contributionCount) || 0,
          }));

        setAllData(formatted);
      });
  }, []);

  // filter data by selected year
  useEffect(() => {
    const filtered = allData.filter(
      (item) => new Date(item.date).getFullYear() === selectedYear,
    );
    setData(filtered);
  }, [selectedYear, allData]);

  // totals number of contributions
  const totalYear = data.reduce((sum, d) => sum + d.count, 0);
  const totalAll = allData.reduce((sum, d) => sum + d.count, 0);

  // date range for selected year
  const endDate = new Date(`${selectedYear}-12-31`);
  const startDate = new Date(endDate);
  startDate.setFullYear(endDate.getFullYear() - 1);
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl w-full overflow-x-auto text-white">
      <div className="flex justify-between items-center mb-4 gap-4 text-[10px] md:text-sm">

        <div className="text-xs md:text-base text-gray-400 flex flex-wrap gap-0">
          <span className="pr-6">
            <strong className="text-white">{totalYear}</strong> contributions in{" "}
            {selectedYear}
          </span>
          <span>
            <strong className="text-white">{totalAll}</strong> total
            contributions
          </span>
        </div>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-[#161b22] border border-gray-700 px-1 py-1 md:px-1 md:py-1 rounded"
        >
          {[2026, 2025].map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>

      </div>

      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className="w-max min-w-full">
          <CalendarHeatmap
            className="w-full min-w-[1000px]"
            startDate={startDate}
            endDate={endDate}
            values={data}
            gutterSize={3}
            showWeekdayLabels={false}
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              if (value.count >= 4) return "color-scale-4";
              if (value.count >= 3) return "color-scale-3";
              if (value.count >= 2) return "color-scale-2";
              return "color-scale-1";
            }}
            titleForValue={(value) => {
              if (!value) return `0 Contribution`;
              return `${value.count} Contribution on ${value.date}`;
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 mt-4 text-[10px] md:text-sm text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <span className="w-2 md:w-3 h-2 md:h-3 bg-[#161b22] rounded-sm"></span>
          <span className="w-2 md:w-3 h-2 md:h-3 bg-[#0e4429] rounded-sm"></span>
          <span className="w-2 md:w-3 h-2 md:h-3 bg-[#006d32] rounded-sm"></span>
          <span className="w-2 md:w-3 h-2 md:h-3 bg-[#26a641] rounded-sm"></span>
          <span className="w-2 md:w-3 h-2 md:h-3 bg-[#39d353] rounded-sm"></span>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
