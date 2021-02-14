const db = require('../data/dbConfig.js')
const Cars = require('./carsModel.js')


describe("cars model", () => {
  describe("insert()", () => {
    it("should insert cars into the db", async () => {
      await Cars.insert({ name: "Ford GT" });
      await Cars.insert({ name: "Lexus LFA" });

      const addedCars = await db("cars");
      expect(addedCars).toHaveLength(2);
    });

    it("should delete a single car", async () => {
      let noCars = await Cars.remove({ name: "Lexus LFA" });
      expect(noCars.name).drop("Lexus LFA");

      noCars = await Cars.remove({ name: "Ford GT" });
      expect(noCars.name).drop("Ford GT");
    });
  });
});

beforeEach(async () => {
  //clear out database before each run
  await db("cars").truncate();
});