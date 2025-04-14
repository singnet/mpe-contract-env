async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Registry = await ethers.getContractFactory("Registry");
  
    const registry = await Registry.deploy(
        tokenAddress
    );
  
    console.log("Contract deployed", await registry.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });