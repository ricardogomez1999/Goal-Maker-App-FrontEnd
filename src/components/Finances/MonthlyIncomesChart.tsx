import { BarChart } from "@mui/x-charts/BarChart";
import DateRangeSelector from "./FinancesComponents/DateRangeSelector";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getIncomesByCategory } from "../../api/FinancesAPI";
import { getDateRange } from "../../utils/utils";

export default function MonthlyIncomesChart() {
  const [selectedRange, setSelectedRange] = useState("This month");

  const { startDate, endDate } = getDateRange(selectedRange);

  const { data: categoryData, isLoading } = useQuery({
    queryKey: ["incomesByCategory", startDate, endDate],
    queryFn: () => getIncomesByCategory(startDate, endDate),
  });

  const categoryNamesArray: string[] = [];
  const categoryQuantitiesArray: number[] = [];

  categoryData?.map((data) => categoryNamesArray.push(data.category));
  categoryData?.map((data) => categoryQuantitiesArray.push(data.quantity));

  const valueFormatter = (value: number | null) => `$${value}`;
  return (
    <>
      <div className=" flex w-full justify-between">
        <h1 className="font-bold text-xl text-nice-red">
          Incomes by category
          <p className="text-gray-600 xl:text-md text-sm">
            {new Date(startDate).toLocaleDateString()} -{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
        </h1>
        <DateRangeSelector
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {categoryData && (
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: categoryNamesArray,
              scaleType: "band",
              colorMap: {
                type: "ordinal",
                colors: ["#209092", "#F3806B", "#EE4079", "#13CA72", "#EE4079"],
              },
            },
          ]}
          series={[
            {
              data: categoryQuantitiesArray,
              valueFormatter,
            },
          ]}
          width={500}
          height={250}
        />
      )}
    </>
  );
}
