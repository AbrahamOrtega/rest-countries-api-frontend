export default interface Country {
  flags: {
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  borders: string[];
  tld: string[];
  currencies: {
    name: string;
  }[];
  languages: string[];
}
