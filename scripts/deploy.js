const hre = require("hardhat");
async function main() {
  const [owner] = await hre.ethers.getSigners();
  const BankContractFactory = await hre.ethers.getContractFactory("Bank");
  const bank = await BankContractFactory.deploy();

  await bank.deployed();

  console.log("Bank Deployed to:", bank.address);
  console.log("BankContract owner address:", owner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
