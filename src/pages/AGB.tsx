import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AGB: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Allgemeine Geschäftsbedingungen',
      backToHome: 'Zurück zur Startseite',
      lastUpdated: 'Zuletzt aktualisiert: Januar 2026',
      sections: [
        {
          title: '§ 1 Geltungsbereich',
          content: `(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge, die zwischen ScalingX (nachfolgend "Anbieter") und dem Kunden über die Website scalingx.io oder durch sonstige Kommunikation geschlossen werden.

(2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.

(3) Diese AGB gelten sowohl gegenüber Verbrauchern als auch gegenüber Unternehmern, es sei denn, in der jeweiligen Klausel wird eine Differenzierung vorgenommen.`
        },
        {
          title: '§ 2 Vertragsschluss',
          content: `(1) Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.

(2) Der Kunde kann über das Kontaktformular oder per E-Mail eine Anfrage stellen. Diese Anfrage stellt ein verbindliches Angebot zum Abschluss eines Vertrages dar.

(3) Der Anbieter wird den Zugang der Anfrage unverzüglich bestätigen. Die Zugangsbestätigung stellt noch keine Annahme des Angebots dar.

(4) Der Vertrag kommt zustande, wenn der Anbieter das Angebot des Kunden durch eine ausdrückliche Annahmeerklärung oder durch Erbringung der Dienstleistung annimmt.`
        },
        {
          title: '§ 3 Leistungsbeschreibung',
          content: `(1) Der Anbieter erbringt Beratungs- und Implementierungsleistungen im Bereich Scaling, AI-Native Transformation und Growth Strategy.

(2) Der genaue Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung oder dem individuellen Angebot.

(3) Der Anbieter ist berechtigt, zur Erfüllung seiner vertraglichen Pflichten Dritte als Erfüllungsgehilfen einzusetzen.

(4) Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.`
        },
        {
          title: '§ 4 Preise und Zahlungsbedingungen',
          content: `(1) Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.

(2) Die Zahlung erfolgt nach Rechnungsstellung. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.

(3) Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu berechnen.

(4) Die Aufrechnung mit Gegenansprüchen ist nur zulässig, wenn diese unbestritten oder rechtskräftig festgestellt sind.`
        },
        {
          title: '§ 5 Mitwirkungspflichten des Kunden',
          content: `(1) Der Kunde stellt dem Anbieter alle zur Leistungserbringung erforderlichen Informationen, Daten und Materialien rechtzeitig und vollständig zur Verfügung.

(2) Der Kunde benennt einen Ansprechpartner, der für die Dauer des Projekts zur Verfügung steht.

(3) Der Kunde ist verpflichtet, bereitgestellte Arbeitsergebnisse unverzüglich zu prüfen und etwaige Mängel anzuzeigen.

(4) Verzögerungen aufgrund nicht erfüllter Mitwirkungspflichten gehen nicht zu Lasten des Anbieters.`
        },
        {
          title: '§ 6 Vertraulichkeit',
          content: `(1) Beide Parteien verpflichten sich, alle im Rahmen der Vertragsbeziehung erhaltenen vertraulichen Informationen vertraulich zu behandeln.

(2) Diese Verpflichtung gilt nicht für Informationen, die öffentlich bekannt sind, rechtmäßig von Dritten erhalten wurden oder selbst entwickelt wurden.

(3) Die Vertraulichkeitsverpflichtung besteht über das Vertragsende hinaus fort.`
        },
        {
          title: '§ 7 Geistiges Eigentum',
          content: `(1) Alle Rechte an den vom Anbieter entwickelten Konzepten, Methoden und Frameworks verbleiben beim Anbieter.

(2) Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht an den für ihn erstellten Arbeitsergebnissen.

(3) Die Nutzung der Arbeitsergebnisse über den vereinbarten Zweck hinaus bedarf der schriftlichen Zustimmung des Anbieters.`
        },
        {
          title: '§ 8 Haftung',
          content: `(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.

(2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten. Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.

(3) Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.

(4) Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten der Erfüllungsgehilfen des Anbieters.`
        },
        {
          title: '§ 9 Kündigung',
          content: `(1) Verträge über einzelne Beratungsleistungen können mit einer Frist von 14 Tagen zum Monatsende gekündigt werden.

(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

(3) Kündigungen bedürfen der Schriftform.

(4) Bei Kündigung hat der Kunde die bis zum Beendigungszeitpunkt erbrachten Leistungen zu vergüten.`
        },
        {
          title: '§ 10 Datenschutz',
          content: `(1) Der Anbieter verarbeitet personenbezogene Daten des Kunden gemäß der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).

(2) Einzelheiten zur Datenverarbeitung sind in der Datenschutzerklärung auf der Website des Anbieters geregelt.

(3) Soweit der Anbieter im Auftrag des Kunden personenbezogene Daten verarbeitet, wird ein gesonderter Auftragsverarbeitungsvertrag geschlossen.`
        },
        {
          title: '§ 11 Schlussbestimmungen',
          content: `(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

(2) Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Anbieters, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.

(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.

(4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.`
        }
      ]
    },
    en: {
      title: 'Terms and Conditions',
      backToHome: 'Back to Home',
      lastUpdated: 'Last updated: January 2026',
      sections: [
        {
          title: '§ 1 Scope of Application',
          content: `(1) These General Terms and Conditions (hereinafter "Terms") apply to all contracts concluded between ScalingX (hereinafter "Provider") and the Customer via the website scalingx.io or through other communication.

(2) Deviating terms of the Customer shall not be recognized unless the Provider expressly agrees to their validity in writing.

(3) These Terms apply to both consumers and businesses unless a differentiation is made in the respective clause.`
        },
        {
          title: '§ 2 Conclusion of Contract',
          content: `(1) The presentation of services on the website does not constitute a legally binding offer but an invitation to submit an offer.

(2) The Customer may submit an inquiry via the contact form or by email. This inquiry constitutes a binding offer to conclude a contract.

(3) The Provider will confirm receipt of the inquiry without delay. The confirmation of receipt does not constitute acceptance of the offer.

(4) The contract is concluded when the Provider accepts the Customer's offer through an express declaration of acceptance or by providing the service.`
        },
        {
          title: '§ 3 Description of Services',
          content: `(1) The Provider provides consulting and implementation services in the areas of Scaling, AI-Native Transformation, and Growth Strategy.

(2) The exact scope of services results from the respective service description or individual offer.

(3) The Provider is entitled to use third parties as vicarious agents to fulfill its contractual obligations.

(4) Changes to the scope of services require written agreement.`
        },
        {
          title: '§ 4 Prices and Payment Terms',
          content: `(1) The prices agreed at the time of conclusion of the contract apply. All prices are subject to statutory VAT.

(2) Payment is due upon invoicing. Invoices are due for payment within 14 days of the invoice date without deduction.

(3) In case of default in payment, the Provider is entitled to charge default interest at a rate of 9 percentage points above the base interest rate.

(4) Set-off against counterclaims is only permissible if these are undisputed or legally established.`
        },
        {
          title: '§ 5 Customer Cooperation Obligations',
          content: `(1) The Customer shall provide the Provider with all information, data, and materials required for the provision of services in a timely and complete manner.

(2) The Customer shall designate a contact person who is available for the duration of the project.

(3) The Customer is obliged to review the work results provided without delay and to report any defects.

(4) Delays due to unfulfilled cooperation obligations shall not be at the expense of the Provider.`
        },
        {
          title: '§ 6 Confidentiality',
          content: `(1) Both parties undertake to treat all confidential information received in the course of the contractual relationship as confidential.

(2) This obligation does not apply to information that is publicly known, lawfully received from third parties, or developed independently.

(3) The confidentiality obligation shall continue beyond the termination of the contract.`
        },
        {
          title: '§ 7 Intellectual Property',
          content: `(1) All rights to the concepts, methods, and frameworks developed by the Provider remain with the Provider.

(2) The Customer receives a simple, non-transferable right of use to the work results created for them.

(3) The use of work results beyond the agreed purpose requires the written consent of the Provider.`
        },
        {
          title: '§ 8 Liability',
          content: `(1) The Provider is liable without limitation for damages arising from injury to life, body, or health as well as for intent and gross negligence.

(2) In case of slight negligence, the Provider is only liable for breach of essential contractual obligations. Liability is limited to foreseeable, contract-typical damage.

(3) Liability for indirect damages, in particular lost profits, is excluded unless intent or gross negligence is present.

(4) The above limitations of liability also apply in favor of the Provider's vicarious agents.`
        },
        {
          title: '§ 9 Termination',
          content: `(1) Contracts for individual consulting services may be terminated with a notice period of 14 days to the end of the month.

(2) The right to extraordinary termination for good cause remains unaffected.

(3) Terminations require written form.

(4) Upon termination, the Customer shall pay for services rendered up to the date of termination.`
        },
        {
          title: '§ 10 Data Protection',
          content: `(1) The Provider processes personal data of the Customer in accordance with the General Data Protection Regulation (GDPR) and the Federal Data Protection Act (BDSG).

(2) Details on data processing are set out in the privacy policy on the Provider's website.

(3) If the Provider processes personal data on behalf of the Customer, a separate data processing agreement shall be concluded.`
        },
        {
          title: '§ 11 Final Provisions',
          content: `(1) The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods.

(2) The place of performance and exclusive place of jurisdiction for all disputes arising from this contract is the Provider's registered office, provided the Customer is a merchant, legal entity under public law, or special fund under public law.

(3) Should individual provisions of these Terms be or become invalid, the validity of the remaining provisions shall remain unaffected.

(4) Amendments and additions to these Terms require written form. This also applies to the waiver of this written form requirement.`
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToHome}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-display-sm md:text-display-md text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {t.lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {t.sections.map((section, index) => (
              <section key={index} className="border-l-2 border-border pl-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="prose prose-sm max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {language === 'de' ? 'Fragen zu unseren AGB?' : 'Questions about our Terms?'}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de' 
                ? 'Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen kontaktieren Sie uns gerne.'
                : 'If you have any questions about our Terms and Conditions, please contact us.'}
            </p>
            <a 
              href="mailto:hello@scalingx.io" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              hello@scalingx.io
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;