const { messagePrefix } = require("@ethersproject/hash");
const { expect } = require("chai");

describe("Token Contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Shoken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });
   describe("transfer", function () {
     
     it("Should allow to tranfer money between user and receipient", async function () {
       await hardhatToken.transfer(addr1.address,100);
       const receipientbalance= await hardhatToken.balanceOf(addr1.address);
       const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(receipientbalance).to.equal(100);
      expect(ownerBalance).to.equal(900);

     });
     });



});