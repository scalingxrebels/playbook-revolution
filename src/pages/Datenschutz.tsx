import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ArrowLeft,
  Building2,
  User,
  Database,
  Users,
  Target,
  Scale,
  Shield,
  Server,
  FileText,
  Calendar,
  Mail,
  BarChart3,
  Cookie,
  Briefcase,
  Cloud,
  Bot,
  Calculator,
  Share2,
  FileCheck,
  UserPlus,
  HardDrive,
  Globe,
  Clock,
  CheckCircle,
  Lock,
  Phone,
  ExternalLink,
  CreditCard,
} from 'lucide-react';

const Datenschutz: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const dataSubjectRights = [
    {
      article: 'Art. 15 DSGVO',
      titleDe: 'Auskunftsrecht',
      titleEn: 'Right of Access',
      descDe: 'Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie weitere Informationen und Kopie der Daten.',
      descEn: 'You have the right to request confirmation as to whether relevant data is being processed and to obtain information about this data as well as further information and a copy of the data.',
    },
    {
      article: 'Art. 16 DSGVO',
      titleDe: 'Berichtigungsrecht',
      titleEn: 'Right to Rectification',
      descDe: 'Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.',
      descEn: 'You have the right to request the completion of data concerning you or the rectification of inaccurate data concerning you.',
    },
    {
      article: 'Art. 17 DSGVO',
      titleDe: 'Löschungsrecht',
      titleEn: 'Right to Erasure',
      descDe: 'Sie haben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ eine Einschränkung der Verarbeitung der Daten zu verlangen.',
      descEn: 'You have the right to request that relevant data be deleted immediately, or alternatively to request restriction of processing of the data.',
    },
    {
      article: 'Art. 18 DSGVO',
      titleDe: 'Einschränkungsrecht',
      titleEn: 'Right to Restriction',
      descDe: 'Sie haben das Recht zu verlangen, dass die Verarbeitung Ihrer Daten eingeschränkt wird.',
      descEn: 'You have the right to request that the processing of your data be restricted.',
    },
    {
      article: 'Art. 20 DSGVO',
      titleDe: 'Datenübertragbarkeit',
      titleEn: 'Right to Data Portability',
      descDe: 'Sie haben das Recht, die Sie betreffenden Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.',
      descEn: 'You have the right to receive the data concerning you that you have provided to us in a structured, commonly used, and machine-readable format and to request its transmission to other controllers.',
    },
    {
      article: 'Art. 7 Abs. 3 DSGVO',
      titleDe: 'Widerrufsrecht',
      titleEn: 'Right to Withdraw Consent',
      descDe: 'Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.',
      descEn: 'You have the right to withdraw consent with effect for the future.',
    },
    {
      article: 'Art. 21 DSGVO',
      titleDe: 'Widerspruchsrecht',
      titleEn: 'Right to Object',
      descDe: 'Sie können der künftigen Verarbeitung der Sie betreffenden Daten jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.',
      descEn: 'You can object to the future processing of data concerning you at any time. The objection can be made in particular against processing for direct marketing purposes.',
    },
    {
      article: 'Art. 77 DSGVO',
      titleDe: 'Beschwerderecht',
      titleEn: 'Right to Lodge a Complaint',
      descDe: 'Sie haben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.',
      descEn: 'You have the right to lodge a complaint with the competent supervisory authority.',
    },
  ];

  const retentionPeriods = [
    {
      typeDe: 'Kundendaten',
      typeEn: 'Customer Data',
      periodDe: '10 Jahre',
      periodEn: '10 years',
      basisDe: '§ 147 AO',
      basisEn: '§ 147 AO (German Tax Code)',
    },
    {
      typeDe: 'Bewerberdaten',
      typeEn: 'Applicant Data',
      periodDe: 'Max. 6 Monate',
      periodEn: 'Max. 6 months',
      basisDe: '§ 26 BDSG',
      basisEn: '§ 26 BDSG (German Data Protection Act)',
    },
    {
      typeDe: 'Newsletter-Daten',
      typeEn: 'Newsletter Data',
      periodDe: 'Bis zur Abmeldung',
      periodEn: 'Until unsubscription',
      basisDe: 'Art. 7 Abs. 3 DSGVO',
      basisEn: 'Art. 7(3) GDPR',
    },
    {
      typeDe: 'Log-Dateien',
      typeEn: 'Log Files',
      periodDe: 'Max. 7 Tage',
      periodEn: 'Max. 7 days',
      basisDe: 'Art. 6 Abs. 1 lit. f DSGVO',
      basisEn: 'Art. 6(1)(f) GDPR',
    },
    {
      typeDe: 'Analytics-Daten',
      typeEn: 'Analytics Data',
      periodDe: '14 Monate',
      periodEn: '14 months',
      basisDe: 'GA4 Standard',
      basisEn: 'GA4 Standard',
    },
    {
      typeDe: 'Kontaktanfragen',
      typeEn: 'Contact Inquiries',
      periodDe: '2 Jahre (Überprüfung)',
      periodEn: '2 years (review)',
      basisDe: 'Art. 6 Abs. 1 lit. f DSGVO',
      basisEn: 'Art. 6(1)(f) GDPR',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-5xl mx-auto px-4 py-24">
        {/* Header */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 -ml-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'de' ? 'Zurück' : 'Back'}
        </Button>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="outline">GDPR</Badge>
          <Badge variant="outline">BDSG</Badge>
          <Badge variant="outline">v1.0</Badge>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic mb-4">
          {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        <p className="text-muted-foreground mb-8">
          {language === 'de' 
            ? 'Stand: 1. Februar 2026 • ScalingX Hypergrowth GmbH'
            : 'Last updated: February 1, 2026 • ScalingX Hypergrowth GmbH'}
        </p>

        {/* Preamble */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Einleitung' : 'Preamble'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unserer Social Media Profile (nachfolgend gemeinsam bezeichnet als „Onlineangebot"), auf.'
                : 'This Privacy Policy explains the type, scope, and purpose of the processing of personal data (hereinafter referred to as "Data") within the scope of providing our services and within our online offering and the associated websites, functions, and content as well as external online presences, such as our social media profiles (hereinafter collectively referred to as "Online Offering").'}
            </p>
            <p>
              {language === 'de'
                ? 'Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).'
                : 'With regard to the terms used, such as "Processing" or "Controller," we refer to the definitions in Art. 4 of the General Data Protection Regulation (GDPR).'}
            </p>
          </CardContent>
        </Card>

        {/* Controller */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Building2 className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Verantwortlicher' : 'Controller'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            <div className="space-y-2">
              <p className="font-semibold">ScalingX Hypergrowth GmbH</p>
              <p>Markgrafendamm 4<br />10245 Berlin<br />{language === 'de' ? 'Deutschland' : 'Germany'}</p>
              <p className="pt-2">
                <span className="text-muted-foreground">{language === 'de' ? 'Geschäftsführer:' : 'Managing Director:'}</span> Michel Lason
              </p>
              <p>
                <span className="text-muted-foreground">{language === 'de' ? 'Handelsregister:' : 'Commercial Register:'}</span> Amtsgericht Berlin-Charlottenburg, HRB 271376 B
              </p>
              <p>
                <span className="text-muted-foreground">{language === 'de' ? 'USt-IdNr:' : 'VAT ID:'}</span> DE452811403
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="mailto:info@scalingx.io" className="flex items-center gap-2 text-accent hover:underline">
                  <Mail className="h-4 w-4" />
                  info@scalingx.io
                </a>
                <a href="tel:+491727355891" className="flex items-center gap-2 text-accent hover:underline">
                  <Phone className="h-4 w-4" />
                  +49 172 735 58 91
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection Contact */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <User className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Datenschutz-Ansprechpartner' : 'Data Protection Contact'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-3">
            <p>
              <span className="font-semibold">Michel Lason</span><br />
              Markgrafendamm 4, 10245 Berlin
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href="mailto:info@scalingx.io" className="text-accent hover:underline">info@scalingx.io</a>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {language === 'de'
                ? 'Hinweis: Wir haben derzeit keinen Datenschutzbeauftragten bestellt, da wir die gesetzlichen Voraussetzungen hierfür nicht erfüllen (weniger als 20 Mitarbeiter, keine umfangreiche Verarbeitung besonderer Kategorien personenbezogener Daten).'
                : 'Note: We have not currently appointed a Data Protection Officer as we do not meet the legal requirements (fewer than 20 employees, no extensive processing of special categories of personal data).'}
            </p>
          </CardContent>
        </Card>

        {/* Types of Data Processed */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Database className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Arten der verarbeiteten Daten' : 'Types of Data Processed'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Bestandsdaten (Namen, Adressen, Unternehmen, Positionen)' : 'Master Data (names, addresses, companies, positions)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Kontaktdaten (E-Mail, Telefonnummern)' : 'Contact Data (email, phone numbers)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Inhaltsdaten (Texteingaben in Formularen, Nachrichten)' : 'Content Data (form entries, messages)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Vertragsdaten (Vertragsgegenstand, Laufzeit, Rechnungsdaten)' : 'Contract Data (subject matter, term, invoice data)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Zahlungsdaten (Bankverbindung, Zahlungshistorie)' : 'Payment Data (bank details, payment history)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Nutzungsdaten (besuchte Seiten, Zugriffszeiten)' : 'Usage Data (visited pages, access times)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Meta-/Kommunikationsdaten (Geräteinfo, IP-Adressen)' : 'Meta/Communication Data (device info, IP addresses)'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Bewerberdaten (Lebenslauf, Zeugnisse, Anschreiben)' : 'Applicant Data (CV, certificates, cover letter)'}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Categories of Data Subjects */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Users className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Kategorien betroffener Personen' : 'Categories of Data Subjects'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Besucher und Nutzer des Onlineangebotes' : 'Visitors and users of the online offering'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Interessenten und potenzielle Kunden' : 'Prospects and potential customers'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Kunden und Geschäftspartner' : 'Customers and business partners'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Bewerber' : 'Applicants'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Newsletter-Abonnenten' : 'Newsletter subscribers'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Ansprechpartner bei Geschäftspartnern' : 'Contact persons at business partners'}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Purposes of Processing */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Target className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Zwecke der Verarbeitung' : 'Purposes of Processing'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Bereitstellung des Onlineangebotes und seiner Inhalte' : 'Provision of the online offering and its content'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Beantwortung von Kontaktanfragen' : 'Responding to contact requests'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Erbringung vertraglicher Leistungen' : 'Provision of contractual services'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Marketing, Werbung und Marktforschung' : 'Marketing, advertising, and market research'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Sicherheitsmaßnahmen und Missbrauchsprävention' : 'Security measures and abuse prevention'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Reichweitenmessung und Analyse' : 'Reach measurement and analysis'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Erfüllung rechtlicher Verpflichtungen' : 'Fulfillment of legal obligations'}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Bewerbungsverfahren' : 'Application procedures'}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Legal Basis */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Scale className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Rechtsgrundlagen' : 'Legal Basis'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit:'
                : 'In accordance with Art. 13 GDPR, we inform you of the legal basis for our data processing:'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0 mt-0.5">Art. 6(1)(a)</Badge>
                <span>{language === 'de' ? 'Einwilligung der betroffenen Person' : 'Consent of the data subject'}</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0 mt-0.5">Art. 6(1)(b)</Badge>
                <span>{language === 'de' ? 'Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen' : 'Performance of a contract or pre-contractual measures'}</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0 mt-0.5">Art. 6(1)(c)</Badge>
                <span>{language === 'de' ? 'Erfüllung rechtlicher Verpflichtungen' : 'Compliance with legal obligations'}</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="shrink-0 mt-0.5">Art. 6(1)(f)</Badge>
                <span>{language === 'de' ? 'Wahrung berechtigter Interessen' : 'Legitimate interests'}</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              {language === 'de'
                ? 'Berechtigte Interessen umfassen: Gewährleistung der IT-Sicherheit, Direktwerbung (sofern nicht widersprochen), Betrugs- und Missbrauchsprävention, statistische Analyse und Optimierung sowie Geltendmachung rechtlicher Ansprüche.'
                : 'Legitimate interests include: ensuring IT security, direct marketing (unless objected to), fraud and abuse prevention, statistical analysis and optimization, and assertion of legal claims.'}
            </p>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Sicherheitsmaßnahmen' : 'Security Measures'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten:'
                : 'We take appropriate technical and organizational measures to ensure a level of protection appropriate to the risk:'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'SSL/TLS-Verschlüsselung (HTTPS)' : 'SSL/TLS Encryption (HTTPS)'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Verschlüsselte E-Mail-Kommunikation' : 'Encrypted Email Communication'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Passwort-Manager für Zugangsdaten' : 'Password Manager for credentials'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? '2-Faktor-Authentifizierung (2FA)' : '2-Factor Authentication (2FA)'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Regelmäßige Backups' : 'Regular Backups'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Zugriffskontrolle für autorisierte Personen' : 'Access Control for authorized persons'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Datenschutz-Vorfallmanagement (Art. 33/34 DSGVO)' : 'Data Protection Incident Management (Art. 33/34 GDPR)'}
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-primary mt-1 shrink-0" />
                {language === 'de' ? 'Privacy by Design und Privacy by Default' : 'Privacy by Design and Privacy by Default'}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Divider: Technical Infrastructure */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Technische Infrastruktur' : 'Technical Infrastructure'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Hosting */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Server className="h-5 w-5 text-primary" />
              Hosting (Vercel)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Vercel Inc. für das Hosting unserer Website.'
                : 'We use Vercel Inc. for hosting our website.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">{language === 'de' ? 'Anbieter:' : 'Provider:'}</p>
                <p>Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789, USA</p>
              </div>
              <div>
                <p className="font-semibold">{language === 'de' ? 'Serverstandort:' : 'Server Location:'}</p>
                <p>EU (Frankfurt, Germany / Dublin, Ireland)</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'IP-Adressen, Browser-Informationen, Zugriffszeiten, besuchte Seiten, Referrer URL'
                  : 'IP addresses, browser information, access times, visited pages, referrer URL'}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* Forms - Fillout */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Formulare (Fillout.com)' : 'Forms (Fillout.com)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Fillout.com für Kontakt-, Anfrage- und Buchungsformulare auf unserer Website.'
                : 'We use Fillout.com to provide contact, inquiry, and booking forms on our website.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Erhobene Daten:' : 'Collected Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Name, E-Mail-Adresse, Telefonnummer (optional), Unternehmen/Position (optional), Nachricht/Freitext, Informationen zu Bedürfnissen und Zielen'
                  : 'Name, email address, phone number (optional), company/position (optional), message/free text, information on needs and objectives'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
            </div>
            <a href="https://www.fillout.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* Booking System */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Calendar className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Buchungssystem (Microsoft 365)' : 'Booking System (Microsoft 365)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen ein selbstgebautes Buchungssystem basierend auf Fillout.com mit Integration zu Microsoft 365 für die Terminplanung (Inflection Calls, Beratungstermine).'
                : 'We use a self-built booking system based on Fillout.com with integration to Microsoft 365 for appointment scheduling (Inflection Calls, consulting meetings).'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Name, E-Mail-Adresse, Telefonnummer (optional), Unternehmen/Position, Terminanfrage, Nachricht'
                  : 'Name, email address, phone number (optional), company/position, appointment request, message'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Aufbewahrungsdauer: Bis zur Durchführung des Termins + 6 Monate (für Rückfragen und Dokumentation)'
                : 'Retention Period: Until the appointment is completed + 6 months (for follow-up questions and documentation)'}
            </p>
          </CardContent>
        </Card>

        {/* Section Divider: Communication & Marketing */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Kommunikation & Marketing' : 'Communication & Marketing'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Newsletter - ActiveCampaign */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Mail className="h-5 w-5 text-primary" />
              Newsletter (ActiveCampaign)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen ActiveCampaign für den Versand von Newslettern und E-Mail-Marketing.'
                : 'We use ActiveCampaign for sending newsletters and email marketing.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">{language === 'de' ? 'Anbieter:' : 'Provider:'}</p>
                <p>ActiveCampaign, LLC<br />1 N Dearborn St, 5th Floor<br />Chicago, IL 60602, USA</p>
              </div>
              <div>
                <p className="font-semibold">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
                <p>{language === 'de' ? 'E-Mail-Adresse, Name (optional), Anmeldezeit, IP-Adresse, Öffnungs- und Klickverhalten' : 'Email address, name (optional), registration time, IP address, opening and click behavior'}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Double Opt-in:</span> {language === 'de' ? 'Die Anmeldung erfolgt im Double-Opt-in-Verfahren. Nach Anmeldung erhalten Sie eine E-Mail zur Bestätigung.' : 'Registration is carried out using double opt-in. After registration, you will receive a confirmation email.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Abmeldung:' : 'Unsubscription:'}</span> {language === 'de' ? 'Sie können den Newsletter jederzeit über den Link am Ende jedes Newsletters abbestellen.' : 'You can unsubscribe at any time via the link at the end of each newsletter.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Erfolgsmessung:' : 'Success Measurement:'}</span> {language === 'de' ? 'Die Newsletter enthalten ein Web-Beacon zur technischen Verbesserung und Zielgruppenanalyse.' : 'The newsletters contain a web beacon for technical improvement and audience analysis.'}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <a href="https://www.activecampaign.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* Section Divider: Analytics & Tracking */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Analyse & Tracking' : 'Analytics & Tracking'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google Analytics 4 */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <BarChart3 className="h-5 w-5 text-primary" />
              Google Analytics 4
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Google Analytics 4, einen Webanalysedienst der Google LLC.'
                : 'We use Google Analytics 4, a web analytics service provided by Google LLC.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">{language === 'de' ? 'Anbieter:' : 'Provider:'}</p>
                <p>Google LLC<br />1600 Amphitheatre Parkway<br />Mountain View, CA 94043, USA</p>
              </div>
              <div>
                <p className="font-semibold">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
                <p>{language === 'de' ? 'IP-Adresse (anonymisiert), Browser-Info, OS, Referrer URL, besuchte Seiten, Verweildauer, Geräteinfo' : 'IP address (anonymized), browser info, OS, referrer URL, visited pages, duration, device info'}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">{language === 'de' ? 'IP-Anonymisierung:' : 'IP Anonymization:'}</span> {language === 'de' ? 'Wir verwenden Google Analytics nur mit aktivierter IP-Anonymisierung.' : 'We only use Google Analytics with activated IP anonymization.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Aufbewahrungsdauer:' : 'Retention Period:'}</span> 14 {language === 'de' ? 'Monate' : 'months'}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
              </a>
              <a href="http://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                Opt-out Browser Plugin <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Hotjar */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <BarChart3 className="h-5 w-5 text-primary" />
              Hotjar
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Hotjar für Heatmaps, Session-Recordings und Nutzer-Feedback.'
                : 'We use Hotjar for heatmaps, session recordings, and user feedback.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">{language === 'de' ? 'Anbieter:' : 'Provider:'}</p>
                <p>Hotjar Ltd.<br />Dragonara Business Centre<br />5th Floor, Dragonara Road<br />St Julians STJ 3141, Malta</p>
              </div>
              <div>
                <p className="font-semibold">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
                <p>{language === 'de' ? 'IP-Adresse (anonymisiert), Mausbewegungen und Klicks, Scroll-Verhalten, Bildschirmgröße, Browser-Info' : 'IP address (anonymized), mouse movements and clicks, scroll behavior, screen size, browser info'}</p>
              </div>
            </div>
            <p className="text-sm"><span className="font-semibold">{language === 'de' ? 'Datenübertragung:' : 'Data Transfer:'}</span> {language === 'de' ? 'Hotjar speichert Daten in der EU (Irland).' : 'Hotjar stores data in the EU (Ireland).'}</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://www.hotjar.com/policies/do-not-track/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                Opt-out <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Google Ads Conversion Tracking */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <BarChart3 className="h-5 w-5 text-primary" />
              Google Ads Conversion Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Google Ads Conversion Tracking zur Messung des Erfolgs unserer Werbekampagnen.'
                : 'We use Google Ads Conversion Tracking to measure the success of our advertising campaigns.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">Cookie ID, IP-{language === 'de' ? 'Adresse (anonymisiert), Klick-Informationen, Conversion-Daten' : 'address (anonymized), click information, conversion data'}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Personalisierte Werbung deaktivieren' : 'Disable personalized advertising'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* LinkedIn & Facebook Pixel */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <BarChart3 className="h-5 w-5 text-primary" />
              LinkedIn Insight Tag & Facebook Pixel
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen den LinkedIn Insight Tag und Facebook Pixel für Remarketing und Conversion Tracking.'
                : 'We use the LinkedIn Insight Tag and Facebook Pixel for remarketing and conversion tracking.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">LinkedIn:</p>
                <p>LinkedIn Ireland Unlimited Company<br />Wilton Place, Dublin 2, Ireland</p>
              </div>
              <div>
                <p className="font-semibold">Facebook/Meta:</p>
                <p>Meta Platforms Ireland Ltd.<br />4 Grand Canal Square, Dublin 2, Ireland</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Zweck:' : 'Purpose:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Remarketing (Werbung für Website-Besucher), Conversion Tracking, Audience Building (Custom Audiences)'
                  : 'Remarketing (ads for website visitors), conversion tracking, audience building (Custom Audiences)'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                LinkedIn Opt-out <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                Facebook Opt-out <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Section Divider: Cookies */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Cookies
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Cookies */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Cookie className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Cookies und Cookie-Banner' : 'Cookies and Cookie Banner'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? '„Cookies" sind kleine Dateien, die auf Rechnern der Nutzer gespeichert werden. Ein Cookie dient primär dazu, Informationen zu einem Nutzer während oder nach seinem Besuch zu speichern.'
                : '"Cookies" are small files that are stored on users\' computers. A cookie primarily serves to store information about a user during or after their visit.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Cookie-Kategorien:' : 'Cookie Categories:'}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Notwendige Cookies:' : 'Necessary Cookies:'}</span> {language === 'de' ? 'Technisch erforderlich für den Betrieb der Website (z.B. Session-Cookies)' : 'Technically required for the operation of the website (e.g., session cookies)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Funktionale Cookies:' : 'Functional Cookies:'}</span> {language === 'de' ? 'Ermöglichen erweiterte Funktionen (z.B. Spracheinstellungen)' : 'Enable advanced functions (e.g., language settings)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Analyse-Cookies:' : 'Analytics Cookies:'}</span> {language === 'de' ? 'Zur Reichweitenmessung und Optimierung (z.B. Google Analytics, Hotjar)' : 'For reach measurement and optimization (e.g., Google Analytics, Hotjar)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Marketing-Cookies:' : 'Marketing Cookies:'}</span> {language === 'de' ? 'Ermöglichen personalisierte Werbung (z.B. LinkedIn, Facebook, Google Ads)' : 'Enable personalized advertising (e.g., LinkedIn, Facebook, Google Ads)'}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">{language === 'de' ? 'Consent Management:' : 'Consent Management:'}</span> {language === 'de' ? 'Wir nutzen einen Cookie-Banner, um Ihre Einwilligung für nicht-notwendige Cookies einzuholen.' : 'We use a cookie banner to obtain your consent for non-necessary cookies.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Widerruf:' : 'Withdrawal:'}</span> {language === 'de' ? 'Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser ändern oder den Cookie-Banner erneut öffnen.' : 'You can withdraw your consent at any time by changing the cookie settings in your browser or by reopening the cookie banner.'}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(a) GDPR</Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                Network Advertising Initiative <ExternalLink className="h-3 w-3" />
              </a>
              <a href="http://www.youronlinechoices.com/uk/your-ad-choices/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                Your Online Choices (EU) <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Section Divider: Business Tools */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Geschäftstools' : 'Business Tools'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* CRM - Attio */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Briefcase className="h-5 w-5 text-primary" />
              CRM (Attio)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Attio für das Management von Kundendaten und Geschäftskontakten.'
                : 'We use Attio for managing customer data and business contacts.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Kontaktdaten (Name, E-Mail, Telefon, Unternehmen, Position), Kommunikationshistorie, Notizen und Aufgaben, Vertragsdaten'
                  : 'Contact data (name, email, phone, company, position), communication history, notes and tasks, contract data'}
              </p>
            </div>
            <p className="text-sm"><span className="font-semibold">{language === 'de' ? 'Speicherort:' : 'Storage Location:'}</span> EU</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
            </div>
            <a href="https://attio.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* Cloud Storage - Microsoft 365 */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Cloud className="h-5 w-5 text-primary" />
              Cloud Storage (Microsoft 365)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen Microsoft 365 für E-Mail-Kommunikation, Cloud-Speicherung und Zusammenarbeit.'
                : 'We use Microsoft 365 for email communication, cloud storage, and collaboration.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">{language === 'de' ? 'Anbieter:' : 'Provider:'}</p>
                <p>Microsoft Ireland Operations Limited<br />One Microsoft Place<br />Dublin 18, Ireland</p>
              </div>
              <div>
                <p className="font-semibold">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
                <p>{language === 'de' ? 'E-Mail-Kommunikation, Dokumente und Dateien, Kalendereinträge, Kontaktdaten' : 'Email communication, documents and files, calendar entries, contact data'}</p>
              </div>
            </div>
            <p className="text-sm"><span className="font-semibold">{language === 'de' ? 'Speicherort:' : 'Storage Location:'}</span> EU ({language === 'de' ? 'Rechenzentren in Europa' : 'data centers in Europe'})</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">EU-US Data Privacy Framework</Badge>
            </div>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* AI Tools */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Bot className="h-5 w-5 text-primary" />
              {language === 'de' ? 'KI-Tools (nur interne Nutzung)' : 'AI Tools (Internal Use Only)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir nutzen verschiedene KI-Tools für interne Zwecke (Content-Erstellung, Automatisierung, Analyse). Kundendaten werden NICHT mit diesen Tools geteilt.'
                : 'We use various AI tools for internal purposes (content creation, automation, analysis). Customer data is NOT shared with these tools.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verwendete Tools:' : 'Tools Used:'}</p>
              <p className="text-sm text-muted-foreground">Monica.im, Manus.im, n8n.io, ChatGPT (OpenAI), HeyGen, Descript, Runway, Gamma, Cursor.ai</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Zweck:' : 'Purpose:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Ausschließlich interne Nutzung für: Content-Erstellung (Texte, Bilder, Videos), Automatisierung interner Prozesse, Analyse und Optimierung, Entwicklung und Programmierung'
                  : 'Exclusively internal use for: content creation (texts, images, videos), automation of internal processes, analysis and optimization, development and programming'}
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-md">
              <p className="text-sm font-semibold text-primary">
                {language === 'de'
                  ? '⚠️ Keine Kundendaten werden mit diesen Tools geteilt. Nur anonymisierte oder interne Daten werden verarbeitet.'
                  : '⚠️ No customer data is shared with these tools. Only anonymized or internal data is processed.'}
              </p>
            </div>
            <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
          </CardContent>
        </Card>

        {/* Section Divider: Accounting */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Buchhaltung' : 'Accounting'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Tax Advisor */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Calculator className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Steuerberater' : 'Tax Advisor'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir arbeiten mit einem externen Steuerberater für Buchhaltung und Steuererklärungen zusammen.'
                : 'We work with an external tax advisor for accounting and tax returns.'}
            </p>
            <div>
              <p className="font-semibold text-sm">Ziegler & Heidorn Steuerberatungsgesellschaft mbB</p>
              <p className="text-sm text-muted-foreground">Große Theaterstraße 1<br />20354 Hamburg, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
              <p className="text-sm text-muted-foreground mt-2">info@ziegler-heidorn.de</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Rechnungsdaten, Vertragsdaten, Zahlungsdaten, steuerrelevante Dokumente'
                  : 'Invoice data, contract data, payment data, tax-relevant documents'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(c) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
            </div>
          </CardContent>
        </Card>

        {/* DATEV & Finom */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <CreditCard className="h-5 w-5 text-primary" />
              DATEV & Finom
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-2">DATEV</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'de'
                    ? 'Unser Steuerberater nutzt DATEV für die Buchhaltung.'
                    : 'Our tax advisor uses DATEV for accounting.'}
                </p>
                <p className="text-sm text-muted-foreground">DATEV eG<br />Paumgartnerstraße 6-14<br />90429 Nuremberg, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Finom ({language === 'de' ? 'Geschäftskonto' : 'Business Account'})</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'de'
                    ? 'Wir nutzen Finom für unser Geschäftskonto und die Zahlungsabwicklung.'
                    : 'We use Finom for our business account and payment processing.'}
                </p>
                <p className="text-sm text-muted-foreground">Finom B.V.<br />Keizersgracht 62<br />1015 CS Amsterdam, {language === 'de' ? 'Niederlande' : 'Netherlands'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(c) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
            </div>
            <a href="https://finom.co/en/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
              Finom {language === 'de' ? 'Datenschutzrichtlinie' : 'Privacy Policy'} <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        {/* Section Divider: Other Processing */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Weitere Verarbeitungen' : 'Other Processing'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social Media */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Share2 className="h-5 w-5 text-primary" />
              Social Media
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir sind auf folgenden Social-Media-Plattformen präsent:'
                : 'We are present on the following social media platforms:'}
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/scalingxhypergrowth/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  LinkedIn <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="text-muted-foreground">YouTube ({language === 'de' ? 'in Planung' : 'planned'})</li>
              <li className="text-muted-foreground">Twitter/X ({language === 'de' ? 'in Planung' : 'planned'})</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Wenn Sie mit uns über Social Media interagieren, werden Ihre Daten auch von der jeweiligen Plattform verarbeitet. Wir haben keinen Einfluss auf die Datenverarbeitung durch die Plattformen.'
                : 'When you interact with us via social media, your data is also processed by the respective platform. We have no influence on the data processing by the platforms.'}
            </p>
            <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
          </CardContent>
        </Card>

        {/* Contractual Services */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileCheck className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Vertragliche Leistungen' : 'Contractual Services'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir verarbeiten die Daten unserer Vertragspartner und Interessenten gemäß Art. 6 Abs. 1 lit. b DSGVO, um ihnen unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen.'
                : 'We process the data of our contractual partners and prospects in accordance with Art. 6(1)(b) GDPR in order to provide them with our contractual or pre-contractual services.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Bestandsdaten (Namen, Adressen, Unternehmen), Kontaktdaten (E-Mail, Telefon), Vertragsdaten (genutzte Leistungen, Vertragsinhalte), Zahlungsdaten (Bankverbindung, Zahlungshistorie)'
                  : 'Master data (names, addresses, companies), contact data (email, phone), contract data (services used, contract contents), payment data (bank details, payment history)'}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">{language === 'de' ? 'Aufbewahrungsdauer:' : 'Retention Period:'}</span> {language === 'de' ? 'Die Daten werden gelöscht, wenn sie für die Erfüllung vertraglicher oder gesetzlicher Fürsorgepflichten nicht mehr erforderlich sind. Andernfalls gelten die gesetzlichen Aufbewahrungspflichten (i.d.R. 10 Jahre nach §§ 147 AO, 257 HGB).' : 'The data is deleted when it is no longer required for the fulfillment of contractual or legal care obligations. Otherwise, the legal retention obligations apply (generally 10 years according to §§ 147 AO, 257 HGB German law).'}
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contact Requests */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Mail className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Kontaktaufnahme' : 'Contact Requests'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via Social Media) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung verarbeitet.'
                : 'When contacting us (e.g., via contact form, email, phone, or via social media), the user\'s information is processed to handle the contact request and its processing.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Name, E-Mail-Adresse, Telefonnummer (optional), Unternehmen/Position (optional), Nachricht/Anfrage'
                  : 'Name, email address, phone number (optional), company/position (optional), message/inquiry'}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">{language === 'de' ? 'Aufbewahrungsdauer:' : 'Retention Period:'}</span> {language === 'de' ? 'Die Anfragen werden gelöscht, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre.' : 'The inquiries are deleted if they are no longer required. We review the necessity every two years.'}
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <UserPlus className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Bewerbungsverfahren' : 'Application Process'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir verarbeiten Bewerberdaten nur zum Zweck und im Rahmen des Bewerbungsverfahrens in Übereinstimmung mit den gesetzlichen Anforderungen.'
                : 'We process applicant data only for the purpose and within the scope of the application process in accordance with legal requirements.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Verarbeitete Daten:' : 'Processed Data:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Persönliche Angaben (Name, Adresse, Geburtsdatum), Kontaktdaten (E-Mail, Telefon), Bewerbungsunterlagen (Anschreiben, Lebenslauf, Zeugnisse), ggf. weitere freiwillige Angaben'
                  : 'Personal information (name, address, date of birth), contact data (email, phone), application documents (cover letter, CV, certificates), possibly other voluntary information'}
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="font-semibold">{language === 'de' ? 'Übermittlung:' : 'Transmission:'}</span> {language === 'de' ? 'Bewerbungen können per E-Mail, Kontaktformular oder Post eingereicht werden. Bitte beachten Sie, dass E-Mails in der Regel nicht verschlüsselt übertragen werden.' : 'Applications can be submitted by email, contact form, or post. Please note that emails are generally not sent encrypted.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Aufbewahrungsdauer:' : 'Retention Period:'}</span> {language === 'de' ? 'Die Daten der Bewerber werden nach Abschluss des Bewerbungsverfahrens gelöscht. Die Löschung erfolgt nach einer Frist von maximal 6 Monaten.' : 'The data of applicants is deleted after the completion of the application process. Deletion takes place after a maximum of 6 months.'}</p>
              <p><span className="font-semibold">{language === 'de' ? 'Aufbewahrung mit Einwilligung:' : 'Retention with Consent:'}</span> {language === 'de' ? 'Mit Ihrer Einwilligung können wir Ihre Bewerbungsunterlagen länger aufbewahren, um Sie für künftige Stellenangebote zu berücksichtigen.' : 'With your consent, we can keep your application documents longer to consider you for future job openings.'}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Art. 6(1)(b) GDPR</Badge>
              <Badge variant="outline">§ 26 BDSG</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Log Files */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <HardDrive className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Erhebung von Zugriffsdaten und Logfiles' : 'Collection of Access Data and Log Files'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Wir bzw. unser Hostinganbieter erhebt Daten über jeden Zugriff auf den Server (sogenannte Server-Logfiles) auf Grundlage unserer berechtigten Interessen.'
                : 'We or our hosting provider collect data on every access to the server (so-called server log files) based on our legitimate interests.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Zugriffsdaten umfassen:' : 'Access data includes:'}</p>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp und -version, Betriebssystem des Nutzers, Referrer URL, IP-Adresse, anfragender Provider'
                  : 'Name of the retrieved website, file, date and time of retrieval, amount of data transferred, notification of successful retrieval, browser type and version, user\'s operating system, referrer URL, IP address, requesting provider'}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">{language === 'de' ? 'Aufbewahrungsdauer:' : 'Retention Period:'}</span> {language === 'de' ? 'Logfile-Informationen werden aus Sicherheitsgründen für maximal 7 Tage gespeichert und danach gelöscht.' : 'Log file information is stored for security reasons for a maximum of 7 days and then deleted.'}
            </p>
            <Badge variant="outline">Art. 6(1)(f) GDPR</Badge>
          </CardContent>
        </Card>

        {/* Third Country Transfers */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Globe className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Übermittlung in Drittländer' : 'Transfers to Third Countries'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Sofern wir Daten in einem Drittland (d.h. außerhalb der EU, des EWR oder der Schweiz) verarbeiten oder dies im Rahmen der Nutzung von Diensten Dritter geschieht, erfolgt dies nur unter Einhaltung der gesetzlichen Voraussetzungen.'
                : 'If we process data in a third country (i.e., outside the EU, the EEA, or Switzerland) or if this occurs in the context of using third-party services, this only occurs if the legal requirements are met.'}
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Garantien:' : 'Guarantees:'}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">EU-US Data Privacy Framework:</span> {language === 'de' ? 'Anbieter ist zertifiziert (z.B. Google, Microsoft, Meta)' : 'Provider is certified (e.g., Google, Microsoft, Meta)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Standardvertragsklauseln (SCC):' : 'Standard Contractual Clauses (SCC):'}</span> {language === 'de' ? 'Verwendung von EU-Standardvertragsklauseln' : 'Use of EU Standard Contractual Clauses'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><span className="font-semibold">{language === 'de' ? 'Angemessenheitsbeschluss:' : 'Adequacy Decision:'}</span> {language === 'de' ? 'Angemessenheitsbeschluss der EU-Kommission für das Drittland' : 'Adequacy decision by the EU Commission for the third country'}</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2">{language === 'de' ? 'Betroffene Anbieter:' : 'Affected Providers:'}</p>
              <p className="text-sm text-muted-foreground">Google (USA), Microsoft (USA), Meta/Facebook (USA), ActiveCampaign (USA) – {language === 'de' ? 'alle zertifiziert unter EU-US Data Privacy Framework' : 'all certified under EU-US Data Privacy Framework'}</p>
            </div>
          </CardContent>
        </Card>

        {/* Retention Periods */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Clock className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Aufbewahrungsfristen und Löschung' : 'Retention Periods and Deletion'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt.'
                : 'The data processed by us is deleted or restricted in its processing in accordance with legal requirements.'}
            </p>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>{language === 'de' ? 'Datenart' : 'Data Type'}</TableHead>
                  <TableHead>{language === 'de' ? 'Aufbewahrungsfrist' : 'Retention Period'}</TableHead>
                  <TableHead>{language === 'de' ? 'Rechtsgrundlage' : 'Legal Basis'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retentionPeriods.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{language === 'de' ? item.typeDe : item.typeEn}</TableCell>
                    <TableCell>{language === 'de' ? item.periodDe : item.periodEn}</TableCell>
                    <TableCell className="text-muted-foreground">{language === 'de' ? item.basisDe : item.basisEn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Section Divider: Rights */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {language === 'de' ? 'Rechte der Betroffenen' : 'Rights of Data Subjects'}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Data Subject Rights */}
        <div className="space-y-4 mb-6">
          {dataSubjectRights.map((right, index) => (
            <Card key={right.article} className="border-l-4 border-l-primary">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary text-lg">{index + 1}.</span>
                  <div>
                    <h4 className="font-semibold text-lg">{language === 'de' ? right.titleDe : right.titleEn}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{right.article}</p>
                    <p className="text-foreground text-sm">{language === 'de' ? right.descDe : right.descEn}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supervisory Authority */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Building2 className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Zuständige Aufsichtsbehörde' : 'Competent Supervisory Authority'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            <p className="font-semibold">{language === 'de' ? 'Berliner Beauftragte für Datenschutz und Informationsfreiheit' : 'Berlin Commissioner for Data Protection and Freedom of Information'}</p>
            <p className="text-muted-foreground mt-2">
              Friedrichstraße 219<br />
              10969 Berlin<br />
              {language === 'de' ? 'Deutschland' : 'Germany'}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="tel:+493013889-0" className="flex items-center gap-2 text-accent hover:underline">
                <Phone className="h-4 w-4" />
                +49 30 13889-0
              </a>
              <a href="mailto:mailbox@datenschutz-berlin.de" className="flex items-center gap-2 text-accent hover:underline">
                <Mail className="h-4 w-4" />
                mailbox@datenschutz-berlin.de
              </a>
              <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                <ExternalLink className="h-4 w-4" />
                www.datenschutz-berlin.de
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Exercising Rights */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Mail className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Ausübung Ihrer Rechte' : 'Exercising Your Rights'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground space-y-4">
            <p>
              {language === 'de'
                ? 'Um Ihre Rechte auszuüben, wenden Sie sich bitte an:'
                : 'To exercise your rights, please contact:'}
            </p>
            <div className="p-4 bg-muted/50 rounded-md">
              <p className="font-semibold">ScalingX Hypergrowth GmbH</p>
              <p>z.Hd. Michel Lason</p>
              <p>Markgrafendamm 4</p>
              <p>10245 Berlin, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a href="mailto:info@scalingx.io" className="flex items-center gap-2 text-accent hover:underline">
                  <Mail className="h-4 w-4" />
                  info@scalingx.io
                </a>
                <a href="tel:+491727355891" className="flex items-center gap-2 text-accent hover:underline">
                  <Phone className="h-4 w-4" />
                  +49 172 735 58 91
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Wir werden Ihre Anfrage innerhalb von 1 Monat beantworten. In komplexen Fällen kann diese Frist um weitere 2 Monate verlängert werden, worüber wir Sie informieren würden.'
                : 'We will respond to your request within 1 month. In complex cases, this period can be extended by a further 2 months, which we would inform you about.'}
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Änderungen der Datenschutzerklärung' : 'Changes to the Privacy Policy'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            <p>
              {language === 'de'
                ? 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Die neue Datenschutzerklärung gilt dann für Ihren nächsten Besuch. Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig zu überprüfen.'
                : 'We reserve the right to amend this Privacy Policy so that it always complies with current legal requirements or to implement changes to our services. The new Privacy Policy will then apply to your next visit. We recommend that you review this Privacy Policy regularly.'}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold">{language === 'de' ? 'Stand dieser Datenschutzerklärung:' : 'Status of this Privacy Policy:'}</span> {language === 'de' ? '1. Februar 2026' : 'February 1, 2026'}
            </p>
          </CardContent>
        </Card>

        {/* Final Contact */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Phone className="h-5 w-5 text-primary" />
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            <p className="mb-4">
              {language === 'de'
                ? 'Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an:'
                : 'If you have any questions about data protection or the processing of your personal data, please contact:'}
            </p>
            <div className="space-y-2">
              <p className="font-semibold">ScalingX Hypergrowth GmbH</p>
              <p>Michel Lason</p>
              <p>Markgrafendamm 4<br />10245 Berlin, {language === 'de' ? 'Deutschland' : 'Germany'}</p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a href="mailto:info@scalingx.io" className="flex items-center gap-2 text-accent hover:underline">
                  <Mail className="h-4 w-4" />
                  info@scalingx.io
                </a>
                <a href="tel:+491727355891" className="flex items-center gap-2 text-accent hover:underline">
                  <Phone className="h-4 w-4" />
                  +49 172 735 58 91
                </a>
                <a href="https://www.scalingx.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  www.scalingx.io
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Footer */}
        <div className="mt-16 text-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            © 2026 ScalingX Hypergrowth GmbH. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline">GDPR-compliant</Badge>
            <Badge variant="outline">BDSG-compliant</Badge>
            <Badge variant="outline">TMG-compliant</Badge>
            <Badge variant="outline">TTDSG-compliant</Badge>
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <Link to="/impressum" className="text-accent hover:underline">{language === 'de' ? 'Impressum' : 'Imprint'}</Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/agb" className="text-accent hover:underline">{language === 'de' ? 'AGB' : 'Terms'}</Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/glossar" className="text-accent hover:underline">{language === 'de' ? 'Glossar' : 'Glossary'}</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
