import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

const rows = [
  {
    key: "1",
    name: "Thomas",
  },
  {
    key: "2",
    name: "Joachim",
  },
];
const columns = [
  {
    key: "name",
  },
];

export default function Home() {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key="{column.key}">{column.key}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
