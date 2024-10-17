import { TableRowType } from "../../../Types";
import { formatDate } from "../../../utils/utils";

type TableCardProps = {
  row: TableRowType;
};

export default function TableRow({ row }: TableCardProps) {
  return (
    <tr key={row._id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
        {row.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(row.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {row.calories} cal
      </td>
    </tr>
  );
}
