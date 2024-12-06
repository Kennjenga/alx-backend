import redis from "redis";
const { promisify } = require("util");

const client = redis.createClient();

client.on("connect", () => console.log("Redis client connected to the server"));

client.on("error", (err) =>
  console.log(`Redis client not connected to the server: ${err.message}`)
);

const MAIN_KEY = "ALX";

const keys = ["Portland", "Seattle", "New York", "Bogota", "Cali", "Paris"];
const values = [50, 80, 20, 20, 40, 2];

keys.forEach((key, index) => {
  client.hset(MAIN_KEY, key, values[index], redis.print);
});

client.hgetall(MAIN_KEY, (error, value) => {
  console.log(value);
});

// Promisify the hget function
const hgetAsync = promisify(client.hget).bind(client);
async function displaySchoolValue(key, area) {
  const value = await hgetAsync(key, area);
  console.log(value);
}

displaySchoolValue("ALX", "Cali");
