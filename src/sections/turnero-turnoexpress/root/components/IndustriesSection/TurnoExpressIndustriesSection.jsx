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
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758572279/industrias_sector_salud_turnero_turnoexpress",
      alt: "Icono del Sector salud",
      title: "Sector salud",
      name: "Sector salud", 
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758572273/industrias_sala_de_espera_turnero_turnoexpress",
      alt: "Icono de sala de espera",
      title: "Salas de espera",
      name: "Sala de espera",  
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758572272/industrias_otras_industrias_turnero_turnoexpress",   
      alt: "Icono otras industrias", 
      title: "Otras industrias",
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

export default TurnoExpressIndustriesSection;