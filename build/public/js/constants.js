// Se implementa nueva estructura de datos Json multinivel

export const sideMenuTree = [
  {
    id: "menuMetas",
    idButton: "btnMenuMetas",
    idDropDown: "dropMenuMetas",
    txtButton: "Metas",
    type: "menu",
    items: [
      {
        id: "dashControldeMetas",
        idButton: "btnDashControldeMetas",
        txtButton: "Control de Metas",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/controldemetas",
      },
      {
        id: "dashHistoricoMetaMoviles-Dólares",
        idButton: "btnDashHistoricoMetaMoviles-Dólares",
        txtButton: "Meta Moviles - Dólares",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/JuVex0919f5T",
      },
      {
        id: "dashHistoricoMetaMoviles-Unidades",
        idButton: "btnDashHistoricoMetaMoviles-Unidades",
        txtButton: "Meta Moviles - Unidades",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/FQIvIpJN4qdX",
      },
      {
        id: "dashHistoricoMetaFijos",
        idButton: "btnDashHistoricoMetaFijos",
        txtButton: "Meta Fijos",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/QS0YJR2pckC",
      },
      {
        id: "dashOperativos+App",
        idButton: "btnDashOperativos+App",
        txtButton: "Operativos+App",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/yEXU9Jl3IUqX",
      },
    ],
  },
  {
    id: "menuMenuFinanciero",
    idButton: "btnMenuFinanciero",
    idDropDown: "dropMenuFinanciero",
    txtButton: "Financiero",
    type: "menu",
    items: [
      {
        id: "dashP&GPorEquipo",
        idButton: "btnP&GPorEquipo",
        txtButton: "P&G Por Equipo",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/pygporequipos",
      },
      {
        id: "dashSueldoseneltiempo",
        idButton: "btnSueldoseneltiempo",
        txtButton: "Sueldos en el tiempo",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/sueldoshistorico",
      },
      {
        id: "dashConsumodeminutos",
        idButton: "btnSConsumodeminutos",
        txtButton: "Consumo de minutos",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/consumodeminutos",
      },
    ],
  },
  {
    id: "menuHistorico",
    idButton: "btnMenuHistorico",
    idDropDown: "dropMenuHistorico",
    txtButton: "Históricos",
    type: "menu",
    items: [
      {
        id: "subMenuIngresosGrupoM2G",
        idButton: "btnSubMenuHistoricoPorCodigo",
        idDropDown: "dropSubMenuHistoricoPorCodigo",
        txtButton: "Historico Por Codigo",
        type: "submenu",
        items: [
          {
            id: "dashDatosHistoricos",
            idButton: "btnDashDatosHistoricos",
            txtButton: "Datos Historicos",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/DxM1ZUDgcL6U",
          },
          {
            id: "dashCityCall",
            idButton: "btnDashCityCall",
            txtButton: "CityCall",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/historicocitycall",
          },
          {
            id: "dashDatosEcuaConexion",
            idButton: "btnDashEcuaConexion",
            txtButton: "EcuaConexion",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/historicoecuaconexion",
          },
          {
            id: "dashHomeNet",
            idButton: "btnDashHomeNet",
            txtButton: "HomeNet",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/historicohomenet",
          },
          {
            id: "dashMovil2Go",
            idButton: "btnDashMovil2Go",
            txtButton: "Movil2Go",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/historicomovil2go",
          },
        ],
      },
      {
        id: "dashAPPHistorico",
        idButton: "btnDashAPPHistorico",
        txtButton: "APP Historico",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/ZTvLk2FkcpV2",
      },
      {
        id: "dashTendendiaOperativo",
        idButton: "btnTendendiaOperativo",
        txtButton: "Tendencia Operativo",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/GZseqYHwGNMQ",
      },
    ],
  },
  {
    id: "menuMenuGrupom2g",
    idButton: "btnMenuGrupom2g",
    idDropDown: "dropMenuGrupom2g",
    txtButton: "Grupo M2G",
    type: "menu",
    items: [
      {
        id: "subMenuIngresosGrupoM2G",
        idButton: "btnSubMenuIngresosGrupoM2G",
        idDropDown: "dropSubMenuIngresosGrupoM2G",
        txtButton: "Ingresos Grupo M2G",
        type: "submenu",
        items: [
          {
            id: "dashtodoslosequipos",
            idButton: "btnDashtodoslosequipos",
            txtButton: "Todos los Equipos",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariotodos",
          },
          {
            id: "dashefectividaddeingresos3mes",
            idButton: "btnDashefectividaddeingresos3mes",
            txtButton: "Efectividad de Ingresos Ultimos 3 meses",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/RFg4pO8O50vK",
          },
          {
            id: "dashContoldeIngresos",
            idButton: "btnControldeIngresos",
            txtButton: "Control de Ingresos",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/controldeingresos",
          },
        ],
      },

      {
        id: "subMenuIngresosDiariosEquipos",
        idButton: "btnSubMenuIngresosDiariosEquipos",
        idDropDown: "dropSubMenuIngresosDiariosEquipos",
        txtButton: "Ingresos Diarios Equipos",
        type: "submenu",
        items: [
          {
            id: "dashIngresosDiariosTheFenix",
            idButton: "btnDashIngresosDiariosTheFenix",
            txtButton: "Ingresos Diarios The Fenix",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariothefenix",
          },
          {
            id: "dashIngresosDiariosRaptors",
            idButton: "btnDashIngresosDiariosRaptors",
            txtButton: "Ingresos Diarios Raptors",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiarioraptors",
          },
          {
            id: "dashIngresosDiariosJaguares",
            idButton: "btnDashIngresosDiariosJaguares",
            txtButton: "Ingresos Diarios Jaguares",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariojaguares",
          },
          {
            id: "dashIngresosDiariosSharks",
            idButton: "btnDashIngresosDiariosSharks",
            txtButton: "Ingresos Diarios Sharks",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariosharks",
          },
          {
            id: "dashIngresosDiariosWakanda",
            idButton: "btnDashIngresosDiariosWakanda",
            txtButton: "Ingresos Diarios Wakanda",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariowakanda",
          },
          {
            id: "dashIngresosDiariosTheWolves",
            idButton: "btnDashIngresosDiariosTheWolves",
            txtButton: "Ingresos Diarios The Wolves",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariothewolves",
          },
          {
            id: "dashIngresosDiariosAguilas",
            idButton: "btnDashIngresosDiariosAguilas",
            txtButton: "Ingresos Diarios Aguilas",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiarioaguilas",
          },
          {
            id: "dashIngresosDiarioslLions",
            idButton: "btnDashIngresosDiariosLions",
            txtButton: "Ingresos Diarios Lions",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariolions",
          },
          {
            id: "dashIngresosDiariosPythons",
            idButton: "btnDashIngresosDiariosPythons",
            txtButton: "Ingresos Diarios Pythons",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariopython",
          },
          {
            id: "dashIngresosDiariosGrizzlies",
            idButton: "btnDashIngresosDiariosGrizzlies",
            txtButton: "Ingresos Diarios Grizzlies",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiariogrizzlies",
          },
        ],
      },
      {
        id: "subMenuIngresosSemanalEquipos",
        idButton: "btnSubMenuIngresosSemanalEquipos",
        idDropDown: "dropSubMenuIngresosSemanalEquipos",
        txtButton: "Ingresos Semanal Equipos",
        type: "submenu",
        items: [
          {
            id: "dashIngresosSemanalTheFenix",
            idButton: "btnDashIngresosSemanalTheFenix",
            txtButton: "Ingresos Semanal The Fenix",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalthefenix",
          },
          {
            id: "dashIngresosSemanalRaptors",
            idButton: "btnDashIngresosSemanalRaptors",
            txtButton: "Ingresos Semanal Raptors",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalraptors",
          },
          {
            id: "dashIngresosSemanalJaguares",
            idButton: "btnDashIngresosSemanalJaguares",
            txtButton: "Ingresos Semanal Jaguares",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanaljaguares",
          },
          {
            id: "dashIngresosSemanalSharks",
            idButton: "btnDashIngresosSemanalSharks",
            txtButton: "Ingresos Semanal Sharks",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalsharks",
          },
          {
            id: "dashIngresosSemanalWakanda",
            idButton: "btnDashIngresosSemanalWakanda",
            txtButton: "Ingresos Semanal Wakanda",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalwakanda",
          },
          {
            id: "dashIngresosSemanalTheWolves",
            idButton: "btnDashIngresosSemanalTheWolves",
            txtButton: "Ingresos Semanal The Wolves",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalthewolves",
          },
          {
            id: "dashIngresosSemanalAguilas",
            idButton: "btnDashIngresosSemanalAguilas",
            txtButton: "Ingresos Semanal Aguilas",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ingresodiarioaguilas",
          },
          {
            id: "dashIngresosSemanalLions",
            idButton: "btnDashIngresosSemanalLions",
            txtButton: "Ingresos Semanal Lions",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanallions",
          },
          {
            id: "dashIngresosSemanalPythons",
            idButton: "btnDashIngresosSemanalPythons",
            txtButton: "Ingresos Semanal Pythons",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalpython",
          },
          {
            id: "dashIngresosSemanalGrizzlies",
            idButton: "btnDashIngresosSemanalGrizzlies",
            txtButton: "Ingresos Semanal Grizzlies",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/semanalgrizzlies",
          },
        ],
      },

      {
        id: "dashMetaGeneral",
        idButton: "btnDashMetaGeneral",
        txtButton: "Meta General",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/I8sxvTYJKFJU",
      },
      {
        id: "dashCumplimientosPorEquipo",
        idButton: "btnDashCumplimientosPorEquipo",
        txtButton: "Cumplimientos Por Equipo",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/kFN79ecSDNRL",
      },
      {
        id: "dashChipsTuenti",
        idButton: "btnDashChipsTuenti",
        txtButton: "Chips Tuenti",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/chipstuenti",
      },
    ],
  },
  {
    id: "menuIncentivos",
    idButton: "btnMenuIncentivos",
    idDropDown: "dropMenuIncentivos",
    txtButton: "Incentivos",
    type: "menu",
    items: [
      {
        id: "subMenuClaro",
        idButton: "btnSubMenuClaro",
        idDropDown: "dropSubMenuClaro",
        txtButton: "Claro",
        type: "submenu",
        items: [
          {
            id: "dashIncentivoGlobal",
            idButton: "btnIncentivoGlobal",
            txtButton: "Incentivo Global",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/NhczYFGs8X4c",
          },
          {
            id: "dashCantidaddeServiciosporEquipos",
            idButton: "btnCantidaddeServiciosporEquipos",
            txtButton: "Cantidad de Servicios por Equipos",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/AMc9AMbJhi6C",
          },
          {
            id: "dashIncentivoAguilas",
            idButton: "btnIncentivoAguilas",
            txtButton: "Incentivo Aguilas",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/8XtpZNDX6RZp",
          },
          {
            id: "dashIncentivoTheFenix",
            idButton: "btnIncentivoTheFenix",
            txtButton: "Incentivo The Fenix",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/qtzoEVuU0UDg",
          },
          {
            id: "dashIncentivoSharks",
            idButton: "btnIncentivoSharks",
            txtButton: "Incentivo Sharks",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/BcaNpruViKVF",
          },
          {
            id: "dashIncentivoWakanda",
            idButton: "btnIncentivoWakanda",
            txtButton: "Incentivo Wakanda",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/Veui8mwvsgEj",
          },
          {
            id: "dashIncentivoRaptors",
            idButton: "btnIncentivoRaptors",
            txtButton: "Incentivo Raptors",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/PaLRsk5iLSdY",
          },
          {
            id: "dashIncentivoTheWolves",
            idButton: "btnIncentivoTheWolves",
            txtButton: "Incentivo The Wolves",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/lvbqTELVUbjK",
          },
          {
            id: "dashIncentivoJaguares",
            idButton: "btnIncentivoJaguares",
            txtButton: "Incentivo Jaguares",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/nhyngx8MiyZB",
          },
        ],
      },
      {
        id: "subMenuTvCable",
        idButton: "btnSubMenuTvCable",
        idDropDown: "dropSubMenuTvCable",
        txtButton: "TvCable",
        type: "submenu",
        items: [
          {
            id: "dashIncentivoGlobal",
            idButton: "btnIncentivoGlobal",
            txtButton: "Incentivo Global",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/GGgLKQ3X6IPb",
          },
          {
            id: "dashIncentivo Pythons",
            idButton: "btnIncentivoPythons",
            txtButton: "Incentivo Pythons",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/jVzKe5CCFImM",
          },
          {
            id: "dashIncentivoLions",
            idButton: "btnIncentivoLions",
            txtButton: "Incentivo Lions",
            type: "dashboard",
            url: "https://grupo-m2g.clicdata.com/v/ZnmYIWF4P6jd",
          },
        ],
      },
    ],
  },

  {
    id: "menuComunicaciones",
    idButton: "btnMenuComunicaciones",
    idDropDown: "dropMenuComunicaciones",
    txtButton: "Comunicaciones",
    type: "menu",
    items: [
      {
        id: "dashComunicado",
        idButton: "btnDashComunicado",
        txtButton: "5to Aniversario",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/comunicadoespecial",
      },
      {
        id: "dashCondonacionDeAtrasos",
        idButton: "btnDashCondonacionDeAtrasos",
        txtButton: "Condonacion De Atrasos",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/AS1cqxKI2zfY",
      },
      {
        id: "dashCondonacionDeBonos",
        idButton: "btnDashCondonacionDeBonos",
        txtButton: "Condonacion De Bonos",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/9IdBioIBYiNp",
      },
      {
        id: "dashCuentasOficiales",
        idButton: "btnDashCuentasOficiales",
        txtButton: "Cuentas Oficiales",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/IaOJKH21OeSh",
      },
      {
        id: "dashCumpleaños",
        idButton: "btnDashCumpleaños",
        txtButton: "Cumpleaños",
        type: "dashboard",
        url: "https://grupo-m2g.clicdata.com/v/Oz9YeCVprL4e",
      },
    ],
  },
];

// Se ubica el dashboard por defecto

export const defaultDashboard = [
  {
    id: "dashboard1",

    url: "https://grupo-m2g.clicdata.com/v/yEXU9Jl3IUqX",

    idButtonAsigned: "btnActivarDashboard1",

    textButtonAsigned: "Ingresos Call Center",
  },
];