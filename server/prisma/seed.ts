import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
    const modelNames = orderedFileNames.map((file) => {
        const modelName = path.basename(file, path.extname(file));
        return modelName.charAt(0).toUpperCase() + modelName.slice(1);
    });

    for (const modelName of modelNames) {
        const model: any = prisma[modelName as keyof typeof prisma];
        if (model) {
            await model.deleteAllData({});
            console.log(`Cleared the data from ${modelName}`);
        } else {
            console.error(
                `Model ${modelName} not found. Error`
            );
        }
    }
}

async function main() {
    const dataDirectory = path.join(__dirname, "seedData");

    const orderedFileNames = [
        "products.json",
        "expenseSummary.json",
        "sales.json",
        "salesSummary.json",
        "purchases.json",
        "purchaseSummary.json",
        "users.json",
        "expenses.json",
        "expenseByCategory.json",
    ];

    await deleteAllData(orderedFileNames);

    for (const fileName of orderedFileNames) {
        const filePath = path.join(dataDirectory, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const modelName = path.basename(fileName, path.extname(fileName));
        const model: any = prisma[modelName as keyof typeof prisma];

        if (!model) {
        console.error(`No prisma model matches this file name: ${fileName}`)
        continue;
    }

    for (const data of jsonData) {
        await model.create({ data });
    }

    console.log(`Seeded ${modelName} with data of ${fileName}`);
    }
}

main().catch((e) => {
    console.error(e);
})
    .finally(async () => {
        await prisma.$disconnect();
    });