import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import { Transactions } from './components/Transactions';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const App = () => {
  const [block, setBlock] = useState()
  const [blockInfo, setBlockInfo] = useState()
  const [currentBlock, setCurrentBlock] = useState()
  const [transactions, setTransactions] = useState()

  const getCurrentBlock = async () => {
    setCurrentBlock(await alchemy.core.getBlockNumber())
  }
  getCurrentBlock()

  const onChange = evt => {
      evt.preventDefault()
      const block = evt.target.value
      setBlock(block)
  }

  const submit = async (evt) => {
    evt.preventDefault()
    let blockInfo = await alchemy.core.getBlockWithTransactions(block ? parseInt(block) : currentBlock && setBlock(currentBlock))
    setBlockInfo(blockInfo)
    await setTransactions(blockInfo.transactions)
  }
  
  return (
      <div className='app__searchbar'>
          <h1>The Ethereum Blockchain Explorer</h1>
          <div>
            Current Block: {currentBlock}
          </div>
          <label>
              <input placeholder='Type block number' onChange={onChange}></input>
              <button onClick={submit}>Submit</button>
          </label>
          <div>Block: {block}</div>
          <div>Block Info:
            {
              blockInfo && Object.entries(blockInfo).map(([key, value]) => {
                // prevent to render transaction, we will do it later
                if (key === 'transactions') {
                  return null;
                }
                return (
                  <ul>
                    {/* value need to be string because react can't render object */}
                    <li><b>{key}</b> : {`${value}`}</li>
                  </ul>
                );
              })
            }
          </div> 
          <Transactions transactions={transactions} />
      </div>
  )
}

export default App;

// checkpoint