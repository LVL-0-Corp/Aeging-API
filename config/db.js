const DB_USER_NAME = "api";
const DB_USER_PASSWORD = "KxzqZQMjCGe6eEjl";
const DB_URL = `mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@cluster0-ru4vy.gcp.mongodb.net/aeging-db?retryWrites=true&w=majority`;
const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = {DB_URL, DB_OPTIONS};