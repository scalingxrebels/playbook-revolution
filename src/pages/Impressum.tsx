import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-4xl mx-auto px-4 py-24">
        <h1 className="font-display text-4xl md:text-5xl italic mb-8">Impressum</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
            <p className="text-foreground">
              <strong>ScalingX Hypergrowth GmbH</strong><br />
              Markgrafendamm 4<br />
              10245 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold">Vertreten durch:</h3>
            <p className="text-foreground">Michel Lason (Geschäftsführer)</p>
          </section>

          <section>
            <h3 className="text-xl font-bold">Kontakt:</h3>
            <p className="text-foreground">
              Telefon: +49 172 735 58 91<br />
              E-Mail: <a href="mailto:info@scalingx.io" className="text-accent hover:underline">info@scalingx.io</a><br />
              Website: <a href="https://www.scalingx.io" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.scalingx.io</a>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold">Registereintrag:</h3>
            <p className="text-foreground">
              Eingetragen im Handelsregister<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 271376 B
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</h3>
            <p className="text-foreground">USt-IdNr.: in Arbeit</p>
          </section>

          <section>
            <h3 className="text-xl font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
            <p className="text-foreground">
              Michel Lason<br />
              Markgrafendamm 4<br />
              10245 Berlin
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold">EU-Streitschlichtung:</h3>
            <p className="text-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p className="text-muted-foreground">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Haftungsausschluss (Disclaimer)</h2>
            
            <h3 className="text-xl font-bold mt-4">Haftung für Inhalte</h3>
            <p className="text-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold mt-4">Haftung für Links</h3>
            <p className="text-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold mt-4">Urheberrecht</h3>
            <p className="text-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
