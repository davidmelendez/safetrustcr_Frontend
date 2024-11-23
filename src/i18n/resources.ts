import { title } from "process";

const resources = {
  en: {
    translations: {
      navBar: {
        rent: "Rent",
        buy: "Buy",
        searchPlaceHolder: "City, Province or Neighborhood",
      },

      sideBar: {
        title: "Category",
        categoryOne: "Category 1",
        categoryTwo: "Category 2",
        categoryThree: "Category 3",
      },

      propertyList: {
        title: "Available for rent in Costa Rica, San José",
        unitsAvailable: "204 units available",
        filterOne: "All apartments",
        filterTwo: "1 bedroom",
        filterThree: "2 bedrooms",
        filterFour: "3 bedrooms",

        sortBy: {
          title: "Sort by:",
          orderOne: "Relevance",
          orderTwo: "Price (Low to High)",
          orderThree: "Price (High to Low)",
          orderFour: "Newest",
        },

        propertyCard: {
          promo: "Promoted",
          perMonth: "Per month",
          title: "The southern Sabana",
          address: "329 Curridabat Street, station yard, San José",
        },
      },

      propertyDetails: {
        promo: "Promoted",
        propertyTitle: "The southern Sabana",
        address: "329 Calle Santos, Paseo Colón, San José",
        detailsTitle: "Apartment details",
        detailsText:
          "La Sabana Sur is one of the most central and convenient areas of San José, close to the iconic La Sabana Park. This apartment features 2 bedrooms and 1 bathroom, making it ideal for couples or small families. Additionally, it’s pet-friendly, perfect for those with pets. Its location on Paseo Colón provides easy access to public transportation, restaurants, and services.",
        bookButton: "Book",
      },

      sideSuggestions: {
        title: "Suggestions",
        unitAvailable: "More  than 200 units available",

        cards: {
          title: "The Yoses",
          address: "329 Santos Street, Colon Walk, San José",
        },
      },

      profile: {
        profileTitle: "Edit profile",
        sideTitle: "General",
        account: "account",
        sideSecondTitle: "Other",
        apartments: "Apartments",
        offers: "Offers",

        overView: {
          title: "Account overview",
          date: "Creation date",
          WalletAddress: "Wallet address",
          email: "Email",
          action: "Action",
          saveBtn: "Save changes",
        },
      },

      myApartments: {
        title: "My apartments",
        newApartmentBtn: "New apartment",
        searchHolder: "Search anything...",
        promo: "Promoted",
        priceRange: "Price Range",

        status: {
          default: "Status",
          optionOne: "Inhabited",
          optionTwo: "Not Inhabited",
        },

        table: {
          title: "Showing {current} of {total}",
          items: "Items per page",
          columnOne: "ID No",
          columnTwo: "Apartment Name",
          columnThree: "Location",
          columnFour: "Offers",
          columnFive: "Status",
          columnSix: "Promoted",
          columnSeven: "Price",
          columnEight: "Actions",
        },

        apartmentNames: {
          apartmentOne: "The Sabana House",
          apartmentTwo: "Escazú Apartment",
          apartmentThree: "Santa Ana Condo",
          apartmentFour: "Beachside Villa",
          apartmentFive: "Downtown Loft",
          apartmentSix: "Mountain Retreat",
          apartmentSeven: "Penthouse",
          apartmentEight: "The Sabana Luxury",
          apartmentNine: "Eco-friendly Apartment",
          apartmentTen: "Colonial Home",
          apartmentEleven: "City Center Studio",
          apartmentTwelve: "Lakeview Apartment",
        },
      },

      common: {
        bed: "Bed",
        peth: "Pet-friendly",
        bathroom: "Bathroom",
      },

      languageBtn: {
        es: "Spanish",
        en: "English",
      },
    },
  },

  es: {
    translations: {
      navBar: {
        rent: "Rentar",
        buy: "Comprar",
        searchPlaceHolder: "Ciudad, Provincia o Vecindario",
      },

      sideBar: {
        title: "Categoría",
        categoryOne: "Categoría 1",
        categoryTwo: "Categoría 2",
        categoryThree: "Categoría 3",
      },

      propertyList: {
        title: "Disponible para rentar en Costa Rica, San José",
        unitsAvailable: "204 unidades disponibles",
        filterOne: "Todos los apartamentos",
        filterTwo: "1 baño",
        filterThree: "2 dormitorios",
        filterFour: "3 dormitorios",

        sortBy: {
          title: "Ordenar por:",
          orderOne: "Relevancia",
          orderTwo: "Precio (de menor a mayor)",
          orderThree: "Precio (de mayor a menor)",
          orderFour: "Más reciente",
        },

        propertyCard: {
          promo: "Promocionado",
          perMonth: "Por mes",
          title: "La Savanna del sur",
          address: "329 Calle Curridabat, patio estación, San José", //cambiar ese patio
        },
      },

      propertyDetails: {
        promo: "Promocionado",
        propertyTitle: "La Sabana sur",
        address: "329 Calle Santos, Paseo Colón, San José",
        detailsTitle: "Detalles del apartamento",
        detailsText:
          "La Sabana Sur es una de las zonas más céntricas y convenientes de San José, cerca del icónico Parque La Sabana. Este apartamento cuenta con 2 dormitorios y 1 baño, por lo que es ideal para parejas o familias pequeñas. Además, es apto para mascotas.. Su ubicación en Paseo Colón brinda fácil acceso a transporte público, restaurantes y servicios.",
        bookButton: "Reservar",
      },

      sideSuggestions: {
        title: "Sugerencias",
        unitAvailable: "Más de 200 unidades disponibles",

        cards: {
          title: "Los Yoses",
          address: "329 Calle Santos, Paseo Colón, San José",
        },
      },

      profile: {
        profileTitle: "Editar perfil",
        sideTitle: "General",
        account: "Cuenta",
        sideSecondTitle: "Otros",
        apartments: "Apartamentos",
        offers: "Ofertas",

        overView: {
          title: "Account overview",
          date: "Fecha de creación",
          WalletAddress: "Dirección de billetera",
          email: "Correo",
          action: "Acción",
          saveBtn: "Guardar cambios",
        },
      },

      myApartments: {
        title: "Mis apartamentos",
        newApartmentBtn: "Nuevo apartamento",
        searchHolder: "Buscar...",
        promo: "Promocionado",
        priceRange: "Rango de precios",

        status: {
          default: "Estado",
          optionOne: "Habitado",
          optionTwo: "No habitado",
        },

        table: {
          title: "Mostrando {current} de {total}",
          items: "Elementos por página",
          rowOne: "ID No",
          columnTwo: "Nombre del apartamento",
          columnThree: "Ubicación",
          columnFour: "Ofertas",
          columnFive: "Estado",
          columnSix: "Promocionado",
          columnSeven: "Precio",
          columnEight: "Acciones",
        },

        apartmentNames: {
          apartmentOne: "Casa La Sabana",
          apartmentTwo: "Apartamento Escazú",
          apartmentThree: "Condominio Santa Ana",
          apartmentFour: "Villa frente al mar",
          apartmentFive: "Loft en el centro",
          apartmentSix: "Retiro en la montaña",
          apartmentSeven: "Apartamento de lujo",
          apartmentEight: "Lujo en La Sabana",
          apartmentNine: "Apartamento ecológico",
          apartmentTen: "Casa colonial",
          apartmentEleven: "Estudio en el centro",
          apartmentTwelve: "Apartamento con vista al lago",
        },
      },

      common: {
        bed: "Cama",
        peth: "Apto para mascotas",
        bathroom: "Baño",
      },

      languageBtn: {
        es: "Español",
        en: "Inglés",
      },
    },
  },
};

export default resources;
