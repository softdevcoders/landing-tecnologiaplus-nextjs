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
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615986/oficinas_2x-8_ybubhb",
      alt: "icono de Oficinas",
      name: "Oficinas",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/comercio_2x-8_wrjczj",
      alt: "icono de Comercio",
      name: "Comercio",
      width: 390,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615995/otras_industrias_2x-8_jwvjrm",
      alt: "icono de otras industrias",
      name: "Otras industrias",
      width: 340,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="Nuestro calificador de servicio se adapta a todos los sectores" /> 
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