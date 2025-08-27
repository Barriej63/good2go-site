'use client';
import Header from '../components/Header';
import OutcomesChart from '../components/OutcomesChart';

export default function Page() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif'}}>
      <Header />
      <section style={{maxWidth:960, margin:'20px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:24, fontWeight:600, marginBottom:8}}>Good2Go Starter Build</h1>
        <p style={{marginBottom:12}}>If you can see this page and the chart below, the build worked.</p>
        <OutcomesChart />
      </section>
    </main>
  );
}
