export default function ProjectsOutput() {
  const projects = [
    {
      title: 'DeFi Token Swapping App',
      description:
        'Advanced decentralized token swapping application with automated market maker functionality and real-time price feeds.',
      technologies: ['TypeScript', 'React', 'Ethereum', 'Web3.js'],
      links: {
        demo: 'https://github.com/sahilansari189/defi-token-swapping-app',
        github: 'https://github.com/sahilansari189/defi-token-swapping-app'
      }
    },
    {
      title: 'Cross-Chain Bridge',
      description:
        'Secure cross-chain bridge implementation enabling seamless asset transfers between different blockchain networks.',
      technologies: ['TypeScript', 'Solidity', 'Ethereum', 'Polygon'],
      links: {
        demo: 'https://github.com/sahilansari189/cross-chain-bridge',
        github: 'https://github.com/sahilansari189/cross-chain-bridge'
      }
    },
    {
      title: 'DeFi Yield Aggregator',
      description:
        'Yield farming aggregator that optimizes returns by automatically switching between different DeFi protocols.',
      technologies: ['JavaScript', 'Node.js', 'DeFi Protocols', 'Smart Contracts'],
      links: {
        demo: 'https://github.com/sahilansari189/defi-yield-aggregator',
        github: 'https://github.com/sahilansari189/defi-yield-aggregator'
      }
    },
    {
      title: 'NFT Marketplace',
      description:
        'Full-featured NFT marketplace with minting, trading, and auction capabilities built on Ethereum.',
      technologies: ['TypeScript', 'React', 'Ethereum', 'IPFS'],
      links: {
        demo: 'https://github.com/sahilansari189/nft-marketplace',
        github: 'https://github.com/sahilansari189/nft-marketplace'
      }
    },
    {
      title: 'Medishield',
      description:
        'Healthcare data management system with blockchain-based security and privacy features.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Blockchain'],
      links: {
        demo: 'https://github.com/sahilansari189/Medishield',
        github: 'https://github.com/sahilansari189/Medishield'
      }
    },
    {
      title: 'Cerebro AI Assistant',
      description:
        'Advanced AI-powered assistant with natural language processing and machine learning capabilities.',
      technologies: ['JavaScript', 'Python', 'TensorFlow', 'NLP'],
      links: {
        demo: 'https://github.com/sahilansari189/Cerebro',
        github: 'https://github.com/sahilansari189/Cerebro'
      }
    }
  ]

  return (
    <div className="space-y-4 my-4">
      <div className="text-green-400 text-lg">Featured Projects</div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-green-600 p-4 rounded">
            <div className="text-green-300 font-semibold text-lg">{project.title}</div>
            <div className="text-sm text-green-500 mt-1">{project.technologies.join(', ')}</div>
            <div className="text-sm mt-2 text-green-400 leading-relaxed">
              {project.description}
            </div>
            <div className="text-xs text-green-500 mt-2">
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="mr-4 underline">
                Live Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
