import { ShoppingBasketIcon } from "lucide-react";
import { SummaryCard, SummaryCardIcon, SummaryCardTitle, SummaryCardValue } from "./summary-card";
import { getTotalProduct } from "@/app/_data-access/dashboard/get-total-product";

const TotalProductsCard = async () => {
    const totalProducts = await getTotalProduct()
    return ( 
        <SummaryCard>
          <SummaryCardIcon>
            <ShoppingBasketIcon />
          </SummaryCardIcon>
          <SummaryCardTitle>Produtos</SummaryCardTitle>
          <SummaryCardValue>{totalProducts}</SummaryCardValue>
        </SummaryCard>
     );
}
 
export default TotalProductsCard;