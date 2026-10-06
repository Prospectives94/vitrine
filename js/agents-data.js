/* ========================================
   AGENTS DATA — Configuration centralisée
   ========================================
   Pour ajouter un agent : ajoutez un objet dans AGENTS_DATA.
   Pour ajouter un lien SharePoint : ajoutez un objet dans SHAREPOINT_LINKS.
   ======================================== */

const AGENTS_DATA = [
  {
    id: "assistant-juridique",
    name: "Assistant Juridique",
    category: "Juridique",
    color: "blue",
    icon: "scales",
    shortDesc: "Consultez la réglementation et obtenez des réponses juridiques adaptées au secteur des travaux publics.",
    longDesc: "L'Assistant Juridique vous accompagne dans vos recherches réglementaires et juridiques. Il peut répondre à vos questions sur le droit du travail, les marchés publics, la responsabilité civile et pénale, et bien plus encore. Basé sur une base de connaissances actualisée, il fournit des réponses précises et sourcées.",
    embedUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents?id=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents/Assistant_juridique_v1_cr27b_assistantJuridique.agent&parent=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-Juridique.aspx",
    docTechniqueUrl: "https://adminevariste.sharepoint.com/:b:/s/outils-prospectives/IQD74LPujjtaQatpsJhuuouRAVWdd9B1ECFlHPpSzRXSLgQ?e=6yumgA",
    docTechniqueName: "201_agent_juridique_technique.pdf",
    status: "active",
    tags: ["Réglementation", "Droit", "Marchés publics"]
  },
  {
    id: "assistant-qse",
    name: "Assistant QSE",
    category: "QSE",
    color: "green",
    icon: "shield",
    shortDesc: "Accédez aux procédures qualité, sécurité et environnement, et gérez vos conformités.",
    longDesc: "L'Assistant QSE centralise l'accès à toutes les procédures et documentations qualité, sécurité et environnement. Il vous guide dans la mise en conformité, le suivi des audits et la gestion des non-conformités.",
    embedUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents?id=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents/Assistant%20QSE_cr27b_assistantQse.agent&parent=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-QSE.aspx",
    docTechniqueUrl: "https://adminevariste.sharepoint.com/:b:/s/outils-prospectives/IQBFu8z8fBF4S5xXSTggfloNAbybaW775RNYa0NHph4VaFo?e=TvOvCj",
    docTechniqueName: "501_agent_QSE_technique.pdf",
    status: "active",
    tags: ["Qualité", "Sécurité", "Environnement"]
  },
  {
    id: "chatbot-fntp",
    name: "Chatbot FNTP",
    category: "Études",
    color: "blue",
    icon: "megaphone",
    shortDesc: "Informations, documentation et actualités de la Fédération Nationale des Travaux Publics.",
    longDesc: "Le Chatbot FNTP vous donne accès aux dernières actualités, publications et ressources documentaires de la Fédération Nationale des Travaux Publics. Restez informé des évolutions du secteur, des événements à venir et des positions de la fédération.",
    embedUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents?id=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents/Chatbot%20IP%20FNTP_cr27b_chatbotIpFntp.agent&parent=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/IP-FNTP.aspx",
    docTechniqueUrl: "https://adminevariste.sharepoint.com/:b:/s/outils-prospectives/IQCAc5kUZY8LRItTVCFWzmLFAflRLzztZVEYYXWameFy8dk?e=gugewJ",
    docTechniqueName: "803_IP_FNTP.pdf",
    status: "active",
    tags: ["Études", "Actualités", "FNTP", "Secteur TP"]
  },
  {
    id: "analyse-dce",
    name: "AnalyseDCE",
    category: "Études",
    color: "blue",
    icon: "document",
    shortDesc: "Analyse automatique des dossiers de consultation des entreprises (DCE).",
    longDesc: "AnalyseDCE exploite Copilot Agent Builder pour analyser en détail vos dossiers de consultation d'entreprises (DCE), extraire les exigences clés et simplifier la préparation des réponses aux appels d'offres.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_52dfb6a5-a87c-ac1d-0e5c-5cd8eae9aaf5&source=embedded-builder",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Analyse-DCE.aspx",
    status: "active",
    tags: ["Études", "DCE", "Appels d'offres", "Analyse"]
  },
  {
    id: "assistant-travaux",
    name: "Assistant Travaux",
    category: "Travaux",
    color: "blue",
    icon: "hardhat",
    shortDesc: "Suivi de chantier, planification et gestion des opérations terrain.",
    longDesc: "L'Assistant Travaux est votre compagnon pour la gestion quotidienne des chantiers. Il vous aide à planifier les interventions, suivre l'avancement des travaux, gérer les ressources et résoudre les problèmes opérationnels.",
    embedUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents?id=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents/Assistant%20Travaux_copilots_header_a6e65.agent&parent=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-Travaux.aspx",
    status: "active",
    tags: ["Chantier", "Planification", "Suivi"]
  },
  {
    id: "assistant-rh",
    name: "Assistant RH",
    category: "Ressources Humaines",
    color: "orange",
    icon: "users",
    shortDesc: "Congés, paie, formation : toutes vos questions RH en un clic.",
    longDesc: "L'Assistant RH répond à toutes vos questions relatives aux ressources humaines : gestion des congés et absences, informations sur la paie, catalogue de formations, procédures d'embauche, conventions collectives et bien plus.",
    embedUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents?id=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents/Bot%20RH%20-%20anciennement%20Assistant%20RH_cr27b_assistantRhnOISmd.agent&parent=/sites/outils-prospectives/Documents%20partages/Copilot%20Studio%20Agents",
    sharepointPageUrl: "https://adminevariste.sharepoint.com/sites/Direction_RH/SitePages/CollabHome.aspx?spStartSource=spappbar",
    docTechniqueUrl: "https://adminevariste.sharepoint.com/:b:/s/outils-prospectives/IQDmo8NeCQw9Q7JtoiojhSDIAS4NbitF-n3VvMq3QihT4y0?e=Nmeloh",
    docTechniqueName: "101_agent_RH_technique.pdf",
    docVeilleSocialeUrl: "https://adminevariste.sharepoint.com/:b:/s/outils-prospectives/IQDg110KdvyTQqfT-Aw6qYdLAUDs51m8PRGoGW30-fxDxvY?e=tivHgx",
    docVeilleSocialeName: "108_veille_sociale.pdf",
    status: "active",
    tags: ["Congés", "Paie", "Formation"]
  },
  {
    id: "pulseia",
    name: "PulseIA",
    category: "Monitoring",
    color: "orange",
    icon: "sparkles",
    shortDesc: "Veille technologique et actualités du secteur pour anticiper les évolutions.",
    longDesc: "PulseIA est votre radar de veille sectorielle et technologique. Il surveille l'actualité industrielle et les dernières avancées en intelligence artificielle pour vous proposer des synthèses et alertes d'actualité.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_576309b6-76f2-795c-8462-3d6d4852b16d&source=embedded-builder",
    status: "active",
    tags: ["Veille", "Actualités", "Monitoring", "Technologies"]
  },
  {
    id: "tp-monitor",
    name: "TP_Monitor",
    category: "Monitoring",
    color: "orange",
    icon: "chart",
    shortDesc: "Surveillance en temps réel des indicateurs et actualités clés de vos projets.",
    longDesc: "TP_Monitor vous offre une vue d'ensemble en temps réel de vos indicateurs de performance projet et des alertes d'actualité métier. Tableaux de bord, alertes automatiques et analyses de tendances.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_f70617f4-31e3-6fd9-7cfe-96f0eef5c3f9&source=embedded-builder",
    status: "beta",
    tags: ["KPI", "Monitoring", "Tableaux de bord", "Alertes"]
  },
  {
    id: "clinovia",
    name: "ClinovIA_veille",
    category: "Monitoring",
    color: "orange",
    icon: "brain",
    shortDesc: "Veille et analyse prédictive des tendances métier par l'IA.",
    longDesc: "ClinovIA_veille exploite l'intelligence artificielle pour surveiller les évolutions sectorielles, analyser vos données métier et proposer des optimisations prédictives.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_461462e8-f15a-19bf-c0d1-cd2520e417c6&source=embedded-builder",
    status: "active",
    tags: ["Monitoring", "Veille", "Prédictif", "Data"]
  },
  {
    id: "ao-radar",
    name: "AO_Radar",
    category: "Monitoring",
    color: "orange",
    icon: "radar",
    shortDesc: "Détection, veille et surveillance en temps réel des appels d'offres pertinents.",
    longDesc: "AO_Radar scanne en continu les plateformes d'appels d'offres pour détecter les opportunités correspondant à vos critères. Monitoring automatisé, scoring de pertinence et alertes en temps réel.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_eae51828-2e97-4307-edac-f8032d2f0f76&source=embedded-builder",
    status: "active",
    tags: ["Monitoring", "Appels d'offres", "Veille", "Scoring"]
  },
  {
    id: "tp-juritravaux",
    name: "TP_JuriTravaux",
    category: "Juridique",
    color: "blue",
    icon: "gavel",
    shortDesc: "Assistant juridique spécialisé droit des marchés publics et travaux.",
    longDesc: "TP_JuriTravaux est spécialisé dans le droit des marchés publics de travaux. Il vous assiste dans la rédaction de mémoires, l'analyse de CCAP/CCTP, la gestion des réclamations et la compréhension des clauses contractuelles.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_8926daa1-3aa2-11fd-46fb-7cdb42f423c2&source=embedded-builder",
    status: "active",
    tags: ["Marchés publics", "Contrats", "Réclamations"]
  },
  {
    id: "tp-compagnonqse",
    name: "TP_CompagnonQSE",
    category: "QSE",
    color: "green",
    icon: "clipboard",
    shortDesc: "Compagnon terrain pour les contrôles QSE et le reporting en mobilité.",
    longDesc: "TP_CompagnonQSE est conçu pour une utilisation terrain. Il vous accompagne lors des visites de chantier pour les contrôles qualité, sécurité et environnement, avec un reporting simplifié et des check-lists interactives.",
    embedUrl: "https://m365.cloud.microsoft/chat/?titleId=T_41b7f3f4-5c65-d43c-7fb3-dc9a59842fff&source=embedded-builder",
    status: "active",
    tags: ["Terrain", "Contrôles", "Check-lists"]
  }
];

/* ---- Liens vers les sites SharePoint ---- */
const SHAREPOINT_LINKS = [
  {
    id: "compilation-outils-prospectives",
    name: "Catalogue des outils",
    description: "Page d'accueil du portail SharePoint Outils Prospectives",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives",
    icon: "compass"
  },
  {
    id: "sp-juridique",
    name: "Juridique",
    description: "Page SharePoint du domaine Juridique (Assistant Juridique & TP_JuriTravaux)",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-Juridique.aspx",
    icon: "scales"
  },
  {
    id: "sp-qse",
    name: "Qualité Sécurité Environnement",
    description: "Page SharePoint QSE (Assistant QSE & TP_CompagnonQSE)",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-QSE.aspx",
    icon: "shield"
  },
  {
    id: "sp-competences-fntp",
    name: "Compétences FNTP",
    description: "Page SharePoint dédiée aux compétences FNTP",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/IP-FNTP.aspx",
    icon: "megaphone"
  },
  {
    id: "sp-analyse-dce",
    name: "DCE - Consultations",
    description: "Page SharePoint de l'agent Analyse DCE",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Analyse-DCE.aspx",
    icon: "document"
  },
  {
    id: "sp-travaux-technique-production",
    name: "Travaux Technique Production",
    description: "Page SharePoint de l'Assistant Travaux",
    url: "https://adminevariste.sharepoint.com/sites/outils-prospectives/SitePages/Assistant-Travaux.aspx",
    icon: "hardhat"
  },
  {
    id: "sp-ressources-humaines",
    name: "Ressources Humaines",
    description: "Page SharePoint des Ressources Humaines (Assistant RH)",
    url: "https://adminevariste.sharepoint.com/sites/Direction_RH/SitePages/CollabHome.aspx?spStartSource=spappbar",
    icon: "users"
  },
  {
    id: "sp-veille-technologique",
    name: "Veille Technologique",
    description: "Page SharePoint de Veille Technologique (PulseIA & ClinovIA)",
    url: "",
    icon: "sparkles"
  },
  {
    id: "sp-veille-btp",
    name: "Veille BTP",
    description: "Page SharePoint de Veille BTP (TP_Monitor & AO_Radar)",
    url: "",
    icon: "chart"
  }
];


/* ---- Configuration générale ---- */
const SITE_CONFIG = {
  companyName: "Prospectives",
  pageTitle: "Agents IA — Copilot Studio",
  heroTitle: "Vos Agents IA",
  heroSubtitle: "Découvrez et accédez aux assistants intelligents développés avec Microsoft Copilot Studio pour simplifier votre quotidien.",
  newsIframeUrl: "https://adminevariste.sharepoint.com/sites/outils-prospectives/Lists/Veille%20IA/AllItems.aspx",
  newsPlaceholderText: "L'intégration de la liste SharePoint des nouvelles IA sera affichée ici. Configurez l'URL dans le fichier agents-data.js."
};

/* ---- Mapping catégories → couleurs ---- */
const CATEGORY_COLORS = {
  "Juridique": "blue",
  "QSE": "green",
  "Ressources Humaines": "orange",
  "Travaux": "blue",
  "Études": "blue",
  "Monitoring": "orange"
};
