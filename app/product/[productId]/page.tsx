import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface IParams {
  productId?: string
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params)
  const user = await getCurrentUser()

  if (!product) return <NullData title="Oops! Product with the given id does not exist" />

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
}

export default Product;