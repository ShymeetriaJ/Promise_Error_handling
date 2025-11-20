export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: () => Promise<{
    productId: number;
    name: string;
    price: number;
    review: string;
}[]>;
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}[]>;
//# sourceMappingURL=apiiSimulatorr.d.ts.map