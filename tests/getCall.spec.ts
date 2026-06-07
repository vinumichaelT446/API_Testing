import {test, expect} from "@playwright/test"

test("Test Get API", async function ({request}){
const resp = await request.get("https://restful-booker.herokuapp.com/booking")
const respJson = await resp.json()
console.log(resp);
}
)

