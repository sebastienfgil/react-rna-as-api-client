/**
 *
 *
 * @export
 * @interface AssociationI
 */
export interface AssociationI {
  id: number;
  isWaldec: boolean;
  idAssociation: string;
  idExAssociation: string;
  siret: string;
  numeroReconnaissanceUtilitePublique: string;
  codeGestion: string;
  dateCreation: Date;
  dateDerniereDeclaration: Date;
  datePublicationCreation: Date;
  dateDeclarationDissolution: Date;
  nature: string;
  groupement: string;
  titre: string;
  titreCourt: string;
  objet: string;
  objetSocial1: string;
  objetSocial2: string;
  l1AdresseImport: string;
  l2AdresseImport: string;
  l3AdresseImport: string;
  adresseSiege: string;
  adresseNumeroVoie: string;
  adresseRepetition: string;
  adresseTypeVoie: string;
  adresseLibelleVoie: string;
  adresseDistribution: string;
  adresseCodeInsee: string;
  adresseCodePostal: string;
  adresseLibelleCommune: string;
  adresseGestionNom: string;
  adresseGestionFormatPostal: string;
  adresseGestionGeo: string;
  adresseGestionLibelleVoie: string;
  adresseGestionDistribution: string;
  adresseGestionCodePostal: string;
  adresseGestionAcheminement: string;
  adresseGestionPays: string;
  dirigeantCivilite: string;
  telephone: string;
  siteWeb: string;
  email: string;
  autorisationPublicationWeb: string;
  observation: string;
  positionActivite: string;
  derniereMaj: Date;
  createdAt: Date;
  updatedAt: Date;
}
/**
 *
 *
 * @export
 * @class Association
 */
export default class Association {
  private _id: number = 0;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  private _isWaldec: boolean = false;
  public get isWaldec(): boolean {
    return this._isWaldec;
  }
  public set isWaldec(value: boolean) {
    this._isWaldec = value;
  }

  private _idAssociation: string = "";
  public get idAssociation(): string {
    return this._idAssociation;
  }
  public set idAssociation(value: string) {
    this._idAssociation = value;
  }

  private _idExAssociation: string = "";
  public get idExAssociation(): string {
    return this._idExAssociation;
  }
  public set idExAssociation(value: string) {
    this._idExAssociation = value;
  }

  private _siret: string = "";
  public get siret(): string {
    return this._siret;
  }
  public set siret(value: string) {
    this._siret = value;
  }

  private _numeroReconnaissanceUtilitePublique: string = "";
  public get numeroReconnaissanceUtilitePublique(): string {
    return this._numeroReconnaissanceUtilitePublique;
  }
  public set numeroReconnaissanceUtilitePublique(value: string) {
    this._numeroReconnaissanceUtilitePublique = value;
  }

  private _codeGestion: string = "";
  public get codeGestion(): string {
    return this._codeGestion;
  }
  public set codeGestion(value: string) {
    this._codeGestion = value;
  }

  private _dateCreation: Date = new Date(0);
  public get dateCreation(): Date {
    return this._dateCreation;
  }
  public set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  private _dateDerniereDeclaration: Date = new Date(0);
  public get dateDerniereDeclaration(): Date {
    return this._dateDerniereDeclaration;
  }
  public set dateDerniereDeclaration(value: Date) {
    this._dateDerniereDeclaration = value;
  }

  private _datePublicationCreation: Date = new Date(0);
  public get datePublicationCreation(): Date {
    return this._datePublicationCreation;
  }
  public set datePublicationCreation(value: Date) {
    this._datePublicationCreation = value;
  }

  private _dateDeclarationDissolution: Date = new Date(0);
  public get dateDeclarationDissolution(): Date {
    return this._dateDeclarationDissolution;
  }
  public set dateDeclarationDissolution(value: Date) {
    this._dateDeclarationDissolution = value;
  }

  private _nature: string = "";
  public get nature(): string {
    return this._nature;
  }
  public set nature(value: string) {
    this._nature = value;
  }

  private _groupement: string = "";
  public get groupement(): string {
    return this._groupement;
  }
  public set groupement(value: string) {
    this._groupement = value;
  }

  private _titre: string = "";
  public get titre(): string {
    return this._titre;
  }
  public set titre(value: string) {
    this._titre = value;
  }

  private _titreCourt: string = "";
  public get titreCourt(): string {
    return this._titreCourt;
  }
  public set titreCourt(value: string) {
    this._titreCourt = value;
  }

  private _objet: string = "";
  public get objet(): string {
    return this._objet;
  }
  public set objet(value: string) {
    this._objet = value;
  }

  private _objetSocial1: string = "";
  public get objetSocial1(): string {
    return this._objetSocial1;
  }
  public set objetSocial1(value: string) {
    this._objetSocial1 = value;
  }

  private _objetSocial2: string = "";
  public get objetSocial2(): string {
    return this._objetSocial2;
  }
  public set objetSocial2(value: string) {
    this._objetSocial2 = value;
  }

  private _l1AdresseImport: string = "";
  public get l1AdresseImport(): string {
    return this._l1AdresseImport;
  }
  public set l1AdresseImport(value: string) {
    this._l1AdresseImport = value;
  }

  private _l2AdresseImport: string = "";
  public get l2AdresseImport(): string {
    return this._l2AdresseImport;
  }
  public set l2AdresseImport(value: string) {
    this._l2AdresseImport = value;
  }

  private _l3AdresseImport: string = "";
  public get l3AdresseImport(): string {
    return this._l3AdresseImport;
  }
  public set l3AdresseImport(value: string) {
    this._l3AdresseImport = value;
  }

  private _adresseSiege: string = "";
  public get adresseSiege(): string {
    return this._adresseSiege;
  }
  public set adresseSiege(value: string) {
    this._adresseSiege = value;
  }

  private _adresseNumeroVoie: string = "";
  public get adresseNumeroVoie(): string {
    return this._adresseNumeroVoie;
  }
  public set adresseNumeroVoie(value: string) {
    this._adresseNumeroVoie = value;
  }

  private _adresseRepetition: string = "";
  public get adresseRepetition(): string {
    return this._adresseRepetition;
  }
  public set adresseRepetition(value: string) {
    this._adresseRepetition = value;
  }

  private _adresseTypeVoie: string = "";
  public get adresseTypeVoie(): string {
    return this._adresseTypeVoie;
  }
  public set adresseTypeVoie(value: string) {
    this._adresseTypeVoie = value;
  }

  private _adresseLibelleVoie: string = "";
  public get adresseLibelleVoie(): string {
    return this._adresseLibelleVoie;
  }
  public set adresseLibelleVoie(value: string) {
    this._adresseLibelleVoie = value;
  }

  private _adresseDistribution: string = "";
  public get adresseDistribution(): string {
    return this._adresseDistribution;
  }
  public set adresseDistribution(value: string) {
    this._adresseDistribution = value;
  }

  private _adresseCodeInsee: string = "";
  public get adresseCodeInsee(): string {
    return this._adresseCodeInsee;
  }
  public set adresseCodeInsee(value: string) {
    this._adresseCodeInsee = value;
  }

  private _adresseCodePostal: string = "";
  public get adresseCodePostal(): string {
    return this._adresseCodePostal;
  }
  public set adresseCodePostal(value: string) {
    this._adresseCodePostal = value;
  }

  private _adresseLibelleCommune: string = "";
  public get adresseLibelleCommune(): string {
    return this._adresseLibelleCommune;
  }
  public set adresseLibelleCommune(value: string) {
    this._adresseLibelleCommune = value;
  }

  private _adresseGestionNom: string = "";
  public get adresseGestionNom(): string {
    return this._adresseGestionNom;
  }
  public set adresseGestionNom(value: string) {
    this._adresseGestionNom = value;
  }

  private _adresseGestionFormatPostal: string = "";
  public get adresseGestionFormatPostal(): string {
    return this._adresseGestionFormatPostal;
  }
  public set adresseGestionFormatPostal(value: string) {
    this._adresseGestionFormatPostal = value;
  }

  private _adresseGestionGeo: string = "";
  public get adresseGestionGeo(): string {
    return this._adresseGestionGeo;
  }
  public set adresseGestionGeo(value: string) {
    this._adresseGestionGeo = value;
  }

  private _adresseGestionLibelleVoie: string = "";
  public get adresseGestionLibelleVoie(): string {
    return this._adresseGestionLibelleVoie;
  }
  public set adresseGestionLibelleVoie(value: string) {
    this._adresseGestionLibelleVoie = value;
  }

  private _adresseGestionDistribution: string = "";
  public get adresseGestionDistribution(): string {
    return this._adresseGestionDistribution;
  }
  public set adresseGestionDistribution(value: string) {
    this._adresseGestionDistribution = value;
  }

  private _adresseGestionCodePostal: string = "";
  public get adresseGestionCodePostal(): string {
    return this._adresseGestionCodePostal;
  }
  public set adresseGestionCodePostal(value: string) {
    this._adresseGestionCodePostal = value;
  }

  private _adresseGestionAcheminement: string = "";
  public get adresseGestionAcheminement(): string {
    return this._adresseGestionAcheminement;
  }
  public set adresseGestionAcheminement(value: string) {
    this._adresseGestionAcheminement = value;
  }

  private _adresseGestionPays: string = "";
  public get adresseGestionPays(): string {
    return this._adresseGestionPays;
  }
  public set adresseGestionPays(value: string) {
    this._adresseGestionPays = value;
  }

  private _dirigeantCivilite: string = "";
  public get dirigeantCivilite(): string {
    return this._dirigeantCivilite;
  }
  public set dirigeantCivilite(value: string) {
    this._dirigeantCivilite = value;
  }

  private _telephone: string = "";
  public get telephone(): string {
    return this._telephone;
  }
  public set telephone(value: string) {
    this._telephone = value;
  }

  private _siteWeb: string = "";
  public get siteWeb(): string {
    return this._siteWeb;
  }
  public set siteWeb(value: string) {
    this._siteWeb = value;
  }

  private _email: string = "";
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  private _autorisationPublicationWeb: string = "";
  public get autorisationPublicationWeb(): string {
    return this._autorisationPublicationWeb;
  }
  public set autorisationPublicationWeb(value: string) {
    this._autorisationPublicationWeb = value;
  }

  private _observation: string = "";
  public get observation(): string {
    return this._observation;
  }
  public set observation(value: string) {
    this._observation = value;
  }

  private _positionActivite: string = "";
  public get positionActivite(): string {
    return this._positionActivite;
  }
  public set positionActivite(value: string) {
    this._positionActivite = value;
  }

  private _derniereMaj: Date = new Date();
  public get derniereMaj(): Date {
    return this._derniereMaj;
  }
  public set derniereMaj(value: Date) {
    this._derniereMaj = value;
  }

  private _createdAt: Date = new Date();
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  private _updatedAt: Date = new Date();
  public get updatedAt(): Date {
    return this._updatedAt;
  }
  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }
  /**
   * Creates an instance of Association.
   * @param {AssociationI} [obj]
   * @memberof Association
   */
  constructor(obj?: AssociationI) {
    if (typeof obj !== "undefined") {
      this.init(obj);
      return this;
    }
  }
  /**
   *
   *
   * @private
   * @param {AssociationI} obj
   * @memberof Association
   */
  private init(obj: AssociationI) {
    if (obj.id && obj.id !== null) {
      this._id = obj.id;
    }
    if (obj.isWaldec && obj.isWaldec !== null) {
      this._isWaldec = obj.isWaldec;
    }
    if (obj.idAssociation && obj.idAssociation !== null) {
      this._idAssociation = obj.idAssociation;
    }
    if (obj.idExAssociation && obj.idExAssociation !== null) {
      this._idExAssociation = obj.idExAssociation;
    }
    if (obj.siret && obj.siret !== null) {
      this._siret = obj.siret;
    }
    if (
      obj.numeroReconnaissanceUtilitePublique &&
      obj.numeroReconnaissanceUtilitePublique !== null
    ) {
      this._numeroReconnaissanceUtilitePublique =
        obj.numeroReconnaissanceUtilitePublique;
    }
    if (obj.codeGestion && obj.codeGestion !== null) {
      this._codeGestion = obj.codeGestion;
    }
    if (obj.dateCreation && obj.dateCreation !== null) {
      this._dateCreation = obj.dateCreation;
    }
    if (obj.dateDerniereDeclaration && obj.dateDerniereDeclaration !== null) {
      this._dateDerniereDeclaration = obj.dateDerniereDeclaration;
    }
    if (obj.datePublicationCreation && obj.datePublicationCreation !== null) {
      this._datePublicationCreation = obj.datePublicationCreation;
    }
    if (
      obj.dateDeclarationDissolution &&
      obj.dateDeclarationDissolution !== null
    ) {
      this._dateDeclarationDissolution = obj.dateDeclarationDissolution;
    }
    if (obj.nature && obj.nature !== null) {
      this._nature = obj.nature;
    }
    if (obj.groupement && obj.groupement !== null) {
      this._groupement = obj.groupement;
    }
    if (obj.titre && obj.titre !== null) {
      this._titre = obj.titre;
    }
    if (obj.titreCourt && obj.titreCourt !== null) {
      this._titreCourt = obj.titreCourt;
    }
    if (obj.objet && obj.objet !== null) {
      this._objet = obj.objet;
    }
    if (obj.objetSocial1 && obj.objetSocial1 !== null) {
      this._objetSocial1 = obj.objetSocial1;
    }
    if (obj.objetSocial2 && obj.objetSocial2 !== null) {
      this._objetSocial2 = obj.objetSocial2;
    }
    if (obj.l1AdresseImport && obj.l1AdresseImport !== null) {
      this._l1AdresseImport = obj.l1AdresseImport;
    }
    if (obj.l2AdresseImport && obj.l2AdresseImport !== null) {
      this._l2AdresseImport = obj.l2AdresseImport;
    }
    if (obj.l3AdresseImport && obj.l3AdresseImport !== null) {
      this._l3AdresseImport = obj.l3AdresseImport;
    }
    if (obj.adresseSiege && obj.adresseSiege !== null) {
      this._adresseSiege = obj.adresseSiege;
    }
    if (obj.adresseNumeroVoie && obj.adresseNumeroVoie !== null) {
      this._adresseNumeroVoie = obj.adresseNumeroVoie;
    }
    if (obj.adresseRepetition && obj.adresseRepetition !== null) {
      this._adresseRepetition = obj.adresseRepetition;
    }
    if (obj.adresseTypeVoie && obj.adresseTypeVoie !== null) {
      this._adresseTypeVoie = obj.adresseTypeVoie;
    }
    if (obj.adresseLibelleVoie && obj.adresseLibelleVoie !== null) {
      this._adresseLibelleVoie = obj.adresseLibelleVoie;
    }
    if (obj.adresseDistribution && obj.adresseDistribution !== null) {
      this._adresseDistribution = obj.adresseDistribution;
    }
    if (obj.adresseCodeInsee && obj.adresseCodeInsee !== null) {
      this._adresseCodeInsee = obj.adresseCodeInsee;
    }
    if (obj.adresseCodePostal && obj.adresseCodePostal !== null) {
      this._adresseCodePostal = obj.adresseCodePostal;
    }
    if (obj.adresseLibelleCommune && obj.adresseLibelleCommune !== null) {
      this._adresseLibelleCommune = obj.adresseLibelleCommune;
    }
    if (obj.adresseGestionNom && obj.adresseGestionNom !== null) {
      this._adresseGestionNom = obj.adresseGestionNom;
    }
    if (
      obj.adresseGestionFormatPostal &&
      obj.adresseGestionFormatPostal !== null
    ) {
      this._adresseGestionFormatPostal = obj.adresseGestionFormatPostal;
    }
    if (obj.adresseGestionGeo && obj.adresseGestionGeo !== null) {
      this._adresseGestionGeo = obj.adresseGestionGeo;
    }
    if (
      obj.adresseGestionLibelleVoie &&
      obj.adresseGestionLibelleVoie !== null
    ) {
      this._adresseGestionLibelleVoie = obj.adresseGestionLibelleVoie;
    }
    if (
      obj.adresseGestionDistribution &&
      obj.adresseGestionDistribution !== null
    ) {
      this._adresseGestionDistribution = obj.adresseGestionDistribution;
    }
    if (obj.adresseGestionCodePostal && obj.adresseGestionCodePostal !== null) {
      this._adresseGestionCodePostal = obj.adresseGestionCodePostal;
    }
    if (
      obj.adresseGestionAcheminement &&
      obj.adresseGestionAcheminement !== null
    ) {
      this._adresseGestionAcheminement = obj.adresseGestionAcheminement;
    }
    if (obj.adresseGestionPays && obj.adresseGestionPays !== null) {
      this._adresseGestionPays = obj.adresseGestionPays;
    }
    if (obj.dirigeantCivilite && obj.dirigeantCivilite !== null) {
      this._dirigeantCivilite = obj.dirigeantCivilite;
    }
    if (obj.telephone && obj.telephone !== null) {
      this._telephone = obj.telephone;
    }
    if (obj.siteWeb && obj.siteWeb !== null) {
      this._siteWeb = obj.siteWeb;
    }
    if (obj.email && obj.email !== null) {
      this._email = obj.email;
    }
    if (
      obj.autorisationPublicationWeb &&
      obj.autorisationPublicationWeb !== null
    ) {
      this._autorisationPublicationWeb = obj.autorisationPublicationWeb;
    }
    if (obj.observation && obj.observation !== null) {
      this._observation = obj.observation;
    }
    if (obj.observation && obj.observation !== null) {
      this._positionActivite = obj.observation;
    }
    if (obj.derniereMaj && obj.derniereMaj !== null) {
      this._derniereMaj = obj.derniereMaj;
    }
    if (obj.createdAt && obj.createdAt !== null) {
      this._createdAt = obj.createdAt;
    }
    if (obj.updatedAt && obj.updatedAt !== null) {
      this._updatedAt = obj.updatedAt;
    }
  }
}
