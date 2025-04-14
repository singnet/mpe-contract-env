async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
  
    const tokenAddress = "0x0000000000000000000000000000000000000000"; // Replace with the actual token address

    const MultiPartyEscrow = await ethers.getContractFactory("MultiPartyEscrow");
  
    const multiPartyEscrow = await MultiPartyEscrow.deploy(
        tokenAddress
    );
  
    console.log("Contract deployed", await multiPartyEscrow.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });