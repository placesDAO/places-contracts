const Places = artifacts.require("./Places.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Places", (accounts) => {
  let placesContract;

  before(async () => {
    placesContract = await Places.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = placesContract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await placesContract.name();
      assert.equal(name, "Places");
    });

    it("has a symbol", async () => {
      const symbol = await placesContract.symbol();
      assert.equal(symbol, "PLACES");
    });
  });

  describe("minting", async () => {
    it("creates a new token", async () => {
      const result = await placesContract.mint(); // 0
      await placesContract.mint(); // 1
      await placesContract.mint(); // 2
      await placesContract.mint(); // 3
      await placesContract.mint(); // 4
      await placesContract.mint(); // 5
      await placesContract.mint(); // 6
      await placesContract.mint(); // 7
      await placesContract.mint(); // 8
      await placesContract.mint(); // 9
      await placesContract.mint(); // 10
      await placesContract.mint(); // 11
      await placesContract.mint(); // 12
      await placesContract.mint(); // 13
      await placesContract.mint(); // 14
      await placesContract.mint(); // 15
      await placesContract.mint(); // 16
      await placesContract.mint(); // 17
      await placesContract.mint(); // 18
      await placesContract.mint(); // 19
      //      await placesContract.ownerMint(19);
      const totalSupply = await placesContract.totalSupply();
      console.log(totalSupply);
      // SUCCESS
      assert.equal(totalSupply, 20);
      const event = result.logs[0].args;
      assert.equal(event.tokenId.toNumber(), 0, "id is correct");
      assert.equal(
        event.from,
        "0x0000000000000000000000000000000000000000",
        "from is correct"
      );
      assert.equal(event.to, accounts[0], "to is correct");
    });
  });

  // describe("indexing", async () => {
  //   it("lists places", async () => {
  //     // Mint 3 more tokens
  //     await placesContract.mint("The Golden Gate Bridge");
  //     await placesContract.mint("Palace of Fine Arts");
  //     await placesContract.mint("Blue Bottle Coffee");
  //     const totalSupply = await placesContract.totalSupply();

  //     let place;
  //     let result = [];

  //     for (var i = 1; i <= totalSupply; i++) {
  //       place = await contract.place(i - 1);
  //       result.push(place);
  //     }

  //     let expected = [
  //       "The Golden Gate Bridge",
  //       "Palace of Fine Arts",
  //       "Blue Bottle Coffee",
  //     ];
  //     assert.equal(result.join(","), expected.join(","));
  //   });
  // });
});
