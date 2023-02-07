import { useState } from "react";
import JSONPretty from "react-json-pretty";

export function Transactions(props) {
    const { transactions } = props;
    const [showMore, setShowMore] = useState(true)
    
    return (
      <div>
        <b>Transactions count:</b> {transactions && transactions.length}
        {/* map through transactions object to get transaction and return */}
        {transactions &&
          transactions.map((tx, i) => {
            return (
              <div key={`tx-${i}`}>
                <h4 onClick={() => setShowMore(!showMore)}>Tx: {tx.hash}</h4>
                {
                  showMore ? <JSONPretty data={tx} /> : null
                }
              </div>
            );
          })}
      </div>
    );
  }
  