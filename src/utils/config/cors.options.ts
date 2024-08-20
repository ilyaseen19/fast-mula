export const corsOptions = {
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
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: "*",
      preflightContinue: false,
}