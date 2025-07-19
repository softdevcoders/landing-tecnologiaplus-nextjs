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

function LocalizadoresIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/restaurantes_2x-8_lpqdzj.webp",
      alt: "icono de Restaurantes",
      name: "Zona de comidas <br> autoservicio",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738692286/salud_2x-8_anq348.webp",
      alt: "icono de Sector salud",
      name: "Salud",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615995/otras_industrias_2x-8_jwvjrm.webp",
      alt: "icono de otras industrias",
      name: "Otras industrias",
      width: 340,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="Nuestros localizadores de clientes se adaptan a distintos sectores y necesidades." />
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

export default LocalizadoresIndustriesSection;


