export interface DataParcs {
    id:               number;
    name:             string;
    road_name:        string;
    road_number:      number;
    neighbourhood:    string;
    district_id:      number;
    district:         District;
    postalCode:       string;
    geo_epgs_25831_x: string;
    geo_epgs_25831_y: string;
    geo_epgs_4326_x:  string;
    geo_epgs_4326_y:  string;
}

export enum District {
    CiutatVella = "Ciutat Vella",
    Eixample = "Eixample",
    Gràcia = "Gràcia",
    HortaGuinardó = "Horta-Guinardó",
    LesCorts = "Les Corts",
    NouBarris = "Nou Barris",
    SantAndreu = "Sant Andreu",
    SantMartí = "Sant Martí",
    SantsMontjuïc = "Sants-Montjuïc",
    SarriàSantGervasi = "Sarrià-Sant Gervasi",
}
