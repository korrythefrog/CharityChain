//handles the transfer of funds that charity uses, giving a hash and allowing everyone to see where charity funds are being used on the blockchain
const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
 
const account1 = '' // sample charity wallet
const account2 = '' // cc wallet

const privateKey1 = '' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const address = '0xaA771801045F8E0B726c968338e138999e2b333d' // CC Contract Address
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address, uint256) returns (bool)"
];
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const amount = '1'

const main = async () => {
    const ccContract = new ethers.Contract(address, ERC20_ABI, wallet);
    const numberOfTokens = ethers.utils.parseUnits(amount, 18);

    const senderBalanceBefore = await contract.balanceOf(account1)
    const recieverBalanceBefore = await contract.balanceOf(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await ccContract.transfer(account2, numberOfTokens);
    await tx.wait()

    trans_hash = tx.hash
    console.log(tx)
    console.log("Transaction hash:", trans_hash)

    const senderBalanceAfter = await contract.balanceOf(account1)
    const recieverBalanceAfter = await contract.balanceOf(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()
