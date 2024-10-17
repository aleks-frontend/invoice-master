import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoiceId = parseInt(params.invoiceId);

  // If URL with a non-integer invoice ID is accessed throw an error
  if (isNaN(invoiceId)) {
    throw new Error("Invalid invoice ID");
  }

  
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);
  
  // If URL with a non-existing invoice ID is accessed, return 404
  if (!result) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-start h-screen gap-6 my-12">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold flex gap-4 items-center">
          Invoice #{invoiceId}
          <Badge
            className={cn(
              "rounded-full capitalize",
              result.status === "open" && "bg-blue-500",
              result.status === "paid" && "bg-green-600",
              result.status === "void" && "bg-zinc-700",
              result.status === "uncollectible" && "bg-red-600"
            )}
          >
            {result.status}
          </Badge>
        </h1>
      </div>
      <p className="text-3xl mb-3">${(result.value / 100).toFixed(2)}</p>
    </main>
  );
}
