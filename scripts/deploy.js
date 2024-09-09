async function main() {
    const Membership = await ethers.getContractFactory("Membership");
    const membership = await Membership.deploy();
  
    await membership.deployed();
  
    console.log("Membership deployed to:", membership.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  