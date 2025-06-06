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

function TurnoExpressIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp",
      alt: "icono de Sector salud",
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738446073/Sala_de_espera_2x-8_vb2upo.webp",
      alt: "icono de Sala de espera",
      name: "Sala de espera",  
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp",   
      alt: "icono de Otras industrias", 
      name: "Otras industrias",  
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
          <IndustriesSectionTitle title="Nuestro Turnero Digital se adapta a Todos los sectores" />
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

export default TurnoExpressIndustriesSection;