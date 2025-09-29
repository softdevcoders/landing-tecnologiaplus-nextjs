const BASE_URL = "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_400,f_webp,q_80"

const clientes = {
  MundoMujer: {
    src: `${BASE_URL}/v1758305611/mundo-mujer-logo`,
    alt: "Logo Mundo Mujer",
    title: "Logo Mundo Mujer",
  },
  Disfarma: {
    src: `${BASE_URL}/v1758305601/disfarma-logo`,
    alt: "Logo Disfarma",
    title: "Logo Disfarma",
  },
  Colmedica: {
    src: `${BASE_URL}/v1758305598/colmedica-logo`,
    alt: "Logo Colmedica",
    title: "Logo Colmedica",
  },
  Tuya: {
    src: `${BASE_URL}/v1758305624/tuya-logo`,
    alt: "Logo Tuya",
    title: "Logo Tuya",
  },
  ComfenalcoAntioquia: {
    src: `${BASE_URL}/v1758305602/comfenalco-antioquia-logo`,
    alt: "Logo Comfenalco Antioquia",
    title: "Logo Comfenalco Antioquia",
  },
  LigaColombianaContraElCancer: {
    src: `${BASE_URL}/v1758305610/liga-colombiana-contra-el-cancer-logo`,
    alt: "Logo Liga Colombiana Contra el Cáncer",
    title: "Logo Liga Colombiana Contra el Cáncer",
  },
  CruzRoja: {
    src: `${BASE_URL}/v1758305599/cruz-roja-logo`,
    alt: "Logo Cruz Roja",
    title: "Logo Cruz Roja",
  },
  BancoSantander: {
    src: `${BASE_URL}/v1758305594/banco-santander-logo`,
    alt: "Logo Banco Santander",
    title: "Logo Banco Santander",
  },
  Alkosto: {
    src: `${BASE_URL}/v1758305626/alkosto-logo`,
    alt: "Logo Alkosto",
    title: "Logo Alkosto",
  },
  Alkomprar: {
    src: `${BASE_URL}/v1758305590/alkomprar-logo`,
    alt: "Logo Alkomprar",
    title: "Logo Alkomprar",
  },
  MacPollo: {
    src: `${BASE_URL}/v1758305585/mac-pollo-logo`,
    alt: "Logo Mac Pollo",
    title: "Logo Mac Pollo",
  },
  Comfacundi: {
    src: `${BASE_URL}/v1758305593/comfacundi-logo`,
    alt: "Logo Comfacundi",
    title: "Logo Comfacundi",
  },
  Ramedicas: {
    src: `${BASE_URL}/v1758305599/ramedicas-logo`,
    alt: "Logo Ramédicas",
    title: "Logo Ramédicas",
  },
  NordVital: {
    src: `${BASE_URL}/v1758305593/nord-vital-logo`,
    alt: "Logo Nord Vital",
    title: "Logo Nord Vital",
  },
  LosOlivos: {
    src: `${BASE_URL}/v1758305592/los-olivos-logo`,
    alt: "Logo Los Olivos",
    title: "Logo Los Olivos",
  },
  Clinaltec: {
    src: `${BASE_URL}/v1758305587/clinaltec-logo`,
    alt: "Logo Clinaltec",
    title: "Logo Clinaltec",
  },
  Clinimed: {
    src: `${BASE_URL}/v1758305572/clinimed-logo`,
    alt: "Logo Clinimed",
    title: "Logo Clinimed",
  },
  HospitalSanRafael: {
    src: `${BASE_URL}/v1757698022/hospital-san-rafael-logo`,
    alt: "Logo Hospital San Rafael",
    title: "Logo Hospital San Rafael",
  },
  Confa: {
    src: `${BASE_URL}/v1758305486/confa-logo`,
    alt: "Logo Confa",
    title: "Logo Confa",
  },
  Heroica: {
    src: `${BASE_URL}/v1758305474/heroica-logo`,
    alt: "Logo Heroica",
    title: "Logo Heroica",
  },
  Dermosalud: {
    src: `${BASE_URL}/v1757698020/dermosalud-logo`,
    alt: "Logo Dermosalud",
    title: "Logo Dermosalud",
  },
  ESEHospitalNuestraSenoraDelCarmen: {
    src: `${BASE_URL}/hospital-nuestra-senora-del-carmen-logo`,
    alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    title: "Logo ESE Hospital Nuestra Señora del Carmen",
  },
  ClinicaNuestra: {
    src: `${BASE_URL}/v1757698031/clinica-nuestra-logo`,
    alt: "Logo Clinica Nuestra",
    title: "Logo Clinica Nuestra",
  },
  Kairos: {
    src: `${BASE_URL}/v1757698023/kairos-logo`,
    alt: "Logo Kairos",
    title: "Logo Kairos",
  },
  HombresHermanos: {
    src: `${BASE_URL}/v1757698025/hombres-hermanos-logo`,
    alt: "Logo Hombres Hermanos",
    title: "Logo Hombres Hermanos",
  },
  ElBosque: {
    src: `${BASE_URL}/v1757698027/el-bosque-logo`,
    alt: "Logo El Bosque",
    title: "Logo El Bosque",
  },
  HospitalSanRafael: {
    src: `${BASE_URL}/v1757698022/hospital-san-rafael-logo`,
    alt: "Logo Hospital San Rafael",
    title: "Logo Hospital San Rafael",
  },
  Smartfit: {
    src: `${BASE_URL}/v1758218488/smartfit-logo`,
    alt: "Logo Smartfit",
    title: "Logo Smartfit",
  },
  Estelar: {
    src: `${BASE_URL}/v1758210373/estelar-logo`,
    alt: "Logo Estelar",
    title: "Logo Estelar",
  },
  ClubCampestre: {
    src: `${BASE_URL}/v1758210372/club-campestre-logo`,
    alt: "Logo Club Campestre",
    title: "Logo Club Campestre",
  },
  HotelesCosmos: {
    src: `${BASE_URL}/v1758210372/hoteles-cosmos-logo`,
    alt: "Logo Hoteles Cosmos",
    title: "Logo Hoteles Cosmos",
  },
  ClubElNogal: {
    src: `${BASE_URL}/v1758210372/club-el-nogal-logo`,
    alt: "Logo Club El Nogal",
    title: "Logo Club El Nogal",
  },
  Jumbo: {
    src: `${BASE_URL}/v1758210372/jumbo-logo`,
    alt: "Logo Jumbo",
    title: "Logo Jumbo",
  },
  Loreal: {
    src: `${BASE_URL}/v1758210373/loreal-logo`,
    alt: "Logo Loreal",
    title: "Logo Loreal",
  },
  Qbano: {
    src: `${BASE_URL}/v1758305642/qbano-logo`,
    alt: "Logo Qbano",
    title: "Logo Qbano",
  },
  Home: {
    src: `${BASE_URL}/v1758305626/home-logo`,
    alt: "Logo Home",
    title: "Logo Home",
  },
  Frisby: {
    src: `${BASE_URL}/v1758305615/frisby-logo`,
    alt: "Logo Frisby",
    title: "Logo Frisby",
  },
  DonJediondo: {
    src: `${BASE_URL}/v1758305628/don-jediondo-logo`,
    alt: "Logo Don Jediondo",
    title: "Logo Don Jediondo",
  },
  Montolvo: {
    src: `${BASE_URL}/v1758305623/montolvo-logo`,
    alt: "Logo Montolvo",
    title: "Logo Montolvo",
  },
  SrWok: {
    src: `${BASE_URL}/v1758305614/sr-wok-logo`,
    alt: "Logo Sr. Wok",
    title: "Logo Sr. Wok",
  },
  Cosechas: {
    src: `${BASE_URL}/v1758305614/cosechas-logo`,
    alt: "Logo Cosechas",
    title: "Logo Cosechas",
  },
  Wok: {
    src: `${BASE_URL}/v1758305607/wok-logo`,
    alt: "Logo Wok",
    title: "Logo Wok",
  },
  DominoPizza: {
    src: `${BASE_URL}/v1758305606/dominos-logo`,
    alt: "Logo Domino's Pizza",
    title: "Logo Domino's Pizza",
  },
  JuanValdez: {
    src: `${BASE_URL}/v1758305614/juan-valdez-logo`,
    alt: "Logo Juan Valdez",
    title: "Logo Juan Valdez",
  },
  CrepesWaffles: {
    src: `${BASE_URL}/v1758305606/crepes-and-waffles-logo`,
    alt: "Logo Crepes & Waffles",
    title: "Logo Crepes & Waffles",
  },
  LaFincaDeRigo: {
    src: `${BASE_URL}/v1758210373/la-finca-de-rigo-logo`,
    alt: "Logo La Finca de Rigo",
    title: "Logo La Finca de Rigo",
  },
  Easy: {
    src: `${BASE_URL}/v1759157935/easy-logo`,
    alt: "Logo Easy",
    title: "Logo Easy",
  },
  PriceSmart: {
    src: `${BASE_URL}/v1759157935/pricesmart-logo`,
    alt: "Logo PriceSmart",
    title: "Logo PriceSmart",
  },
  Metro: {
    src: `${BASE_URL}/v1759157935/metro-logo`,
    alt: "Logo Metro",
    title: "Logo Metro",
  },
}

export const logosTermicos = [
  clientes.MundoMujer,
  clientes.Disfarma,
  clientes.Colmedica,
  clientes.Tuya,
  clientes.ComfenalcoAntioquia,
  clientes.LigaColombianaContraElCancer,
  clientes.CruzRoja,
  clientes.BancoSantander
];

export const logosTurnos = [
  clientes.MundoMujer,
  clientes.Disfarma,
  clientes.Tuya,
  clientes.Colmedica,
  clientes.ComfenalcoAntioquia,
  clientes.LigaColombianaContraElCancer,
  clientes.CruzRoja,
  clientes.BancoSantander
];

export const logosTurnoExpress = [
  clientes.MundoMujer,
  clientes.Disfarma,
  clientes.Alkosto,
  clientes.Tuya,
  clientes.Alkomprar,
  clientes.Colmedica,
  clientes.MacPollo,
  clientes.ComfenalcoAntioquia,
  clientes.BancoSantander,
  clientes.Easy,
  clientes.PriceSmart,
  clientes.Metro,
];

export const logosTurnoMaster = [
  clientes.Disfarma,
  clientes.Ramedicas,
  clientes.NordVital,
  clientes.LosOlivos,
  clientes.Clinaltec,
  clientes.Clinimed,
  clientes.LigaColombianaContraElCancer,
  clientes.HospitalSanRafael,
  clientes.CruzRoja,
  clientes.Confa,
  clientes.BancoSantander,
];

export const logosCalificador = [
  clientes.Heroica,
  clientes.Disfarma,
  clientes.Ramedicas,
  clientes.NordVital,
  clientes.LosOlivos,
  clientes.CruzRoja,
];

export const logosEnfermeria = [
  clientes.Dermosalud,
  clientes.ESEHospitalNuestraSenoraDelCarmen,
  clientes.ClinicaNuestra,
  clientes.Kairos,
  clientes.HombresHermanos,
  clientes.ElBosque,
  clientes.HospitalSanRafael,
];

export const logosLlamadorMeseros = [
  clientes.Smartfit,
  clientes.Estelar,
  clientes.ClubCampestre,
  clientes.HotelesCosmos,
  clientes.ClubElNogal,
  clientes.Jumbo,
  clientes.Loreal,
  clientes.LaFincaDeRigo,
];

export const logosLocalizadores = [
  clientes.Qbano,
  clientes.Home,
  clientes.Alkosto,
  clientes.Frisby,
  clientes.DonJediondo,
  clientes.Montolvo,
  clientes.SrWok,
  clientes.Cosechas,
  clientes.Wok,
  clientes.DominoPizza,
  clientes.JuanValdez,
  clientes.CrepesWaffles,
  clientes.LaFincaDeRigo,
];

export const logosHome = [
  clientes.Smartfit,
  clientes.Frisby,
  clientes.Alkosto,
  clientes.JuanValdez,
  clientes.LigaColombianaContraElCancer,
  clientes.CrepesWaffles,
  clientes.Loreal,
  clientes.LosOlivos,
  clientes.DominoPizza,
  clientes.ComfenalcoAntioquia,
  clientes.Colmedica,
  clientes.BancoSantander,
];