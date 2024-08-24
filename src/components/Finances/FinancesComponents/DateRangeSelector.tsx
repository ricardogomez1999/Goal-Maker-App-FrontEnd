type DateRangeSelectorProps = {
  selectedRange: string;
  setSelectedRange: React.Dispatch<React.SetStateAction<string>>;
};
export default function DateRangeSelector({
  selectedRange,
  setSelectedRange,
}: DateRangeSelectorProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(event.target.value);
  };
  return (
    <select
      className="border border-gray-300 rounded p-1 h-7 text-xs"
      value={selectedRange}
      onChange={handleOnChange}
    >
      <option>This month</option>
      <option>Last month</option>
      <option>Last 3 months</option>
    </select>
  );
}
