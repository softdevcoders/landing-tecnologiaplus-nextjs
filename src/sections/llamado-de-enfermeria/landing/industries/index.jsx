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
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685529/Geria%CC%81tricos_2x-8_djctos.webp",
      alt: "Acompañamiento geriátrico", 
      name: "Geriátricos",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738692286/salud_2x-8_anq348.webp",
      alt: "icono de Sector salud",
      name: "Sector salud",
      width: 340,
      height: 293,
    },
    {
      icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615995/otras_industrias_2x-8_jwvjrm.webp",
      alt: "icono de Otras industrias",
      name: "Otras industrias",
      width: 340,
      height: 293,
    },
  ];

  return (
    <IndustriesSection>
      <IndustriesSectionContainer>
        <IndustriesSectionTitle title="LLAMADOR DE PERONAL IDEAL PARA HOSPITALES, CLÍNICAS Y MÁS" />
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

export default LlamadoDeEnfermeriaIndustriesSection;


