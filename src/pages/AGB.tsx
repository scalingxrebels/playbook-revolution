import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow
} from '@/components/ui/table';
import {
  ArrowLeft, Building2, FileText, Users, CreditCard, Clock,
  Lightbulb, Lock, Shield, AlertTriangle, Scale, Phone, Mail,
  Rocket, Target, Zap, BarChart3, BookOpen, Bot, Briefcase,
  Calendar, CheckCircle, ExternalLink, UserCheck, Globe
} from 'lucide-react';

const AGB: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const tocItems = language === 'de' ? [
    'Geltungsbereich & Vertragsschluss',
    'Leistungen & Leistungsumfang',
    'Mitwirkungspflichten des Kunden',
    'Vergütung & Zahlungsbedingungen',
    'Vertragslaufzeit & Kündigung',
    'Geistiges Eigentum & Nutzungsrechte',
    'Vertraulichkeit & Datenschutz',
    'Haftung & Gewährleistung',
    'Höhere Gewalt',
    'Schlussbestimmungen'
  ] : [
    'Scope & Contract Formation',
    'Services & Scope of Services',
    'Customer Cooperation Obligations',
    'Remuneration & Payment Terms',
    'Contract Duration & Termination',
    'Intellectual Property & Usage Rights',
    'Confidentiality & Data Protection',
    'Liability & Warranty',
    'Force Majeure',
    'Final Provisions'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'de' ? 'Zurück' : 'Back'}
          </Button>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline">BGB §§ 305-310</Badge>
              <Badge variant="outline">B2B</Badge>
              <Badge variant="gradient">v1.0</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl italic text-foreground mb-4">
              {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'de'
                ? 'Gültig ab: 1. Februar 2026'
                : 'Effective from: February 1, 2026'}
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="mb-10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <FileText className="h-5 w-5 text-primary" />
                {language === 'de' ? 'Inhaltsverzeichnis' : 'Table of Contents'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {tocItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      § {index + 1} {item}
                    </a>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* § 1 - Geltungsbereich & Vertragsschluss */}
          <section id="section-1" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Building2 className="h-5 w-5 text-primary" />
                  § 1 {language === 'de' ? 'Geltungsbereich & Vertragsschluss' : 'Scope & Contract Formation'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 1.1 Geltungsbereich */}
                <div>
                  <h4 className="font-semibold mb-3">1.1 {language === 'de' ? 'Geltungsbereich' : 'Scope of Application'}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'de'
                      ? 'Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Geschäftsbeziehungen zwischen:'
                      : 'These General Terms and Conditions (hereinafter "Terms") apply to all business relationships between:'}
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm space-y-1">
                    <p className="font-semibold">ScalingX Hypergrowth GmbH</p>
                    <p>Markgrafendamm 4</p>
                    <p>10245 Berlin, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
                    <p>{language === 'de' ? 'Handelsregister' : 'Commercial Register'}: HRB 271376 B</p>
                    <p>{language === 'de' ? 'Amtsgericht' : 'District Court'}: Berlin (Charlottenburg)</p>
                    <p>{language === 'de' ? 'Geschäftsführer' : 'Managing Director'}: Michel Lason</p>
                    <p>E-Mail: info@scalingx.io</p>
                    <p>{language === 'de' ? 'Telefon' : 'Phone'}: +49 172 735 58 91</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {language === 'de'
                      ? '(nachfolgend "ScalingX" oder "Auftragnehmer") und dem Kunden (nachfolgend "Kunde" oder "Auftraggeber").'
                      : '(hereinafter "ScalingX" or "Contractor") and the Customer (hereinafter "Customer" or "Client").'}
                  </p>
                </div>

                {/* 1.2 Ausschluss */}
                <div>
                  <h4 className="font-semibold mb-3">1.2 {language === 'de' ? 'Ausschluss abweichender Bedingungen' : 'Exclusion of Deviating Terms'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de'
                      ? 'Diese AGB gelten ausschließlich. Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, ScalingX stimmt ihrer Geltung ausdrücklich schriftlich zu.'
                      : 'These Terms apply exclusively. Deviating, conflicting, or supplementary general terms and conditions of the Customer shall not become part of the contract unless ScalingX expressly agrees to their validity in writing.'}
                  </p>
                </div>

                {/* 1.3 Vertragsschluss */}
                <div>
                  <h4 className="font-semibold mb-3">1.3 {language === 'de' ? 'Vertragsschluss' : 'Contract Formation'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>(1) {language === 'de' ? 'Angebot' : 'Offer'}:</strong>{' '}
                      {language === 'de'
                        ? 'Alle Angebote von ScalingX sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich gekennzeichnet.'
                        : 'All offers from ScalingX are non-binding unless expressly marked as binding.'}
                    </li>
                    <li>
                      <strong>(2) {language === 'de' ? 'Auftragsbestätigung' : 'Order Confirmation'}:</strong>{' '}
                      {language === 'de'
                        ? 'Der Vertrag kommt durch schriftliche Auftragsbestätigung von ScalingX oder durch Beginn der Leistungserbringung zustande.'
                        : 'The contract is concluded by written order confirmation from ScalingX or by commencement of service provision.'}
                    </li>
                    <li>
                      <strong>(3) {language === 'de' ? 'Elektronische Form' : 'Electronic Form'}:</strong>{' '}
                      {language === 'de'
                        ? 'Die Schriftform kann durch E-Mail oder elektronische Signatur ersetzt werden.'
                        : 'The written form may be replaced by email or electronic signature.'}
                    </li>
                  </ul>
                </div>

                {/* 1.4 Vertragssprache */}
                <div>
                  <h4 className="font-semibold mb-3">1.4 {language === 'de' ? 'Vertragssprache' : 'Contract Language'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de'
                      ? 'Die Vertragssprache ist Deutsch. Bei Abweichungen zwischen deutscher und englischer Version gilt die deutsche Version.'
                      : 'The contract language is German. In case of discrepancies between the German and English versions, the German version shall prevail.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 2 - Leistungen & Leistungsumfang */}
          <section id="section-2" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Briefcase className="h-5 w-5 text-primary" />
                  § 2 {language === 'de' ? 'Leistungen & Leistungsumfang' : 'Services & Scope of Services'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 2.1 Leistungskategorien */}
                <div>
                  <h4 className="font-semibold mb-4">2.1 {language === 'de' ? 'Leistungskategorien' : 'Service Categories'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Transformation Programs */}
                    <Card className="border-purple-500/30 bg-purple-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Rocket className="h-4 w-4 text-purple-500" />
                          Transformation Programs
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>Power Up:</strong> €23.600 (30 {language === 'de' ? 'Tage' : 'days'})</div>
                        <div><strong>Boost:</strong> €60K-€78K (90 {language === 'de' ? 'Tage' : 'days'})</div>
                        <div><strong>Accelerate:</strong> €153K (12 {language === 'de' ? 'Monate' : 'months'})</div>
                      </CardContent>
                    </Card>

                    {/* Decision Support */}
                    <Card className="border-blue-500/30 bg-blue-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Target className="h-4 w-4 text-blue-500" />
                          Decision Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>Inflection Call:</strong> €0</div>
                        <div><strong>Expert Sessions:</strong> €490-€890</div>
                        <div><strong>Decision Reports:</strong> €1.900-€5.900</div>
                      </CardContent>
                    </Card>

                    {/* AI Tools & Training */}
                    <Card className="border-green-500/30 bg-green-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Bot className="h-4 w-4 text-green-500" />
                          AI Tools & Training
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>AI Copilots:</strong> €99-€299/{language === 'de' ? 'Monat' : 'month'}</div>
                        <div><strong>Training Playbooks:</strong> €499-€999</div>
                        <div><strong>Workshops:</strong> €9.600-€12.900</div>
                      </CardContent>
                    </Card>

                    {/* Bespoke Services */}
                    <Card className="border-orange-500/30 bg-orange-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Zap className="h-4 w-4 text-orange-500" />
                          Bespoke Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>Bespoke Strategy:</strong> €8K-€40K</div>
                        <div><strong>Bespoke Transformation:</strong> Custom</div>
                      </CardContent>
                    </Card>

                    {/* Retainer Advisory */}
                    <Card className="border-cyan-500/30 bg-cyan-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Users className="h-4 w-4 text-cyan-500" />
                          Retainer Advisory
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>Fractional COO:</strong> €3.9K-€11K/{language === 'de' ? 'Monat' : 'month'}</div>
                        <div><strong>Board Advisory:</strong> €2K-€6K/{language === 'de' ? 'Monat' : 'month'}</div>
                      </CardContent>
                    </Card>

                    {/* Portfolio Solutions */}
                    <Card className="border-pink-500/30 bg-pink-500/5">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <BarChart3 className="h-4 w-4 text-pink-500" />
                          Portfolio Solutions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1">
                        <div><strong>Assessment:</strong> €50K-€150K</div>
                        <div><strong>Transformation:</strong> €200K-€720K</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2.2 Leistungsbeschreibung */}
                <div>
                  <h4 className="font-semibold mb-3">2.2 {language === 'de' ? 'Leistungsbeschreibung' : 'Service Description'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>(1)</strong>{' '}
                      {language === 'de'
                        ? 'Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung, dem Statement of Work (SOW) oder dem Projektplan.'
                        : 'The specific scope of services results from the respective order confirmation, Statement of Work (SOW), or project plan.'}
                    </li>
                    <li>
                      <strong>(2)</strong>{' '}
                      {language === 'de'
                        ? 'ScalingX schuldet die Erbringung der vereinbarten Dienstleistungen nach bestem Wissen und Gewissen, jedoch keinen bestimmten wirtschaftlichen Erfolg, sofern nicht ausdrücklich anders vereinbart.'
                        : 'ScalingX owes the provision of agreed services to the best of its knowledge and belief, but not a specific economic success unless expressly agreed otherwise.'}
                    </li>
                    <li>
                      <strong>(3) {language === 'de' ? 'Outcome-Garantie' : 'Outcome Guarantee'}:</strong>{' '}
                      {language === 'de'
                        ? 'Bei Transformation Programs (Power Up, Boost, Accelerate) gilt die vereinbarte Outcome-Garantie (2 von 3 Outcomes/Metrics oder 50% Refund).'
                        : 'For Transformation Programs (Power Up, Boost, Accelerate), the agreed outcome guarantee applies (2 of 3 outcomes/metrics or 50% refund).'}
                    </li>
                  </ul>
                </div>

                {/* 2.3 Leistungsänderungen */}
                <div>
                  <h4 className="font-semibold mb-3">2.3 {language === 'de' ? 'Leistungsänderungen' : 'Service Changes'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>(1)</strong>{' '}
                      {language === 'de'
                        ? 'ScalingX ist berechtigt, die Art und Weise der Leistungserbringung zu ändern, sofern dies für den Kunden zumutbar ist.'
                        : 'ScalingX is entitled to change the manner of service provision if this is reasonable for the Customer.'}
                    </li>
                    <li>
                      <strong>(2)</strong>{' '}
                      {language === 'de'
                        ? 'Wesentliche Änderungen des Leistungsumfangs bedürfen der schriftlichen Zustimmung beider Parteien.'
                        : 'Material changes to the scope of services require written consent of both parties.'}
                    </li>
                    <li>
                      <strong>(3) Change Requests:</strong>{' '}
                      {language === 'de'
                        ? 'Änderungen auf Wunsch des Kunden werden nach Aufwand abgerechnet (€1.500 - €3.400 pro Tag, je nach Seniority).'
                        : 'Changes requested by the Customer are billed based on effort (€1,500 - €3,400 per day, depending on seniority).'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 3 - Mitwirkungspflichten */}
          <section id="section-3" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <UserCheck className="h-5 w-5 text-primary" />
                  § 3 {language === 'de' ? 'Mitwirkungspflichten des Kunden' : 'Customer Cooperation Obligations'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 3.1 Allgemeine */}
                <div>
                  <h4 className="font-semibold mb-3">3.1 {language === 'de' ? 'Allgemeine Mitwirkungspflichten' : 'General Cooperation Obligations'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>(1) {language === 'de' ? 'Zugang & Informationen' : 'Access & Information'}:</strong>{' '}
                      {language === 'de'
                        ? 'Rechtzeitiger Zugang zu allen erforderlichen Informationen, Daten, Systemen und Räumlichkeiten.'
                        : 'Timely access to all required information, data, systems, and premises.'}
                    </li>
                    <li>
                      <strong>(2) {language === 'de' ? 'Ansprechpartner' : 'Contact Person'}:</strong>{' '}
                      {language === 'de'
                        ? 'Benennung eines qualifizierten Ansprechpartners, der zur Entscheidung befugt ist.'
                        : 'Designation of a qualified contact person authorized to make decisions.'}
                    </li>
                    <li>
                      <strong>(3) {language === 'de' ? 'Zeitnahe Rückmeldung' : 'Timely Feedback'}:</strong>{' '}
                      {language === 'de'
                        ? 'Rückmeldungen und Freigaben innerhalb von 5 Werktagen.'
                        : 'Feedback and approvals within 5 business days.'}
                    </li>
                    <li>
                      <strong>(4) {language === 'de' ? 'Ressourcen' : 'Resources'}:</strong>{' '}
                      {language === 'de'
                        ? 'Bereitstellung der vereinbarten Ressourcen (z.B. Mitarbeiter, Daten, Tools).'
                        : 'Provision of agreed resources (e.g., employees, data, tools).'}
                    </li>
                  </ul>
                </div>

                {/* 3.2 Spezifische */}
                <div>
                  <h4 className="font-semibold mb-3">3.2 {language === 'de' ? 'Spezifische Mitwirkungspflichten' : 'Specific Cooperation Obligations'}</h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>{language === 'de' ? 'Programm' : 'Program'}</TableHead>
                        <TableHead>{language === 'de' ? 'Wöchentliche Mitwirkung' : 'Weekly Cooperation'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Power Up</TableCell>
                        <TableCell>10-20 {language === 'de' ? 'Stunden/Woche' : 'hours/week'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Boost</TableCell>
                        <TableCell>15-25 {language === 'de' ? 'Stunden/Woche' : 'hours/week'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Accelerate</TableCell>
                        <TableCell>20-30 {language === 'de' ? 'Stunden/Woche' : 'hours/week'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* 3.3 Folgen */}
                <div>
                  <h4 className="font-semibold mb-3">3.3 {language === 'de' ? 'Folgen fehlender Mitwirkung' : 'Consequences of Non-Cooperation'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>(1)</strong>{' '}
                      {language === 'de'
                        ? 'Bei fehlender Mitwirkung ist ScalingX berechtigt, die Leistungserbringung zu unterbrechen.'
                        : 'In case of non-cooperation, ScalingX is entitled to suspend service provision.'}
                    </li>
                    <li>
                      <strong>(2)</strong>{' '}
                      {language === 'de'
                        ? 'Die Vergütungspflicht des Kunden bleibt bestehen.'
                        : 'The Customer\'s payment obligation remains in effect.'}
                    </li>
                    <li>
                      <strong>(3)</strong>{' '}
                      {language === 'de'
                        ? 'Verzögerungen durch fehlende Mitwirkung gehen zu Lasten des Kunden.'
                        : 'Delays due to non-cooperation are at the Customer\'s expense.'}
                    </li>
                    <li>
                      <strong>(4) {language === 'de' ? 'Outcome-Garantie' : 'Outcome Guarantee'}:</strong>{' '}
                      {language === 'de'
                        ? 'Bei fehlender Mitwirkung entfällt die Outcome-Garantie.'
                        : 'The outcome guarantee is void in case of non-cooperation.'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 4 - Vergütung & Zahlungsbedingungen */}
          <section id="section-4" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <CreditCard className="h-5 w-5 text-primary" />
                  § 4 {language === 'de' ? 'Vergütung & Zahlungsbedingungen' : 'Remuneration & Payment Terms'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 4.1 Vergütung */}
                <div>
                  <h4 className="font-semibold mb-3">4.1 {language === 'de' ? 'Vergütung' : 'Remuneration'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Die Vergütung ergibt sich aus der jeweiligen Auftragsbestätigung oder dem SOW.' : 'Remuneration results from the respective order confirmation or SOW.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.' : 'All prices are subject to statutory VAT.'}</li>
                    <li><strong>(3) Stage-Based Pricing:</strong> {language === 'de' ? 'Bei Transformation Programs richtet sich die Vergütung nach der Entwicklungsstufe des Kunden.' : 'For Transformation Programs, remuneration depends on the Customer\'s development stage.'}</li>
                  </ul>
                </div>

                {/* 4.2 Zahlungsbedingungen */}
                <div>
                  <h4 className="font-semibold mb-4">4.2 {language === 'de' ? 'Zahlungsbedingungen' : 'Payment Terms'}</h4>
                  
                  {/* Transformation Programs */}
                  <p className="text-sm font-medium mb-2">Transformation Programs:</p>
                  <Table className="mb-6">
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>{language === 'de' ? 'Produkt' : 'Product'}</TableHead>
                        <TableHead>{language === 'de' ? 'Bei Vertragsschluss' : 'At Contract'}</TableHead>
                        <TableHead>Milestone 1</TableHead>
                        <TableHead>Milestone 2</TableHead>
                        <TableHead>{language === 'de' ? 'Abschluss' : 'Completion'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Power Up (€23.600)</TableCell>
                        <TableCell>50% (€11.800)</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>50% (€11.800)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Boost (€60K-€78K)</TableCell>
                        <TableCell>40%</TableCell>
                        <TableCell>30% (45 {language === 'de' ? 'Tage' : 'days'})</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>30% (90 {language === 'de' ? 'Tage' : 'days'})</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Accelerate (€153K)</TableCell>
                        <TableCell>25% (€38.250)</TableCell>
                        <TableCell>25% (3 {language === 'de' ? 'Mon.' : 'mo.'})</TableCell>
                        <TableCell>25% (6 {language === 'de' ? 'Mon.' : 'mo.'})</TableCell>
                        <TableCell>25% (12 {language === 'de' ? 'Mon.' : 'mo.'})</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  {/* Other Services */}
                  <p className="text-sm font-medium mb-2">{language === 'de' ? 'Weitere Leistungen' : 'Other Services'}:</p>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>{language === 'de' ? 'Produkt' : 'Product'}</TableHead>
                        <TableHead>{language === 'de' ? 'Zahlungsmodell' : 'Payment Model'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Expert Sessions</TableCell>
                        <TableCell>100% {language === 'de' ? 'im Voraus' : 'in advance'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Decision Reports</TableCell>
                        <TableCell>50% {language === 'de' ? 'bei Beauftragung' : 'at order'}, 50% {language === 'de' ? 'bei Lieferung' : 'at delivery'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Workshops</TableCell>
                        <TableCell>50% {language === 'de' ? 'bei Buchung' : 'at booking'}, 50% {language === 'de' ? '7 Tage vorher' : '7 days before'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AI Copilots / Retainer</TableCell>
                        <TableCell>{language === 'de' ? 'Monatlich im Voraus' : 'Monthly in advance'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Portfolio Solutions</TableCell>
                        <TableCell>50% {language === 'de' ? 'bei Beauftragung' : 'at order'}, 50% {language === 'de' ? 'bei Lieferung' : 'at delivery'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* 4.3 Zahlungsfrist & Verzug */}
                <div>
                  <h4 className="font-semibold mb-3">4.3 {language === 'de' ? 'Zahlungsfrist & Verzug' : 'Payment Deadline & Default'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.' : 'Invoices are due for payment within 14 days of the invoice date without deduction.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'Bei Zahlungsverzug ist ScalingX berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu berechnen.' : 'In case of payment default, ScalingX is entitled to charge default interest at 9 percentage points above the base rate.'}</li>
                    <li><strong>(3)</strong> {language === 'de' ? 'Bei Zahlungsverzug ist ScalingX berechtigt, die Leistungserbringung zu unterbrechen.' : 'In case of payment default, ScalingX is entitled to suspend service provision.'}</li>
                  </ul>
                </div>

                {/* 4.4 & 4.5 */}
                <div>
                  <h4 className="font-semibold mb-3">4.4 {language === 'de' ? 'Aufrechnung & Zurückbehaltung' : 'Set-off & Retention'}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'de'
                      ? 'Der Kunde ist nur zur Aufrechnung berechtigt, wenn seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder von ScalingX anerkannt sind.'
                      : 'The Customer is only entitled to set-off if their counterclaims have been legally established, are undisputed, or have been acknowledged by ScalingX.'}
                  </p>

                  <h4 className="font-semibold mb-3">4.5 {language === 'de' ? 'Reisekosten & Auslagen' : 'Travel Costs & Expenses'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {language === 'de' ? 'Bahn: 1. Klasse (innerhalb Deutschland)' : 'Rail: 1st class (within Germany)'}</li>
                    <li>• {language === 'de' ? 'Flug: Economy Class (international)' : 'Flight: Economy Class (international)'}</li>
                    <li>• Hotel: {language === 'de' ? 'Bis' : 'Up to'} €200/{language === 'de' ? 'Nacht' : 'night'}</li>
                    <li>• {language === 'de' ? 'Mietwagen: Mittelklasse' : 'Rental car: Mid-range'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 5 - Vertragslaufzeit & Kündigung */}
          <section id="section-5" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  § 5 {language === 'de' ? 'Vertragslaufzeit & Kündigung' : 'Contract Duration & Termination'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 5.1 Vertragslaufzeit */}
                <div>
                  <h4 className="font-semibold mb-3">5.1 {language === 'de' ? 'Vertragslaufzeit' : 'Contract Duration'}</h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>{language === 'de' ? 'Produkt' : 'Product'}</TableHead>
                        <TableHead>{language === 'de' ? 'Laufzeit' : 'Duration'}</TableHead>
                        <TableHead>{language === 'de' ? 'Kündigungsfrist' : 'Notice Period'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Power Up</TableCell>
                        <TableCell>30 {language === 'de' ? 'Tage (fest)' : 'days (fixed)'}</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Boost</TableCell>
                        <TableCell>90 {language === 'de' ? 'Tage (fest)' : 'days (fixed)'}</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Accelerate</TableCell>
                        <TableCell>12 {language === 'de' ? 'Monate (fest)' : 'months (fixed)'}</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AI Copilots</TableCell>
                        <TableCell>{language === 'de' ? 'Monatlich' : 'Monthly'}</TableCell>
                        <TableCell>30 {language === 'de' ? 'Tage' : 'days'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fractional COO</TableCell>
                        <TableCell>{language === 'de' ? 'Min. 3 Monate' : 'Min. 3 months'}</TableCell>
                        <TableCell>30 {language === 'de' ? 'Tage' : 'days'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Board Advisory</TableCell>
                        <TableCell>{language === 'de' ? 'Min. 12 Monate' : 'Min. 12 months'}</TableCell>
                        <TableCell>60 {language === 'de' ? 'Tage' : 'days'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* 5.2 Ordentliche Kündigung */}
                <div>
                  <h4 className="font-semibold mb-3">5.2 {language === 'de' ? 'Ordentliche Kündigung' : 'Ordinary Termination'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Transformation Programs: Keine ordentliche Kündigung während der Festlaufzeit.' : 'Transformation Programs: No ordinary termination during fixed term.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'Retainer Advisory: Kündigung nach Ablauf der Mindestlaufzeit mit vereinbarter Kündigungsfrist.' : 'Retainer Advisory: Termination after minimum term with agreed notice period.'}</li>
                    <li><strong>(3)</strong> {language === 'de' ? 'AI Copilots: Kündigung jederzeit zum Monatsende (30 Tage Kündigungsfrist).' : 'AI Copilots: Termination at any time at month-end (30 days notice).'}</li>
                  </ul>
                </div>

                {/* 5.3 Außerordentliche Kündigung */}
                <div>
                  <h4 className="font-semibold mb-3">5.3 {language === 'de' ? 'Außerordentliche Kündigung' : 'Extraordinary Termination'}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'de'
                      ? 'Beide Parteien sind zur außerordentlichen Kündigung aus wichtigem Grund berechtigt.'
                      : 'Both parties are entitled to extraordinary termination for good cause.'}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-3 rounded-lg text-sm">
                      <p className="font-medium mb-2">{language === 'de' ? 'Wichtige Gründe für ScalingX:' : 'Good cause for ScalingX:'}</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• {language === 'de' ? 'Zahlungsverzug > 30 Tage' : 'Payment default > 30 days'}</li>
                        <li>• {language === 'de' ? 'Wesentliche Verletzung der Mitwirkungspflichten' : 'Material breach of cooperation obligations'}</li>
                        <li>• {language === 'de' ? 'Insolvenz des Kunden' : 'Customer insolvency'}</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg text-sm">
                      <p className="font-medium mb-2">{language === 'de' ? 'Wichtige Gründe für den Kunden:' : 'Good cause for Customer:'}</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• {language === 'de' ? 'Wesentliche Vertragsverletzung durch ScalingX' : 'Material contract breach by ScalingX'}</li>
                        <li>• {language === 'de' ? 'Insolvenz von ScalingX' : 'ScalingX insolvency'}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5.4 Folgen der Kündigung */}
                <div>
                  <h4 className="font-semibold mb-3">5.4 {language === 'de' ? 'Folgen der Kündigung' : 'Consequences of Termination'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1) {language === 'de' ? 'Ordentliche Kündigung' : 'Ordinary termination'}:</strong> {language === 'de' ? 'Bereits erbrachte Leistungen werden abgerechnet.' : 'Services already rendered are billed.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Außerordentliche Kündigung durch ScalingX' : 'Extraordinary termination by ScalingX'}:</strong> {language === 'de' ? 'Volle Vergütung für bereits erbrachte Leistungen, keine Rückerstattung von Vorauszahlungen.' : 'Full payment for services rendered, no refund of advance payments.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Außerordentliche Kündigung durch Kunden' : 'Extraordinary termination by Customer'}:</strong> {language === 'de' ? 'Vergütung für bereits erbrachte Leistungen, anteilige Rückerstattung nicht genutzter Vorauszahlungen.' : 'Payment for services rendered, pro-rata refund of unused advance payments.'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 6 - Geistiges Eigentum */}
          <section id="section-6" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  § 6 {language === 'de' ? 'Geistiges Eigentum & Nutzungsrechte' : 'Intellectual Property & Usage Rights'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 6.1 Geistiges Eigentum von ScalingX */}
                <div>
                  <h4 className="font-semibold mb-3">6.1 {language === 'de' ? 'Geistiges Eigentum von ScalingX' : 'ScalingX Intellectual Property'}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'de'
                      ? 'Alle im Rahmen der Leistungserbringung verwendeten Methoden, Frameworks, Tools, Templates und Materialien sind und bleiben geistiges Eigentum von ScalingX:'
                      : 'All methods, frameworks, tools, templates, and materials used in service provision are and remain the intellectual property of ScalingX:'}
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">{language === 'de' ? 'Geschützte IP:' : 'Protected IP:'}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-Native Scaling Framework (Architecture Document v4.5.3)</li>
                      <li>• AI Maturity Framework (AMF v4.5.1)</li>
                      <li>• AI-Native Scaling Theory (ANST v4.5.3)</li>
                      <li>• Scaling Stack Theory (SST v4.5.1)</li>
                      <li>• θ_index (Theta-Index) Scoring Methodology</li>
                      <li>• {language === 'de' ? 'Alle Playbooks, Templates, Tools und Checklisten' : 'All Playbooks, Templates, Tools, and Checklists'}</li>
                    </ul>
                  </div>
                </div>

                {/* 6.2 Nutzungsrechte des Kunden */}
                <div>
                  <h4 className="font-semibold mb-3">6.2 {language === 'de' ? 'Nutzungsrechte des Kunden' : 'Customer Usage Rights'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Der Kunde erhält ein nicht-exklusives, nicht übertragbares, zeitlich unbegrenztes Nutzungsrecht an den im Rahmen des Projekts erstellten Deliverables.' : 'The Customer receives a non-exclusive, non-transferable, perpetual right of use for deliverables created during the project.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Umfang' : 'Scope'}:</strong> {language === 'de' ? 'Nutzung für interne Zwecke, keine Weitergabe an Dritte ohne Zustimmung, keine kommerzielle Verwertung.' : 'Use for internal purposes, no transfer to third parties without consent, no commercial exploitation.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Ausnahmen' : 'Exceptions'}:</strong> {language === 'de' ? 'Weitergabe an Investoren, Board Members und Berater (unter Vertraulichkeit) sowie Nutzung für Fundraising-Zwecke erlaubt.' : 'Transfer to investors, board members, and advisors (under confidentiality) and use for fundraising purposes is permitted.'}</li>
                  </ul>
                </div>

                {/* 6.3 & 6.4 */}
                <div>
                  <h4 className="font-semibold mb-3">6.3 {language === 'de' ? 'Nutzungsrechte von ScalingX' : 'ScalingX Usage Rights'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'ScalingX darf gewonnene Erkenntnisse anonymisiert für eigene Zwecke nutzen.' : 'ScalingX may use insights gained anonymously for its own purposes.'}</li>
                    <li><strong>(2) Case Studies:</strong> {language === 'de' ? 'Anonymisierte Case Studies erlaubt, sofern der Kunde nicht widerspricht.' : 'Anonymized case studies permitted unless the Customer objects.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Referenzen' : 'References'}:</strong> {language === 'de' ? 'Nennung als Referenz mit Zustimmung des Kunden.' : 'Reference naming with Customer consent.'}</li>
                  </ul>

                  <h4 className="font-semibold mb-3 mt-6">6.4 {language === 'de' ? 'Kundendaten' : 'Customer Data'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Alle vom Kunden bereitgestellten Daten bleiben Eigentum des Kunden.' : 'All data provided by the Customer remains the Customer\'s property.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'ScalingX darf Kundendaten für die Leistungserbringung nutzen.' : 'ScalingX may use Customer data for service provision.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Kein AI-Training' : 'No AI Training'}:</strong> {language === 'de' ? 'ScalingX nutzt Kundendaten NICHT für das Training von AI-Modellen.' : 'ScalingX does NOT use Customer data for training AI models.'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 7 - Vertraulichkeit & Datenschutz */}
          <section id="section-7" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lock className="h-5 w-5 text-primary" />
                  § 7 {language === 'de' ? 'Vertraulichkeit & Datenschutz' : 'Confidentiality & Data Protection'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 7.1 Vertraulichkeit */}
                <div>
                  <h4 className="font-semibold mb-3">7.1 {language === 'de' ? 'Vertraulichkeit' : 'Confidentiality'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung erlangten vertraulichen Informationen streng vertraulich zu behandeln.' : 'Both parties undertake to treat all confidential information obtained in the course of the business relationship as strictly confidential.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Vertrauliche Informationen' : 'Confidential Information'}:</strong> {language === 'de' ? 'Geschäftsgeheimnisse, Strategien, Finanzdaten, technische Informationen, Kundenlisten.' : 'Trade secrets, strategies, financial data, technical information, customer lists.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Ausnahmen' : 'Exceptions'}:</strong> {language === 'de' ? 'Öffentlich bekannte Informationen, rechtlich erforderliche Offenlegungen, Weitergabe mit Zustimmung.' : 'Publicly known information, legally required disclosures, transfer with consent.'}</li>
                    <li><strong>(4) {language === 'de' ? 'Dauer' : 'Duration'}:</strong> {language === 'de' ? 'Die Vertraulichkeitspflicht gilt während der Vertragslaufzeit und 5 Jahre nach Vertragsende.' : 'The confidentiality obligation applies during the contract term and 5 years after termination.'}</li>
                  </ul>
                </div>

                {/* 7.2 Datenschutz */}
                <div>
                  <h4 className="font-semibold mb-3">7.2 {language === 'de' ? 'Datenschutz' : 'Data Protection'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'ScalingX verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der DSGVO.' : 'ScalingX processes Customer personal data exclusively in accordance with the GDPR.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Auftragsverarbeitung' : 'Order Processing'}:</strong> {language === 'de' ? 'Bei Auftragsverarbeitung wird ein separater AVV geschlossen.' : 'For order processing, a separate DPA is concluded.'}</li>
                    <li><strong>(3) {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}:</strong> <Link to="/datenschutz" className="text-primary hover:underline">scalingx.io/datenschutz</Link></li>
                  </ul>
                </div>

                {/* 7.3 Subunternehmer */}
                <div>
                  <h4 className="font-semibold mb-3">7.3 {language === 'de' ? 'Subunternehmer' : 'Subcontractors'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'ScalingX ist berechtigt, Subunternehmer einzusetzen.' : 'ScalingX is entitled to use subcontractors.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'ScalingX verpflichtet Subunternehmer zur Einhaltung der gleichen Standards.' : 'ScalingX obliges subcontractors to comply with the same standards.'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 8 - Haftung & Gewährleistung */}
          <section id="section-8" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  § 8 {language === 'de' ? 'Haftung & Gewährleistung' : 'Liability & Warranty'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 8.1 Haftung */}
                <div>
                  <h4 className="font-semibold mb-3">8.1 {language === 'de' ? 'Haftung' : 'Liability'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1) {language === 'de' ? 'Unbeschränkte Haftung' : 'Unlimited Liability'}:</strong> {language === 'de' ? 'Bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz, bei Übernahme einer Garantie.' : 'For intent, gross negligence, injury to life, body, or health, under the Product Liability Act, when assuming a guarantee.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Leichte Fahrlässigkeit' : 'Slight Negligence'}:</strong> {language === 'de' ? 'Nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren, vertragstypischen Schaden, max. bis zur Höhe der Auftragssumme (max. €500.000).' : 'Only for breach of essential contractual obligations (cardinal duties), limited to foreseeable, contract-typical damage, max. up to the order value (max. €500,000).'}</li>
                    <li><strong>(3) {language === 'de' ? 'Ausschluss' : 'Exclusion'}:</strong> {language === 'de' ? 'Haftung für entgangenen Gewinn, Folgeschäden und mittelbare Schäden ist ausgeschlossen, soweit gesetzlich zulässig.' : 'Liability for lost profits, consequential damages, and indirect damages is excluded to the extent permitted by law.'}</li>
                  </ul>
                </div>

                {/* 8.2 Gewährleistung */}
                <div>
                  <h4 className="font-semibold mb-3">8.2 {language === 'de' ? 'Gewährleistung' : 'Warranty'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'ScalingX gewährleistet, dass die Leistungen mit der erforderlichen Sorgfalt und nach dem Stand der Technik erbracht werden.' : 'ScalingX warrants that services are provided with due care and according to the state of the art.'}</li>
                    <li><strong>(2) {language === 'de' ? 'Mängel' : 'Defects'}:</strong> {language === 'de' ? 'Der Kunde hat Mängel unverzüglich schriftlich zu rügen (innerhalb von 14 Tagen nach Leistungserbringung).' : 'The Customer must report defects immediately in writing (within 14 days of service provision).'}</li>
                    <li><strong>(3) {language === 'de' ? 'Nacherfüllung' : 'Subsequent Performance'}:</strong> {language === 'de' ? 'Bei berechtigten Mängelrügen hat ScalingX das Recht zur Nacherfüllung.' : 'In case of justified defect claims, ScalingX has the right to subsequent performance.'}</li>
                    <li><strong>(4)</strong> {language === 'de' ? 'Erst nach erfolgloser Nacherfüllung ist der Kunde zur Minderung oder zum Rücktritt berechtigt.' : 'Only after unsuccessful subsequent performance is the Customer entitled to reduction or withdrawal.'}</li>
                  </ul>
                </div>

                {/* 8.3 Outcome-Garantie */}
                <Card className="border-green-500/30 bg-green-500/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      8.3 {language === 'de' ? 'Outcome-Garantie' : 'Outcome Guarantee'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'de'
                        ? 'Bei Transformation Programs (Power Up, Boost, Accelerate) gilt die vereinbarte Outcome-Garantie:'
                        : 'For Transformation Programs (Power Up, Boost, Accelerate), the agreed outcome guarantee applies:'}
                    </p>
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-green-500/10">
                          <TableHead>{language === 'de' ? 'Programm' : 'Program'}</TableHead>
                          <TableHead>{language === 'de' ? 'Garantie' : 'Guarantee'}</TableHead>
                          <TableHead>{language === 'de' ? 'Bei Nichterreichung' : 'If Not Achieved'}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Power Up</TableCell>
                          <TableCell>2 {language === 'de' ? 'von' : 'of'} 3 Outcomes</TableCell>
                          <TableCell>50% Refund</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Boost</TableCell>
                          <TableCell>2 {language === 'de' ? 'von' : 'of'} 3 Outcomes</TableCell>
                          <TableCell>50% Refund</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Accelerate</TableCell>
                          <TableCell>2 {language === 'de' ? 'von' : 'of'} 3 Metrics</TableCell>
                          <TableCell>50% Refund</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="font-medium mb-2">{language === 'de' ? 'Voraussetzungen:' : 'Prerequisites:'}</p>
                      <ul className="space-y-1">
                        <li>• {language === 'de' ? 'Volle Mitwirkung des Kunden (siehe § 3)' : 'Full Customer cooperation (see § 3)'}</li>
                        <li>• {language === 'de' ? 'Messung der Outcomes nach vereinbarter Methodik' : 'Measurement of outcomes according to agreed methodology'}</li>
                        <li>• {language === 'de' ? 'Schriftliche Geltendmachung innerhalb von 30 Tagen nach Projektende' : 'Written claim within 30 days of project end'}</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* 8.4 Verjährung */}
                <div>
                  <h4 className="font-semibold mb-3">8.4 {language === 'de' ? 'Verjährung' : 'Limitation Period'}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de'
                      ? 'Gewährleistungsansprüche verjähren nach 12 Monaten ab Leistungserbringung, soweit gesetzlich nicht zwingend längere Fristen gelten.'
                      : 'Warranty claims expire after 12 months from service provision, unless longer periods are mandatorily required by law.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 9 - Höhere Gewalt */}
          <section id="section-9" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  § 9 {language === 'de' ? 'Höhere Gewalt' : 'Force Majeure'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 9.1 Definition */}
                <div>
                  <h4 className="font-semibold mb-3">9.1 {language === 'de' ? 'Definition' : 'Definition'}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'de'
                      ? 'Als höhere Gewalt gelten unvorhersehbare, außergewöhnliche Ereignisse, die außerhalb der Kontrolle der Parteien liegen:'
                      : 'Force majeure refers to unforeseeable, extraordinary events beyond the control of the parties:'}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {language === 'de' ? 'Naturkatastrophen (Erdbeben, Überschwemmungen, Stürme)' : 'Natural disasters (earthquakes, floods, storms)'}</li>
                    <li>• {language === 'de' ? 'Krieg, Terrorismus, Aufstände' : 'War, terrorism, riots'}</li>
                    <li>• {language === 'de' ? 'Pandemien, Epidemien' : 'Pandemics, epidemics'}</li>
                    <li>• {language === 'de' ? 'Streiks, Aussperrungen' : 'Strikes, lockouts'}</li>
                    <li>• {language === 'de' ? 'Behördliche Anordnungen, Embargos' : 'Official orders, embargoes'}</li>
                  </ul>
                </div>

                {/* 9.2 Folgen */}
                <div>
                  <h4 className="font-semibold mb-3">9.2 {language === 'de' ? 'Folgen' : 'Consequences'}</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>(1)</strong> {language === 'de' ? 'Bei höherer Gewalt sind beide Parteien von ihren Leistungspflichten befreit, solange die höhere Gewalt andauert.' : 'In case of force majeure, both parties are released from their performance obligations for the duration of the force majeure.'}</li>
                    <li><strong>(2)</strong> {language === 'de' ? 'Die betroffene Partei hat die andere Partei unverzüglich zu informieren.' : 'The affected party must inform the other party immediately.'}</li>
                    <li><strong>(3)</strong> {language === 'de' ? 'Dauert die höhere Gewalt länger als 3 Monate, ist jede Partei zum Rücktritt berechtigt.' : 'If force majeure lasts longer than 3 months, either party is entitled to withdraw.'}</li>
                    <li><strong>(4)</strong> {language === 'de' ? 'Bereits erbrachte Leistungen werden anteilig vergütet.' : 'Services already rendered are paid pro rata.'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* § 10 - Schlussbestimmungen */}
          <section id="section-10" className="mb-10 scroll-mt-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Scale className="h-5 w-5 text-primary" />
                  § 10 {language === 'de' ? 'Schlussbestimmungen' : 'Final Provisions'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 10.1-10.4 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">10.1 {language === 'de' ? 'Änderungen & Ergänzungen' : 'Amendments'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Änderungen dieser AGB bedürfen der Schriftform. ScalingX kann diese AGB mit 4 Wochen Frist ändern.'
                        : 'Amendments to these Terms require written form. ScalingX may amend these Terms with 4 weeks notice.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">10.2 {language === 'de' ? 'Salvatorische Klausel' : 'Severability Clause'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.'
                        : 'Should individual provisions be invalid, the validity of the remaining provisions remains unaffected.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">10.3 {language === 'de' ? 'Anwendbares Recht' : 'Applicable Law'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).'
                        : 'The law of the Federal Republic of Germany applies exclusively, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">10.4 {language === 'de' ? 'Gerichtsstand' : 'Jurisdiction'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Gerichtsstand für alle Streitigkeiten ist Berlin, sofern der Kunde Kaufmann ist.'
                        : 'The place of jurisdiction for all disputes is Berlin, provided the Customer is a merchant.'}
                    </p>
                  </div>
                </div>

                {/* 10.5 Streitbeilegung */}
                <div>
                  <h4 className="font-semibold mb-2">10.5 {language === 'de' ? 'Streitbeilegung' : 'Dispute Resolution'}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'de'
                      ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
                      : 'The European Commission provides a platform for online dispute resolution (ODR):'}
                  </p>
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    ec.europa.eu/consumers/odr
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === 'de'
                      ? 'ScalingX ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                      : 'ScalingX is not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.'}
                  </p>
                </div>

                {/* 10.6-10.7 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">10.6 {language === 'de' ? 'Übertragung' : 'Transfer'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Der Kunde ist nicht berechtigt, Rechte und Pflichten ohne vorherige schriftliche Zustimmung von ScalingX auf Dritte zu übertragen.'
                        : 'The Customer is not entitled to transfer rights and obligations to third parties without prior written consent from ScalingX.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">10.7 {language === 'de' ? 'Vertragssprache' : 'Contract Language'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de'
                        ? 'Die Vertragssprache ist Deutsch. Bei Abweichungen gilt die deutsche Fassung.'
                        : 'The contract language is German. In case of deviations, the German version shall prevail.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Phone className="h-5 w-5 text-primary" />
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'de'
                  ? 'Bei Fragen zu diesen AGB wenden Sie sich bitte an:'
                  : 'For questions about these Terms, please contact:'}
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm space-y-1">
                <p className="font-semibold">ScalingX Hypergrowth GmbH</p>
                <p>Michel Lason</p>
                <p>Markgrafendamm 4</p>
                <p>10245 Berlin, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
                <p className="flex items-center gap-2 mt-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@scalingx.io" className="text-primary hover:underline">info@scalingx.io</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+491727355891" className="text-primary hover:underline">+49 172 735 58 91</a>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a href="https://scalingx.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">scalingx.io</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Footer */}
          <div className="mt-16 text-center border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-2">
              {language === 'de' ? 'Stand: 1. Februar 2026 | Version 1.0' : 'As of: February 1, 2026 | Version 1.0'}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              © 2026 ScalingX Hypergrowth GmbH. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">BGB-{language === 'de' ? 'konform' : 'compliant'}</Badge>
              <Badge variant="outline">AGB-{language === 'de' ? 'Kontrolle' : 'Control'}</Badge>
              <Badge variant="outline">DSGVO-{language === 'de' ? 'konform' : 'compliant'}</Badge>
              <Badge variant="outline">{language === 'de' ? 'Transparenzgebot' : 'Transparency'}</Badge>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;
