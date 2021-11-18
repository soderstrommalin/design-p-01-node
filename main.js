const app = require("./index");

const start = (port) => {
    try {
        app.listen(port, () => {
            console.log(`This is running on port ${port}`);
        });
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

start(5000);
