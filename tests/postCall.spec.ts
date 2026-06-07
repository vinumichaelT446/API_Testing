import { test, expect } from "@playwright/test"

test("Test Post API", async function ({ request }) {
  const resp = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: {
      firstname: "John",
      lastname: "Doe",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-01-01",
        checkout: "2024-01-10",
      },
      additionalneeds: "Breakfast",
    },
    headers: {
      "Content-Type": "application/json",
    },
  })

  expect(resp.ok()).toBeTruthy()
  const body = await resp.json()
  expect(body).toHaveProperty("bookingid")
})

