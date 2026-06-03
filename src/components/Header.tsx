import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="https://i.ibb.co/G3MWHty2/ACN-claro.png" alt="ACN Sinal Verde" className="h-14 w-auto drop-shadow-sm" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Página Inicial</Link>
          
          <div className="relative group/nav">
            <Link to="/produtos" className="text-gray-600 hover:text-green-600 font-medium transition-colors flex items-center gap-1 py-8">
              Produtos <ChevronDown size={16} className="group-hover/nav:rotate-180 transition-transform" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 p-6 flex gap-8">
              <div className="flex-1">
                <h4 className="text-blue-700 font-bold uppercase tracking-wider text-xs mb-4 border-b border-gray-100 pb-2">Radiocomunicação</h4>
                <ul className="space-y-3">
                  <li><Link to="/produtos/radios-portateis" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Rádios portáteis digitais</Link></li>
                  <li><Link to="/produtos/radios-moveis" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Rádios móveis veiculares</Link></li>
                  <li><Link to="/produtos/sistemas-repetidoras" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Sistemas de repetidoras</Link></li>
                  <li><Link to="/produtos/acessorios-audio" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Acessórios de áudio</Link></li>
                  <li><Link to="/produtos/antenas-profissionais" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Antenas profissionais</Link></li>
                  <li><Link to="/produtos/locacao-comodato" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors block">Locação e comodato</Link></li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-green-700 font-bold uppercase tracking-wider text-xs mb-4 border-b border-gray-100 pb-2">Adaptação Veicular</h4>
                <ul className="space-y-3">
                  <li><Link to="/produtos/sinalizadores-visuais" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Sinalizadores visuais</Link></li>
                  <li><Link to="/produtos/sistemas-acusticos" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Sistemas acústicos e sirenes</Link></li>
                  <li><Link to="/produtos/paineis-comando" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Painéis de comando</Link></li>
                  <li><Link to="/produtos/iluminacao-perimetral" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Iluminação perimetral</Link></li>
                  <li><Link to="/produtos/compartimentos-detidos" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Compartimentos de detidos</Link></li>
                  <li><Link to="/produtos/projetos-especiais" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors block">Projetos especiais</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Link to="/diferenciais" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Diferenciais</Link>
          <Link to="/clientes" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Clientes</Link>
        </nav>
        
        <div className="hidden md:flex items-center">
          <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm flex items-center gap-2">
            Solicitar Orçamento
          </a>
        </div>
        
        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
