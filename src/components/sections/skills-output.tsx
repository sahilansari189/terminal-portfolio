export default function SkillsOutput() {
  return (
    <div className="space-y-4 my-4">
      <div className="text-green-400 text-lg">Skills & Technologies</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <div className="text-green-300 mb-2 font-semibold">Blockchain Platforms</div>
          <div className="text-sm space-y-1 text-green-400">
            <div>• Ethereum</div>
            <div>• Polygon</div>
            <div>• Binance Smart Chain</div>
            <div>• Solana</div>
            <div>• Avalanche</div>
          </div>
        </div>

        <div>
          <div className="text-green-300 mb-2 font-semibold">Smart Contract Development</div>
          <div className="text-sm space-y-1 text-green-400">
            <div>• Solidity</div>
            <div>• Rust</div>
            <div>• Vyper</div>
            <div>• Hardhat</div>
            <div>• Truffle</div>
          </div>
        </div>

        <div>
          <div className="text-green-300 mb-2 font-semibold">Web3 Technologies</div>
          <div className="text-sm space-y-1 text-green-400">
            <div>• Web3.js</div>
            <div>• Ethers.js</div>
            <div>• IPFS</div>
            <div>• MetaMask</div>
            <div>• WalletConnect</div>
          </div>
        </div>

        <div>
          <div className="text-green-300 mb-2 font-semibold">Frontend Development</div>
          <div className="text-sm space-y-1 text-green-400">
            <div>• React</div>
            <div>• Next.js</div>
            <div>• TypeScript</div>
            <div>• Tailwind CSS</div>
            <div>• Node.js</div>
          </div>
        </div>

      </div>
    </div>
  );
}
