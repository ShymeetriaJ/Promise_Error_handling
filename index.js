import { fetchProductCatalog } from "./apiiSimulatorr";
fetchProductCatalog()
    .then((product) => {
    console.log(product);
})
    .catch((error) => {
    console.error("Unknown error", error);
});
//# sourceMappingURL=index.js.map