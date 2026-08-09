import { NextRequest, NextResponse } from "next/server";
import { products } from "@/mock-data/products";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const newProduct = {
    id: products.length + 1,
    sku: data.sku || `SKU-${Date.now()}`,
    name: {
      en: data.name || "New Product",
      ar: data.nameAr || "منتج جديد",
    },
    description: {
      en: data.description || "",
      ar: data.descriptionAr || "",
    },
    price: data.price || 0,
    inStock: true,
    featured: false,
    new: true,
    popular: false,
    category: {
      en: data.category || "General",
      ar: data.categoryAr || "عام",
    },
    minOrderQuantity: data.minOrderQuantity || 1,
  };

  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id } = data;

  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ...product,
    ...data,
    name: {
      en: data.name || product.name.en,
      ar: data.nameAr || product.name.ar,
    },
  });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Product ID required" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, deletedId: id });
}
