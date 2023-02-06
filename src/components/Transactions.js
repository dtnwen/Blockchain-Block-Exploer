export function Transactions(props) {
    const { transactions } = props;
    return (
      <div>
        <b>Transactions count:</b> {transactions && transactions.length}
        {/* map through transactions object to get transaction and return */}
        {transactions &&
          transactions.map((tx, i) => {
            return (
              <div key={`tx-${i}`}>
                <h4>Hash: {tx.hash}</h4>
                <p>From: {tx.from}</p>
                <p>To: {tx.to}</p>
                <br />
              </div>
            );
          })}
      </div>
    );
  }
  