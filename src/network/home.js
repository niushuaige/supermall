import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "home/swiperdata"
  });
}
export function getHomeCatitems() {
  return request({
    url: "home/catitems"
  });
}
