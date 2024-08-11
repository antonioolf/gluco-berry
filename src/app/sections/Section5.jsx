import styled from "styled-components";
import Section from "../components/Section";

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: black;

  h1 {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    line-height: 30px;
  }
`;

function Section5() {
  return (
    <SectionStyled>
      <h1>Você poderá fazer artes para mais de 90 áreas:</h1>
      <p>
        Academia | Açaí | Açougue | Administradores de Condomínio | Advogados |
        Agência de Viagens | Agendas de Festas | Arquitetos | Assistência
        Técnica de Celulares | Auto Escola | Barbearia | Bares | Bebidas | Black
        Friday | Cachorro-Quente | Casamento | Churrascarias | Clínicas Médicas
        | Coach | Coloridos | Comércio e Vendas | Comida Japonesa |
        Contabilidade | Coronavírus | Corretor de Seguros | Dança | Dark | Datas
        Comemorativas | Delivery | Dentista | Dia das Crianças | Dia das Mães |
        Dia dos Namorados | Dia dos Pais | Doceria | Duotone | Ecommerce |
        Energia Solar | Escolar | Estética | Exames Clínicos | Farmácia |
        Fashion | Festas | Financeiro | Fisioterapia | Frases de Motivação |
        Futebol | Gamer | Gospel | Hamburgueria | Imobiliária | Importação |
        Informática | IPTV | Lanches | Lives | Loja de Eletrônicos | Marketing
        Digital | Material de Construção | Mecânica | Micropigmentação | Moda |
        Modernos | Natureza | Novembro Azul | Nutricionista | Obstetrícia |
        Ofertas | Óticas | Outubro Rosa | Pet Shop | Pizzaria | Política | Posto
        de Gasolina | Preto e Branco | Promoções | Provedor de Internet |
        Psicologia | Restaurantes | Salão de Beleza | Saúde | Sazonal |
        Sorveteria | Supermercados | Sushi | Terapia Holística | Transportes |
        Turismo | Yoga
      </p>
    </SectionStyled>
  );
}

export default Section5;
