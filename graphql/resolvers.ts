type TestData = {
  text: string;
  views: number;
};

export default {
  hello(): TestData {
    return {
      text: "Hello World!",
      views: 1245,
    };
  },
};
