import React from "react";

const Index = () => {
  
import CurrencySelector from './CurrencySelector';

  const [currentCurrency, setCurrentCurrency] = React.useState('COP');
  
    return (
  
    <main style={{ fontFamily: "sans-serif" }}
  
<CurrencySelector 
  currentCurrency={currentCurrency} 
  onCurrencyChange={setCurrentCurrency} 
/>
   >

      {/* HERO */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}>
        
        <h1 style={{ fontSize: "42px", maxWidth: "800px" }}>
          Digital Ecosystems that Turn Your Online Presence into Growth
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "600px" }}>
          We design strategic websites and intelligent systems that help businesses
          generate opportunities in a structured and professional way.
        </p>

        <a
          href="https://wa.me/TUNUMERO?text=Hello,%20I%20would%20like%20information%20about%20Digital%20Ecosystems"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            background: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "30px",
            fontWeight: "bold"
          }}
        >
          Contact via WhatsApp
        </a>

      </section>

    </main>
  );
};

export default Index;
