const BASE_URL = "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_400,f_webp,q_80"

const clientes = {
  MundoMujer: {
    src: `${BASE_URL}/v1742563274/Mesa_de_trabajo_5_wuz5jm`,
    alt: "Logo Mundo Mujer",
  },
  Disfarma: {
    src: `${BASE_URL}/v1742563274/Mesa_de_trabajo_6_cwxydi`,
    alt: "Logo Disfarma",
  },
  Colmedica: {
    src: `${BASE_URL}/v1742563274/Mesa_de_trabajo_7_awxms5`,
    alt: "Logo Colmedica",
  },
  Tuya: {
    src: `${BASE_URL}/v1742563276/Mesa_de_trabajo_8_tscicy`,
    alt: "Logo Tuya",
  },
  ComfenalcoAntioquia: {
    src: `${BASE_URL}/v1742563276/Mesa_de_trabajo_9_egrpk3`,
    alt: "Logo Comfenalco Antioquia",
  },
  LigaColombianaContraElCancer: {
    src: `${BASE_URL}/v1742563277/Mesa_de_trabajo_10_lkpkxn`,
    alt: "Logo Liga Colombiana Contra el Cáncer",
  },
  CruzRoja: {
    src: `${BASE_URL}/v1742563277/Mesa_de_trabajo_11_nkxgvv`,
    alt: "Logo Cruz Roja",
  },
  BancoSantander: {
    src: `${BASE_URL}/v1755887842/banco-santander_eyqkts`,
    alt: "Logo Banco Santander",
  },
  Alkosto: {
    src: `${BASE_URL}/v1742563273/Mesa_de_trabajo_5_copia_exd62o`,
    alt: "Logo Alkosto",
  },
  Alkomprar: {
    src: `${BASE_URL}/v1742563259/Mesa_de_trabajo_14_hbvz1s`,
    alt: "Logo Alkomprar",
  },
  MacPollo: {
    src: `${BASE_URL}/v1742563259/Mesa_de_trabajo_15_f4mmaj`,
    alt: "Logo Mac Pollo",
  },
  Comfacundi: {
    src: `${BASE_URL}/v1742563260/Mesa_de_trabajo_16_jyibxe`,
    alt: "Logo Comfacundi",
  },
  Ramedicas: {
    src: `${BASE_URL}/v1742563260/Mesa_de_trabajo_18_qgekb6`,
    alt: "Logo Ramédicas",
  },
  NordVital: {
    src: `${BASE_URL}/v1742563262/Mesa_de_trabajo_19_kdsynx`,
    alt: "Logo Nord Vital",
  },
  LosOlivos: {
    src: `${BASE_URL}/v1742563262/Mesa_de_trabajo_20_o1drqb`,
    alt: "Logo Los Olivos",
  },
  Clinaltec: {
    src: `${BASE_URL}/v1742563262/Mesa_de_trabajo_21_qhkjqf`,
    alt: "Logo Clinaltec",
  },
  Clinimed: {
    src: `${BASE_URL}/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq`,
    alt: "Logo Clinimed",
  },
  HospitalSanRafael: {
    src: `${BASE_URL}/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd`,
    alt: "Logo Hospital San Rafael",
  },
  Confa: {
    src: `${BASE_URL}/v1743542409/Mesa_de_trabajo_26_4x_hu0kue`,
    alt: "Logo Confa",
  },
  Heroica: {
    src: `${BASE_URL}/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh`,
    alt: "Logo Heroica",
  },
  Dermosalud: {
    src: `${BASE_URL}/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb`,
    alt: "Logo Dermosalud",
  },
  ESEHospitalNuestraSenoraDelCarmen: {
    src: `${BASE_URL}/v1742563267/Mesa_de_trabajo_32_eboyvp`,
    alt: "Logo ESE Hospital Nuestra Señora del Carmen",
  },
  ClinicaNuestra: {
    src: `${BASE_URL}/v1742563263/Mesa_de_trabajo_27_zztk9z`,
    alt: "Logo Clinica Nuestra",
  },
  Kairos: {
    src: `${BASE_URL}/v1742563264/Mesa_de_trabajo_28_kchdw2`,
    alt: "Logo Kairos",
  },
  HombresHermanos: {
    src: `${BASE_URL}/v1742563265/Mesa_de_trabajo_29_rxzjkf`,
    alt: "Logo Hombres Hermanos",
  },
  ElBosque: {
    src: `${BASE_URL}/v1742563265/Mesa_de_trabajo_30_f2oqkp`,
    alt: "Logo El Bosque",
  },
  HospitalSanRafael: {
    src: `${BASE_URL}/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd`,
    alt: "Logo Hospital San Rafael",
  },
  Smartfit: {
    src: `${BASE_URL}/v1750865403/smart_fit_24_06_2025_q4jvmw`,
    alt: "Logo Smartfit",
  },
  Estelar: {
    src: `${BASE_URL}/v1743126933/F4C07E32B458FF3E_hpjknp`,
    alt: "Logo Estelar",
  },
  ClubCampestre: {
    src: `${BASE_URL}/v1743127595/F4C8E93F6E675389_xuanu0`,
    alt: "Logo Club Campestre",
  },
  HotelesCosmos: {
    src: `${BASE_URL}/v1742563266/Mesa_de_trabajo_36_abflwi`,
    alt: "Logo Hoteles Cosmos",
  },
  ClubElNogal: {
    src: `${BASE_URL}/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9`,
    alt: "Logo Club El Nogal",
  },
  Jumbo: {
    src: `${BASE_URL}/v1742563267/Mesa_de_trabajo_38_uajfyi`,
    alt: "Logo Jumbo",
  },
  Loreal: {
    src: `${BASE_URL}/v1742563272/Mesa_de_trabajo_62_w7ggme`,
    alt: "Logo Loreal",
  },
  LaFincaDeRigo: {
    src: `${BASE_URL}/v1755887843/la-finca-de-rigo_q2t7o8`,
    alt: "Logo La Finca de Rigo",
  },
  Qbano: {
    src: `${BASE_URL}/v1743542309/Mesa_de_trabajo_39_4x_szfdyq`,
    alt: "Logo Qbano",
  },
  Home: {
    src: `${BASE_URL}/v1742563268/Mesa_de_trabajo_40_bjtiqo`,
    alt: "Logo Home",
  },
  Frisby: {
    src: `${BASE_URL}/v1743542268/Mesa_de_trabajo_41_4x_lktbou`,
    alt: "Logo Frisby",
  },
  DonJediondo: {
    src: `${BASE_URL}/v1742563279/Mesa_de_trabajo_14_copia_5_iyoins`,
    alt: "Logo Don Jediondo",
  },
  Montolvo: {
    src: `${BASE_URL}/v1742563269/Mesa_de_trabajo_43_s6hdzr`,
    alt: "Logo Montolvo",
  },
  SrWok: {
    src: `${BASE_URL}/v1743127235/F5CDDFC9F623885E_odq2pa`,
    alt: "Logo Sr. Wok",
  },
  Cosechas: {
    src: `${BASE_URL}/v1743542141/Mesa_de_trabajo_46_4x_azluws`,
    alt: "Logo Cosechas",
  },
  Wok: {
    src: `${BASE_URL}/v1743542051/Mesa_de_trabajo_47_4x_jtxvmh`,
    alt: "Logo Wok",
  },
  DominoPizza: {
    src: `${BASE_URL}/v1743127480/1222A6C85C9B6BB9_putlpy`,
    alt: "Logo Domino's Pizza",
  },
  JuanValdez: {
    src: `${BASE_URL}/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre`,
    alt: "Logo Juan Valdez",
  },
  CrepesWaffles: {
    src: `${BASE_URL}/v1743542005/Mesa_de_trabajo_49_4x_jlptaw`,
    alt: "Logo Crepes & Waffles",
  },
  LaFincaDeRigo: {
    src: `${BASE_URL}/v1755887843/la-finca-de-rigo_q2t7o8`,
    alt: "Logo La Finca de Rigo",
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
  clientes.Comfacundi,
  clientes.BancoSantander
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