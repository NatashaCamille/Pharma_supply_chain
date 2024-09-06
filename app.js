const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
let contract;

const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const abi = [ /* ABI from Membership.json after compiling */ ];

window.addEventListener('load', async () => {
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
});

async function register() {
    const tx = await contract.register();
    await tx.wait();
    alert("Registered!");
}

async function deposit() {
    const tx = await contract.deposit({ value: ethers.utils.parseEther("0.1") });
    await tx.wait();
    alert("Deposited 0.1 ETH");
}

async function withdraw() {
    const tx = await contract.withdraw(ethers.utils.parseEther("0.1"));
    await tx.wait();
    alert("Withdrew 0.1 ETH");
}
