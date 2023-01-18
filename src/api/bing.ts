import axios from "axios";

export default async function getBingImage(count: number = 1) {
  let data = await axios({
    baseURL: "https://www.bing.com",
    url: "/HPImageArchive.aspx?format=js&idx=0&n=1",
    params: {
      format: "js",
      idx: 0,
      n: count,
    },
  });
  data.data.images[0].url = "https://www.bing.com" + data.data.images[0].url;
  return data;
}
