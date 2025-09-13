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

function LlamadoDeEnfermeriaIndustriesSection() {
  const industries = [
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698089/industrias_acompanamiento_geriatrico",
      alt: "Icono acompañamiento geriátrico",
      title: "Acompañamiento geriátrico",
      name: "Geriátricos",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698084/industrias_sector_salud",
      alt: "Icono del Sector salud",
      title: "Sector salud",
      name: "Sector salud",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698088/industrias_otras_industrias",
      alt: "Icono de Otras industrias",
      title: "Otras industrias",
      name: "Otras industrias",
      width: 340,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="LLAMADOR DE PERSONAL IDEAL PARA HOSPITALES, CLÍNICAS Y MÁS" />
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

export default LlamadoDeEnfermeriaIndustriesSection;


