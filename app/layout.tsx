import './globals.css';
export const metadata = { title: 'Good2Go — Concussion Monitoring', description: 'Landing pages & booking entry.' };
const Nav = () => (<nav><a href="/">Home</a><a href="/about">About</a><a href="/features">Features</a><a href="/how-it-works">How It Works</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a></nav>);
export default function RootLayout({ children }){
  return (<html lang="en"><body>
    <header><div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}><img src="/logo.svg" width="28" height="28" alt="Good2Go"/><strong>Good2Go</strong><span className="tag">Public Site</span></div>
      <Nav /></div></header>
    <main className="container">{children}</main>
    <footer><div className="container"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div className="small">© {new Date().getFullYear()} Good2Go.</div>
      <div className="small"><a href="/privacy">Privacy</a> · <a href="/consent">Consent</a></div></div></div></footer>
  </body></html>);
}