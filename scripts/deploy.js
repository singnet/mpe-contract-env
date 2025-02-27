async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
  
    const tokenAddress = "0xNewTokenAddress";
  
    const MultiPartyEscrow = await ethers.getContractFactory("MultiPartyEscrow");
  
    const multiPartyEscrow = await MultiPartyEscrow.deploy(
        tokenAddress
    );
  
    console.log("Contract deployed");
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });