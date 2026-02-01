import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Building2, Phone, Mail, Globe, Scale, 
  FileText, Link2, Copyright, Shield, Clock, Languages,
  AlertTriangle, Gavel, Info, Users, Linkedin, ExternalLink,
  MapPin, Hash, Receipt, User, Briefcase, Calendar
} from 'lucide-react';

const Impressum: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-5xl mx-auto px-4 py-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück
        </Button>

        <h1 className="font-display text-4xl md:text-5xl italic mb-4">Impressum</h1>
        
        <p className="text-muted-foreground mb-12 text-lg">
          Rechtliche Informationen gemäß deutschem Recht – ScalingX Hypergrowth GmbH
        </p>

        {/* SECTION 1: Company Information */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-7 w-7 text-primary" />
            Angaben gemäß § 5 TMG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  Firmenname
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">ScalingX Hypergrowth GmbH</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  Anschrift
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Markgrafendamm 4</p>
                <p>10245 Berlin</p>
                <p>Deutschland</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-muted-foreground" />
                  Vertreten durch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Michel Lason</p>
                <p className="text-sm text-muted-foreground">Geschäftsführer</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Hash className="h-5 w-5 text-muted-foreground" />
                  Registereintrag
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Amtsgericht Berlin-Charlottenburg</p>
                <p className="font-mono text-sm">HRB 271376 B</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 2: Contact & Tax */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Phone className="h-7 w-7 text-primary" />
            Kontakt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+491727355891" className="text-accent hover:underline font-mono">
                  +49 172 735 58 91
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@scalingx.io" className="text-accent hover:underline">
                  info@scalingx.io
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  Website
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://www.scalingx.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  www.scalingx.io
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Receipt className="h-5 w-5 text-muted-foreground" />
                  USt-IdNr.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-1">Gemäß § 27a UStG</p>
                <p className="font-mono font-semibold">DE452811403</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 3: Responsibility & Dispute Resolution */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-7 w-7 text-primary" />
            Rechtliche Verantwortung
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-muted-foreground" />
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Michel Lason</p>
                <p className="text-muted-foreground">Markgrafendamm 4, 10245 Berlin, Deutschland</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  EU-Streitschlichtung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  https://ec.europa.eu/consumers/odr
                  <ExternalLink className="h-3 w-3" />
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Verbraucherstreitbeilegung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 4: Liability */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-7 w-7 text-primary" />
            Haftungsausschluss
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  Haftung für Inhalte
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Link2 className="h-5 w-5 text-muted-foreground" />
                  Haftung für Links
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Copyright className="h-5 w-5 text-muted-foreground" />
                  Urheberrecht
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  Bildnachweise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Alle auf dieser Website verwendeten Bilder und Grafiken sind entweder:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Eigentum der ScalingX Hypergrowth GmbH</li>
                  <li>• Lizenziert unter entsprechenden Nutzungsrechten</li>
                  <li>• Gekennzeichnet mit Quellenangaben</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 5: Legal Notes */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Gavel className="h-7 w-7 text-primary" />
            Rechtliche Hinweise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Gavel className="h-5 w-5 text-muted-foreground" />
                  Anwendbares Recht
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  Gerichtsstand
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Soweit gesetzlich zulässig, ist der Gerichtsstand für alle Streitigkeiten Berlin, Deutschland.</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Scale className="h-5 w-5 text-muted-foreground" />
                  Salvatorische Klausel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Sollten einzelne Bestimmungen dieser rechtlichen Hinweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 6: Additional Information */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-7 w-7 text-primary" />
            Weitere Informationen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  Unternehmensgegenstand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">AI-Native Execution Consulting</p>
                <p className="text-sm text-muted-foreground">für finanzierte B2B SaaS Scaleups</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  Gründungsjahr
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">2025</p>
                <p className="text-sm text-muted-foreground">Gesellschaft mit beschränkter Haftung (GmbH)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  Erreichbarkeit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Mo-Fr: 09:00 - 18:00 Uhr (MEZ/MESZ)</p>
                <p className="text-sm text-muted-foreground mt-1">Außerhalb der Geschäftszeiten werden Anfragen am nächsten Werktag bearbeitet.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Languages className="h-5 w-5 text-muted-foreground" />
                  Sprachen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Primär: Deutsch</p>
                <p className="text-sm text-muted-foreground">Englisch als zusätzliches Serviceangebot. Im Zweifelsfall ist die deutsche Version maßgeblich.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 7: Quick Contact */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Mail className="h-7 w-7 text-primary" />
            Schnellkontakt
          </h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="mailto:info@scalingx.io" className="flex items-center gap-2 text-accent hover:underline">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@scalingx.io</span>
                </a>
                <a href="mailto:team@scalingx.io" className="flex items-center gap-2 text-accent hover:underline">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">team@scalingx.io</span>
                </a>
                <a href="tel:+491727355891" className="flex items-center gap-2 text-accent hover:underline">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-mono">+49 172 735 58 91</span>
                </a>
                <a href="https://www.linkedin.com/company/scalingxhypergrowth/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SECTION 8: Important Notes */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-7 w-7 text-primary" />
            Wichtige Hinweise
          </h2>

          <div className="space-y-6">
            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Keine Rechtsberatung
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und stellen keine Rechtsberatung dar. Für individuelle rechtliche Beratung wenden Sie sich bitte an einen qualifizierten Rechtsanwalt.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Keine Anlageberatung
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Die auf dieser Website enthaltenen Informationen stellen keine Anlageberatung oder Empfehlung zum Erwerb oder Verkauf von Wertpapieren dar.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5 text-muted-foreground" />
                  Aktualität
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Wir bemühen uns, die Informationen auf dieser Website aktuell zu halten. Dennoch können sich Angaben zwischenzeitlich geändert haben. Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen kann daher nicht übernommen werden.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 9: Security & Data */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-7 w-7 text-primary" />
            Sicherheit & Datenschutz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  Sicherheit
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  Datenschutz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer separaten Datenschutzerklärung.
                </p>
                <Link to="/datenschutz" className="text-accent hover:underline flex items-center gap-1">
                  Zur Datenschutzerklärung
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 10: Status */}
        <section className="mb-12">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Letzte Aktualisierung: 1. Februar 2026</span>
                </div>
                <Badge variant="outline">Version 1.0</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer with Compliance Badges */}
        <div className="mt-16 text-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            © 2026 ScalingX Hypergrowth GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">TMG-konform</Badge>
            <Badge variant="outline">DSGVO-konform</Badge>
            <Badge variant="outline">RStV-konform</Badge>
            <Badge variant="outline">HGB-konform</Badge>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
