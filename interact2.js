const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/giWBO8kLr9p-MfuvvxUSz1NbAjPw6qzn');

let abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

// const UniContract = new ethers.Contract('0xadF53d7f35aA891a40B1e80f80CDA93ceAA6FEB8',abi,provider);
const tuniswapContract = new ethers.Contract('0xf10De7ea0D4308591b05C0E122d83ae4bA1709eF',abi,provider);
const tapeswapContract = new ethers.Contract('0x293cB63CBe7547A67F03F0b3552529c30B97669b',abi,provider);
const tbiswapContract = new ethers.Contract('0xf10De7ea0D4308591b05C0E122d83ae4bA1709eF',abi,provider);

let tokenAAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
let WETHabi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let bscTokenBabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

// Ethereum Testnet
const tokenAAddress = '0x4ead002584F666Ba8411A813A43780dc6a525706';
const tokenBAddress = '0x2c5e0177d36f5c66EfDa4FE074E67546d7DF83e9';
const TBUSDAddress = '0xC996Aa4AFBB9DD3534c335Bb42ab1617fA85C5Af';
const TUSDTAddress = '0x47f883216d053Aa52beCb4030eb1c8C85F66d249';
const TUSDCAddress = '0x97E2d90A6D5710C930EA6237edA88547bE43C0D1';
const WETHAddress = '0x7dF3136dE0440258724D51a614aa277E5d2E3eb2';
// const tokenGAddress = '0x48ce02D428e7A5b607e89e7A360B4F10FB72fF6E';
// const tokenZAddress = '0x274F9Ea794592cBABeC0A5231bAA2102e8Ee02A0';

// BSC Testnet
const bsctokenBAddr = "0x092F44f3D158B5e45ac074F68DDCcd97205d5211";
const bsctokenCAddr = "0x87F23470593abC0f4B9A16A421ABA9964e15fF09";
const bsctokenDAddr = "0xf3A393c322a5090b93Ac573D1556f765cbB1c703";
const bsctokenEAddr = "0x06AB784a0079FA6926030156b8E817288250A8ba";

// Ethereum Testnet
const tokenA = new ethers.Contract(tokenAAddress,tokenAAbi,provider);
const tokenB = new ethers.Contract(tokenBAddress,tokenAAbi,provider);
// const tokenG = new ethers.Contract(tokenGAddress,tokenAAbi,provider);
// const tokenZ = new ethers.Contract(tokenZAddress,tokenAAbi,provider);
const TBUSD = new ethers.Contract(TBUSDAddress,tokenAAbi,provider);
const TUSDT = new ethers.Contract(TUSDTAddress,tokenAAbi,provider);
const TUSDC = new ethers.Contract(TUSDCAddress,tokenAAbi,provider);
const WETH = new ethers.Contract(WETHAddress,WETHabi,provider);

// BSC Testnet
const bsctokenB = new ethers.Contract(bsctokenBAddr,bscTokenBabi,provider);
const bsctokenC = new ethers.Contract(bsctokenCAddr,bscTokenBabi,provider);
const bsctokenD = new ethers.Contract(bsctokenDAddr,bscTokenBabi,provider);
const bsctokenE = new ethers.Contract(bsctokenEAddr,bscTokenBabi,provider);

const TOKEN_1530000_AMOUNT = ethers.utils.parseEther("1530000");
const TOKEN_1485000_AMOUNT = ethers.utils.parseEther("1485000");
const TOKEN_1980000_AMOUNT = ethers.utils.parseEther("1980000");
const TOKEN_2040000_AMOUNT = ethers.utils.parseEther("2040000");
const TOKEN_1020000_AMOUNT = ethers.utils.parseEther("1020000");
const TOKEN_990000_AMOUNT = ethers.utils.parseEther("990000");
const TOKEN_970000_AMOUNT = ethers.utils.parseEther("970000");
const TOKEN_2500000_AMOUNT = ethers.utils.parseEther("2500000");
const TOKEN_1000000_AMOUNT = ethers.utils.parseEther("1000000");
const TOKEN_1500000_AMOUNT = ethers.utils.parseEther("1500000");
const TOKEN_2000000_AMOUNT = ethers.utils.parseEther("2000000");
const TOKEN_3000000_AMOUNT = ethers.utils.parseEther("3000000");
const TOKEN_4000000_AMOUNT = ethers.utils.parseEther("4000000");

const TOKEN_980000_AMOUNT = ethers.utils.parseEther("980000");
const TOKEN_1010000_AMOUNT = ethers.utils.parseEther("1010000");
const TOKEN_1_AMOUNT = ethers.utils.parseEther("1");
const TOKEN_800000000_AMOUNT = ethers.utils.parseEther("800000000");
const TOKEN_600000000_AMOUNT = ethers.utils.parseEther("600000000");
const TOKEN_1200000000_AMOUNT = ethers.utils.parseEther("1200000000");
const TOKEN_1188000000_AMOUNT = ethers.utils.parseEther("1188000000");
const TOKEN_1224000000_AMOUNT = ethers.utils.parseEther("1224000000");
const TOKEN_9000000000000_AMOUNT = ethers.utils.parseEther("9000000000000");
// const TOKEN_12_AMOUNT = ethers.utils.parseEther("12.5");
// const TOKEN_20_AMOUNT = ethers.utils.parseEther("20");

let privateKey = '6eb265f611c61c20deb99d6b0d4025ef4199814687465820509f0dc36cd63f09';
let myAddress = '0x3765DFeDf234Bf24f9df82715503B864236ddb48';
// let AbhishekAddr = '0x0FcFE2E5804462437C3A32EDE4a14DAf35E0cD00';    

// Create a wallet instance
let wallet = new ethers.Wallet(privateKey, provider);

async function main(){

// await tokenA.connect(wallet).mint(myAddress, TOKEN_9000000000000_AMOUNT);
// await tokenB.connect(wallet).mint(myAddress, TOKEN_9000000000000_AMOUNT);
// await TBUSD.connect(wallet).mint(myAddress, TOKEN_9000000000000_AMOUNT);
// await TUSDT.connect(wallet).mint(myAddress, TOKEN_9000000000000_AMOUNT);
// await TUSDC.connect(wallet).mint(myAddress, TOKEN_9000000000000_AMOUNT);
// // // await tokenG.connect(wallet).mint(myAddress, TOKEN_90000000_AMOUNT);
// // // await tokenG.connect(wallet).mint(AbhishekAddr, TOKEN_90000000_AMOUNT);
// // // await tokenZ.connect(wallet).mint(myAddress, TOKEN_90000000_AMOUNT);

// console.log("Tokens Minted");

await tokenA.connect(wallet).approve(tuniswapContract.address, TOKEN_4000000_AMOUNT);
await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_3000000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenBAddress, TOKEN_4000000_AMOUNT,TOKEN_3000000_AMOUNT,1,1,wallet.address,1964541741);
console.log("Liquidity Added 1");

await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_1500000_AMOUNT);
// console.log("Approved");
await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,TOKEN_1000000_AMOUNT,TOKEN_1500000_AMOUNT,1,1,wallet.address,1964541741);
// await tuniswapContract.connect(wallet).swapExactTokensForTokens(1000000000000, 1, [tokenAAddress, TBUSDAddress], wallet.address, 1964541741);
console.log("Swap1 Done");

await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_1530000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,TOKEN_1000000_AMOUNT,TOKEN_1530000_AMOUNT,1,1,wallet.address,1964541741);
// await tuniswapContract.connect(wallet).swapExactTokensForTokens(1000, 1, [tokenAAddress, TUSDTAddress], wallet.address, 1964541741);
console.log("Swap2 Done");

await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_1485000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,TOKEN_1000000_AMOUNT,TOKEN_1485000_AMOUNT,1,1,wallet.address,1964541741);
// await tuniswapContract.connect(wallet).swapExactTokensForTokens(7000, 1, [tokenAAddress, TUSDCAddress], wallet.address, 1964541741);
console.log("Swap3 Done");

await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_1980000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,TOKEN_1000000_AMOUNT,TOKEN_1980000_AMOUNT,1,1,wallet.address,1964541741);
console.log("5 Done");

await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_2040000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,TOKEN_1000000_AMOUNT,TOKEN_2040000_AMOUNT,1,1,wallet.address,1964541741);
console.log("6 Done");

await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_2000000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(tokenBAddress,TBUSDAddress,TOKEN_1000000_AMOUNT,TOKEN_2000000_AMOUNT,1,1,wallet.address,1964541741);
console.log("7 Done");

await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_990000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,TOKEN_1000000_AMOUNT,TOKEN_990000_AMOUNT,1,1,wallet.address,1964541741);
console.log("8 Done");

await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_970000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(TUSDTAddress,TUSDCAddress,TOKEN_1000000_AMOUNT,TOKEN_970000_AMOUNT,1,1,wallet.address,1964541741);
console.log("9 Done");

await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_1020000_AMOUNT);
await tuniswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDTAddress,TOKEN_1000000_AMOUNT,TOKEN_1020000_AMOUNT,1,1,wallet.address,1964541741);
console.log("10 Done");

// console.log("Adding with WETH");

// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_800000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(tokenAAddress,TOKEN_800000000_AMOUNT,1,1,wallet.address,1964541741,{value:TOKEN_1_AMOUNT}); 

// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_600000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(tokenBAddress,TOKEN_600000000_AMOUNT,1,1,wallet.address,1964541741,{value:TOKEN_1_AMOUNT}); 
// console.log("2 Done");

// await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_1200000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(TBUSDAddress,TOKEN_1200000000_AMOUNT,1,1,wallet.address,1964541741,{value:TOKEN_1_AMOUNT});
// console.log("3 Done");

// await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_1188000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(TUSDCAddress,TOKEN_1188000000_AMOUNT,1,1,wallet.address,1964541741,{value:TOKEN_1_AMOUNT});
// console.log("4 Done");

// await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_1224000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(TUSDTAddress,TOKEN_1224000000_AMOUNT,1,1,wallet.address,1964541741,{value:TOKEN_1_AMOUNT});
// console.log("5 Done");

// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tokenZ.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenZAddress,TOKEN_1000000_AMOUNT,TOKEN_1000000_AMOUNT,1,1,wallet.address,1964541741);
// console.log("8 Done");

// await tokenG.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenGAddress,TBUSDAddress,TOKEN_1000000_AMOUNT,TOKEN_1000000_AMOUNT,1,1,wallet.address,1964541741);
// console.log("9 Done");

// await tokenG.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenGAddress,tokenAAddress,TOKEN_1000000_AMOUNT,TOKEN_1000000_AMOUNT,1,1,wallet.address,1964541741);
// console.log("10 Done");

// await tokenG.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenGAddress,TUSDCAddress,TOKEN_1000000_AMOUNT,TOKEN_1000000_AMOUNT,1,1,wallet.address,1964541741);
// console.log("11 Done");

// await tokenG.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenGAddress,tokenBAddress,TOKEN_1000000_AMOUNT,TOKEN_1000000_AMOUNT,1,1,wallet.address,1964541741);
// console.log("12 Done");

// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_1000000_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidityETH(tokenBAddress,1,1,1,wallet.address,1964541741,{value:100000000});
// console.log("13 Done");
// console.log("TokenB Address: ", tokenBAddress);
// console.log("WETH Address: ", WETHAddress);
// console.log("Router Address: ", tuniswapContract.address);



console.log("Tuniswap");

// TAPESWAP

// await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("1 Done");

// await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TUSDT.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("2 Done");

// await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("3 Done");

// await tokenB.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("4 Done");

// await tokenB.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TUSDT.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("5 Done");

// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("6 Done");

// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// await tokenZ.connect(wallet).approve(tapeswapContract.address,TOKEN_700_AMOUNT);
// console.log("Approved!");
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenZAddress,TOKEN_700_AMOUNT,TOKEN_700_AMOUNT,1,1,wallet.address,1964541741);
// console.log("7 Done");


// console.log("TAPESWAP");

//TBISWAP
// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,1003000,903000400,1,1,wallet.address,1964541741);
// console.log("1");
// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,120000000,100006570000,1,1,wallet.address,1964541741);
// console.log("2");

// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,900030000,100405600000,1,1,wallet.address,1964541741);
// console.log("3");

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,9000000200,10000000,1,1,wallet.address,1964541741);
// console.log("4");

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,30000200,100054000,1,1,wallet.address,1964541741);
// console.log("5");

// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,44000200,70530000,1,1,wallet.address,1964541741);
// console.log("TBISWAP");

// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(TUSDCAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(TUSDCAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// console.log("Working on BSC Testnet");





}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
