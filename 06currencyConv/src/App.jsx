import { useCallback, useState, useEffect } from 'react'
import { InputBox } from "./components"
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setAmount('');
    setConvertedAmount('');
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2)); // Round to two decimal places
  };

  const copyToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(convertedAmount);
    }, [convertedAmount]);

    const handleCopy = (e) => {
        e.preventDefault();
        const currentFrom = from;
        const currentTo = to;
        copyToClipBoard();
        setFrom(currentFrom);
        setTo(currentTo);
    };
    useEffect(() => {
        if (amount !== '') {
        convert();
        }
    }, [amount, from, to]);


  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-400"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5 hover:bg-blue-600"
                              onClick={swap}
                          >
                              swap
                          </button>
                          
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-gray-100 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 hover:text-blue-500">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <button
                          type="reset"
                          className="mt-2 w-48 bg-red-500 text-white px-4 py-3 rounded-lg font-bold mr-3 hover:bg-red-600"
                          onClick={(e) => {
                            e.preventDefault();
                            copyToClipBoard();
                            setFrom(from);
                            setTo(to);
                        }}
                        
                          >
                            Reset
                          </button>
                          <button
                          type="reset"
                          className="mt-2 bg-blue-500 text-white px-4 py-3 rounded-lg font-bold w-48 ml-2 hover:bg-blue-600"
                          onClick={handleCopy}
                          >
                            Copy
                          </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
