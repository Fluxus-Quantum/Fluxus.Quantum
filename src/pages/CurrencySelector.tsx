import React from 'react';

interface CurrencySelectorProps {
  currentCurrency: string;
  onCurrencyChange: (newCurrency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ 
  currentCurrency, 
  onCurrencyChange 
}) => {
  const currencies = ['COP', 'USD', 'EUR'];

  return (
    <div className="currency-selector">
      <label htmlFor="currency">Selecciona tu moneda: </label>
      <select 
        id="currency" 
        value={currentCurrency} 
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
