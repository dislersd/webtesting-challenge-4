const db = require("../data/dbConfig.js");
const Shoes = require("./shoesModel.js");

describe("shoes model", () => {
  beforeEach(async () => {
    await db("shoes").truncate();
  });
  describe("insert", () => {
    it("should insert 1 shoe", async () => {
      await Shoes.insert({ name: "nikes" });
      const shoes = await db("shoes");
      expect(shoes).toHaveLength(1);
    });
    it("should insert correct shoe", async () => {
      const shoe = await Shoes.insert({ name: "nikes" });
      expect(shoe.name).toBe("nikes");
    });
  });
  describe("delete", () => {
    it("should delete 1 shoe", async () => {
      Shoes.insert({name: 'shoe'});
      Shoes.remove(1);
      const shoes = await db("shoes");
      expect(shoes).toHaveLength(0);
    });
    it("should delete correct shoe", async () => {});
  });
});