const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("GET /", () => {
    it("responds 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("responds with text", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("text/html");
    });
    describe("POST", () => {
      it("responds 201", async () => {
        const res = await request(server).post("/shoes");
        expect(res.status).toBe(201);
      });
    });
    describe("DELETE", () => {
      it("responds 200", async () => {
        const res = await request(server).delete("/shoes/:id");
        expect(res.status).toBe(200);
      });
    });
  });
});
