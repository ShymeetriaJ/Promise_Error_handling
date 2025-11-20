

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};
export const fetchProductReviews = (): Promise<{ productId: number; name: string; price: number; review: string }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { productId: 1, name: "Laptop", price: 1200, review: "I liked this product"},
            { productId: 2, name: "Headphones", price: 200, review: "I hate this product" },
        ]);
        } else {
        reject("Failed to fetch reviews for product ID ${productId}");
        }
    }, 1500);
    });
};
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { totalSales: 1, unitsSold: 40, averagePrice: 1200 },
            { totalSales: 2, unitsSold: 20, averagePrice: 200 },
        ]);
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1000);
    });
};



