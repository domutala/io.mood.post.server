export interface IContent {
  type: "text" | "picture" | "video";
  value: {
    size?: number;
    text: string;

    // "picture" | "video"
    file?: string;
  };
}
