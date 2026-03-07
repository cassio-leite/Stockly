import { db } from "@/app/_lib/prisma";
import "server-only";

export const getTotalProduct = async (): Promise<number> => {
    return db.product.count();
}