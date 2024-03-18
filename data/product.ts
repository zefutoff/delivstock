import db from "@/lib/prisma";

export const getProductTypeByName = async (typeName: string) => {
  try {
    const productType = await db.productType.findFirst({ where: { typeName } });

    return productType;
  } catch (error) {
    return null;
  }
};

export const getProductTypeById = async (typeId: string) => {
  try {
    const productType = await db.productType.findUnique({ where: { typeId } });

    return productType;
  } catch (error) {
    return null;
  }
};
