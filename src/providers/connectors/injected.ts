const ConnectToInjected = async () => {
  let provider = null;
  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;
    if (!(provider.isMetaMask && provider.isXDCPay)) {
      try {
        await provider.request({ method: 'eth_requestAccounts' })
      } catch (error) {
        console.log(error);
      }
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else if (window.celo) {
    provider = window.celo;
  } else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToInjected;
