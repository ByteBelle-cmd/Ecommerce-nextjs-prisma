'use client'

import { Product } from "@prisma/client"
import { useActionState, useState } from "react"
import { addProduct, updateProduct } from "../../_actions/products"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { formatCurrency } from "@/lib/formatters"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ProductForm({ product }: { product?: Product | null }) {
  const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents)
  const ActionFunction = async (state: Product | unknown | undefined, formdata: FormData) => {
    if (!formdata) {
      return state
    }
    const result = product == null ? addProduct(state, formdata) : updateProduct(product.id, state, formdata)
    console.log(result)
  }
  const [error, action, isPending] = useActionState(
    ActionFunction,
    product || { _error: [] }
  );

  const getError = (field: string) =>
    (error as Record<string, string[]>)[field]?.[0] ?? null;



  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
        />
        {getError("name") && <div className="text-destructive">{getError("name")}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents !== undefined ? priceInCents : ""}
          onChange={(e) => {
            const value = e.target.value;
            setPriceInCents(value === "" ? undefined : Number(value));
          }}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {getError("priceInCents") && (
          <div className="text-destructive">{getError("priceInCents")}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description || ""}
        />
        {getError("description") && (
          <div className="text-destructive">{getError("description")}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required={!product} />
        {product && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
        {getError("file") && <div className="text-destructive">{getError("file")}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required={!product} />
        {product && (
          <Image
            src={product.imagePath}
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
        {getError("image") && <div className="text-destructive">{getError("image")}</div>}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}