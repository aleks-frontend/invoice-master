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
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const results = await db.select().from(Invoices).execute();

  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-start h-screen text-center gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="ghost" asChild>
            <Link href="/invoices/new" className="inline-flex gap-2">
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
          {results.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="text-left font-medium p-0">
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="font-semibold p-4 block"
                >
                  {new Date(invoice.createTs).toLocaleDateString()}
                </Link>
              </TableCell>
              <TableCell className="text-left p-0">
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="font-semibold p-4 block"
                >
                  Customer
                </Link>
              </TableCell>
              <TableCell className="text-left p-0">
                <Link href={`/invoices/${invoice.id}`} className="p-4 block">
                  john@email.com
                </Link>
              </TableCell>
              <TableCell className="text-left p-0">
                <Link href={`/invoices/${invoice.id}`} className="p-4 block">
                  <Badge
                    className={cn(
                      "rounded-full capitalize",
                      invoice.status === "open" && "bg-blue-500",
                      invoice.status === "paid" && "bg-green-600",
                      invoice.status === "void" && "bg-zinc-700",
                      invoice.status === "uncollectible" && "bg-red-600"
                    )}
                  >
                    {invoice.status}
                  </Badge>
                </Link>
              </TableCell>
              <TableCell className="text-right p-0">
                <Link href={`/invoices/${invoice.id}`} className="p-4 block">
                  ${(invoice.value / 100).toFixed(2)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
