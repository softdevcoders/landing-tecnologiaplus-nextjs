import { 
  IndustriesSection, 
  IndustriesSectionContainer,
  IndustriesSectionTitle, 
  IndustriesSectionList, 
  IndustriesSectionListItem, 
  IndustriesSectionListItemIcon, 
  IndustriesSectionListItemIconContainer,
  IndustriesSectionListItemText 
} from "@/components/industries-section";

function LlamadorMeserosIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214310/industrias_restaurantes_llamador_de_meseros",
      alt: "Icono restaurantes para usar llamador de meseros",
      title: "Restaurantes llamador de meseros",
      name: "Restaurantes",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214310/industrias_hoteles_timbre_de_restaurante",
      alt: "Icono hoteles que implementan timbre de restaurante",
      title: "Hoteles timbre de restaurante",
      name: "Hoteles",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758214311/industrias_otras_industrias_timbres_para_restaurantes",
      alt: "Icono otras industrias con uso de timbres para restaurantes",
      title: "Otras industrias timbres para restaurantes",
      name: "Otras industrias",  
      width: 340,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
          <IndustriesSectionTitle title="LLAMADOR DE MESEROS ADAPTABLE A TODOS LOS SECTORES" />
          <IndustriesSectionList> 
          {industries.map((industry, index) => (
            <IndustriesSectionListItem key={index}>
              <IndustriesSectionListItemIconContainer>
                <IndustriesSectionListItemIcon src={industry.icon} alt={industry.alt} title={industry.title} />
              </IndustriesSectionListItemIconContainer>
              <IndustriesSectionListItemText text={industry.name} />
            </IndustriesSectionListItem>
          ))}
        </IndustriesSectionList>
      </IndustriesSectionContainer>
    </IndustriesSection>
  );
}

export default LlamadorMeserosIndustriesSection;



