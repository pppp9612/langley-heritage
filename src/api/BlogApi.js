import http from "../utils/http";
// 博客分页信息
const getBlogList = (data) => {
  return http.get("/blog/page", data);
};
// 保存博客
const saveBlog = (data) => {
  return http.post("/blog/save", data);
};
// 删除博客
const delBlog = (data) => {
  return http.del("/blog/delete/" + data);
};
// 获取博客
const getBlogInfo = (data) => {
  return http.get("/blog/info/" + data);
};
export default {
  getBlogList,
  saveBlog,
  delBlog,
  getBlogInfo
}