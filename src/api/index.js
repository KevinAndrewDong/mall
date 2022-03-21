import requests from "./request";

// /api/product/getBaseCategoryList get
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
