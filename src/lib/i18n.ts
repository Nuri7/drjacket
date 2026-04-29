export type Locale = 'nl' | 'en';

export const dictionaries = {
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      about: 'Over Maurice',
      gallery: 'Galerij',
      blog: 'Blog',
      contact: 'Contact',
      callNow: 'Bel Ons',
      whatsapp: 'WhatsApp',
      planIntake: 'Persoonlijk Adviesgesprek',
    },
    hero: {
      headline: 'Uw Leren Jas Verdient het Beste',
      subline: 'Vakkundige restauratie, restyling en maatwerk voor uw kostbaarste leren stukken. Amsterdam\'s meester-leerbewerker sinds 1990.',
      cta: 'Verzoek een Consult',
      ctaSecondary: 'Ontdek Ons Werk',
      scroll: 'Ontdek meer',
    },
    why: {
      badge: 'Sinds 1990',
      title: 'Waarom DrJacket?',
      subtitle: '35+ Jaar Vakmanschap in Leer',
      description: 'Maurice Eduard Verlinden combineert meer dan 35 jaar ervaring met een passie voor duurzaam vakmanschap. Elk stuk leer vertelt een verhaal — wij zorgen dat het blijft vertellen.',
      stats: {
        years: '35+',
        yearsLabel: 'Jaar Ervaring',
        pieces: '1.500+',
        piecesLabel: 'Unieke Creaties',
        rating: '5.0',
        ratingLabel: 'Google Rating',
        sustainable: '100%',
        sustainableLabel: 'Duurzaam',
      },
    },
    services: {
      badge: 'Onze Diensten',
      title: 'Vakmanschap op Maat',
      subtitle: 'Van snelle reparatie tot complete transformatie',
      items: [
        {
          title: 'Rits Vervanging',
          price: '€95',
          description: 'Professionele vervanging van ritsen met hoogwaardige YKK of Riri ritsen. Naadloos geïntegreerd.',
          features: ['YKK/Riri ritsen', 'Kleur matching', 'Naadloze integratie', '2-3 dagen'],
        },
        {
          title: 'Onzichtbare Scheurherstel',
          price: 'Vanaf €149',
          description: 'Onzichtbare reparatie van scheuren en beschadigingen. Uw jas ziet eruit als nieuw.',
          features: ['Onzichtbaar resultaat', 'Kleur matching', 'Structuurbehoud', '3-5 dagen'],
          popular: true,
        },
        {
          title: 'Moderne Fit Restyling',
          price: '€295',
          description: 'Geef uw jas een moderne pasvorm. Aangepast aan uw lichaam en de laatste trends.',
          features: ['Op maat gemaakt', 'Trend-bewust', 'Pasvorm garantie', '5-7 dagen'],
        },
        {
          title: 'Volledige Revival & Redesign',
          price: '€495',
          description: 'Complete transformatie van uw leren jas. Nieuw leven, nieuw design, zelfde ziel.',
          features: ['Compleet redesign', 'Nieuwe voering', 'Kleur vernieuwing', '7-14 dagen'],
          premium: true,
        },
      ],
      custom: {
        title: 'Custom Couture',
        description: 'Op maat gemaakte leren kleding, volledig naar uw wensen ontworpen en vervaardigd.',
        cta: 'Neem Contact Op',
      },
    },
    gallery: {
      badge: 'Ons Werk',
      title: 'Voor & Na',
      subtitle: 'Het verschil dat vakmanschap maakt',
      before: 'Voor',
      after: 'Na',
      viewAll: 'Bekijk Volledige Galerij',
    },
    about: {
      badge: 'Het Verhaal',
      title: 'Maurice Eduard Verlinden',
      subtitle: 'Meester Leerbewerker & Oprichter',
      bio: [
        'Maurice Eduard Verlinden richtte in 1990 Prototype Styling op — een atelier gewijd aan de kunst van leerbewerking. Opgeleid aan het Amsterdam Fashion Institute (AMFI), combineerde hij academische kennis met een diepgewortelde passie voor leer.',
        'Door de jaren heen importeerde Maurice premium leders uit Frankrijk, Italië en Portugal. Hij werkte samen met toonaangevende leerlooierijen en ontwikkelde technieken die zijn werk onderscheiden van de rest.',
        'Met meer dan 1.500 op maat gemaakte stukken op zijn naam, is Maurice uitgegroeid tot dé specialist in Amsterdam voor leren jassen. Van reparatie en restyling tot volledig nieuwe creaties — elk stuk draagt zijn handtekening van kwaliteit.',
        'Vandaag de dag zet Maurice zijn missie voort vanuit zijn atelier aan de Overtoom in Amsterdam, waar hij elk kledingstuk behandelt met dezelfde toewijding en precisie als op dag één.',
      ],
      quote: '"Elk stuk leer heeft een ziel. Mijn taak is die tot leven te brengen."',
    },
    testimonials: {
      badge: 'Ervaringen',
      title: 'Wat Onze Klanten Zeggen',
      subtitle: 'Vertrouwd door privé-collecties, vintage dealers en internationale klanten',
      items: [
        {
          name: 'Sophie v.d. Berg — Amsterdam',
          text: 'Mijn vintage Schott Perfecto uit 1972 was bijna onherstelbaar beschadigd. Maurice heeft hem volledig gerestaureerd — beter dan de dag dat ik hem kocht.',
          rating: 5,
        },
        {
          name: 'Thomas de Groot — Den Haag',
          text: 'Na jaren zoeken eindelijk een vakman die écht verstand heeft van leer. De ritsvervanging op mijn Belstaff is onzichtbaar uitgevoerd.',
          rating: 5,
        },
        {
          name: 'Elena R. — Milan',
          text: 'I flew my grandfather\'s Valstarino jacket from Milan to Amsterdam specifically for Maurice. His craftsmanship is unmatched in Europe.',
          rating: 5,
        },
        {
          name: 'Mark Jansen — Rotterdam',
          text: 'Mijn motorjas had ernstige schade na een val. Maurice heeft hem onzichtbaar hersteld. Echt een kunstenaar met leer.',
          rating: 5,
        },
      ],
    },
    cta: {
      title: 'Vertrouw Uw Kostbaarste Stuk Toe aan een Meester',
      subtitle: 'Elk traject begint met een persoonlijk gesprek in het atelier',
      button: 'Verzoek een Afspraak',
      phone: 'Of bel direct',
    },
    contact: {
      badge: 'Contact',
      title: 'Bezoek het Atelier',
      subtitle: 'Plan een afspraak of neem contact op',
      address: 'Overtoom 336, Amsterdam',
      phone: '+31633588993',
      formTitle: 'Online Intake Formulier',
      formName: 'Naam',
      formEmail: 'E-mail',
      formPhone: 'Telefoon',
      formService: 'Gewenste Dienst',
      formMessage: 'Beschrijf uw jas en het gewenste resultaat',
      formSubmit: 'Verstuur Aanvraag',
      formSuccess: 'Bedankt! We nemen zo snel mogelijk contact met u op.',
      selectService: 'Selecteer een dienst',
      bookAppointment: 'Maak een Afspraak',
      openingHours: 'Openingstijden',
      hours: {
        weekdays: 'Ma - Vr: 10:00 - 18:00',
        saturday: 'Za: Op afspraak',
        sunday: 'Zo: Gesloten',
      },
    },
    blog: {
      badge: 'Blog',
      title: 'Leer Kennis & Inspiratie',
      subtitle: 'Tips, trends en verhalen uit het atelier',
      readMore: 'Lees Meer',
      comingSoon: 'Meer artikelen volgen binnenkort...',
      posts: [
        {
          title: 'Hoe Onderhoud je een Leren Jas? 5 Essentiële Tips',
          excerpt: 'Een goed onderhouden leren jas gaat generaties mee. Ontdek de vijf belangrijkste tips voor het verzorgen van uw leren jas.',
          category: 'Onderhoud',
          date: '15 maart 2026',
        },
        {
          title: 'De Trend van Vintage Leer: Waarom Restyling het Nieuwe Kopen is',
          excerpt: 'Duurzaamheid en stijl gaan hand in hand. Leer waarom steeds meer mensen kiezen voor restyling in plaats van nieuw kopen.',
          category: 'Trends',
          date: '2 februari 2026',
        },
        {
          title: 'Van Schade naar Schoonheid: Een Transformatie Verhaal',
          excerpt: 'Een klant bracht een zwaar beschadigde jas uit 1985. Lees hoe we deze hebben hersteld tot een prachtig modern stuk.',
          category: 'Verhalen',
          date: '18 januari 2026',
        },
      ],
    },
    footer: {
      tagline: 'Dé (k)Leermaker voor Uw beste Leren Jas',
      rights: 'Alle rechten voorbehouden',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
      quickLinks: 'Snelle Links',
      contactInfo: 'Contact Info',
      followUs: 'Volg Ons',
      mepretap: 'Bekijk ook Mepretap',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Maurice',
      gallery: 'Gallery',
      blog: 'Blog',
      contact: 'Contact',
      callNow: 'Call Us',
      whatsapp: 'WhatsApp',
      planIntake: 'Request Consultation',
    },
    hero: {
      headline: 'Your Leather Jacket Deserves the Best',
      subline: 'Expert restoration, restyling and bespoke tailoring for your most treasured leather garments. Amsterdam\'s master leather craftsman since 1990.',
      cta: 'Request a Consultation',
      ctaSecondary: 'Discover Our Work',
      scroll: 'Discover more',
    },
    why: {
      badge: 'Since 1990',
      title: 'Why DrJacket?',
      subtitle: '35+ Years of Leather Craftsmanship',
      description: 'Maurice Eduard Verlinden combines over 35 years of experience with a passion for sustainable craftsmanship. Every piece of leather tells a story — we make sure it keeps telling it.',
      stats: {
        years: '35+',
        yearsLabel: 'Years Experience',
        pieces: '1,500+',
        piecesLabel: 'Unique Creations',
        rating: '5.0',
        ratingLabel: 'Google Rating',
        sustainable: '100%',
        sustainableLabel: 'Sustainable',
      },
    },
    services: {
      badge: 'Our Services',
      title: 'Bespoke Craftsmanship',
      subtitle: 'From quick repairs to complete transformations',
      items: [
        {
          title: 'Zip Replacement',
          price: '€95',
          description: 'Professional zipper replacement with premium YKK or Riri zippers. Seamlessly integrated.',
          features: ['YKK/Riri zippers', 'Color matching', 'Seamless integration', '2-3 days'],
        },
        {
          title: 'Invisible Tear Repair',
          price: 'From €149',
          description: 'Invisible repair of tears and damage. Your jacket will look brand new.',
          features: ['Invisible result', 'Color matching', 'Texture preservation', '3-5 days'],
          popular: true,
        },
        {
          title: 'Modern Fit Restyling',
          price: '€295',
          description: 'Give your jacket a modern fit. Tailored to your body and the latest trends.',
          features: ['Custom tailored', 'Trend-conscious', 'Fit guarantee', '5-7 days'],
        },
        {
          title: 'Full Revival & Redesign',
          price: '€495',
          description: 'Complete transformation of your leather jacket. New life, new design, same soul.',
          features: ['Complete redesign', 'New lining', 'Color renewal', '7-14 days'],
          premium: true,
        },
      ],
      custom: {
        title: 'Custom Couture',
        description: 'Bespoke leather garments, fully designed and crafted to your specifications.',
        cta: 'Get in Touch',
      },
    },
    gallery: {
      badge: 'Our Work',
      title: 'Before & After',
      subtitle: 'The difference craftsmanship makes',
      before: 'Before',
      after: 'After',
      viewAll: 'View Full Gallery',
    },
    about: {
      badge: 'The Story',
      title: 'Maurice Eduard Verlinden',
      subtitle: 'Master Leather Craftsman & Founder',
      bio: [
        'Maurice Eduard Verlinden founded Prototype Styling in 1990 — an atelier dedicated to the art of leather craftsmanship. Trained at the Amsterdam Fashion Institute (AMFI), he combined academic knowledge with a deep-rooted passion for leather.',
        'Over the years, Maurice imported premium leathers from France, Italy, and Portugal. He collaborated with leading tanneries and developed techniques that set his work apart from the rest.',
        'With over 1,500 custom-made pieces to his name, Maurice has become the go-to specialist in Amsterdam for leather jackets. From repair and restyling to entirely new creations — each piece bears his signature of quality.',
        'Today, Maurice continues his mission from his atelier on the Overtoom in Amsterdam, where he treats every garment with the same dedication and precision as on day one.',
      ],
      quote: '"Every piece of leather has a soul. My job is to bring it to life."',
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Clients Say',
      subtitle: 'Trusted by private collectors, vintage dealers and international clients',
      items: [
        {
          name: 'Sophie v.d. Berg — Amsterdam',
          text: 'My vintage 1972 Schott Perfecto was nearly beyond repair. Maurice restored it completely — better than the day I bought it.',
          rating: 5,
        },
        {
          name: 'Thomas de Groot — The Hague',
          text: 'After years of searching, finally found a craftsman who truly understands leather. The zip replacement on my Belstaff is invisible.',
          rating: 5,
        },
        {
          name: 'Elena R. — Milan',
          text: 'I flew my grandfather\'s Valstarino jacket from Milan to Amsterdam specifically for Maurice. His craftsmanship is unmatched in Europe.',
          rating: 5,
        },
        {
          name: 'Mark Jansen — Rotterdam',
          text: 'My motorcycle jacket had serious damage after a fall. Maurice repaired it invisibly. A true artist with leather.',
          rating: 5,
        },
      ],
    },
    cta: {
      title: 'Entrust Your Most Precious Piece to a Master',
      subtitle: 'Every journey begins with a personal conversation at the atelier',
      button: 'Request an Appointment',
      phone: 'Or call directly',
    },
    contact: {
      badge: 'Contact',
      title: 'Visit the Atelier',
      subtitle: 'Schedule an appointment or get in touch',
      address: 'Overtoom 336, Amsterdam',
      phone: '+31633588993',
      formTitle: 'Online Intake Form',
      formName: 'Name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formService: 'Desired Service',
      formMessage: 'Describe your jacket and the desired result',
      formSubmit: 'Submit Request',
      formSuccess: 'Thank you! We will contact you as soon as possible.',
      selectService: 'Select a service',
      bookAppointment: 'Book an Appointment',
      openingHours: 'Opening Hours',
      hours: {
        weekdays: 'Mon - Fri: 10:00 - 18:00',
        saturday: 'Sat: By appointment',
        sunday: 'Sun: Closed',
      },
    },
    blog: {
      badge: 'Blog',
      title: 'Leather Knowledge & Inspiration',
      subtitle: 'Tips, trends and stories from the atelier',
      readMore: 'Read More',
      comingSoon: 'More articles coming soon...',
      posts: [
        {
          title: 'How to Care for Your Leather Jacket: 5 Essential Tips',
          excerpt: 'A well-maintained leather jacket lasts generations. Discover the five most important tips for caring for your leather jacket.',
          category: 'Care',
          date: 'March 15, 2026',
        },
        {
          title: 'The Vintage Leather Trend: Why Restyling is the New Buying',
          excerpt: 'Sustainability and style go hand in hand. Learn why more people are choosing restyling over buying new.',
          category: 'Trends',
          date: 'February 2, 2026',
        },
        {
          title: 'From Damage to Beauty: A Transformation Story',
          excerpt: 'A client brought a heavily damaged jacket from 1985. Read how we restored it into a beautiful modern piece.',
          category: 'Stories',
          date: 'January 18, 2026',
        },
      ],
    },
    footer: {
      tagline: 'The Leather Tailor for Your Finest Leather Jacket',
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      mepretap: 'Also visit Mepretap',
    },
  },
};

export type ServiceItem = {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export type Dictionary = {
  nav: { home: string; services: string; about: string; gallery: string; blog: string; contact: string; callNow: string; whatsapp: string; planIntake: string };
  hero: { headline: string; subline: string; cta: string; ctaSecondary: string; scroll: string };
  why: { badge: string; title: string; subtitle: string; description: string; stats: { years: string; yearsLabel: string; pieces: string; piecesLabel: string; rating: string; ratingLabel: string; sustainable: string; sustainableLabel: string } };
  services: { badge: string; title: string; subtitle: string; items: ServiceItem[]; custom: { title: string; description: string; cta: string } };
  gallery: { badge: string; title: string; subtitle: string; before: string; after: string; viewAll: string };
  about: { badge: string; title: string; subtitle: string; bio: string[]; quote: string };
  testimonials: { badge: string; title: string; subtitle: string; items: Testimonial[] };
  cta: { title: string; subtitle: string; button: string; phone: string };
  contact: { badge: string; title: string; subtitle: string; address: string; phone: string; formTitle: string; formName: string; formEmail: string; formPhone: string; formService: string; formMessage: string; formSubmit: string; formSuccess: string; selectService: string; bookAppointment: string; openingHours: string; hours: { weekdays: string; saturday: string; sunday: string } };
  blog: { badge: string; title: string; subtitle: string; readMore: string; comingSoon: string; posts: BlogPost[] };
  footer: { tagline: string; rights: string; privacy: string; terms: string; quickLinks: string; contactInfo: string; followUs: string; mepretap: string };
};
