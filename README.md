# Smart Contracts Escrow Management

Node 22.14.0
NPM 11.1.0

## Installation

Install dependencies:

```bash
npm install
```

## Compile

Compile contracts:

```bash
npx hardhat compile
```

## Lint

Lint contracts:

```bash
npm run lint
```

## Run test

Run tests of contracts:

```bash
npm run test
```

```bash
npm run cover
```

## Deploy
```
npx hardhat run scripts/deploy.js --network sepolia
```


## Verify
```
npx hardhat verify --network mainnet 0xMpeContractAddress "0xProvidedMpeTokenContractAddress"
```