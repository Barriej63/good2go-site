
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container nav" style={{justifyContent:'space-between'}}>
        <div className="small">© {new Date().getFullYear()} Good2Go — Return-to-Head</div>
        <nav className="nav">
          <a href="https://book.good2go-rth.com/book" className="cta">Book</a>
          <a href="/privacy">Privacy</a>
          <a href="/consent">Consent</a>
        </nav>
      </div>
    </footer>
  );
}
