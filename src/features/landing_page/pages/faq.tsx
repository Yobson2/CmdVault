import { Link } from '@tanstack/react-router'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Layout from '@/components/layout/landing-page-layout'

const FAQ = () => {
  // FAQ pour les clients
  const riderFaqs = [
    {
      question: 'Comment réserver un trajet avec IvoryRide?',
      answer:
        "Vous pouvez réserver un trajet via notre application mobile, disponible sur iOS et Android, ou directement depuis notre site web. Saisissez simplement votre adresse de départ et d'arrivée, choisissez le type de véhicule souhaité et confirmez votre réservation.",
    },
    {
      question: 'Quels sont les moyens de paiement acceptés?',
      answer:
        "IvoryRide accepte plusieurs modes de paiement: paiement en espèces directement au chauffeur, cartes bancaires enregistrées dans l'application, transfert Mobile Money (Orange Money, MTN Mobile Money, Wave) et compte prépayé IvoryRide.",
    },
    {
      question: 'Comment sont calculés les tarifs des trajets?',
      answer:
        'Nos tarifs sont calculés en fonction de la distance du trajet, du temps de parcours estimé, du type de véhicule choisi et de la demande en cours. Vous pouvez toujours voir une estimation du prix avant de confirmer votre réservation.',
    },
    {
      question: "Puis-je réserver un trajet à l'avance?",
      answer:
        "Oui, notre service permet de programmer des trajets jusqu'à 7 jours à l'avance. Il vous suffit de sélectionner la date et l'heure souhaitées lors de votre réservation.",
    },
    {
      question: 'Comment contacter mon chauffeur?',
      answer:
        "Une fois votre réservation confirmée, vous pouvez contacter votre chauffeur directement via l'application en utilisant la fonction message ou appel intégrée, tout en préservant la confidentialité de votre numéro de téléphone.",
    },
    {
      question: "Que faire si j'ai oublié un objet dans le véhicule?",
      answer:
        "Si vous avez oublié un objet, contactez immédiatement notre service client via l'application ou par téléphone. Nous contacterons le chauffeur pour vérifier si l'objet a été retrouvé et organiser sa restitution.",
    },
  ]

  // FAQ pour les chauffeurs
  const driverFaqs = [
    {
      question: 'Comment devenir chauffeur partenaire IvoryRide?',
      answer:
        "Pour devenir chauffeur partenaire, vous devez posséder un permis de conduire valide, un véhicule conforme à nos standards de qualité, et compléter notre processus d'inscription incluant une vérification des antécédents. Visitez la section 'Devenir Chauffeur' pour plus d'informations.",
    },
    {
      question: 'Quels sont les frais de commission prélevés par IvoryRide?',
      answer:
        'IvoryRide prélève une commission de 15% à 20% sur chaque course, selon le type de service et votre ancienneté en tant que partenaire. Le reste vous est versé directement.',
    },
    {
      question: 'À quelle fréquence sont effectués les paiements?',
      answer:
        "Les paiements sont effectués de manière hebdomadaire, chaque lundi pour les courses de la semaine précédente. Vous pouvez suivre vos gains en temps réel dans l'application chauffeur.",
    },
  ]

  return (
    <Layout>
      {/* Hero section */}
      <div className='bg-[#1E3054] py-16 text-white'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='mb-6 text-3xl font-bold md:text-5xl'>
              Questions Fréquentes
            </h1>
            <p className='text-lg text-gray-300'>
              Retrouvez les réponses aux questions les plus courantes concernant
              nos services
            </p>

            {/* Search bar */}
            <div className='relative mx-auto mt-8 max-w-md'>
              <Input
                type='text'
                placeholder='Rechercher une question...'
                className='rounded-full py-2 pr-10 pl-4 text-black'
              />
              <button className='absolute top-1/2 right-3 -translate-y-1/2'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <section className='bg-muted/20 border-b py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button variant='ghost' className='rounded-full'>
              Général
            </Button>
            <Button variant='ghost' className='bg-muted rounded-full'>
              Réservations
            </Button>
            <Button variant='ghost' className='rounded-full'>
              Paiements
            </Button>
            <Button variant='ghost' className='rounded-full'>
              Chauffeurs
            </Button>
            <Button variant='ghost' className='rounded-full'>
              Problèmes techniques
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl'>
            {/* Clients FAQ */}
            <div className='mb-12'>
              <h2 className='mb-6 text-2xl font-bold'>Pour les Clients</h2>
              <Accordion className='w-full'>
                {riderFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`rider-item-${index}`}>
                    <AccordionTrigger className='text-left font-medium'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-muted-foreground'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Chauffeurs FAQ */}
            <div>
              <h2 className='mb-6 text-2xl font-bold'>Pour les Chauffeurs</h2>
              <Accordion className='w-full'>
                {driverFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`driver-item-${index}`}>
                    <AccordionTrigger className='text-left font-medium'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-muted-foreground'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Devenir chauffeur prompt */}
            {/* <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">Vous souhaitez devenir chauffeur partenaire?</h3>
              <p className="text-muted-foreground mb-6">
                Rejoignez notre réseau de chauffeurs professionnels et bénéficiez de nombreux avantages.
              </p>
              <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90">Devenir Chauffeur</Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className='bg-[#0A1931] py-12 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-2xl font-bold'>
            Vous avez encore des questions?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-gray-300'>
            Notre équipe de support est disponible pour vous aider 24/7.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link to='/contact'>
              <Button size='lg' className='bg-[#FF8C00] hover:bg-[#FF8C00]/90'>
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FAQ
