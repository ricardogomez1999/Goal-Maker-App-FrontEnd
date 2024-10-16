import { FoodTableRow } from "../../../Types";
import { formatDate } from "../../../utils/utils";

type TableCardProps = {
  food: FoodTableRow;
};

export default function TableRow({ food }: TableCardProps) {
  return (
    <tr key={food._id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
        {food.foodName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(food.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {food.calories} cal
      </td>
    </tr>
  );
}
