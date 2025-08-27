'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header style={{borderBottom:'1px solid #eee', background:'#fff'}}>
      <div style={{maxWidth:960, margin:'0 auto', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Link href="/" style={{fontWeight:600, fontSize:18}}>Good2Go</Link>
        <nav style={{display:'flex', gap:12}}>
          <Link href="/pricing">Pricing</Link>
          <Link href="/book">Book</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button aria-label="Open menu" style={{padding:8,borderRadius:8,border:'1px solid #eee', background:'#fafafa'}}>
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
