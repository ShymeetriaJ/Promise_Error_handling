import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiiSimulatorr";
fetchProductCatalog()
    .then((ProductCatalog) => {
    console.log(ProductCatalog);
})
    .catch((error) => {
    console.error("Unknown error", error);
});
fetchProductReviews([])
    .then((ProductReviews) => {
    console.log(ProductReviews);
})
    .catch((error) => {
    console.error("Something went wrong", error);
});
fetchSalesReport()
    .then((SalesReport) => {
    console.log(SalesReport);
})
    .catch((error) => {
    console.error("Sale report error", error);
});
//# sourceMappingURL=index.js.map