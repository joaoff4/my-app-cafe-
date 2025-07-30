import React from "react";
import cultivo from "../images/cultivo.png";
import colheita from "../images/colheita.jpg";
import processamento from "../images/processamento.png";
import secagem from "../images/secagem.png";
import beneficiamento from "../images/benificiamento.png";
import classificacao from "../images/calssificacao.png";
import torra from "../images/torra.png";
import moagem from "../images/moagem.png";
import preparo from "../images/preparo.png";

// Componente do Guia de Produção de Café
const CoffeeProductionGuide = () => {
  // Passos da produção do café
  const steps = [
    {
      title: "1. Cultivo (Plantio e Cuidado)",
      description:
        "Tudo começa com a semente. O café é cultivado em regiões tropicais e subtropicais, com clima ameno, chuvas regulares e solos ricos. As mudas são plantadas e levam de 3 a 5 anos para produzir os primeiros frutos. Durante esse período, os cafeicultores cuidam das plantas, garantindo irrigação, adubação e proteção contra pragas e doenças.",
      imageUrl: cultivo,
    },
    {
      title: "2. Colheita",
      description:
        "Quando os frutos (cerejas de café) atingem a coloração vermelho-cereja ou amarela (dependendo da variedade), estão maduros para a colheita. Existem dois métodos principais: a colheita seletiva (picking), onde apenas os frutos maduros são colhidos manualmente; e a derriça (stripping), onde todos os frutos são retirados do ramo de uma vez, manualmente ou com máquinas.",
      imageUrl: colheita,
    },
    {
      title: "3. Processamento",
      description:
        "Após a colheita, os grãos precisam ser separados da polpa. Existem três métodos principais: o via seca (natural), onde os frutos são secos inteiros ao sol; o via úmida (lavado), onde a polpa é removida antes da secagem; e o semi-úmido (cereja descascado), que é um híbrido dos dois.",
      imageUrl: processamento,
    },
    {
      title: "4. Secagem",
      description:
        "A secagem é crucial para reduzir o teor de umidade dos grãos, evitando a proliferação de fungos e bactérias. Pode ser feita em terreiros ao sol, em secadores mecânicos ou em pátios suspensos. O objetivo é atingir um teor de umidade ideal, geralmente entre 10% e 12%.",
      imageUrl: secagem,
    },
    {
      title: "5. Beneficiamento (Descascamento e Polimento)",
      description:
        "Nesta etapa, os grãos secos são descascados para remover a casca (pergaminho para o café lavado ou casca seca para o natural). Em seguida, podem ser polidos para remover a película prateada. O resultado são os grãos de café verde, prontos para a exportação ou para a torra.",
      imageUrl: beneficiamento,
    },
    {
      title: "6. Classificação e Seleção",
      description:
        "Os grãos de café verde são classificados por tamanho, densidade, cor e defeitos. Essa etapa garante a uniformidade do lote e a qualidade final do café. Grãos defeituosos são removidos, e os grãos de alta qualidade são separados para cafés especiais.",
      imageUrl: classificacao,
    },
    {
      title: "7. Torra",
      description:
        "A torra é o processo que transforma o grão de café verde em grão de café torrado, desenvolvendo seus aromas e sabores. A temperatura e o tempo de torra são cruciais e determinam o perfil do café (claro, médio, escuro). É uma arte que exige precisão e experiência.",
      imageUrl: torra,
    },
    {
      title: "8. Moagem",
      description:
        "Após a torra, os grãos podem ser moídos. A espessura da moagem é fundamental e depende do método de preparo. Moagens finas são para expresso, médias para coado e grossas para prensa francesa, por exemplo. A moagem libera os compostos aromáticos do café.",
      imageUrl: moagem,
    },
    {
      title: "9. Preparo (A Xícara Perfeita)",
      description:
        "Finalmente, o café moído é preparado. Seja por métodos de infusão (coado, prensa francesa), pressão (expresso) ou imersão, o objetivo é extrair o melhor sabor e aroma. A qualidade da água, a temperatura e a proporção café/água são essenciais para a xícara perfeita.",
      imageUrl: preparo,
    },
  ];

  return (
    <section className="production-guide-section">
      <h2 className="section-title">Do Grão à Xícara: O Caminho do Café</h2>
      <p className="guide-intro-text">
        Descubra a fascinante jornada do café, desde o seu cultivo nas
        plantações até a deliciosa bebida que você aprecia em sua xícara. Cada
        etapa é crucial para o sabor e aroma que amamos.
      </p>

      <div className="guide-steps-container">
        {/* Mapeia e exibe cada passo do guia */}
        {steps.map((step, index) => (
          <div key={index} className="guide-step-card">
            <div className="guide-step-image-container">
              <img
                src={step.imageUrl}
                alt={step.title}
                className="guide-step-image"
                // Fallback para imagem caso o URL não carregue
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/CCCCCC/333333?text=Imagem+Não+Disponível";
                }}
              />
            </div>
            <div className="guide-step-info">
              <h3 className="guide-step-title">{step.title}</h3>
              <p className="guide-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeProductionGuide;
