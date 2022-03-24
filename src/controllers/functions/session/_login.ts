import { Request, Response } from "express";

import firebase_admin from "firebase-admin";
import sender from "../../utils/sender";
import services from "../../../services";

export default async (req: Request, res: Response) => {
  try {
    const serviceAccount = require("./../../../../firebase.json");
    firebase_admin.initializeApp({
      credential: firebase_admin.credential.cert(serviceAccount),
    });

    const body = await firebase_admin
      .auth()
      .verifyIdToken(req.body.firebaseToken);

    if (!body) {
      return sender(req, res, { error: { text: "firebaseTokenError" } });
    }

    const token = req.headers.token as string;
    const response = await services.session.login({ token, body });

    sender(req, res, response);
  } catch (error) {
    sender(req, res, { error });
  }
};
