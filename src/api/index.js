import requests from "@/api/request";

// /api/product/getBaseCategoryList get
export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};
