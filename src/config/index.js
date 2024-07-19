import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  corseOptions: {
    allowedHeaders: [
      "X-ACCESS_TOKEN",
      "Access-Control-Allow-Origin",
      "Authorization",
      "Origin",
      "x-requested-with",
      "Content-Type",
      "Content-Range",
      "Content-Disposition",
      "Content-Description",
    ],
    credentials: false,
    methods: "GET,HEAD,OPTIONS,PATCH,POST,DELETE",
    origin: ["http://localhost:3000", "http://192.168.43.233:3000"],
    preflightContinue: false,
  },
};

export { config };
