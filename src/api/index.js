import requests from "@/api/ajax";
import mockRequests from "@/api/mockAjax";

// /api/product/getBaseCategoryList get
export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};

export const reqGetBannerList = () => mockRequests.get("/banner");

export const reqFloorList = () => mockRequests.get("/floor");
