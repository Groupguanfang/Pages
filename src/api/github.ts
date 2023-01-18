import axios from "axios";

export async function event() {
  return await axios({
    url: "https://api.github.com/users/groupguanfang/received_events",
    auth: {
      username: "groupguanfang",
      password: "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",
    },
  });
}
