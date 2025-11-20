import { NetworkError, DataError } from "./customErrors";
export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
export const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200, review: "I liked this product" },
                    { id: 2, name: "Headphones", price: 200, review: "I hate this product" },
                ]);
            }
            else {
                reject("Failed to fetch reviews for product ID ${productId}");
            }
        }, 1500);
    });
};
export const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { totalSales: 1, unitsSold: 40, averagePrice: 1200 },
                    { totalSales: 2, unitsSold: 20, averagePrice: 200 },
                ]);
            }
            else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};
//# sourceMappingURL=apiiSimulatorr.js.map