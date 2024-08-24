import { transactionsType } from "../../../Types";
import { formatCurrency, formatDate } from "../../../utils/utils";

type transactionCardProps = {
  transaction: transactionsType;
};

export default function TransactionTableRow({
  transaction,
}: transactionCardProps) {
  return (
    <tr key={transaction._id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
        {transaction.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
        {transaction.category}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(transaction.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatCurrency(transaction.quantity)}
      </td>
    </tr>
  );
}
