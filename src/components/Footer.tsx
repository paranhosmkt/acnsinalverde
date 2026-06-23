import { Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Contato */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/">
                <img src="https://i.ibb.co/G3MWHty2/ACN-claro.png" alt="ACN Sinal Verde" className="h-10 w-auto opacity-90 transition-opacity hover:opacity-100" />
              </Link>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Rua Osvaldo Souza, 104<br />
                  Aririu - Palhoça - SC<br />
                  CEP: 88135-028
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-500 shrink-0" />
                <span className="text-sm">(48) 3240-0336</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-500 shrink-0" />
                <span className="text-sm">acn@acn.com.br</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Corpo Técnico */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm">Corpo Técnico</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-blue-400 font-medium mb-1 text-sm">Engenheiro Mecânico</h5>
              </div>
              <div>
                <h5 className="text-blue-400 font-medium mb-1 text-sm">Engenheiro de Telecomunicações</h5>
              </div>
            </div>
          </div>

          {/* Col 3: Links Úteis */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-green-500" /> Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-green-500" /> Produtos e Serviços
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-green-500" /> Parceiros e Clientes
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-green-500" /> Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm">Redes Sociais</h4>
            <a 
              href="https://www.instagram.com/ledflex_br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-md transition-colors text-sm font-medium border border-gray-700"
            >
              <Instagram size={20} className="text-pink-500" />
              Siga nosso Instagram
            </a>
            <div className="mt-6">
              <img src="https://i.ibb.co/zH2W1rgp/unnamed.png" alt="Selo Crea-SC" className="h-24 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ACN. Todos os direitos reservados.</p>
          <p>
            Design por <a href="https://www.instagram.com/eleveegestao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">eleve gestão e estratégia</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
