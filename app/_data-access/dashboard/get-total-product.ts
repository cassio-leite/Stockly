import { db } from "@/app/_lib/prisma";
import "server-only";

export const getTotalProduct = async (): Promise<number> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db.product.count();
}