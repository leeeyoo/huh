"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any
}

const ProductCard: React.FC<ProductCardProps> = ({
  data
}) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer text-sm">
      <div className="flex flex-col items-start w-full">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden ">
          <Image
            src={data.images[0].image}
            fill
            alt={data.name}
            className="w-full h-full object-cover transition hover:scale-105"
          />
        </div>
        <div className="mt-2">{truncateText(data.name)}</div>
      </div>
    </div>
  );
}

export default ProductCard;