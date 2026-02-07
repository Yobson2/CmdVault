import { Button } from '@/components/ui/button';

const AppDownloadSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A1931] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Téléchargez notre application mobile</h2>
            <p className="text-gray-300 text-lg">
              Accédez à toutes nos fonctionnalités depuis votre smartphone. 
              Réservations rapides, suivi en temps réel, paiements sécurisés et bien plus.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="border-white  bg-white text-[#0A1931]">
                {/* <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 19.9l-6.5-3.7-6.5 3.7 1.7-7.4-5.6-4.9 7.3-.6 3-7 3 7 7.3.6-5.6 4.9 1.7 7.4z"/>
                </svg> */}
                Google Play
              </Button>
              <Button variant="outline" className="border-white bg-white text-[#0A1931]">
                {/* <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5z"/>
                  <path d="M8.25 19.5v-9l7.5-1.5v9l-7.5 1.5z"/>
                </svg> */}
                App Store
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center text-sm font-medium">CI</div>
                <div className="h-10 w-10 rounded-full bg-[#00843D] text-white flex items-center justify-center text-sm font-medium">VT</div>
                <div className="h-10 w-10 rounded-full bg-white text-[#0A1931] flex items-center justify-center text-sm font-medium">RD</div>
              </div>
              <p className="text-sm text-gray-300">
                Rejoint par <span className="font-bold text-white">+10,000</span> utilisateurs en Côte d'Ivoire
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="absolute w-[220px] h-[400px] -rotate-6 shadow-xl rounded-3xl overflow-hidden border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581066316382-b48298a35840?q=80&w=1000&auto=format&fit=crop" 
                alt="IvoryRide App" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-[220px] h-[400px] rotate-6 left-[55%] shadow-xl rounded-3xl overflow-hidden border-8 border-white">
              <img 
                src="https://plus.unsplash.com/premium_photo-1682125886075-fbb0dbc35daf?q=80&w=1000&auto=format&fit=crop" 
                alt="IvoryRide App Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
