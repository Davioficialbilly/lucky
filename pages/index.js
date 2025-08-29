export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#0d47a1", color: "white", textAlign: "center" }}>
      <header style={{ background: "#1565c0", padding: "20px" }}>
        <img 
          src="https://i.postimg.cc/NMQVsWMy/RULES-DA-BLUE-29-08-2025-1.png" 
          alt="Banner Regras Blue Store"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
        <div style={{
          margin: "30px auto",
          width: "80%",
          height: "3px",
          background: "linear-gradient(to right, #64b5f6, #ffffff, #64b5f6)",
          borderRadius: "2px"
        }}></div>
        <h1>🏬 BLUE STORE</h1>
        <p>📜 Regras Oficiais do Servidor</p>
      </header>

      <section style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", background: "#1976d2", borderRadius: "15px", textAlign: "left" }}>
        <h2 style={{ borderBottom: "2px solid #64b5f6", paddingBottom: "10px" }}>🛒 Regras Gerais</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={liStyle}>1. Respeito acima de tudo – Trate todos com educação.</li>
          <li style={liStyle}>2. Nada de preconceito – Racismo, homofobia, machismo, xenofobia resultam em banimento.</li>
          <li style={liStyle}>3. Proibido spam/flood – Evite mensagens repetitivas.</li>
          <li style={liStyle}>4. Links proibidos – Sem convites de outros servidores ou +18.</li>
          <li style={liStyle}>5. Conteúdo seguro – Nada de gore, nudez ou violência.</li>
          <li style={liStyle}>6. Respeite a Staff – A palavra da moderação deve ser seguida.</li>
          <li style={liStyle}>7. Uso correto dos canais – Cada canal tem sua função.</li>
          <li style={liStyle}>8. Sem anúncios fora da área permitida.</li>
        </ul>
      </section>

      <section style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", background: "#1976d2", borderRadius: "15px", textAlign: "left" }}>
        <h2 style={{ borderBottom: "2px solid #64b5f6", paddingBottom: "10px" }}>💎 Regras de Trocas & Vendas</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={liStyle}>1. Negociações são de responsabilidade dos envolvidos.</li>
          <li style={liStyle}>2. Seja claro e direto nas ofertas.</li>
          <li style={liStyle}>3. Proibido golpes – Fraudes resultam em ban imediato.</li>
          <li style={liStyle}>4. Proibido vendas ilegais – Apenas itens permitidos.</li>
          <li style={liStyle}>5. Venda de contas proibida.</li>
          <li style={liStyle}>6. Use apenas os canais corretos para trocas.</li>
          <li style={liStyle}>7. Sempre guarde prints e comprovantes.</li>
          <li style={liStyle}>8. Respeite os outros durante negociações.</li>
        </ul>
      </section>

      <footer style={{ marginTop: "50px", padding: "15px", background: "#0d47a1", fontSize: "0.9em", color: "#bbdefb" }}>
        <div style={{
          margin: "30px auto",
          width: "80%",
          height: "3px",
          background: "linear-gradient(to right, #64b5f6, #ffffff, #64b5f6)",
          borderRadius: "2px"
        }}></div>
        <p>✨ Blue Store ┃ Administração & Staff desejam boas compras e trocas! ✨</p>
        <p style={{ marginTop: "10px", color: "#90caf9" }}>🌐 SITE HOSTED ON https://vercel.com</p>
      </footer>
    </div>
  );
}

// estilo das <li>
const liStyle = {
  background: "#2196f3",
  margin: "10px 0",
  padding: "15px",
  borderRadius: "10px",
  fontSize: "1.1em"
};
