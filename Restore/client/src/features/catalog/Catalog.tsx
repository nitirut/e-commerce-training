import { Product } from "../../app/models/product"
import ProductList from "./ProductList"

type Props = Readonly<{
  products: Product[]
}>

export default function Catalog({ products }: Props) {
  return (
    <ProductList products={products} />
  )
}