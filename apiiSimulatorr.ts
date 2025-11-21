import { NetworkError, DataError } from "./customErrors";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        const product = [
        
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ];
        if (!product || product.length === 0) {
            reject(DataError("Data Error. Check product input fields."));
            return;
        }
            resolve(product);
        } else {
        reject(NetworkError("Network error. Try again later"));
        }
    }, 1000);
    });
};
export const fetchProductReviews = (productId: any): Promise<{ id: number; name: string; price: number; review: string; }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        const reviews = [
            { id: 1, name: "Laptop", price: 1200, review: "I liked this product"},
            { id: 2, name: "Headphones", price: 200, review: "I hate this product" },
        ];
        if (!reviews || reviews.length === 0) {
            reject(DataError("Data error. Check review input fields."));
            return;
        }
        resolve(reviews);
        } else {
        reject(NetworkError("Network error. Try Again later. Failed to fetch reviews for product ID ${productId}"));
        }
    }, 1500);
    });
};
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            const reports = [
            { totalSales: 1, unitsSold: 40, averagePrice: 1200 },
            { totalSales: 2, unitsSold: 20, averagePrice: 200 },
        ];
        if (!reports || reports.length === 0) {
            reject(DataError("Data error. Check report data fields."));
            return;
        }
        resolve(reports);
        } else {
        reject(NetworkError("Network error. Try Again later. Failed to fetch sales report"));
        }
    }, 1000);
    });
};



