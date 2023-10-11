import * as edgedb from "edgedb";
import { getUser } from "./dbschema/queries";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const client = edgedb.createClient({ waitUntilAvailable: 0, tlsSecurity: "insecure" });

console.log("Fetching users...");
const users = await getUser(client);
console.log("Fetched users!");

for(let i = 120; i > 0; i--)
{
    console.log(`Waiting ${i} seconds`);
    await sleep(1_000);
}

console.log("Fetching users again...");
const users2 = await getUser(client);
console.log("Users fetched again!");