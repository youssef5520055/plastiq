import { NextRequest, NextResponse } from "next/server";

const orders = [
  { id: "ORD-001", customer: "Acme Corp", amount: 2450, status: "Processing", date: "2025-01-15" },
  { id: "ORD-002", customer: "Tech Solutions", amount: 1820, status: "Shipped", date: "2025-01-14" },
  { id: "ORD-003", customer: "Global Industries", amount: 3120, status: "Pending", date: "2025-01-13" },
  { id: "ORD-004", customer: "Manufacturing Co", amount: 5680, status: "Confirmed", date: "2025-01-12" },
  { id: "ORD-005", customer: "Logistics Plus", amount: 1250, status: "Delivered", date: "2025-01-11" },
];

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const newOrder = {
    id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
    customer: data.customer || "New Customer",
    amount: data.amount || 0,
    status: "Pending",
    date: new Date().toISOString().split("T")[0],
  };

  return NextResponse.json(newOrder, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id, status } = data;

  if (!id || !status) {
    return NextResponse.json(
      { error: "Order ID and status required" },
      { status: 400 }
    );
  }

  const order = orders.find((o) => o.id === id);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  const updated = { ...order, status };
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Order ID required" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, deletedId: id });
}
