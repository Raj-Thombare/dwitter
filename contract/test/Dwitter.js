const { expect } = require("chai");

describe("Dwitter", function () {
  it("should accept name 'raj'", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const dwitter = await Dwitter.deploy("raj");

    const name = await dwitter.getName();
    expect(name).to.equal("raj");
  });
});
