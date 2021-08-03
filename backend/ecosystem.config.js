module.exports = {
    apps: [
        {
            name: "bookstore-backend",
            script: "./dist/index.js",
        },
        {
            script: "./service-worker/",
            watch: ["./service-worker"],
        },
    ],
};
