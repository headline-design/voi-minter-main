export const NONE_YET = 'none yet';
export const PREFERRED_DECIMALS = 2;

/** Local Storage keys */

export const PIPECONNECT_STATE_KEY = 'pipeConnectState';

/** Networks */

export const Networks: any = {
  MainNet: 'MainNet',
  TestNet: 'TestNet',
};

/** INDEXERS */

export const Indexers: any = {
  AlgoExplorer: 'AlgoExplorer',
  AlgoNode: 'AlgoNode',
};

export const DEFAULT_INDEXER = Indexers.AlgoExplorer;

export const AlgoExplorerBaseUrl = (net: boolean) =>
  `https://voitest-idx.algorpc.pro`;

export const IndexerProps = (indexer: string, net: boolean) => {
  const indexers: any = {
    AlgoExplorer: {
      NODE: `https://voitest-api.algorpc.pro`,
      INDEXER: `https://voitest-idx.algorpc.pro`,
      BASE_INDEXER: `https://voitest-idx.algorpc.pro`,
      PRICE: `https://price.algoexplorerapi.io/price`,
    },
    AlgoNode: {
      NODE: `https://voitest-api.algorpc.pro`,
      INDEXER: `https://voitest-idx.algorpc.pro`,
      BASE_INDEXER: `https://voitest-idx.algorpc.pro`,
      PRICE: `https://price.algoexplorerapi.io/price`,
    },
  };
  return indexers[indexer];
};
