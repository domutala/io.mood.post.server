import { Express } from "express";
import app from "./_app";

export const init = async (App: Express) => {
  App.use("/", [...app]);
};
