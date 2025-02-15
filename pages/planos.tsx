import React from 'react';

interface Plan {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  { 
    id: 1, 
    title: 'Plano Básico', 
    description: 'Plano inicial com recursos limitados.',
    price: 'R$ 29,90/mês', 
    features: ['Acesso básico', 'Suporte por e-mail', 'Armazenamento limitado', 'Geração de 3 áudios']
  },
  { 
    id: 2, 
    title: 'Plano Padrão', 
    description: 'Plano intermediário com mais funcionalidades.',
    price: 'R$ 59,90/mês',
    features: ['Acesso básico', 'Suporte 24h', 'Armazenamento ilimitado', 'Geração de 10 áudios']
  },
  { 
    id: 3, 
    title: 'Plano Premium', 
    description: 'Plano completo com todos os recursos.',
    price: 'R$ 99,90/mês', 
    features: ['Acesso básico', 'Suporte 24h', 'Armazenamento ilimitado', 'Geração de 30 áudios', 'Geração de vídeos']
  },
];

const PlanCards: React.FC = () => {
  const handleAddToCart = (planTitle: string) => {
    alert(`${planTitle} adicionado ao carrinho!`);
  };

  return (
    <div className="p-4">
      <h1 className="m-auto mt-[-10px] text-[10mm] font-semibold text-black text-center smi:text-[8mm]">
        Dê vida às suas palavras com vozes incríveis!
      </h1>

      <p className="m-auto mt-[10px] text-lg text-center max-w-[1000px]">
        Já imaginou transformar qualquer texto em uma narração profissional de forma rápida e simples? Com nosso gerador de áudios, 
        você tem acesso a vozes naturais e de alta qualidade para criar conteúdos impressionantes. Não perca tempo! Adquira seus créditos e comece agora a criar áudios de forma ilimitada. Dê voz às suas ideias! 🎧✨
      </p>

      {/* Cards de Planos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {plans.map((plan) => (
          <div key={plan.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-2">{plan.description}</p>
            <p className="text-lg font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-700 mb-4 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="mr-2 text-green-500">{'✔'}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleAddToCart(plan.title)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCards;
