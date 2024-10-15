import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-start h-screen text-center gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="ghost" asChild>
            <Link
              href="/invoices/new"
              className="inline-flex gap-2"
            >
              <CirclePlus />
              Create invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="p-4 w-[100px]">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="p-4 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left font-medium">
              <span className="font-semibold">06/10/2024</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span className="font-semibold">John Doe</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span>john@email.com</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <Badge className="rounded-full">Ready</Badge>
            </TableCell>
            <TableCell className="text-right">
              $<span>250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
