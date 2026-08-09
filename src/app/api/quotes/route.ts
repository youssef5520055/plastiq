import { NextRequest, NextResponse } from "next/server";

const quotes = [
  { id: "QUOTE-001", company: "TechFlow Inc", quantity: 5000, status: "New", date: "2025-01-15" },
  { id: "QUOTE-002", company: "PackageCo", quantity: 10000, status: "Reviewing", date: "2025-01-14" },
  { id: "QUOTE-003", company: "Industrial Labs", quantity: 2500, status: "Quoted", date: "2025-01-13" },
  { id: "QUOTE-004", company: "BioMed Solutions", quantity: 7500, status: "Accepted", date: "2025-01-12" },
  { id: "QUOTE-005", company: "Logistics Hub", quantity: 15000, status: "Rejected", date: "2025-01-11" },
];

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(quotes);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const newQuote = {
    id: `QUOTE-${String(quotes.length + 1).padStart(3, "0")}`,
    company: data.company || "New Company",
    quantity: data.quantity || 0,
    status: "New",
    date: new Date().toISOString().split("T")[0],
  };

  return NextResponse.json(newQuote, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id, status } = data;

  if (!id || !status) {
    return NextResponse.json(
      { error: "Quote ID and status required" },
      { status: 400 }
    );
  }

  const quote = quotes.find((q) => q.id === id);
  if (!quote) {
    return NextResponse.json({ error: "Quote not found" }, { status: 404 });
  }

  const updated = { ...quote, status };
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Quote ID required" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, deletedId: id });
}
