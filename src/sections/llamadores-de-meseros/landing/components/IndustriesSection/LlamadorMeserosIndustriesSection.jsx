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
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/restaurantes_2x-8_lpqdzj.webp",
      alt: "icono de Restaurantes",
      name: "Restaurantes",
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694403/hoteles_2x-8_odgal8.webp",
      alt: "icono de Hoteles",
      name: "Hoteles",
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/otras_industrias_2x-8_jwvjrm.webp",
      alt: "icono de Otras industrias",
      name: "Otras industrias",  
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
          <IndustriesSectionTitle title="LLAMADOR DE PERSONAL ADAPTABLE A TODOS LOS SECTORES" />
          <IndustriesSectionList> 
          {industries.map((industry, index) => (
            <IndustriesSectionListItem key={index}>
              <IndustriesSectionListItemIconContainer>
                <IndustriesSectionListItemIcon src={industry.icon} alt={industry.alt} />
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



