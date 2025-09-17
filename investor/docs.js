export function initDropdowns() {
  const wraps = document.querySelectorAll(".docsmenu");

  wraps.forEach(wrap => {
    const button = wrap.querySelector("button");
    const submenu = wrap.querySelector(".docssubmenu");

    if (!button || !submenu) return; // guard

    button.addEventListener("click", () => {
      // Toggle only this submenu
      submenu.classList.toggle("open");
    });
  });
}

export function attachButtonEvents() {
  const buttons = document.querySelectorAll('button[data-docs-url]');
  buttons.forEach(button => {
    const sectionName = button.getAttribute('data-docs-url');
    button.onclick = () => setDocsContent(sectionName);
  });
}



const config = {
  introduction: {
    header: {
      name: "Introduction",
      lastTimeUpdated: "23:49 29/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/welcome.svg"
    },
    container: `
        <div class="box">
          <div class="row">
            <h4>Welcome!</h4>
            <img  class="toggle-arrow" style="margin-left: auto;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
          </div>
          <div class="toggle-content">
          <p>Welcome to Qiara Protocol, a next-generation platform redefining Web 3.0 for everyone. Our goal is to modernize, simplify, and unify the Web 3.0 space. We do this by introducing Crosschain Messaging, which opens up new possibilities for the Web 3.0 ecosystem. For example, users can lend and borrow assets across multiple chains, swap tokens seamlessly, or even deploy a new memecoin on multiple chains at once in the future. Here is the full list of possibilities this technology will bring in the near future.</p>
          <div class="list">
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Unified Liquidity</h4>   
              </div>
              <p>Cross-chain messaging connects liquidity across different blockchains. This removes the problem of fragmented assets and allows smoother transfers, better access to funds, and more efficient use of capital.</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Crosschain Lending & Borrowing</h4>
              </div>
              <p>Users can lend or borrow assets across multiple chains without moving funds manually. This creates new ways to earn yields, manage risk, and access liquidity instantly across ecosystems.</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Crosschain Swapping</h4>
              </div>
              <p>Swap tokens directly from one chain to another in a secure and seamless way. No need for middle steps or centralized exchanges, making trades faster and cheaper.</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Multichain Token Schemes</h4>
              </div>
              <p>Tokens can exist and move across many blockchains at once. This improves flexibility for developers and gives users the freedom to use assets wherever they are needed.</p>
            </div>
          </div>
          
          
          <p>That’s not all, we are thinking big and we mean it. We are also planning to release multiple useful tools for developers, such as on-chain randomness, pre-written modules for games, public storage, and encrypted storage designed for enterprise use. Our goal is to create a platform that unifies not just liquidity, but the entire Web 3.0 space.  

            We aim to innovate, build, and support the community. That’s why we are introducing a new trading model: Non-Liquidative Perpetual Trading. We are tired of manipulations by big players in the Web 3.0 industry, which hurt many users and damage the ecosystem more than most people realize. Nowadays, the first impression many have of cryptocurrency is “scam.” We want to change that and help not only everyday users succeed but also attract more people to be interested in the Web 3.0 space itself.  
            
            Everyone should have a fair chance to win, not just the giants. We are changing the game for all participants. We are Qiara, a protocol built by the people, for the people.</p>
                    </div>
                              </div>
    `
  },
  readme: {
    header: {
      name: "Readme",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/readme.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Preliminary Notes</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>
        Please keep in mind that the Qiara Protocol is still in its early stages. You may come across typos, visual bugs, or other issues. If you encounter, notice, or hear about any of these, please report them to us — you will be rewarded.
      </p>
      <p>
        The documentation for Qiara products is also not yet complete. We will continue to expand and improve it, from explaining features in more detail to providing endpoints for developers.
      </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Law</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Please make sure to carefully read every sub-section in the Law section. If you have any questions, feel free to contact us.
        </p>
        <p>
          <strong>Disclaimer:</strong> By using the Qiara Protocol, you agree to and accept all terms outlined in the Law section. Qiara assumes no liability for any misuse, misinterpretation, or non-compliance with these terms.
        </p>
      </div>
    </div>
  `
  },
  brand_kit: {
    header: {
      name: "Brand Kit",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/icon.webp"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  bridge_messaging: {
    header: {
      name: "Bridge Messaging",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/crosschain.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>
        Cross-chain messaging is becoming a cornerstone of Web3, enabling blockchains to exchange data and assets in a secure and seamless way. Our current implementation begins as a closed system, but our long-term vision is to launch a fully public, modular, and decentralized interoperability protocol that anyone can view, use, and integrate whether for personal or commercial purposes.
      </p>
        <p style="margin-top: 0.5rem;">
        We are continuously improving the design, and we see significant opportunities to enhance scalability, efficiency, and security as the technology evolves. The following sections provide an overview of the current architecture.        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Settlement Layer: Supra</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p> For settlement, we have chosen Supra as the underlying layer. The reasoning is straightforward:        </p>
         <div class="list">
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Cost efficiency</h4>   
              </div>
              <p>Supra is one of the lowest-cost blockchains available as of Q4 2025.</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Native tooling </h4>
              </div>
              <p>Supra Network provides not only built-in automation but also public oracles that can be customized and accessed by anyone and thats not all...</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Network potential</h4>
              </div>
              <p>We see Supra as an emerging high-performance chain with strong growth prospects.</p>
            </div>
          </div>
      </div>

    <div class="box">
      <div class="row">
        <h4>Decentralization</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Decentralization is at the core of our design. A global messaging protocol must minimize the influence of any single party in order to be secure, censorship-resistant, and resilient against manipulation. By anchoring to a decentralized settlement layer, the system inherits those properties at its foundation.  <button data-docs-url="security">Learn how we achieved this.</button></p>
        <p></p>
      </div>

    <div class="box">
      <div class="row">
        <h4>Nodes</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
        In traditional decentralized systems, nodes primarily communicate directly with one another. Our approach is different: nodes interact with the Supra settlement layer, which itself is decentralized.        </p>
          <div class="list">
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Node Operations</h4>   
              </div>
              <p>Anyone can set up, run, contribute and be rewarded by running own public node, if they are able to meet the required specifications. <button data-docs-url="node_registration"> Interested in running your own node?</button></p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Functionality </h4>
              </div>
              <p>Nodes fetch cross-chain data, package it into standardized messages of bytes, and transmit these through the Supra settlement layer together with signature of the message aswell for futhermore security confirmations and prevent replay attacks.</p>
            </div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Scalability & Decentralization</h4>
              </div>
              <p>Anyone can add a node, increasing network resilience and message throughput.</p>
            </div>
          </div>
          </div>
            <div class="box">
      <div class="row">
        <h4>Cryptography and Flow</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Message integrity and authenticity are enforced through Ed25519 signatures, a widely adopted cryptographic standard known for speed and security.</p>
          <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p>Each cross-chain message is formatted into a standardized byte payload and signed by the sender’s wallet.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p>When submitted to the settlement layer, the message is accompanied by a hash of its signature.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p>Supra verifies the signature against the message, ensuring validity and preventing tampering or replay attacks.</p>
            </div>
          </div>
          </div>
      </div>
    </div>
  `
  },
  bridge_mining: {
    header: {
      name: "Bridge Mining",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/mining.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          This is more likely to be specified for users or enterprisers who are acitive contributing or want to contribute to the network of decentralized nodes and own their own node which helps secure the network.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Mining</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Bridge mining is neccesary similar to Liquidity Mining however it does work similar. Its basically Proof of Stake system, the only thing that is different is that the validator of each node gets rewarded either if he validates event across chains or if he finalizes the registration of event and writes it to the settlement layer. However thats not all, the validator also can get punished. You can view the current rewards & penalizations below.
        </p>
      </div>
    </div>
  `
  },
  security: {
    header: {
      name: "Security",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/anti_manipulation.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Decentralization</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Cryptography</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Proof Of Stake</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>N-validation Quarum System</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Publicity</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

  <div class="box">
      <div class="row">
        <h4>Audits</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>


  `
  },
  wallet_registration: {
    header: {
      name: "Wallet Registration",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/wallet_registration.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Supra Native</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. Use our  <button data-url="security">  Wallet Registration Page</button> or run the code below.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Accept the Wallet Registration Request by running the code below.</p>
            </div>
          </div>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Sui Native</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. Register on Supra Blockchain.</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Use our  <button data-url="security">  Wallet Registration Page</button> or run the code below.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">3. Accept the Wallet Registration Request by running the code below.</p>
            </div>
          </div>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Base Native</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. Register on Supra Blockchain.</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Use our  <button data-url="security">  Wallet Registration Page</button> or run the code below.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">3. Accept the Wallet Registration Request by running the code below.</p>
            </div>
          </div>
      </div>
    </div>
  `
  },
  node_registration: {
    header: {
      name: "Node Tutorial",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/node.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          This page is for future validators. If you have any problems, please contact us. Also please dont try to change the source code in malicous ways, there are tons of protective ways against manipulation or other attacks, if you do so, make sure it is complicit with our codex, otherwise you might lose your staked coins or even your wallets might get automatically blacklisted.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Requirements</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. Registered Wallets on desired chains.</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Having enough Aexis Coins staked on desired chains.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">3. Local Server or Third Party Web Hosting.</p>
            </div>
          </div>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Step By Step</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
        <p style="transform: translateY(-0.75rem); width:100%;">* Symbol before requirement means its not needed in order to work.</p>
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. <button data-url="wallet_registration">  Register Your Wallets</button> (on all the chains you want to validate).</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Stake your desired amount of Aexis Coins.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">*3. Download the node source code from  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>.  </p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">4. Start the node by running the code below  <button data-url="wallet_registration"> or use website hosting providers.</button> </p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">*5. Monitor your actions, rewards, penalizations... </p>
            </div>

          </div>
      </div>
    </div>
  `
  },
  CLI: {
    header: {
      name: "CLI Terminal",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/CLI.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          This page is for future validators. If you have any problems, please contact us. Also please dont try to change the source code in malicous ways, there are tons of protective ways against manipulation or other attacks, if you do so, make sure it is complicit with our codex, otherwise you might lose your staked coins or even your wallets might get automatically blacklisted.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Requirements</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. Registered Wallets on desired chains.</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Having enough Aexis Coins staked on desired chains.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">3. Local Server or Third Party Web Hosting.</p>
            </div>
          </div>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Step By Step</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <div class="list">
        <p style="transform: translateY(-0.75rem); width:100%;">* Symbol before requirement means its not needed in order to work.</p>
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">1. <button data-url="wallet_registration">  Register Your Wallets</button> (on all the chains you want to validate).</p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">2. Stake your desired amount of Aexis Coins.</p>
            </div>
          
            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">*3. Download the node source code from  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>.  </p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">4. Start the node by running the code below  <button data-url="wallet_registration"> or use website hosting providers.</button> </p>
            </div>

            <div class="row">
              <div class="dot"></div>
              <p style="width:100%;">*5. Monitor your actions, rewards, penalizations... </p>
            </div>

          </div>
      </div>
    </div>
  `
  },
  swaps: {
    header: {
      name: "Swaps",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/swap.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          We are about to create something unique that will not only revolutionaze the web 3.0 place, but also introduce whole new way to increase and modernize the Cex/Dex problem, with supra built-in native oracles we will scale CEX like but fully Decentralized onchain.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>The Problem</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>
        There are several problems in current CEX/DEX technologies. Our main focus is to reduce, or even completely eliminate, two to three of the most critical issues.
      </p>
      <p>
        The first problem is slippage. Slippage occurs when a user swaps token A for token B, and due to low liquidity, the swap price changes. The larger the swap, the higher the slippage can become, sometimes reaching extreme levels. We aim to reduce slippage by combining two features: the native oracles built on the Supra Blockchain and our Liquidity Unifying mechanism, which you can read more about below.
      </p>
      <p>
        The second problem is liquidity fragmentation across chains and pools. As more blockchains emerge in the Web3 space, this problem continues to grow. We plan to address it by introducing shared liquidity across tokens, which can significantly reduce fragmentation.
      </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Solution</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>
        These solution is powered by the Supra Native Stack, which includes tools such as built-in oracles and automation. Together, they open the door to new ways for users to profit. With lower slippage, users lose less and can even earn more through our unique fee module, which remains a secret for now. Our goal is to deliver a truly innovative breakthrough in the Web3 space—built by the people, for the people. Stay tuned.
      </p>
      </div>
    </div>    


  `
  },
  non_liquidative_perpetuals: {
    header: {
      name: "Perpetrual Trading",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/trade.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  time_based_perpetuals: {
    header: {
      name: "Perpetrual Trading",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/trade.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  smart_trading: {
    header: {
      name: "Smart Trading",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/smart_trade.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  crosschain_trade: {
    header: {
      name: "Crosschain Swaps",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/swap.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  crosschain: {
    header: {
      name: "Crosschain",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/chains.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  supra_native: {
    header: {
      name: "Supra Native",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/bank_native.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  market_aggregration: {
    header: {
      name: "Market Aggregration",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/aggregrator.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Flow</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>Security</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Supported Vault Providers</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  implement: {
    header: {
      name: "Implement",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/implement.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  onchain_randomness: {
    header: {
      name: "Onchain Randomness",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/randomness.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Coming Soon...</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          We plan to introduce on-chain randomness for developers, not only on the Supra Blockchain but also on other existing blockchains in the Web3 space, such as Base, Sui, and more.
        </p>
      </div>
    </div>
  
  `
  },
  automation: {
    header: {
      name: "Automation",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/automation.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Coming Soon...</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
         The utilization of Supra Native Automation is expected to launch on our protocol early next year. Cross-chain automation could then be introduced by mid-year. Stay tuned for more updates.
        </p>
      </div>
    </div>

  `
  },
  API: {
    header: {
      name: "Public API",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/api.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Coming Soon...</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, we do not expose or offer our public API endpoints. However, in the future we will provide a public API to help builders integrate our features into their protocols.
        </p>
      </div>
    </div>
  
  `
  },
  released: {
    header: {
      name: "Released",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/released.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  upcoming: {
    header: {
      name: "Upcoming",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/upcoming.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Q4 2025</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Here is a full list of upcoming new features or just improvements that are coming later in 2025.
        </p>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Onchain Randomness</h4>
            <p>approx. December</p>
          </div>
          <div class="toggle-content-a">
            <p>
            We are working on a new decentralized and public randomness model that will be fully onchain. This system will be transparent and visible for everyone, and anyone will be able to interact with it. Later, we plan to expand this feature to become omnichain, reaching across as many blockchains as possible. This will allow developers, no matter what programming language or blockchain they build on, to access truly randomized values. This will be made possible by using our crosschain messaging layer.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Testnet Crosschain Market</h4>
            <p>approx. December</p>
          </div>
          <div class="toggle-content-a">
            <p>
             We are preparing the first public test of our Crosschain Market technology stack. This is one of our proudest achievements so far. With it, we aim to unify liquidity across different blockchains, while also creating new and highly efficient ways to improve both capital efficiency and passive income. We believe this will change the way people use decentralized markets.
            </p>
          </div>
        </div>
  
        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Official Launch of Supra Native Market </h4>
            <p>approx. December</p>
          </div>
          <div class="toggle-content-a">
            <p>
              At the end of the year, we will launch the Supra Native Lending and Borrowing market, powered by our SupraNova technology. This will bring our ecosystem to the next stage and provide new opportunities for users to lend, borrow, and grow their capital.
            </p>
          </div>
        </div>

        

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Qiara Token Presale</h4>
            <p>approx. November</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We will begin the official presale of our Qiara token. Investors, participants, and community members will be able to purchase the token not only on the Supra chain but also on the Base chain and Sui chain. This event will be an important milestone in growing our ecosystem and spreading adoption of Qiara.
            </p>
          </div>
        </div>
        
        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Degen Perpetrual Options Trading</h4>
            <p>approx. November</p>
          </div>
          <div class="toggle-content-a">
            <p>
              For our more advanced and risk-taking traders, we will introduce perpetual options trading with time expiry. This will serve as the foundation for our next upgrade, which is non-liquidative perpetual trading. The main goal of this feature is to reduce unfair market manipulation, which often causes regular traders to be liquidated by sudden market moves. With this, trading will become a more balanced and fair experience.
            </p>
          </div>
        </div>
        
      </div>
<div class="box">
<div class="row">
  <h4>Q1 2026</h4>
  <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
       src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
</div>
<div class="toggle-content">
  <p>
  Here is a full list of upcoming new features or just improvements that are very eary in the year.
  </p>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Official Launch of Qiara Token</h4>
            <p>approx. January</p>
          </div>
          <div class="toggle-content-a">
            <p>
             At the start of the new year, the Qiara token will officially go live with liquidity pools being deployed. This means the token will become fully tradeable, and anyone will be able to buy Qiara from supported chains and platforms.
            </p>
          </div>
        </div>


        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Non Liquidative Perpetrual Trading</h4>
            <p>approx. February</p>
          </div>
          <div class="toggle-content-a">
            <p>
              One of the most awaited features is non-liquidative perpetual trading, which will run on our trading engine. With this system, traders will no longer suffer from forced liquidations due to sudden market swings or manipulation by exchanges. This represents a major step toward fair and transparent trading.
            </p>
          </div>
        </div>
      
        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Automation</h4>
            <p>approx. February</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We will enable automation features powered by Supra’s native automation system. Users will be able to set up automated actions such as dollar-cost averaging, seamless trading, and even safety tools like automatically adding collateral to avoid liquidations. This will make the entire trading and investing experience much more convenient.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Public Governance</h4>
            <p>approx. February</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We will introduce governance voting, where the community can participate in decision-making. Anyone holding enough Qiara tokens will be able to vote on proposals or even create their own. We are still researching and finalizing the best structure for this, but the goal is to give true power to the community.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Testnet Qiara Pass</h4>
            <p>approx. March</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We will launch the first version of our Qiara Pass on testnet. This pass will reward our loyal community members and long-term supporters with special benefits. It will be a key step in building stronger connections with those who believe in our project.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Publicitly Visible Protocol Revenue</h4>
            <p>approx. March</p>
          </div>
          <div class="toggle-content-a">
            <p>
             To close the first quarter of the year, we will introduce a Protocol Revenue Dashboard. This will show every detail of our revenue streams and ensure full transparency for our community. We want users to clearly see how the protocol generates income.
            </p>
          </div>
        </div>

</div>
</div>

<div class="box">
<div class="row">
  <h4>TBA</h4>
  <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
       src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
</div>
<div class="toggle-content">
  <p>
  Here is a preliminary list of potential upcoming changes and new features.
  </p>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Crosschain Market Liquidity Aggregrator</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We are planning to collaborate with other well-known projects in the DeFi space, especially within lending and borrowing. By working together, we will be able to aggregate liquidity in our crosschain vaults, allowing anyone to earn passive income while maximizing capital efficiency. This will open up powerful new ways for users to grow their funds.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Crosschain Swapping</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              Crosschain swapping will let users swap assets across different networks. For example, someone could swap Ethereum on the Base network for Injective on the Injective network. This feature will further unify liquidity across blockchains and make crosschain trading seamless.
            </p>
          </div>
        </div>


        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Crosschain Token Launchpad</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We are also exploring a crosschain token launchpad. This would allow projects to launch their tokens across multiple blockchains at once, giving them greater exposure and access to a much wider audience.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4>Decentralized Cheap Secure Storage</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
             Another feature in development is a decentralized and affordable storage system. We want to offer two versions: a private and encrypted option, and a fully public option. This storage solution could also provide new use cases for the Qiara token.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> F2P - Play to Earn Game</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
            We have long been interested in creating our own game, and in the future, we may launch a free-to-play and play-to-earn game within our ecosystem. This would combine fun with financial rewards for players.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Crosschain Automation </h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              By using our crosschain messaging system, we could expand automation to other blockchains. This would allow users to set up powerful automated tasks beyond just the Supra chain.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Public Usefull Modules for Devs</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
             We plan to create and release custom modules and smart contracts that developers can use to speed up their building process. These tools will make development in Web3 faster and easier.
            </p>
          </div>
        </div>

      <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Fully Optimized Passive Earning</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We are researching ways to introduce advanced earning vaults that combine liquidity provision, market aggregation, and swap fee revenue. These vaults would be designed to deliver high double-digit APY rewards in a sustainable and permissioned way.
            </p>
          </div>
        </div>


        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Own Decentralized & Uncensored AI</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
            We also have the idea of building a decentralized and uncensored AI system for Web3. This concept is still very experimental, and we are exploring whether it is technically possible. If successful, it could bring unique and valuable new utilities for AI users in the decentralized space.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Smart Trading</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              We plan to develop custom trading algorithms combined with automation. These smart trading features could introduce new strategies and automated tools for traders, helping them take advantage of market opportunities more efficiently.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Institutional DeFi Options</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
            We are considering crosschain tokenization options for real-world assets. This would expand the RWA market in Web3 and open the door to institutional-level decentralized finance products.
            </p>
          </div>
        </div>

        <div class="feature">
          <div class="row">
            <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            <h4> Simple Earn</h4>
            <p>TBA</p>
          </div>
          <div class="toggle-content-a">
            <p>
              Finally, we want to make earning in Web3 easier for beginners. With Simple Earn, users could enter the space with just a few clicks and immediately start earning between 7–12% yearly with very low risk. This feature would make decentralized finance much more accessible to everyone.
            </p>
          </div>
        </div>
  
</div>
</div>
`
  },
  changes: {
    header: {
      name: "Changes",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/hotfix.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>13/9/2025</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Cleaned up all the Supra Modules code. Now its way more visually pleasing to read and going through lines of code, especially when using VScode or any extension,
          that allows using #pragma blocks.
        </p>
      </div>
    </div>

  `
  },
  anotation: {
    header: {
      name: "Anotation",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/anotation.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that our platform uses are either from   <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">Google Fonts</a> or from <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer">SVG Repo </a>
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Data Visualisation</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
         <p>We are using <a href="https://apexcharts.com/" target="_blank" rel="noopener noreferrer">Apex Charts </a> which helps us to display Data as simple and visualy pleasing as possible.</p>
      </div>
    </div>
  `
  },
  codex: {
    header: {
      name: "Codex",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/codex.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4></h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>All validators are required to read this Codex thoroughly and carefully. This Codex helps protect both users and validators, please follow these simple rules.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">1. Don’t modify core code unless you fully understand the change and its impact.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">2. Personal/optimization edits are allowed, but they must not introduce harmful behavior or break expected functionality.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">3. Test first, always: run changes in a safe environment (local, sandbox, or testnet) and verify results before any production/mainnet use.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">4. Never deploy untested changes to mainnet, use testnet please.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">5. Document your modifications (what changed, why, and how to revert) before sharing or deploying.</p>
        <div class="row" style="gap: 0.25rem; margin-top: 0.25rem; aling-items: center;">
          <div class="dot"></div>
          <p style="font-size: 0.9rem;  margin-top: 0.25rem;">Important Notice</p>
        </div>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">Faulty, non-compliant, or suspicious code may be flagged as malicious.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">Validators running such code may be slashed, risking partial or total loss of staked funds, and may be blacklisted by the network.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">You are responsible for verifying builds, dependencies, and configuration before running this software.</p>
        `
  },
  terms_of_service: {
    header: {
      name: "Terms Of Service",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/terms_of_service.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Please read these Terms of Service ("Terms", "Agreement") carefully before accessing or using Qiara Protocol (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
        </p>
      </div>
    </div>
  
        <div class="box">
      <div class="row">
        <h4>1. Eligibility</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
        </p>
      </div>
    </div>
    
    <div class="box">
      <div class="row">
        <h4>2. Restricted Jurisdictions</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
Due to regulatory restrictions, the Service is not available to individuals or entities located in, incorporated in, or residents of jurisdictions where the use of cryptocurrencies, digital assets, or related services are prohibited or restricted under applicable law.
This includes, but is not limited to, countries such as [e.g., China, Bangladesh, Algeria, Egypt, Morocco, Nepal, Qatar, Tunisia, and any other jurisdictions that fully ban cryptocurrencies].
By using the Service, you confirm that you are not accessing it from such a restricted jurisdiction and that you comply with all applicable local laws.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>3. No Guarantee of Stability or Functionality</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
The Service is provided on an "as is" and "as available" basis. We do not guarantee the stability, security, uptime, performance, or continuous functionality of the Service. We make no warranties or representations regarding the accuracy, reliability, or availability of the Service or its associated features. Use of the Service is entirely at your own risk.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>4. Risk Disclosure</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
Cryptocurrency and digital assets involve a high degree of risk, including but not limited to market volatility, regulatory uncertainty, technical failures, and cybersecurity threats. You acknowledge and accept these risks when using the Service. We are not responsible for any financial losses, damages, or liabilities arising from your use of the Service.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>5. Prohibited Use</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
You agree not to use the Service for any unlawful purposes, including but not limited to fraud, money laundering, terrorist financing, or any activity in violation of applicable sanctions or laws.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>6. Limitation of Liability</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
To the maximum extent permitted by law, Qiara Protocol, its affiliates, and service providers shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>7. Modifications</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
We reserve the right to update or modify these Terms and Privacy Policy at any time. Continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>8. Governing Law</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction/State/Country], without regard to its conflict of law principles.
        </p>
      </div>
    </div>

            <div class="box">
      <div class="row">
        <h4>9. Governance and Emergency Authority</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
While Qiara Protocol operates as a decentralized platform, you acknowledge and agree that governance is conducted through a decentralized autonomous organization (DAO). The DAO reserves the right, by way of a governance vote, to take emergency actions where necessary to protect the integrity of the network. Such actions may include, but are not limited to, banning or restricting access of validators, and initiating the withdrawal of balances from validator staking vaults if a validator is determined to be acting maliciously, negligently, or in a manner that could harm the network or its participants.
        </p>
      </div>
    </div>


  `
  },
  tokenomics: {
    header: {
      name: "Tokenomics",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/tokenomics.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          This is a litepaper for a tokenomics of our token named Qiara, which is a multiple crosschain token system. We are implementing sort of unique and very long term tokenomics model, which should increase the overall value of each single Aexis Token, specially due to our interesting Arcana Program which you can learn more about here.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Innitial Supply Distribution</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Here is a displayed graph of innitial supply distribution. The total amount of existing token on launch is going to be 1,000,000.
        </p>
          <div id="init-tokenomics-chart"></div>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Inflation</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
<p>Our token has built-in inflation, which consists of two main components. One component involves withdrawal proposals, where a specific amount of newly minted tokens can be requested from the vault for purposes such as advertising, exchange listing fees, or other approved uses.</p>        </p>

         <div class="list">
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Public Locked Vault</h4>   
              </div>
<p>Anyone can call a "claim" function that mints new tokens. The minted amount is determined by a DAO-governed percentage, which can be adjusted if a governance proposal is passed. Minted tokens are automatically locked in the token’s built-in vault. The caller of this function receives 0.01% of the unminted supply as a reward. Later, any permissioned validator can create a proposal requesting permission to withdraw a specific amount from the vault for purposes such as transferring tokens to staking contracts, covering exchange listing fees, or other approved uses. The current formula is (20) - ((year*1+(year*0.1)) + (year/5)).</p>            </div>
           
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Wallet List</h4>
              </div>
              <p>This is the second component of inflation: a list of wallets that can receive a small percentage of newly minted tokens for various purposes, such as KOLs, VCs, and future functionalities like liquidity vaults, payments, and more. You can view the full list of these wallets here.</p>          
             </div>
      </div>
      
    </div>

      <div class="box">
      <div class="row">
        <h4>Scarcity</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
<p>We also made sure to implement multiple scarcity functions to futhermore increase the value of each Aexis Token. You can view all the scarcity messuaremenets below.</p>

         <div class="list">
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Burn Fee</h4>   
              </div>
<p>We are introducing built-in annual increasing burn fee model, which will help the scarcity of our token. Currently the burn fee formula is: (5) + ((year*0.1) + (year/5))</div>
          
            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Protocol Buy Backs</h4>
              </div>
              <p>This is the second component of inflation: a list of wallets that can receive a small percentage of newly minted tokens for various purposes, such as KOLs, VCs, and future functionalities like liquidity vaults, payments, and more. You can view the full list of these wallets here.</p>          
             </div>

            <div class="">
              <div class="row">
                <div class="dot"></div>
                <h4>Inflation Penalty</h4>
              </div>
              <p>This is the second component of inflation: a list of wallets that can receive a small percentage of newly minted tokens for various purposes, such as KOLs, VCs, and future functionalities like liquidity vaults, payments, and more. You can view the full list of these wallets here.</p>          
             </div>
      </div>
      <p>Here is a visual comparison of a static constat Inflation of a 20% a year with our increasing burn fee & inflation penalty a year. </p>
      <div id="init-scarcity-chart"></div>
    </div>
  `
  },
  utility: {
    header: {
      name: "Utility",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/utility.svg"
    },
    container: `
  <div class="box">
  <div class="row">
    <h4></h4>
    <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
         src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
  </div>
  <div class="toggle-content">
    <div class="list">

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Providing Value</h4>   
        </div>
        <p>The first utility of the Qiara Token is to create value not only for everyday users but also for investors, KOLs, and other stakeholders.</p>
      </div>
          
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Validator Rewards</h4>
        </div>
        <p>Every validator can earn new Qiara Tokens either by validating already registered events or by submitting finalized validated events to the settlement layer.</p>          
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Staking Rewards</h4>
        </div>
        <p>To further strengthen the stability of Qiara Tokens, staking vaults are available. Currently, there are two options: one with a lock-time period and one without. You can stake your tokens to earn a percentage reward, and by choosing the locked option, you can receive an additional bonus percentage as a reward for supporting the long-term stability of Qiara Tokens.</p>          
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Governance</h4>
        </div>
        <p>Any user who owns at least one Qiara Token has the right to vote on active proposals and contribute to the governance process.</p>          
      </div>

    </div>
  </div>
</div>

  `
  },
  presale: {
    header: {
      name: "Presale ",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/presale.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Supra</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Supra Network.</p>
          <div class="list">

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Dexlyn</h4>   
        </div>
        <p>Dexlyn is the first DEX built on Supra Network, we have deployed a Liquidity Pool of Qiara-Sup here, meaning you can swap your Supra Tokens to receive Qiara Tokens and via verse.</p>
      </div>      

    </div>
  </div>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Sui</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Sui Network.</p>
          <div class="list">

      
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Cetus</h4>   
        </div>
        <p>Cetus is one of the most popular and well-known DEX protocol built on Sui network, so we deployed Liquidity Pool of Qiara-Sui here, meaning you can swap your Sui Token to receive Qiara Token and via verse.</p>
      </div> 

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Bluefin</h4>   
        </div>
        <p>Bluefin is the upcoming rising DEX platform that is built on Sui Network, and in co-operation with them with using their Lending & Borrowing market for our Capital Efficiency, we ofcourse also deployed a Liquidity Pool of Qiara-Sui here. You can swap your Sui for Qiara at any time.</p>
      </div> 

    </div>
  </div>
      </div>
    </div>

     <div class="box">
      <div class="row">
        <h4>Base</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Base Network.</p>
          <div class="list">

         
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Uniswap</h4>   
        </div>
        <p>Uniswap is the premiere Dex that supports all kinds of EVM compatabile blockchains. We have deployed Qiara-ETH Liquidity Pool there. You can feel free to swap your Ethereum for Qiara and via versa.</p>
      </div> 

    </div>
  <p>We plan to introduce way more Liquidity Pools in the future and also create unique pairs and also implement a unique [redacted] system where everyone could benefit from, even you.</p>
  <p>However, if you have any suggestions for DEX platforms or even Liquidity Pools, let us know. </p>
  </div>
      </div>
    </div>
  `
  },
  places_to_buy: {
    header: {
      name: "Places To Buy",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/places_to_buy.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Supra</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Supra Network.</p>
          <div class="list">

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Dexlyn</h4>   
        </div>
        <p>Dexlyn is the first DEX built on Supra Network, we have deployed a Liquidity Pool of Qiara-Sup here, meaning you can swap your Supra Tokens to receive Qiara Tokens and via verse.</p>
      </div>      

    </div>
  </div>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Sui</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Sui Network.</p>
          <div class="list">

      
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Cetus</h4>   
        </div>
        <p>Cetus is one of the most popular and well-known DEX protocol built on Sui network, so we deployed Liquidity Pool of Qiara-Sui here, meaning you can swap your Sui Token to receive Qiara Token and via verse.</p>
      </div> 

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Bluefin</h4>   
        </div>
        <p>Bluefin is the upcoming rising DEX platform that is built on Sui Network, and in co-operation with them with using their Lending & Borrowing market for our Capital Efficiency, we ofcourse also deployed a Liquidity Pool of Qiara-Sui here. You can swap your Sui for Qiara at any time.</p>
      </div> 

    </div>
  </div>
      </div>
    </div>

     <div class="box">
      <div class="row">
        <h4>Base</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Base Network.</p>
          <div class="list">

         
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Uniswap</h4>   
        </div>
        <p>Uniswap is the premiere Dex that supports all kinds of EVM compatabile blockchains. We have deployed Qiara-ETH Liquidity Pool there. You can feel free to swap your Ethereum for Qiara and via versa.</p>
      </div> 

    </div>
  <p>We plan to introduce way more Liquidity Pools in the future and also create unique pairs and also implement a unique [redacted] system where everyone could benefit from, even you.</p>
  <p>However, if you have any suggestions for DEX platforms or even Liquidity Pools, let us know. </p>
  </div>
      </div>
    </div>
  `
  },
  governance: {
    header: {
      name: "Governance",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/governance.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Supra</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Supra Network.</p>
          <div class="list">

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Dexlyn</h4>   
        </div>
        <p>Dexlyn is the first DEX built on Supra Network, we have deployed a Liquidity Pool of Qiara-Sup here, meaning you can swap your Supra Tokens to receive Qiara Tokens and via verse.</p>
      </div>      

    </div>
  </div>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Sui</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Sui Network.</p>
          <div class="list">

      
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Cetus</h4>   
        </div>
        <p>Cetus is one of the most popular and well-known DEX protocol built on Sui network, so we deployed Liquidity Pool of Qiara-Sui here, meaning you can swap your Sui Token to receive Qiara Token and via verse.</p>
      </div> 

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Bluefin</h4>   
        </div>
        <p>Bluefin is the upcoming rising DEX platform that is built on Sui Network, and in co-operation with them with using their Lending & Borrowing market for our Capital Efficiency, we ofcourse also deployed a Liquidity Pool of Qiara-Sui here. You can swap your Sui for Qiara at any time.</p>
      </div> 

    </div>
  </div>
      </div>
    </div>

     <div class="box">
      <div class="row">
        <h4>Base</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Below is a list of approved platforms that offer the opputurnity to buy Qiara Token on a Base Network.</p>
          <div class="list">

         
      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Qiara</h4>   
        </div>
        <p>You can buy Qiara Token directly from our website, simply go to Qiara Token Dashboard, and then proceed to go to Liquidity Pools.</p>
      </div>

      <div class="">
        <div class="row">
          <div class="dot"></div>
          <h4>Uniswap</h4>   
        </div>
        <p>Uniswap is the premiere Dex that supports all kinds of EVM compatabile blockchains. We have deployed Qiara-ETH Liquidity Pool there. You can feel free to swap your Ethereum for Qiara and via versa.</p>
      </div> 

    </div>
  <p>We plan to introduce way more Liquidity Pools in the future and also create unique pairs and also implement a unique [redacted] system where everyone could benefit from, even you.</p>
  <p>However, if you have any suggestions for DEX platforms or even Liquidity Pools, let us know. </p>
  </div>
      </div>
    </div>
  `
  },
  overview: {
    header: {
      name: "Overview",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/overview.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  revenue: {
    header: {
      name: "Revenue",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/revenue.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  reserves: {
    header: {
      name: "Reserves",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/reserve.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that we use are publicly uploaded on 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Anyone can look them up, download them, and freely use them in any conditions.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Source Code</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          For now, the source code is unavailable for security reasons, but we do plan in the near future 
          to also make our source code public on GitHub, so that anyone can freely view and fork it.
        </p>
      </div>
    </div>
  `
  },
  get_paid: {
    header: {
      name: "Get Paid",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/dolar.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Bug Bounty</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>We take security seriously and are investing heavily in it. Currently, we operate a Bug Bounty Reward program, with rewards based on the severity of the security issue. You can view the table of reward tiers below.</p>
                  <div class="table column">
              <div class="table-head row">
                <h5>Tier</h5>
                <h5>Security Risk</h5>
                <h5>Desc</h5>
                <h5>Potencial Payment</h5>

              </div>
              <div class="row">
                <h5>I</h5>
                <h5>Enourmous</h5>
                <p>Any bug/exploit that could lead to a all users losing funds.</p>
                <h5>5,000 - 10,000 Qiara Tokens</h5>
            </div>
            <div class="row">
              <h5>II</h5>
              <h5>Extreme</h5>
              <p>Any bug/exploit that could lead to a user losing funds.</p>
              <h5>2,500 - 5,000 Qiara Tokens</h5>
          </div>
          <div class="row">
            <h5>III</h5>
            <h5>Mild</h5>
            <p>Any minor bug that isnt as critical as the previous ones.</p>
            <h5>1,000 - 2,500 Qiara Tokens</h5>
        </div>
        <div class="row">
          <h5>IV</h5>
          <h5>Unimpactfull</h5>
          <p>Any typo, wrong translation or similar issue.</p>
          <h5>1 - 100 Qiara Tokens</h5>
      </div>
            </div>
        </div>
      
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Engagement</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          You can link your Twitter/X account with your Discord account and then proceed to the #Engagement channel, where you will find more information about this program. As of Q4 2025, you earn 10 points for each like on any post from our Twitter/X account.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Kol</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
        If you are an influencer interested in working with us behind the scenes, you can reach out to us for further agreements. Becoming a KOL benefits both parties: you get updates on our ongoing projects, and in the future, you may be eligible for additional bonuses.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Watch Ad</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>This feature is designed for "free-to-play" users. Anyone can watch an ad once every 8 hours to earn a small amount of XP towards the Qiara Pass, which can also unlock free Qiara Tokens.
        </p>
      </div>
    </div>

    
    <div class="box">
      <div class="row">
        <h4>Complete Missions</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Missions are the next level beyond watching ads. They can involve activities such as liking a post from a partner Twitter/X account or completing other tasks. Completing missions helps you earn additional rewards.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Suggest Idea</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Are you an innovative thinker? Do you see ways we could improve our existing technology, or is there something missing in the Web3.0 space? Let us know! We welcome your ideas and are glad to hear what’s on your mind.
        </p>
        <p>Tip: The more detailed your idea, the better. Include explanations, potential implementation strategies, references if it already exists, and any other relevant information.</p>
      </div>
    </div>


  `
  },
  roadmap: {
    header: {
      name: "Roadmap",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/launchpad.svg"
    },
    container: `
          <div class="box">
            <div class="row">
              <h4>Q4 2025</h4>
              <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
                   src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
            </div>
            <div class="toggle-content">
              <p>
                Here is a full list of upcoming new features or just improvements that are coming later in 2025.
              </p>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Onchain Randomness</h4>
                  <p>approx. December</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                  We are working on a new decentralized and public randomness model that will be fully onchain. This system will be transparent and visible for everyone, and anyone will be able to interact with it. Later, we plan to expand this feature to become omnichain, reaching across as many blockchains as possible. This will allow developers, no matter what programming language or blockchain they build on, to access truly randomized values. This will be made possible by using our crosschain messaging layer.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Testnet Crosschain Market</h4>
                  <p>approx. December</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                   We are preparing the first public test of our Crosschain Market technology stack. This is one of our proudest achievements so far. With it, we aim to unify liquidity across different blockchains, while also creating new and highly efficient ways to improve both capital efficiency and passive income. We believe this will change the way people use decentralized markets.
                  </p>
                </div>
              </div>
        
              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Official Launch of Supra Native Market </h4>
                  <p>approx. December</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    At the end of the year, we will launch the Supra Native Lending and Borrowing market, powered by our SupraNova technology. This will bring our ecosystem to the next stage and provide new opportunities for users to lend, borrow, and grow their capital.
                  </p>
                </div>
              </div>

              

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Qiara Token Presale</h4>
                  <p>approx. November</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We will begin the official presale of our Qiara token. Investors, participants, and community members will be able to purchase the token not only on the Supra chain but also on the Base chain and Sui chain. This event will be an important milestone in growing our ecosystem and spreading adoption of Qiara.
                  </p>
                </div>
              </div>
              
              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Degen Perpetrual Options Trading</h4>
                  <p>approx. November</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    For our more advanced and risk-taking traders, we will introduce perpetual options trading with time expiry. This will serve as the foundation for our next upgrade, which is non-liquidative perpetual trading. The main goal of this feature is to reduce unfair market manipulation, which often causes regular traders to be liquidated by sudden market moves. With this, trading will become a more balanced and fair experience.
                  </p>
                </div>
              </div>
              
            </div>
    <div class="box">
      <div class="row">
        <h4>Q1 2026</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
        Here is a full list of upcoming new features or just improvements that are very eary in the year.
        </p>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Official Launch of Qiara Token</h4>
                  <p>approx. January</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                   At the start of the new year, the Qiara token will officially go live with liquidity pools being deployed. This means the token will become fully tradeable, and anyone will be able to buy Qiara from supported chains and platforms.
                  </p>
                </div>
              </div>


              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Non Liquidative Perpetrual Trading</h4>
                  <p>approx. February</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    One of the most awaited features is non-liquidative perpetual trading, which will run on our trading engine. With this system, traders will no longer suffer from forced liquidations due to sudden market swings or manipulation by exchanges. This represents a major step toward fair and transparent trading.
                  </p>
                </div>
              </div>
            
              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Automation</h4>
                  <p>approx. February</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We will enable automation features powered by Supra’s native automation system. Users will be able to set up automated actions such as dollar-cost averaging, seamless trading, and even safety tools like automatically adding collateral to avoid liquidations. This will make the entire trading and investing experience much more convenient.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Public Governance</h4>
                  <p>approx. February</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We will introduce governance voting, where the community can participate in decision-making. Anyone holding enough Qiara tokens will be able to vote on proposals or even create their own. We are still researching and finalizing the best structure for this, but the goal is to give true power to the community.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Testnet Qiara Pass</h4>
                  <p>approx. March</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We will launch the first version of our Qiara Pass on testnet. This pass will reward our loyal community members and long-term supporters with special benefits. It will be a key step in building stronger connections with those who believe in our project.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Publicitly Visible Protocol Revenue</h4>
                  <p>approx. March</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                   To close the first quarter of the year, we will introduce a Protocol Revenue Dashboard. This will show every detail of our revenue streams and ensure full transparency for our community. We want users to clearly see how the protocol generates income.
                  </p>
                </div>
              </div>

      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>TBA</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
        Here is a preliminary list of potential upcoming changes and new features.
        </p>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Crosschain Market Liquidity Aggregrator</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We are planning to collaborate with other well-known projects in the DeFi space, especially within lending and borrowing. By working together, we will be able to aggregate liquidity in our crosschain vaults, allowing anyone to earn passive income while maximizing capital efficiency. This will open up powerful new ways for users to grow their funds.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Crosschain Swapping</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    Crosschain swapping will let users swap assets across different networks. For example, someone could swap Ethereum on the Base network for Injective on the Injective network. This feature will further unify liquidity across blockchains and make crosschain trading seamless.
                  </p>
                </div>
              </div>


              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Crosschain Token Launchpad</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We are also exploring a crosschain token launchpad. This would allow projects to launch their tokens across multiple blockchains at once, giving them greater exposure and access to a much wider audience.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4>Decentralized Cheap Secure Storage</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                   Another feature in development is a decentralized and affordable storage system. We want to offer two versions: a private and encrypted option, and a fully public option. This storage solution could also provide new use cases for the Qiara token.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> F2P - Play to Earn Game</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                  We have long been interested in creating our own game, and in the future, we may launch a free-to-play and play-to-earn game within our ecosystem. This would combine fun with financial rewards for players.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Crosschain Automation </h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    By using our crosschain messaging system, we could expand automation to other blockchains. This would allow users to set up powerful automated tasks beyond just the Supra chain.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Public Usefull Modules for Devs</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                   We plan to create and release custom modules and smart contracts that developers can use to speed up their building process. These tools will make development in Web3 faster and easier.
                  </p>
                </div>
              </div>

            <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Fully Optimized Passive Earning</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We are researching ways to introduce advanced earning vaults that combine liquidity provision, market aggregation, and swap fee revenue. These vaults would be designed to deliver high double-digit APY rewards in a sustainable and permissioned way.
                  </p>
                </div>
              </div>


              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Own Decentralized & Uncensored AI</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                  We also have the idea of building a decentralized and uncensored AI system for Web3. This concept is still very experimental, and we are exploring whether it is technically possible. If successful, it could bring unique and valuable new utilities for AI users in the decentralized space.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Smart Trading</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    We plan to develop custom trading algorithms combined with automation. These smart trading features could introduce new strategies and automated tools for traders, helping them take advantage of market opportunities more efficiently.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Institutional DeFi Options</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                  We are considering crosschain tokenization options for real-world assets. This would expand the RWA market in Web3 and open the door to institutional-level decentralized finance products.
                  </p>
                </div>
              </div>

              <div class="feature">
                <div class="row">
                  <img class="toggle-arrow-a" style="cursor: pointer;" src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
                  <h4> Simple Earn</h4>
                  <p>TBA</p>
                </div>
                <div class="toggle-content-a">
                  <p>
                    Finally, we want to make earning in Web3 easier for beginners. With Simple Earn, users could enter the space with just a few clicks and immediately start earning between 7–12% yearly with very low risk. This feature would make decentralized finance much more accessible to everyone.
                  </p>
                </div>
              </div>
        
      </div>
    </div>
  `
  },
  contact: {
    header: {
      name: "Contact Us",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/contact.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Twitter</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          If you have any questions or come across a bug or issue, feel free to reach out to us directly via <a href="https://x.com/QiaraProtocol" target="_blank" rel="noopener noreferrer">Twitter/X</a> DMs.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Email</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          You can reach us at qiara.contact@gmail.com. Feel free to send us an email anytime.
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Discord</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
        Join our official Discord server by clicking <a href="https://github.com/" target="_blank" rel="noopener noreferrer">here</a>. We’d love to connect with you!
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>Onchain Message</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          You can also send us an on-chain message via the Supra network, costing less than $0.0001.
        </p>
      </div>
    </div>
  `
  },
  anotation: {
    header: {
      name: "Anotation",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/anotation.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Icons</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          All of the icons that our platform uses are either from   <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">Google Fonts</a> or from <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer">SVG Repo </a>
        </p>
      </div>
    </div>
  
    <div class="box">
      <div class="row">
        <h4>Data Visualisation</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
         <p>We are using <a href="https://apexcharts.com/" target="_blank" rel="noopener noreferrer">Apex Charts </a> which helps us to display Data as simple and visualy pleasing as possible.</p>
      </div>
    </div>
  `
  },
  codex: {
    header: {
      name: "Codex",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/codex.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4></h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
      <p>All validators are required to read this Codex thoroughly and carefully. This Codex helps protect both users and validators, please follow these simple rules.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">1. Don’t modify core code unless you fully understand the change and its impact.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">2. Personal/optimization edits are allowed, but they must not introduce harmful behavior or break expected functionality.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">3. Test first, always: run changes in a safe environment (local, sandbox, or testnet) and verify results before any production/mainnet use.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">4. Never deploy untested changes to mainnet, use testnet please.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">5. Document your modifications (what changed, why, and how to revert) before sharing or deploying.</p>
        <div class="row" style="gap: 0.25rem; margin-top: 0.25rem; aling-items: center;">
          <div class="dot"></div>
          <p style="font-size: 0.9rem;  margin-top: 0.25rem;">Important Notice</p>
        </div>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">Faulty, non-compliant, or suspicious code may be flagged as malicious.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">Validators running such code may be slashed, risking partial or total loss of staked funds, and may be blacklisted by the network.</p>
        <p style="margin-left: 1rem; margin-right: 1rem; margin-top: 0.25rem;">You are responsible for verifying builds, dependencies, and configuration before running this software.</p>
        `
  },
  terms_of_service: {
    header: {
      name: "Terms Of Service",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/terms_of_service.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Introduction</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          Please read these Terms of Service ("Terms", "Agreement") carefully before accessing or using Qiara Protocol (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
        </p>
      </div>
    </div>
  
        <div class="box">
      <div class="row">
        <h4>1. Eligibility</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
        </p>
      </div>
    </div>
    
    <div class="box">
      <div class="row">
        <h4>2. Restricted Jurisdictions</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
Due to regulatory restrictions, the Service is not available to individuals or entities located in, incorporated in, or residents of jurisdictions where the use of cryptocurrencies, digital assets, or related services are prohibited or restricted under applicable law.
This includes, but is not limited to, countries such as [e.g., China, Bangladesh, Algeria, Egypt, Morocco, Nepal, Qatar, Tunisia, and any other jurisdictions that fully ban cryptocurrencies].
By using the Service, you confirm that you are not accessing it from such a restricted jurisdiction and that you comply with all applicable local laws.
        </p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>3. No Guarantee of Stability or Functionality</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
The Service is provided on an "as is" and "as available" basis. We do not guarantee the stability, security, uptime, performance, or continuous functionality of the Service. We make no warranties or representations regarding the accuracy, reliability, or availability of the Service or its associated features. Use of the Service is entirely at your own risk.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>4. Risk Disclosure</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
Cryptocurrency and digital assets involve a high degree of risk, including but not limited to market volatility, regulatory uncertainty, technical failures, and cybersecurity threats. You acknowledge and accept these risks when using the Service. We are not responsible for any financial losses, damages, or liabilities arising from your use of the Service.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>5. Prohibited Use</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
You agree not to use the Service for any unlawful purposes, including but not limited to fraud, money laundering, terrorist financing, or any activity in violation of applicable sanctions or laws.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>6. Limitation of Liability</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
To the maximum extent permitted by law, Qiara Protocol, its affiliates, and service providers shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>7. Modifications</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
We reserve the right to update or modify these Terms and Privacy Policy at any time. Continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>8. Governing Law</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction/State/Country], without regard to its conflict of law principles.
        </p>
      </div>
    </div>

            <div class="box">
      <div class="row">
        <h4>9. Governance and Emergency Authority</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
While Qiara Protocol operates as a decentralized platform, you acknowledge and agree that governance is conducted through a decentralized autonomous organization (DAO). The DAO reserves the right, by way of a governance vote, to take emergency actions where necessary to protect the integrity of the network. Such actions may include, but are not limited to, banning or restricting access of validators, and initiating the withdrawal of balances from validator staking vaults if a validator is determined to be acting maliciously, negligently, or in a manner that could harm the network or its participants.
        </p>
      </div>
    </div>


  `
  },
  privacy: {
    header: {
      name: "Privacy",
      lastTimeUpdated: "12:00 30/08/2025",
      imgUrl: "https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/privacy.svg"
    },
    container: `
    <div class="box">
      <div class="row">
        <h4>Privacy</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
          This Privacy Policy explains how we handle any information related to the use of our Service.
        </p>
      </div>
    </div>
  
        <div class="box">
      <div class="row">
        <h4>1. Information We Collect</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
We do not collect personal information such as names, emails, or contact details. The only information we record is your blockchain wallet address when you accept our Terms of Service. Please note that wallet addresses are public information visible on the blockchain.
        </p>
      </div>
    </div>
    
    <div class="box">
      <div class="row">
        <h4>2. How We Use Your Information</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>We use your wallet address solely to track acceptance of our Terms of Service. We do not use it for marketing, personalization, or any other purpose.</p>
      </div>
    </div>

    <div class="box">
      <div class="row">
        <h4>3. Sharing of Information</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>
Since wallet addresses are already public, we do not share your information with third parties beyond what is visible on the blockchain. We do not sell your information.
        </p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>4.Data Security</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>We take reasonable precautions to ensure that any data we record is handled securely. However, wallet addresses recorded on the blockchain are public and immutable.</p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>5. Data Retention</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>We retain wallet addresses only as long as necessary to confirm acceptance of our Terms of Service.</p>
      </div>
    </div>

        <div class="box">
      <div class="row">
        <h4>6. Your Rights</h4>
        <img class="toggle-arrow" style="margin-left: auto; cursor: pointer;" 
             src="https://raw.githubusercontent.com/cnhuya/AEXIS-CDN/main/menu/arrow_down.svg">
      </div>
      <div class="toggle-content">
        <p>Since we do not collect personal information, typical privacy rights such as deletion or portability are not applicable.</p>
      </div>
    </div>
  `
  },
  // Add more sections as needed
};

export let tokenomicsChart; // global or higher scope

function initTokenomicsChart() {
  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent').trim() || 'var(--accent)';

  const lineColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--line').trim() || '#fff';

  const options = {
    chart: { type: 'pie', height: 350 },
    series: [5, 5, 80, 10],
    labels: ['Team','Marketing','Liquidity','Reserve'],
    theme: {
      monochrome: {
        enabled: true,
        color: accent,
        shadeTo: 'dark',
        shadeIntensity: 0.5
      }
    },
    stroke: { show: true, width: 2, colors: [lineColor] },
    plotOptions: {
    }
  };

  tokenomicsChart = new ApexCharts(document.querySelector("#init-tokenomics-chart"), options);
  tokenomicsChart.render();
}


export let scarcityChart; // global or higher scope

function initScarcityChart() {

  const categories = ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'];
  const numYears = categories.length;

  // Dynamically calculate seriesData1
  let seriesData1 = [];
  let start1 = 20;
  let decrease = 1; // initial decrement
  let decrementStep = 0.1; // decrement reduces by this each year

  for (let i = 0; i < numYears; i++) {
    seriesData1.push(start1.toFixed(2)); // allow negatives
    start1 -= decrease;
    decrease = Math.max(decrease - decrementStep + (i / 5), 0); // still prevent negative decrease
}



  // Dynamically calculate seriesData2
  let seriesData2 = [];
  let start2 = 5;
  let increase = 1; // initial increment
  let incrementStep = 0.1; // increment grows by this each year

  for (let i = 0; i < numYears; i++) {
    seriesData2.push(start2.toFixed(2));
    start2 += increase;
    increase += incrementStep+(i/5); // increase grows
  }

  const options = {
    chart: {
      type: 'line',
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    series: [
      { name: 'Inflation (in %)', data: seriesData1 },
      { name: 'Burn Fee (in % *100)', data: seriesData2 }
    ],
    xaxis: {
      categories: categories,
      labels: {
        style: { colors: 'var(--text)', fontSize: '12px' }
      }
    },
    yaxis: {
      labels: {
        style: { colors: 'var(--text)', fontSize: '12px' }
      }
    },
    legend: {
      labels: { colors: 'var(--text)' }
    },
    stroke: {
      curve: 'monotoneCubic',
      width: 2
    },

    colors: ['color-mix(in oklab, var(--accent) 80%, white)', 'color-mix(in oklab, var(--accent) 80%, black)'],
    markers: { size: 5 },
    tooltip: { theme: 'dark' },
    grid: { borderColor: 'var(--line)' }
  };

  const scarcityChart = new ApexCharts(document.querySelector("#init-scarcity-chart"), options);
  scarcityChart.render();
}





/**
 * Updates the docs container with the content from config
 * @param {string} sectionName - Name of the section to display
 */
export function setDocsContent(sectionName) {
  const section = config[sectionName];
  if (!section) {
    console.error(`Section "${sectionName}" not found in config.`);
    return;
  }

  const container = document.getElementById("docs-container");
  container.innerHTML = section.container;

  document.getElementById("header-title").innerText = section.header.name;
  document.getElementById("header-last-updated").innerText = section.header.lastTimeUpdated;
  document.getElementById("header-icon").src = section.header.imgUrl;

  attachToggleEvents(); // only for new content
  attachButtonEvents();

  if (sectionName === "tokenomics") {
    initTokenomicsChart();
    initScarcityChart();
  }

  if (sectionName === "roadmap") {
    attachToggleEvents("toggle-arrow-a", "toggle-content-a")
  }

}



function attachToggleEvents(arrowClass = 'toggle-arrow', contentClass = 'toggle-content') {
  const container = document.getElementById("docs-container");
  if (!container) return;

  const arrows = container.querySelectorAll(`.${arrowClass}`);

  arrows.forEach(arrow => {
    const content = arrow.closest('.box').querySelector(`.${contentClass}`);
    if (!content) return;

    // Remove existing listener if any
    if (arrow._toggleHandler) {
      arrow.removeEventListener('click', arrow._toggleHandler);
    }

    // Initialize arrow rotation to match current visibility
    const isVisible = window.getComputedStyle(content).display !== 'none';
    arrow.style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)';

    const handler = () => {
      const currentlyVisible = window.getComputedStyle(content).display !== 'none';
      content.style.display = currentlyVisible ? 'none' : 'block';
      arrow.style.transform = currentlyVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    };

    arrow.addEventListener('click', handler);
    arrow._toggleHandler = handler;
  });
}




// Example: switch to another section dynamically
// setDocsContent("AnotherSection");