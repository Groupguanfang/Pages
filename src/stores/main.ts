import { defineStore } from "pinia";

interface state {
  theme: null | "dark";
  type: "github" | "baidu" | "google" | "bing";
}

export const useMain = defineStore("main", {
  state: (): state => {
    return {
      theme: null,
      type: "github",
    };
  },
  actions: {
    switchTheme(): void {
      if (this.theme === null) {
        this.theme = "dark";
      } else {
        this.theme = null;
      }
    },
    switchType(type: "github" | "baidu" | "google" | "bing"): void {
      this.type = type;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});

export const account = defineStore("account", {
  state: () => {
    return {
      github: {
        username: "",
        token: "",
      },
    };
  },
  actions: {
    loginGithub(username: string, token: string) {
      this.github.username = username;
      this.github.token = token;
    },
  },
});
