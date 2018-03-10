import React, {
    Component
} from 'react';
import Modal from 'react-modal';
import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import Paginate from '../../../components/paginate';
import Autosuggest from 'react-autosuggest';
import UiDatepicker from '../../../components/forms/date_picker';
import Loading from '../../../components/loading';
import Utils, {
    BIGBOX,
    LINK
} from "../../../utils";
import { Link } from 'react-router-dom';
import index from '../../../stores/states/authenticate/index';
const theme = {
    container: {
        position: 'relative'
    },
    input: {
        height: 30,
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        border: '1px solid #aaa',
    },
    inputFocused: {
        outline: 'none'
    },
    inputOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    suggestionsContainer: {
        display: 'none'
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: 51,
        width: 280,
        border: '1px solid #aaa',
        backgroundColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        maxHeight: 200,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 2,
        overflow: 'auto',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    suggestion: {
        cursor: 'pointer',
        padding: '10px 20px'
    },
    suggestionHighlighted: {
        backgroundColor: '#ddd'
    }
};

const languages = [
    {
        "id": 1,
        "name": "ACCUPRIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": 1517723126,
        "updated_by": 6
    },
    {
        "id": 11,
        "name": "ACEMUC 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 21,
        "name": "ACETAZOLAMID 250MG (PHARMEDIC)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 31,
        "name": "ACID FOLIC 5MG(FOLACID)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 41,
        "name": "ACNOTIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 51,
        "name": "ACTAPULGITE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 61,
        "name": "ACTORISEDRON 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 71,
        "name": "ACYCLOVIR CREAM 5G STADA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 81,
        "name": "ACYCLOVIR STADA 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 91,
        "name": "ACYCLOVIR STADA 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 101,
        "name": "ACYCLOVIR STADA 800MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 111,
        "name": "ADALAT LA 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 121,
        "name": "ADALAT LA TAB 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 131,
        "name": "ADALAT RETARD 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 141,
        "name": "ADRENOXYL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 151,
        "name": "AERIUS 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 161,
        "name": "AERIUS SIRO 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 171,
        "name": "AGICARVIR 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 181,
        "name": "AGIFUROS 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 191,
        "name": "AGILECOX 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 201,
        "name": "AGIMSAMINE 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 211,
        "name": "AGINFOLIX 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 221,
        "name": "AGIRENYL 5000IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 231,
        "name": "AIR-X DROPS 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 241,
        "name": "AKUPROZIL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 251,
        "name": "ALBENDAZOL (ADAZOL 400MG)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 261,
        "name": "ALBENDAZOL STADA 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 271,
        "name": "ALBIOMIN 20% 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 281,
        "name": "ALBIS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 291,
        "name": "ALBUMIN HUMAN 20% 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 301,
        "name": "ALDACTONE 25MG.",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 311,
        "name": "ALDOZEN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 321,
        "name": "ALEGYSAL EYE DROP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 331,
        "name": "ALENBE PLUS 70MG/5600IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 341,
        "name": "ALIPAS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 351,
        "name": "ALLERFAR 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 361,
        "name": "ALLOPURINOL 300MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 371,
        "name": "ALMARYS OPTIMA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 381,
        "name": "ALPHACHYMOTRYPSIN BVP 8400",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 391,
        "name": "ALPHACHYMOTRYPSIN SAVI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 401,
        "name": "ALPHAGAN P 0.15% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 411,
        "name": "ALSIFUL SR 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 421,
        "name": "AMARYL 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 431,
        "name": "AMBELIN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 441,
        "name": "AMBROXOL 30MG TIPHARCO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 451,
        "name": "AMEDOLFEN 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 461,
        "name": "AMESPASM 135MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 471,
        "name": "AMINO XL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 481,
        "name": "AMITRIPTYLIN 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 491,
        "name": "AMIYU GRANULES 2.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 501,
        "name": "AMLOR CAP 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 511,
        "name": "AMLOR TAB 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 521,
        "name": "AMOXICILIN 500MG MD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 531,
        "name": "AMOXICILLIN 500MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 541,
        "name": "ANDRIOL TESTOCAPS 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 551,
        "name": "ANDROGEL 50MG/5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 561,
        "name": "ANGINOVAG 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 571,
        "name": "ANTHELIOS XL FLUID SPF 50+ UVB UVA 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 581,
        "name": "APIDRA SOLOSTAR 300IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 591,
        "name": "APROVEL 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 601,
        "name": "APROVEL 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 611,
        "name": "ARCALION 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 621,
        "name": "ARCOXIA 120MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 631,
        "name": "ARCOXIA 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 641,
        "name": "ARCOXIA TAB 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 651,
        "name": "AREMED 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 661,
        "name": "ARGININE STADA 1G/5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 671,
        "name": "ARGISTAD 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 681,
        "name": "ARICEPT EVESS 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 691,
        "name": "ARICEPT EVESS 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 701,
        "name": "ARIMIDEX TAB 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 711,
        "name": "ARTREX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 721,
        "name": "ASKINA CALGITROL PASTE 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 731,
        "name": "ASKINA FOAM 10X10 CM",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 741,
        "name": "ASKINA GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 751,
        "name": "ASPARTAM 35MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 761,
        "name": "ASPIRIN 81MG AGIMEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 771,
        "name": "ASSOLOX 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 781,
        "name": "ATARAX 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 791,
        "name": "ATELEC TAB 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 801,
        "name": "ATENOLOL 50MG STADA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 811,
        "name": "ATISALBU 2MG/5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 821,
        "name": "ATOPICLAIR CREAM 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 831,
        "name": "ATOPICLAIR LOTION 120ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 841,
        "name": "ATROPIN SULFAT 0.25MG/ML VINPHACO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 851,
        "name": "AUCLANITYL 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 861,
        "name": "AUCLANITYL 625MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 871,
        "name": "AUGMENTIN 250/31.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 881,
        "name": "AUGMENTIN 500/62.5 GOI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 891,
        "name": "AUGMENTIN BD 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 901,
        "name": "AUGMENTIN BD 625MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 911,
        "name": "AUGMENTIN SR 1000MG/ 62.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 921,
        "name": "AVAMYS 120DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 931,
        "name": "AVELOX 400MG (V)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 941,
        "name": "AVENE CICALFATE DRYING REPAIR LOTION",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 951,
        "name": "AVENE CICALFATE RESTORATIVE CREAM 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 961,
        "name": "AVENE CLEANANCE CLEANSING GEL 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 971,
        "name": "AVENE CLEANANCE HYDRA 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 981,
        "name": "AVENE SPRING WATER 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 991,
        "name": "AVENE TOLERANCE EXTREME CREAM 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1001,
        "name": "AVENE XERACALM AD CREAM 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1011,
        "name": "AVODART 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1021,
        "name": "AXOGURD 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1031,
        "name": "AXOGURD 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1041,
        "name": "AYITE 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1051,
        "name": "AZARGA EYE DROP 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1061,
        "name": "AZASUN 1% 120ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1071,
        "name": "AZASUN EXTRA 120ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1081,
        "name": "AZE-AIR 10MG/10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1091,
        "name": "AZICINE 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1101,
        "name": "AZICINE 250MG GOI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1111,
        "name": "AZINTAL FORTE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1121,
        "name": "AZOPT 1% 5ML COLLYRE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1131,
        "name": "BABUROL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1141,
        "name": "BACIVIT H",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1151,
        "name": "BACTAZA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1161,
        "name": "BAMBEC 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1171,
        "name": "BAMIFEN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1181,
        "name": "BAR C/60",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1191,
        "name": "BARACLUDE 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1201,
        "name": "BARIVIR 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1211,
        "name": "BARIVIR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1221,
        "name": "BAROLE 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1231,
        "name": "BART 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1241,
        "name": "BARUDON 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1251,
        "name": "BD ULTRA-FINE II (INSU.SYR 30G)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1261,
        "name": "BEELEVOTAL 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1271,
        "name": "BENDICAL 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1281,
        "name": "BENITA 64MCG 120DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1291,
        "name": "BERLTHYROX 100MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1301,
        "name": "BERODUAL 10ML MDI HFA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1311,
        "name": "BERODUAL PHUN SOL 20ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1321,
        "name": "BETADIN ANTISEPTIC SOL 10% 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1331,
        "name": "BETADIN GARGLE & MOUTHWASH 1% 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1341,
        "name": "BETADIN VAGINAL DOUCHE 10% 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1351,
        "name": "BETADINE OINTMENT 10% 40G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1361,
        "name": "BETALOC 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1371,
        "name": "BETALOC ZOK 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1381,
        "name": "BETALOC ZOK 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1391,
        "name": "BETASERC 16MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1401,
        "name": "BETASERC 24MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1411,
        "name": "BETENE 4MG/ML 1ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1421,
        "name": "BETEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1431,
        "name": "BIDIFERON",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1441,
        "name": "BIHASAL 2.5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1451,
        "name": "BIHASAL 5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1461,
        "name": "BILAXTEN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1471,
        "name": "BILBROXOL SYRUP 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1481,
        "name": "BINEXMETONE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1491,
        "name": "BIOFLORA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1501,
        "name": "BIOFLORA 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1511,
        "name": "BIOLACTYL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1521,
        "name": "BISACODYL 5MG DHG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1531,
        "name": "BISOLVON 8MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1541,
        "name": "BISOLVON KIDS SYRUP 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1551,
        "name": "BISOPROLOL STADA 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1561,
        "name": "BISOSTAD 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1571,
        "name": "BIVOLCARD 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1581,
        "name": "BLEMISH CONTROL 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1591,
        "name": "BONMAX 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1601,
        "name": "BREXIN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1611,
        "name": "BRICARNYL EXPECTORANT SYR",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1621,
        "name": "BRIDGE HEEL BALM 75G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1631,
        "name": "BRIDION 100MG/ML 2ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1641,
        "name": "BRILINTA 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1651,
        "name": "BRIOZCAL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1661,
        "name": "BROMHEXIN 4MG F.T",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1671,
        "name": "BRONCHO VAXOM 3.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1681,
        "name": "BRONCHO VAXOM 7MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1691,
        "name": "BRUFEN SUSPENSION 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1701,
        "name": "BUSCOPAN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1711,
        "name": "CALCI D (CALDIHASAN)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1721,
        "name": "CALCI D (MORECAL)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1731,
        "name": "CALCID-HASAN 600/400",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1741,
        "name": "CALCIUM CORBIERE 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1751,
        "name": "CALCIUM CORBIERE 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1761,
        "name": "CALCIUM SANDOZ 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1771,
        "name": "CAMMIC TAB 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1781,
        "name": "CANESTEN 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1791,
        "name": "CANESTEN 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1801,
        "name": "CANZEAL 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1811,
        "name": "CANZEAL TAB 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1821,
        "name": "CAPTOPRIL STADA 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1831,
        "name": "CARBAMAZEPIN 200MG DANAPHA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1841,
        "name": "CARDIOTON",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1851,
        "name": "CARDURAN 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1861,
        "name": "CARSANTIN 12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1871,
        "name": "CARSANTIN 6.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1881,
        "name": "CARSIL 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1891,
        "name": "CASALMUX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1901,
        "name": "CASODEX 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1911,
        "name": "CASODEX 50MG.",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1921,
        "name": "CAVINTON 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1931,
        "name": "CEBASTIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1941,
        "name": "CEBASTIN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1951,
        "name": "CECLOR 125MG SP 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1961,
        "name": "CECLOR 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1971,
        "name": "CECLOR 375MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1981,
        "name": "CEFACLOR 250MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 1991,
        "name": "CEFACLOR STADA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2001,
        "name": "CEFASS 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2011,
        "name": "CEFBUTEN 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2021,
        "name": "CEFETIL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2031,
        "name": "CEFTIBUTEN 200MG (CEDITAX)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2041,
        "name": "CEFUROXIM 250MG (NEGACEF)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2051,
        "name": "CEFUROXIM 500MG (NEGACEF)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2061,
        "name": "CEFUROXIME 250MG MD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2071,
        "name": "CEFUROXIME 500MG MD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2081,
        "name": "CELEBREX CAP 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2091,
        "name": "CELEVOX 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2101,
        "name": "CELIVITE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2111,
        "name": "CELIX 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2121,
        "name": "CELLCEPT CAP 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2131,
        "name": "CELLCEPT TAB 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2141,
        "name": "CERADAN 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2151,
        "name": "CERADAN 80G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2161,
        "name": "CERINDI 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2171,
        "name": "CESYRUP 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2181,
        "name": "CETAPHIL CLEANSER 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2191,
        "name": "CETAPHIL DERMACONTROL SPF 30 118ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2201,
        "name": "CETAPHIL GENTLE CLEANSER 500ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2211,
        "name": "CETAPHIL MOIST CREAM 50G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2221,
        "name": "CETAPHIL RESTORADERM BODY WASH 295ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2231,
        "name": "CETIRIZINE STADA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2241,
        "name": "CETRAXAL EAR DROP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2251,
        "name": "CHOPHYTOL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2261,
        "name": "CIALIS 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2271,
        "name": "CILOST 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2281,
        "name": "CIPMYAN 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2291,
        "name": "CIPROBAY 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2301,
        "name": "CIPROFLOXACIN 0.3% 5ML DP 3/2",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2311,
        "name": "CIPROFLOXACIN 500MG (SCANAX)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2321,
        "name": "CITAKEY 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2331,
        "name": "CLAMOXYL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2341,
        "name": "CLARITHROMYCIN STADA 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2351,
        "name": "CLARITHROMYCIN STADA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2361,
        "name": "CLAZIC SR 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2371,
        "name": "CLEALINE 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2381,
        "name": "CLEALINE 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2391,
        "name": "CLINDASTAD 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2401,
        "name": "CLOPICURE 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2411,
        "name": "CLOPIKIP 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2421,
        "name": "CLOPISTAD 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2431,
        "name": "CLORAXIN 0.4% 10ML COLLYRE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2441,
        "name": "CO-APROVEL 150/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2451,
        "name": "CO-APROVEL 300/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2461,
        "name": "CO-DIOVAN 160/25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2471,
        "name": "CO-DIOVAN 80/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2481,
        "name": "COLCHICINE ARTH 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2491,
        "name": "COLESTRIM 160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2501,
        "name": "COLPOSEPTINE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2511,
        "name": "COLPOTROPHINE CREAM 1% 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2521,
        "name": "COLPOTROPHINE SUPP 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2531,
        "name": "COMBIGAN 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2541,
        "name": "COMBIVENT UDV 2.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2551,
        "name": "COMBIWAVE 200MCG/DOSE 200DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2561,
        "name": "CON BORIC 3% 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2571,
        "name": "CONCOR 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2581,
        "name": "CONCOR 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2591,
        "name": "CONEULIN 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2601,
        "name": "COPEGUS 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2611,
        "name": "CORDARON 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2621,
        "name": "COREPRAZOLE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2631,
        "name": "CORNEREGEL EYE GEL 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2641,
        "name": "COTRIM FORTE STADA 960MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2651,
        "name": "COVERAM 10/10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2661,
        "name": "COVERAM 10/5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2671,
        "name": "COVERAM 5/10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2681,
        "name": "COVERAM 5/5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2691,
        "name": "COVERSYL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2701,
        "name": "COVERSYL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2711,
        "name": "COVERSYL PLUS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2721,
        "name": "COZAAR 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2731,
        "name": "COZAAR 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2741,
        "name": "COZAAR XQ 5/100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2751,
        "name": "COZAAR XQ 5/50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2761,
        "name": "CRAVIT OPHTHAMIC 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2771,
        "name": "CREON 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2781,
        "name": "CRESTOR 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2791,
        "name": "CRESTOR 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2801,
        "name": "CRESTOR 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2811,
        "name": "CUELLAR 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2821,
        "name": "CURIOSIN GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2831,
        "name": "CYBERCEF 750MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2841,
        "name": "CYPDICAR 6.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2851,
        "name": "CYSTINE B6",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2861,
        "name": "DAFLON 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2871,
        "name": "DAIVOBET 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2881,
        "name": "DAIVONEX PD 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2891,
        "name": "DAKTARIN ORAL GEL 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2901,
        "name": "DALACIN C 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2911,
        "name": "DALACIN T SOL 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2921,
        "name": "DALFUSIN 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2931,
        "name": "DASLASE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2941,
        "name": "DAVYCA F 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2951,
        "name": "DEBRIDAT 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2961,
        "name": "DECONTRACTYL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2971,
        "name": "DEPAKINE 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2981,
        "name": "DEPAKINE CHRONO 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 2991,
        "name": "DERMAL CALMING GEL 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3001,
        "name": "DERMATIX ULTRA 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3011,
        "name": "DERMOVATE 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3021,
        "name": "DETRACYL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3031,
        "name": "DEVODIL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3041,
        "name": "DEXACOL COLLYRE 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3051,
        "name": "DEXAMETHASONE 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3061,
        "name": "DIACEREIN 50 HV",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3071,
        "name": "DIAMICRON MR 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3081,
        "name": "DIAMICRON MR 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3091,
        "name": "DICLOCARE 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3101,
        "name": "DICLOFENAC 50MG (DICLOBERL)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3111,
        "name": "DICLOFENAC 50MG VINPHACO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3121,
        "name": "DICLOFENAC 75MG TIPHARCO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3131,
        "name": "DIEP HA CHAU 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3141,
        "name": "DIFFERIN CREAM 0.1% 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3151,
        "name": "DIFLUCAN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3161,
        "name": "DIGOXIN-RICHTER 0.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3171,
        "name": "DIGOXINEQUALY 0.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3181,
        "name": "DILATREND 12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3191,
        "name": "DILATREND 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3201,
        "name": "DILATREND 6.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3211,
        "name": "DILTIAZEM STADA 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3221,
        "name": "DIMENHYDRINAT (BESTRIP 50MG)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3231,
        "name": "DINALVIC VPC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3241,
        "name": "DIOVAN 160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3251,
        "name": "DIOVAN 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3261,
        "name": "DIPHERELINE PR 3,75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3271,
        "name": "DIPOLAC G CREAM 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3281,
        "name": "DIPROSALIC 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3291,
        "name": "DIPROSPAN INJ 1ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3301,
        "name": "DIUREFAR 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3311,
        "name": "DIURESIN SR 1.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3321,
        "name": "DIXIREIN 375MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3331,
        "name": "DOLCHIS 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3341,
        "name": "DOLLY ACNE GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3351,
        "name": "DOMITAZOL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3361,
        "name": "DOMPERIDON 10MG TW25",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3371,
        "name": "DOMPERIDON STADA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3381,
        "name": "DOMPERIDONE GSK 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3391,
        "name": "DOMREME 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3401,
        "name": "DONAGEN 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3411,
        "name": "DOPEGYT 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3421,
        "name": "DORITHRICIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3431,
        "name": "DOXYCYCLIN 100MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3441,
        "name": "DRAINA S MINI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3451,
        "name": "DROFEN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3461,
        "name": "DROS-TA 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3471,
        "name": "DROSPERIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3481,
        "name": "DROSPERIN 20",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3491,
        "name": "DUCAS 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3501,
        "name": "DUCRAY KELUAL DS 100ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3511,
        "name": "DUDENCER 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3521,
        "name": "DUOPLAVIN 75MG/100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3531,
        "name": "DUOTRAV 2.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3541,
        "name": "DUPHALAC 10G/15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3551,
        "name": "DUPHASTON 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3561,
        "name": "DUSPATALIN RETARD 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3571,
        "name": "DUTIXIM 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3581,
        "name": "EASYEF 0.005% 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3591,
        "name": "EBASITIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3601,
        "name": "EFEXOR XR 37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3611,
        "name": "EFFERALGAN 150MG SUPPO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3621,
        "name": "EFFERALGAN 300MG SUPPO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3631,
        "name": "EFFERALGAN 80MG SACHETS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3641,
        "name": "EFFERALGAN 80MG SUPPO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3651,
        "name": "EFFEREX 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3661,
        "name": "EFFERHASAN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3671,
        "name": "EFFERHASAN 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3681,
        "name": "EFTICOL 0.9% 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3691,
        "name": "EFTIMOXIN 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3701,
        "name": "EGILOK 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3711,
        "name": "EGZYSTA 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3721,
        "name": "ELTHON 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3731,
        "name": "EMBEVIN 0.075MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3741,
        "name": "EMLA CREAM 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3751,
        "name": "ENALAPRIL STADA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3761,
        "name": "ENALAPRIL STADA 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3771,
        "name": "ENAZ WHEY PROTEIN 400G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3781,
        "name": "ENCORATE 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3791,
        "name": "ENCORATE 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3801,
        "name": "ENCORATE CHRONO 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3811,
        "name": "ENPOVID AD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3821,
        "name": "ENTECAVIR STADA 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3831,
        "name": "ENTEROGERMINA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3841,
        "name": "ENTEROGERMINA VIEN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3851,
        "name": "EPRAZINONE 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3861,
        "name": "ERCEFURYL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3871,
        "name": "ERY CHILDREN 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3881,
        "name": "ESAPBE 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3891,
        "name": "ESLIVER",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3901,
        "name": "ESMERON 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3911,
        "name": "ESOFAR 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3921,
        "name": "ESOMEPRAZOL STADA 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3931,
        "name": "ESOMEPRAZOL STADA 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3941,
        "name": "ESPUMISAN L 40MG/ML 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3951,
        "name": "ESSENTIALE FORTE 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3961,
        "name": "ESTEEM + D-POUCH (TRONG)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3971,
        "name": "ESTRACEPTIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3981,
        "name": "ETHAMBUTOL 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 3991,
        "name": "ETODAGIM 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4001,
        "name": "EUMOVATE 0.05% 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4011,
        "name": "EUROPULGITE 2.5/0.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4021,
        "name": "EVALDEZ 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4031,
        "name": "EXFORGE 5/80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4041,
        "name": "EXFORGE HCT TAB 10/160/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4051,
        "name": "EXFORGE HCT TAB 5/160/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4061,
        "name": "EXFORGE TAB 10/160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4071,
        "name": "EXOMUC 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4081,
        "name": "EZETROL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4091,
        "name": "EZINOL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4101,
        "name": "EZVASTEN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4111,
        "name": "FARESO 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4121,
        "name": "FASTUM GEL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4131,
        "name": "FATIG 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4141,
        "name": "FEBURIC 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4151,
        "name": "FELODIL ER 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4161,
        "name": "FELODIPIN STADA 5MG RETARD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4171,
        "name": "FEMOSTON",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4181,
        "name": "FENOSUP LIDOSE 160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4191,
        "name": "FERROVIT",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4201,
        "name": "FEXODINEFAST 180MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4211,
        "name": "FEXOFENADIN 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4221,
        "name": "FICOCYTE 30MU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4231,
        "name": "FLAGENTYL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4241,
        "name": "FLAGYL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4251,
        "name": "FLAREX 0,1% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4261,
        "name": "FLEET ENEMA 133ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4271,
        "name": "FLEMEX 375MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4281,
        "name": "FLEMEX SYRUP 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4291,
        "name": "FLEXIMA - HAU MON NHAN TAO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4301,
        "name": "FLIXONASE 0,05% 60D",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4311,
        "name": "FLIXOTIDE EVO 125MCG 120D",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4321,
        "name": "FLOTRAL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4331,
        "name": "FLOXAVAL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4341,
        "name": "FLUCOMEDIL 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4351,
        "name": "FLUCONAZOL STADA 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4361,
        "name": "FLUMETHOLON 0.02% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4371,
        "name": "FLUMETHOLON 0.1% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4381,
        "name": "FLUNEX AQ 120DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4391,
        "name": "FLUOMIZIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4401,
        "name": "FLUOTIN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4411,
        "name": "FLUTONIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4421,
        "name": "FLUTONIN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4431,
        "name": "FLUZINSTAD 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4441,
        "name": "FONCITRIL 4000",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4451,
        "name": "FONOTIM 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4461,
        "name": "FORLAX 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4471,
        "name": "FORLEN 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4481,
        "name": "FORTICARE CAPPUCCINO FLAVOUR 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4491,
        "name": "FORTICARE ORANGE FLAVOUR 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4501,
        "name": "FORTIMEL 335G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4511,
        "name": "FORXIGA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4521,
        "name": "FORXIGA 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4531,
        "name": "FOSAMAX PLUS 70MG/2800IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4541,
        "name": "FOSAMAX PLUS 70MG/5600IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4551,
        "name": "FOSFOMYCIN 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4561,
        "name": "FOSFOMYCIN 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4571,
        "name": "FOSMICIN TABLETS 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4581,
        "name": "FOSMICIN-S FOR OTIC 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4591,
        "name": "FUCICORT CRE 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4601,
        "name": "FUCIDIN CRE 2% 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4611,
        "name": "FUCIDIN H CRE 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4621,
        "name": "FUDTENO 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4631,
        "name": "FUGACAR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4641,
        "name": "FUMAFER B9 CORBIERE DAILY USE TABS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4651,
        "name": "G-XTIL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4661,
        "name": "GABAHASAN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4671,
        "name": "GABICA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4681,
        "name": "GALVUS 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4691,
        "name": "GALVUS MET 50/1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4701,
        "name": "GALVUS MET 50/500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4711,
        "name": "GALVUS MET 50/850MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4721,
        "name": "GAMALATE B6 TAB",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4731,
        "name": "GANFORT 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4741,
        "name": "GAPENTIN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4751,
        "name": "GASMOTIN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4761,
        "name": "GASTROPULGITE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4771,
        "name": "GAVISCON SUSPENSION 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4781,
        "name": "GEMFIBSTAD 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4791,
        "name": "GILOBA 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4801,
        "name": "GINKOR FORT",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4811,
        "name": "GLIATILIN 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4821,
        "name": "GLIMEPIRIDE STADA 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4831,
        "name": "GLIMEPIRIDE STADA 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4841,
        "name": "GLIMULIN 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4851,
        "name": "GLIPHALIN 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4861,
        "name": "GLOCOR 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4871,
        "name": "GLUCOBAY 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4881,
        "name": "GLUCOBAY 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4891,
        "name": "GLUCOFINE 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4901,
        "name": "GLUCOPHAGE 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4911,
        "name": "GLUCOPHAGE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4921,
        "name": "GLUCOPHAGE 850MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4931,
        "name": "GLUCOPHAGE XR 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4941,
        "name": "GLUCOPHAGE XR 750MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4951,
        "name": "GLUCOPHAGE XR TAB 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4961,
        "name": "GLUCOVANCE 500/2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4971,
        "name": "GLUCOVANCE 500/5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4981,
        "name": "GOLDESOME 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 4991,
        "name": "GRAFORT 3G 20ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5001,
        "name": "GRAMADOL 325/37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5011,
        "name": "GRANDAXIN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5021,
        "name": "GYLLEX 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5031,
        "name": "GYNO-PEVARYL 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5041,
        "name": "GYNOFAR 90ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5051,
        "name": "GYNOFLOR",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5061,
        "name": "GYNOPHILUS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5071,
        "name": "HALOFAR 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5081,
        "name": "HALOPERIDOL 1.5MG (HAZIDOL)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5091,
        "name": "HAMIGEL S 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5101,
        "name": "HANCETAX 500MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5111,
        "name": "HAPACOL 150MG GOI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5121,
        "name": "HAPACOL 250MG GOI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5131,
        "name": "HARNAL OCAS 0.4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5141,
        "name": "HASADOLAC 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5151,
        "name": "HASANBEST 500/2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5161,
        "name": "HASANBEST 500/5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5171,
        "name": "HCQ 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5181,
        "name": "HELIOCARE 360 GEL OIL FREE SPF 50 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5191,
        "name": "HELIOCARE GEL SPF 90 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5201,
        "name": "HELIOCARE ORAL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5211,
        "name": "HELIOCARE ULTRA ORAL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5221,
        "name": "HEMOCLIN GEL 37G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5231,
        "name": "HEMOQ MOM",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5241,
        "name": "HEPCINAT 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5251,
        "name": "HEPEVEREX 3G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5261,
        "name": "HERBESSER 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5271,
        "name": "HERBESSER 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5281,
        "name": "HERBESSER R 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5291,
        "name": "HERBESSER R100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5301,
        "name": "HEWEL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5311,
        "name": "HIDRASEC 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5321,
        "name": "HIDRASEC CHILDREN 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5331,
        "name": "HIDRASEC INFANTS 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5341,
        "name": "HOASTEX 90ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5351,
        "name": "HOECLODERM 0.05% 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5361,
        "name": "HOLLISTER - DE BANG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5371,
        "name": "HOLLISTER - HAU MON NHAN TAO 1 MANH",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5381,
        "name": "HOLLISTER - HAU MON NHAN TAO 2 MANH",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5391,
        "name": "HORNOL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5401,
        "name": "HUDICA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5411,
        "name": "HUMALOG MIX 50/50 KWIKPEN 100U/ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5421,
        "name": "HUMALOG MIX 75/25 KWIKPEN 100U/ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5431,
        "name": "HUMULIN 70/30 INJ 100IU 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5441,
        "name": "HUMULIN N INJ 100IU 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5451,
        "name": "HYALGAN INJ 20MG/2ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5461,
        "name": "HYDREA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5471,
        "name": "HYDROCORTISONE ROUSSEL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5481,
        "name": "HYPERIUM 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5491,
        "name": "HYZAAR 50/12.5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5501,
        "name": "HYZAAR PLUS TAB 100/12.5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5511,
        "name": "I.P.CYL FORTE 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5521,
        "name": "IBUPROFEN 400MG (I-PAIN)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5531,
        "name": "IBUTOP 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5541,
        "name": "IDATRIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5551,
        "name": "IKOFATE 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5561,
        "name": "IKOTIZ 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5571,
        "name": "IMDUR 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5581,
        "name": "IMDUR 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5591,
        "name": "IMIDU 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5601,
        "name": "IMODIUM 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5611,
        "name": "IMPLANON NXT 68MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5621,
        "name": "IMUREL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5631,
        "name": "INDOCOLLYRE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5641,
        "name": "INFOGOS 3G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5651,
        "name": "INGARON 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5661,
        "name": "INH 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5671,
        "name": "INSULATARD FLEXPEN 100IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5681,
        "name": "INSULIN MIXTARD 30 HM 100UI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5691,
        "name": "IRBEHASAN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5701,
        "name": "IRBESARTAN 150MG 3/2",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5711,
        "name": "IRBEZYD H 150/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5721,
        "name": "IRESSA 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5731,
        "name": "JANUMET 50/1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5741,
        "name": "JANUMET 50/500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5751,
        "name": "JANUMET 50/850MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5761,
        "name": "JANUVIA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5771,
        "name": "JANUVIA 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5781,
        "name": "JEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5791,
        "name": "JOINTCERIN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5801,
        "name": "KALDYUM 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5811,
        "name": "KALEORID 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5821,
        "name": "KALIMATE 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5831,
        "name": "KAPETRAL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5841,
        "name": "KARY UNI COLLYRE 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5851,
        "name": "KEAMINE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5861,
        "name": "KEIVAX 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5871,
        "name": "KEMIVIR 800MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5881,
        "name": "KEPPRA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5891,
        "name": "KETOSTERIL 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5901,
        "name": "KIDVITON 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5911,
        "name": "KIM TIEN THAO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5921,
        "name": "KIN BABY TEETHING GEL 30ML/30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5931,
        "name": "KIN GINGIVAL MOUTHWASH 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5941,
        "name": "KIN GINGIVAL TOOTHPASTE 90G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5951,
        "name": "KITRAMPAL 325/37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5961,
        "name": "KLACID 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5971,
        "name": "KLACID FORTE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5981,
        "name": "KLACID MR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 5991,
        "name": "KLACID SUS 125MG 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6001,
        "name": "KLAMENTIN 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6011,
        "name": "KLAMENTIN 250/31.25MG GOI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6021,
        "name": "KLAVUNAMOX 625MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6031,
        "name": "KLENZIT MS GEL 0.1%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6041,
        "name": "KLENZIT-C GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6051,
        "name": "KOCARBONAG ANTIMICROBIAL 10X10 CM",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6061,
        "name": "KOMBOGLYZE XR 5/500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6071,
        "name": "KORUAN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6081,
        "name": "KSART 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6091,
        "name": "KUTAB 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6101,
        "name": "L-BIO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6111,
        "name": "L-BIO N",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6121,
        "name": "L-TRIZYN 10",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6131,
        "name": "LA ROCHE-POSAY SPRING WATER 300ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6141,
        "name": "LACIPIL 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6151,
        "name": "LACIPIL 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6161,
        "name": "LACTACYD BB 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6171,
        "name": "LACTACYD FH 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6181,
        "name": "LACTATE RINGER 500ML OTSUKA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6191,
        "name": "LACTEOL 340MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6201,
        "name": "LAMICTAL TAB 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6211,
        "name": "LAMICTAL TAB 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6221,
        "name": "LAMISIL CREAM 1%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6231,
        "name": "LAMIVUDIN HASAN 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6241,
        "name": "LAMIVUDIN STADA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6251,
        "name": "LANTUS 100UI 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6261,
        "name": "LANTUS SOLOSTAR 100IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6271,
        "name": "LEDVIR 90/400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6281,
        "name": "LEFLUNOMIDE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6291,
        "name": "LEPARISIEN CLEANSER 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6301,
        "name": "LEPARISIEN LOTION DAILY MOISTURE 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6311,
        "name": "LEPARISIEN MULTI VITA FACIAL SPRAY 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6321,
        "name": "LEPARISIEN VIN SUNBLOCK 50 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6331,
        "name": "LEPARISIEN VITAMIN C 20 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6341,
        "name": "LEPARISIEN VITAMIN C ABSOLUTE 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6351,
        "name": "LESCOL XL 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6361,
        "name": "LEVEMIR FLEXPEN 100U/ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6371,
        "name": "LEVETSTAD 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6381,
        "name": "LEVITRA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6391,
        "name": "LEVITRA 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6401,
        "name": "LEVOCOZATE 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6411,
        "name": "LEVOFLOXACIN STADA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6421,
        "name": "LEVOQUIN 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6431,
        "name": "LEVOTHYROX 100MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6441,
        "name": "LEVOTHYROX 50MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6451,
        "name": "LIGNOPAD 5%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6461,
        "name": "LIPANTHYL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6471,
        "name": "LIPANTHYL NT 145MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6481,
        "name": "LIPANTHYL SUPRA 160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6491,
        "name": "LIPIKAR BAUME AP+ 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6501,
        "name": "LIPISTAD 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6511,
        "name": "LIPITOR 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6521,
        "name": "LIPITOR 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6531,
        "name": "LIPITOR 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6541,
        "name": "LIPOSIC EYE GEL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6551,
        "name": "LISIDIGAL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6561,
        "name": "LISONORM 5/10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6571,
        "name": "LIVACT 4.15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6581,
        "name": "LIVERTON 140MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6591,
        "name": "LIVIAL TAB 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6601,
        "name": "LIVOLIN-H 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6611,
        "name": "LIVORAX 8MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6621,
        "name": "LIZOLID 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6631,
        "name": "LOCACID 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6641,
        "name": "LOCATOP CREAM 0.1% 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6651,
        "name": "LOPID 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6661,
        "name": "LOPIOZ 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6671,
        "name": "LORATADINE 10MG SPM",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6681,
        "name": "LORATADINE SAVI 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6691,
        "name": "LORATADINE SYRUP 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6701,
        "name": "LOSARTAN STADA 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6711,
        "name": "LOSARTAN STADA 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6721,
        "name": "LOSEC MUPS 20MG.",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6731,
        "name": "LOTEMAX 0.5% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6741,
        "name": "LOUSARTAN 50/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6751,
        "name": "LOWLIP H 40/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6761,
        "name": "LUMIGAN 0.01% 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6771,
        "name": "LUMIGAN 0.03% 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6781,
        "name": "LUVOX 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6791,
        "name": "LYRICA 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6801,
        "name": "LYRICA 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6811,
        "name": "LYVITOL 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6821,
        "name": "MAALOX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6831,
        "name": "MACLEVO 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6841,
        "name": "MACNIR 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6851,
        "name": "MACRIATE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6861,
        "name": "MADOPAR TAB 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6871,
        "name": "MAGNE B6 CORBIERE AMPS 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6881,
        "name": "MAGNESI- B6 TIPHARCO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6891,
        "name": "MAGNESIUM-VITAMIN B6 F.T",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6901,
        "name": "MAGRAX 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6911,
        "name": "MALLOTE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6921,
        "name": "MAXITROL DROP 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6931,
        "name": "MAXITROL OINT TUBE 3.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6941,
        "name": "MEBENDAZOL 500MG (TATACA)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6951,
        "name": "MEBENDAZOL 500MG AGIMEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6961,
        "name": "MEBSYN 135MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6971,
        "name": "MECLONATE 50MCG 150DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6981,
        "name": "MECONER 500MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 6991,
        "name": "MEDITROL 0.25MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7001,
        "name": "MEDORAL 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7011,
        "name": "MEDROL 16MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7021,
        "name": "MEDROL 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7031,
        "name": "MEDSKIN CLOVIR 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7041,
        "name": "MEGADUO GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7051,
        "name": "MELOFLAM 15MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7061,
        "name": "MELOXICAM STADA 7.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7071,
        "name": "MENISON 16MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7081,
        "name": "MERCILON",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7091,
        "name": "MERISLON 12MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7101,
        "name": "MESECA 60DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7111,
        "name": "MESHANON 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7121,
        "name": "MESTINON S.C 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7131,
        "name": "MESULPINE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7141,
        "name": "METEOSPASMYL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7151,
        "name": "METFORMIN SAVI 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7161,
        "name": "METFORMIN STADA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7171,
        "name": "METHYCOBAL TAB 500MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7181,
        "name": "METHYLDOPA 250MG REMEDICA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7191,
        "name": "METIPRED 16MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7201,
        "name": "METRONIDAZOL 250MG VINPHACO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7211,
        "name": "METRONIDAZOLE STADA 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7221,
        "name": "METSAV 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7231,
        "name": "METSAV 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7241,
        "name": "METSAV 850MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7251,
        "name": "MEZAMAZOL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7261,
        "name": "MIBELET 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7271,
        "name": "MIBETEL 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7281,
        "name": "MIBEZIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7291,
        "name": "MIGOMIK 3MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7301,
        "name": "MIGRANOL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7311,
        "name": "MILIAN 20ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7321,
        "name": "MILURIT 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7331,
        "name": "MIMOSA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7341,
        "name": "MINIRIN 0.1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7351,
        "name": "MINIRIN MELT 60MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7361,
        "name": "MINOXIDIL 2%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7371,
        "name": "MINOXIDIL 5%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7381,
        "name": "MIRASTAD 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7391,
        "name": "MIRCERA 100MCG /0.3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7401,
        "name": "MIRCERA 50MCG/0.3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7411,
        "name": "MIRZATEN 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7421,
        "name": "MISENBO 62.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7431,
        "name": "MISOPROSTOL STADA 200MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7441,
        "name": "MOBIC 15MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7451,
        "name": "MOBIC 7.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7461,
        "name": "MOSAD MT 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7471,
        "name": "MOTHER CARE 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7481,
        "name": "MOTILIUM 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7491,
        "name": "MOTILIUM SUSP 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7501,
        "name": "MOTILIUM-M 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7511,
        "name": "MOZOLY 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7521,
        "name": "MUCOSOLVAN 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7531,
        "name": "MUCOSTA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7541,
        "name": "MUOI RUA MUI XOANG CAT LINH (BO)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7551,
        "name": "MUOI RUA MUI XOANG CAT LINH (G)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7561,
        "name": "MYDOCALM 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7571,
        "name": "MYDOCALM 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7581,
        "name": "MYDRIACYL DROP 1% 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7591,
        "name": "MYDRIN-P COLLYRE 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7601,
        "name": "MYHEP 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7611,
        "name": "MYONAL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7621,
        "name": "MYPARA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7631,
        "name": "MYPARA 500MG EFF",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7641,
        "name": "MYPARA ER 650MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7651,
        "name": "MYPARA EXTRA 500/30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7661,
        "name": "MYSOBENAL 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7671,
        "name": "MYVITA CALCIUM 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7681,
        "name": "NABUMETONE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7691,
        "name": "NADECIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7701,
        "name": "NALGIDON 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7711,
        "name": "NALGIDON 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7721,
        "name": "NANO AGE 28ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7731,
        "name": "NANO C PREMIUM 22% 8ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7741,
        "name": "NANO WHITE 28ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7751,
        "name": "NANOKINE 4000IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7761,
        "name": "NASIRAN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7771,
        "name": "NATACARE 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7781,
        "name": "NATRI CLORID 0.9% 100ML BBRAUN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7791,
        "name": "NATRILIX SR 1.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7801,
        "name": "NAUTAMINE 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7811,
        "name": "NAVELBINE CAP 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7821,
        "name": "NAVELBINE CAP 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7831,
        "name": "NAZOSTER NASAL 50MCG 140DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7841,
        "name": "NEBIDO INJ 1000 MG/ 4ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7851,
        "name": "NEBILET 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7861,
        "name": "NEILMED 120 SACHETS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7871,
        "name": "NEILMED KIT 10",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7881,
        "name": "NEILMED KIT 60",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7891,
        "name": "NEILMED NASA MIST SALINE SPRAY 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7901,
        "name": "NEILMED NASOGEL DRY NOSE 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7911,
        "name": "NEILMED PEDIATRIC 120 SACHETS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7921,
        "name": "NEILMED PEDIATRIC KIT 30",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7931,
        "name": "NEO-TERGYNAN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7941,
        "name": "NEOCODION",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7951,
        "name": "NEOPEPTINE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7961,
        "name": "NEOTONE 25ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7971,
        "name": "NEOTONE RADIANCE 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7981,
        "name": "NEUCERIS 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 7991,
        "name": "NEURALMIN 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8001,
        "name": "NEUROGESIC-M 300MG/500MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8011,
        "name": "NEURONTIN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8021,
        "name": "NEWBUTIN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8031,
        "name": "NEXAVAR 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8041,
        "name": "NEXAVAR 200MG DHY",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8051,
        "name": "NEXIUM MUPS 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8061,
        "name": "NEXIUM MUPS 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8071,
        "name": "NEXIUM SAC 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8081,
        "name": "NICOMEN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8091,
        "name": "NIFEDIPIN HASAN 20 RETARD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8101,
        "name": "NIFEDIPIN T20 STADA RETARD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8111,
        "name": "NIRDICIN 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8121,
        "name": "NITRALMYL 2.6MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8131,
        "name": "NITROMINT 2.6MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8141,
        "name": "NIVALIN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8151,
        "name": "NIZORAL CREAM 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8161,
        "name": "NIZORAL CREAM 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8171,
        "name": "NIZORAL SHAMPOO 100ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8181,
        "name": "NOLVADEX -D 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8191,
        "name": "NOLVADEX 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8201,
        "name": "NOOTROPIL 800MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8211,
        "name": "NORDITROPIN NORDILET 5MG/1.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8221,
        "name": "NORGY 80ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8231,
        "name": "NORMAGUT 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8241,
        "name": "NOTON 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8251,
        "name": "NOVOFINE 31G 0.25X",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8261,
        "name": "NOVOMIX 30 FLEXPEN 100IU/ML 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8271,
        "name": "NOVORAPID FLEXPEN 100UI/ML 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8281,
        "name": "NOVOXIM 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8291,
        "name": "NS BIONIC FACE SERUM 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8301,
        "name": "NS CLARIFYING CLEANSER 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8311,
        "name": "NS ILLUMINATING SERUM 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8321,
        "name": "NS PIGMENT CONTROLLER 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8331,
        "name": "NS RENEWAL CREAM 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8341,
        "name": "NUCLEO CMP FORTE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8351,
        "name": "NUCLEO CMP INJ",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8361,
        "name": "NUTREN DIABETES 400G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8371,
        "name": "NUTRIOS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8381,
        "name": "NYSTATIN 25.000IU G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8391,
        "name": "NYSTATIN 500.000IU DP 3/2",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8401,
        "name": "NYSTATIN 500.000IU VIEN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8411,
        "name": "OFLOVID COLLYRE 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8421,
        "name": "OFLOVID CREAM 3.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8431,
        "name": "OFLOXACIN 0.3% 5ML MD",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8441,
        "name": "OFLOXACIN STADA 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8451,
        "name": "OGREL PLUS 75/75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8461,
        "name": "OLMED 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8471,
        "name": "OLMED 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8481,
        "name": "ONBREZ 150MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8491,
        "name": "ONBREZ 300MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8501,
        "name": "ONGLYZA 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8511,
        "name": "ONGLYZA 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8521,
        "name": "OPELAN-10 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8531,
        "name": "ORAFAR 90ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8541,
        "name": "ORATANE 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8551,
        "name": "ORATANE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8561,
        "name": "ORELOX 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8571,
        "name": "ORESOL 245 DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8581,
        "name": "ORGAMETRIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8591,
        "name": "ORIENTMAX 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8601,
        "name": "ORLISTAT STADA 120MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8611,
        "name": "ORTHO KIN MOUTHWASH 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8621,
        "name": "ORTHO KIN TOOTHPASTE 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8631,
        "name": "OSPEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8641,
        "name": "OTIFAR",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8651,
        "name": "OTIPAX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8661,
        "name": "OTIV",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8671,
        "name": "OTOFA 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8681,
        "name": "OTRIVIN 0.1% DRO 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8691,
        "name": "OTRIVIN 0.1% SPRAY",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8701,
        "name": "OVESTIN TAB 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8711,
        "name": "OZTIS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8721,
        "name": "PANADOL EFF 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8731,
        "name": "PANANGIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8741,
        "name": "PANECOX 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8751,
        "name": "PANFOR SR 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8761,
        "name": "PANFOR SR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8771,
        "name": "PANOXYL SOAP FREE CLEANSER",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8781,
        "name": "PANTOLOC 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8791,
        "name": "PANTOLOC 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8801,
        "name": "PANTOPRAZOLE STADA 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8811,
        "name": "PAPULEX ISOCORREXION 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8821,
        "name": "PAPULEX LOTION 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8831,
        "name": "PAPULEX MOUSSANT SOAP CLEAN GEL 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8841,
        "name": "PAPULEX UV HIGH PROTECTION CREAM 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8851,
        "name": "PARACETAMOL 325MG (CEMOFAR)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8861,
        "name": "PARETOC 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8871,
        "name": "PARIET 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8881,
        "name": "PARIET 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8891,
        "name": "PARTAMOL EFF 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8901,
        "name": "PEGINTRON INJ 80MCG 0.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8911,
        "name": "PEGINTRON REDIPEN INJ 100MCG 0.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8921,
        "name": "PENTASA SR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8931,
        "name": "PENTASA SUPPO 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8941,
        "name": "PENTOXIPHARM 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8951,
        "name": "PEPSANE GEL 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8961,
        "name": "PEPTAMEN 400G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8971,
        "name": "PERIOKIN GEL 0.2% 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8981,
        "name": "PFERTZEL 75MG/75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 8991,
        "name": "PHARMACLOFEN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9001,
        "name": "PHARMATON KIDDI SIRO 100ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9011,
        "name": "PHENYTOIN 100MG DANAPHA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9021,
        "name": "PHILCO Q10",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9031,
        "name": "PHILLIVERIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9041,
        "name": "PHILUTE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9051,
        "name": "PHLEBODIA 600MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9061,
        "name": "PHOSBIND 667MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9071,
        "name": "PHOSPHALUGEL 20% 20G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9081,
        "name": "PHYSIOGEL DERMO CLEANSER 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9091,
        "name": "PIASCLEDINE 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9101,
        "name": "PIRACETAM 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9111,
        "name": "PIRACETAM 800MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9121,
        "name": "PIVALONE SPR 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9131,
        "name": "PLATIX HT FACE CLEANSING GEL 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9141,
        "name": "PLATIX HT WRINKLE SMOOTHING SERUM 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9151,
        "name": "PLAVIX 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9161,
        "name": "PLAVIX 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9171,
        "name": "PLENDIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9181,
        "name": "PLENDIL PLUS 5/50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9191,
        "name": "PLETAAL 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9201,
        "name": "PLETAAL 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9211,
        "name": "PLETAAL TABLETS 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9221,
        "name": "PM BRANIN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9231,
        "name": "PM KIDDIECAL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9241,
        "name": "PM REMEM 120MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9251,
        "name": "PMS FLUOXETINE 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9261,
        "name": "PMS IRBESARTAN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9271,
        "name": "PMS MONTELUKAST 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9281,
        "name": "PMS MONTELUKAST 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9291,
        "name": "PMS PREGABALIN 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9301,
        "name": "PMS PREGABALIN 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9311,
        "name": "PMS ROSUVASTATIN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9321,
        "name": "PMS URSODIOL C 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9331,
        "name": "POLTRAPA 325MG/37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9341,
        "name": "POLYDEXA 10.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9351,
        "name": "POLYGYNAX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9361,
        "name": "POVIDINE 10% 20ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9371,
        "name": "POVIDONE 10% 20ML AGIMEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9381,
        "name": "PRACETAM 800MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9391,
        "name": "PRADAXA CAP 110MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9401,
        "name": "PRADAXA CAP 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9411,
        "name": "PRAVERIX 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9421,
        "name": "PRAXILENE 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9431,
        "name": "PRAZAV 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9441,
        "name": "PREBUFEN 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9451,
        "name": "PREBUFEN F 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9461,
        "name": "PREDNISON 5MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9471,
        "name": "PREDSANTYL 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9481,
        "name": "PREGABALIN SANDOZ 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9491,
        "name": "PREGABALIN SANDOZ 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9501,
        "name": "PREZINTON 8MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9511,
        "name": "PRICEFIL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9521,
        "name": "PRILIGY 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9531,
        "name": "PRIMOLUT-N 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9541,
        "name": "PRIMPERAN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9551,
        "name": "PROCORALAN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9561,
        "name": "PROCORALAN 7.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9571,
        "name": "PROGESTOGEL CREAM 80G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9581,
        "name": "PROGRAF 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9591,
        "name": "PROGRAF 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9601,
        "name": "PROGYNOVA 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9611,
        "name": "PROPRANOLOL 40MG (DOROCARDYL)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9621,
        "name": "PROSGESY 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9631,
        "name": "PROSPAN 70ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9641,
        "name": "PROTOPIC OINT 0.03% 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9651,
        "name": "PROTOPIC OINT 0.1% 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9661,
        "name": "PTU 50MG (RIESERSTAT)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9671,
        "name": "PULMICORT RESPULSE 0.5MG/2ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9681,
        "name": "PYME FERON B9",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9691,
        "name": "PYMEAZI 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9701,
        "name": "RABICAD 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9711,
        "name": "RECTIOFAR 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9721,
        "name": "RECTIOFAR 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9731,
        "name": "REDBAMA 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9741,
        "name": "REDWIN COAL TAR SHAMPOO 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9751,
        "name": "REDWIN SORBOLENE BODY WASH 500ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9761,
        "name": "REDWIN SORBOLENE MOISTURISER 100G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9771,
        "name": "REDWIN TEA TREE SHAMPOO 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9781,
        "name": "REFIX 550MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9791,
        "name": "REFRESH TEARS LUBRICANT EYE DROPS 0.5%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9801,
        "name": "RELINIDE 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9811,
        "name": "RELIPOIETIN 2000IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9821,
        "name": "REMECLAR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9831,
        "name": "REMERON 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9841,
        "name": "REMINYL 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9851,
        "name": "REMINYL 8MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9861,
        "name": "RENAPRIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9871,
        "name": "RENAPRIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9881,
        "name": "RESTASIS 0.05%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9891,
        "name": "RHINOCORT AQUA SPR 64MCG 120DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9901,
        "name": "RIFAMPICIN 150MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9911,
        "name": "RIFAMPICIN 300MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9921,
        "name": "RINGER LACTATE/G 5% 500ML B.BRAUN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9931,
        "name": "RISENATE 70MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9941,
        "name": "RISPERDAL 1MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9951,
        "name": "RISPERDAL 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9961,
        "name": "ROCALTROL CAP 0.25MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9971,
        "name": "RONALIPI 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9981,
        "name": "ROSUVASTATIN STADA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 9991,
        "name": "ROTALZON 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10001,
        "name": "ROTUNDIN 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10011,
        "name": "ROVAMYCIN 1.5MUI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10021,
        "name": "ROVAMYCIN 3MUI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10031,
        "name": "ROWACHOL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10041,
        "name": "ROWATINEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10051,
        "name": "RUPAFIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10061,
        "name": "RUTIN-C",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10071,
        "name": "RUZITTU 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10081,
        "name": "SAFORELLE CREAM 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10091,
        "name": "SAFORELLE SOL 100ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10101,
        "name": "SALAZOPYRINE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10111,
        "name": "SANAPEROL 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10121,
        "name": "SANCOBA 0.02% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10131,
        "name": "SANDIMMUN NEORAL 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10141,
        "name": "SANDOZ MONTELUKAST 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10151,
        "name": "SANLEIN EYE DROP 0.1% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10161,
        "name": "SANLEIN OPHTHALMIC SOLUTION 0.3% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10171,
        "name": "SANLITOR 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10181,
        "name": "SARUFONE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10191,
        "name": "SATILAGE 750MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10201,
        "name": "SAVI ACARBOSE 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10211,
        "name": "SAVI ALBENDAZOL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10221,
        "name": "SAVI DONEPEZIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10231,
        "name": "SAVI EPERISONE 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10241,
        "name": "SAVI ESOMEPRAZOLE 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10251,
        "name": "SAVI ESOMEPRAZOLE 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10261,
        "name": "SAVI LAMIVUDINE 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10271,
        "name": "SAVI LOSARTAN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10281,
        "name": "SAVI LOSARTAN PLUS HCT 50/12.5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10291,
        "name": "SAVI METFORMIN 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10301,
        "name": "SAVI MONTELUKAST 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10311,
        "name": "SAVI MOXIFLOXACIN 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10321,
        "name": "SAVI PROLOL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10331,
        "name": "SAVI VALSARTAN 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10341,
        "name": "SAVIDIMIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10351,
        "name": "SAVIFEXO 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10361,
        "name": "SAVIOSMAX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10371,
        "name": "SAVIPAMOL PLUS 325/37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10381,
        "name": "SAVISPIRONO-PLUS 50/20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10391,
        "name": "SCANNEURON",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10401,
        "name": "SECALIA AHA 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10411,
        "name": "SECALIA DRY SKIN 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10421,
        "name": "SECNIDAZ 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10431,
        "name": "SEDANXIO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10441,
        "name": "SEMIRAD 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10451,
        "name": "SENSI KIN GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10461,
        "name": "SENSI WHITE EMULSION 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10471,
        "name": "SENSI WHITE FOAMING CREAM 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10481,
        "name": "SENSYLIA 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10491,
        "name": "SENSYLIA GEL 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10501,
        "name": "SEOPRAE 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10511,
        "name": "SERC 8MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10521,
        "name": "SERETIDE ACC 50/250MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10531,
        "name": "SERETIDE ACC 50/500MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10541,
        "name": "SERETIDE EVO 25/125MCG 120D",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10551,
        "name": "SERETIDE EVO 25/250MCG 120D",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10561,
        "name": "SERETIDE EVO 25/50MCG 120D",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10571,
        "name": "SEROQUEL XR TAB 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10581,
        "name": "SEROQUEL XR TAB 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10591,
        "name": "SEROQUEL XR TAB 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10601,
        "name": "SHADIPINE 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10611,
        "name": "SHEMA 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10621,
        "name": "SHINE TADENO 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10631,
        "name": "SIBELIUM 5MG CAPSULE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10641,
        "name": "SIBELIUM TAB 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10651,
        "name": "SIFROL 0.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10661,
        "name": "SIFROL 0.75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10671,
        "name": "SIFROL TAB 0.375MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10681,
        "name": "SILOXOGENE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10691,
        "name": "SILYHEPATIS 1G/5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10701,
        "name": "SINGULAIR 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10711,
        "name": "SINOMARIN 125ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10721,
        "name": "SINOMARIN 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10731,
        "name": "SINTROM 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10741,
        "name": "SIZODON 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10751,
        "name": "SKINCOL GEL 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10761,
        "name": "SMECTA SAC 3G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10771,
        "name": "SOLUPRED 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10781,
        "name": "SOLUPRED 5MG EFF",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10791,
        "name": "SOMANIMM 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10801,
        "name": "SOMAZINA 10G/100ML 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10811,
        "name": "SOMAZINA SAC 1000MG/10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10821,
        "name": "SORBITOL 5G TIPHARCO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10831,
        "name": "SORBITOL STADA 5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10841,
        "name": "SOVALIMUS 0,1% 10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10851,
        "name": "SPASMAVERIN 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10861,
        "name": "SPASMOMEN 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10871,
        "name": "SPIFUCA FORT 50MG/40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10881,
        "name": "SPIFUCA PLUS 50/20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10891,
        "name": "SPIRIVA RESPIMAT 0.0025MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10901,
        "name": "SPIROMIDE 50MG/20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10911,
        "name": "SPOBET 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10921,
        "name": "SPORAL 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10931,
        "name": "STALEVO 100/25/200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10941,
        "name": "STALEVO 150/37.5/200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10951,
        "name": "STATRIPSINE 4.2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10961,
        "name": "STERIMAR 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10971,
        "name": "STERIMAR MANGANESE 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10981,
        "name": "STERIMAR SULPHUR 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 10991,
        "name": "STEROGYL 2MUI 100ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11001,
        "name": "STOMAHESIVE PASTE 56.7G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11011,
        "name": "STOMAHESIVE POWER 28.3G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11021,
        "name": "STRESAM 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11031,
        "name": "STUGERON 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11041,
        "name": "SUCRAHASAN GEL 1G 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11051,
        "name": "SUCRATE GEL 1G/5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11061,
        "name": "SULPIRIDE STADA 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11071,
        "name": "SULPRAGI 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11081,
        "name": "SUMAKIN 750MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11091,
        "name": "SUMIKO 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11101,
        "name": "SUNCARDIVAS 6.25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11111,
        "name": "SUNIROVEL 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11121,
        "name": "SUNMESACOL 400MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11131,
        "name": "SUNTAB 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11141,
        "name": "SUP DEXTRIN 400G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11151,
        "name": "SURMENALIT 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11161,
        "name": "SYMBICORT TUR 120 DOSE 160/4.5MCG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11171,
        "name": "SYMBICORT TUR OTH 60 DOSE 160/4.5",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11181,
        "name": "SYNADINE 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11191,
        "name": "SYNADINE 4MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11201,
        "name": "SYNNEUPEP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11211,
        "name": "SYNOXIB 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11221,
        "name": "SYNOXIB 90MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11231,
        "name": "SYNTERVIR 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11241,
        "name": "SYSEYE 0.3% 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11251,
        "name": "SYSTANE DROP 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11261,
        "name": "SYSTANE ULTRA 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11271,
        "name": "T3 MYCIN GEL 1% 25G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11281,
        "name": "TADALAFIL STADA 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11291,
        "name": "TADARITIN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11301,
        "name": "TAM THAT OPC 750MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11311,
        "name": "TANAKAN 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11321,
        "name": "TANATRIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11331,
        "name": "TANATRIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11341,
        "name": "TANGANIL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11351,
        "name": "TARCEVA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11361,
        "name": "TARCEVA 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11371,
        "name": "TARDYFERON TAB B9 50/0.35MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11381,
        "name": "TARFLOZ 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11391,
        "name": "TASVIR 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11401,
        "name": "TATANOL 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11411,
        "name": "TAVANIC 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11421,
        "name": "TEBONIN TAB 120MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11431,
        "name": "TEEN DERM ALPHA PURE 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11441,
        "name": "TEEN DERM AQUA 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11451,
        "name": "TEEN DERM GEL 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11461,
        "name": "TEEN DERM GEL SENSITIVE 250ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11471,
        "name": "TEEN DERM HYDRA 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11481,
        "name": "TEGRETOL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11491,
        "name": "TEGRETOL CR 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11501,
        "name": "TELFAST 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11511,
        "name": "TELMISARTAN A.T 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11521,
        "name": "TELMISTAL 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11531,
        "name": "TEMODAL CAP 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11541,
        "name": "TENOCAR 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11551,
        "name": "TENOFOVIR SAVI 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11561,
        "name": "TENOFOVIR STADA 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11571,
        "name": "TENORMIN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11581,
        "name": "TENRICY 0.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11591,
        "name": "TERBISIL 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11601,
        "name": "TERPIN CODEIN MKP 100/10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11611,
        "name": "TETRACYCLIN 500MG TIPHARCO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11621,
        "name": "TETRACYCLIN 500MG TW25",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11631,
        "name": "THEOSTAT LP TAB 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11641,
        "name": "THEOSTAT LP TAB 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11651,
        "name": "THERALENE 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11661,
        "name": "THERALENE 90ML SIRO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11671,
        "name": "THIODERM",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11681,
        "name": "THYROZOL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11691,
        "name": "THYROZOL TAB 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11701,
        "name": "TILHASAN 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11711,
        "name": "TIMI ROITIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11721,
        "name": "TIMMAK 3MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11731,
        "name": "TIMOLOL MALEATE DROP 0,5% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11741,
        "name": "TINIDAZOL 500MG BIDIPHAR",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11751,
        "name": "TIROKOON 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11761,
        "name": "TOBRADEX DROP 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11771,
        "name": "TOBRADEX OINTMENT 3.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11781,
        "name": "TOBREX DROP 0.3% 5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11791,
        "name": "TOBREX EYE OINTMENT 3.5G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11801,
        "name": "TONICALCIUM 10ML ADULTS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11811,
        "name": "TONICALCIUM 5ML CHILDREN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11821,
        "name": "TOPAMAX 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11831,
        "name": "TOPAMAX 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11841,
        "name": "TOPBRAIN",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11851,
        "name": "TOPENTI 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11861,
        "name": "TOPENTI 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11871,
        "name": "TOPLEXIL SIROP 90ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11881,
        "name": "TOTHEMA 10ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11891,
        "name": "TOZINAX 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11901,
        "name": "TRACLEER 125MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11911,
        "name": "TRAJENTA 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11921,
        "name": "TRAJENTA DUO 2.5/1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11931,
        "name": "TRAJENTA DUO 2.5/500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11941,
        "name": "TRAJENTA DUO 2.5/850MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11951,
        "name": "TRANSAMINE 250MG CAPS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11961,
        "name": "TRAVATAN DROP 0.04MG/ML 2.5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11971,
        "name": "TRI-GENOL 100MG/10G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11981,
        "name": "TRIVASTAL RETARD 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 11991,
        "name": "TRYMO",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12001,
        "name": "TS-ONE 20",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12011,
        "name": "TS-ONE 25",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12021,
        "name": "TWYNSTA 40MG/5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12031,
        "name": "TWYNSTA 80MG/5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12041,
        "name": "TYLENOL 8 HOUR 650MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12051,
        "name": "TYLENOL CHILDREN 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12061,
        "name": "ULDESO 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12071,
        "name": "ULTRACET 325/37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12081,
        "name": "UNASYN 375MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12091,
        "name": "UNITONE 4 REVEAL 30ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12101,
        "name": "UNITONE 4 REVEAL GEL 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12111,
        "name": "UNITONE 4 REVEAL SERUM 15ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12121,
        "name": "UPSA C 1G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12131,
        "name": "URELIA 10 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12141,
        "name": "URELIA GEL 200ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12151,
        "name": "URIAGE THERMAL WATER 150ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12161,
        "name": "URILITH",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12171,
        "name": "URSOCHOLIC 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12181,
        "name": "URSODEO 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12191,
        "name": "URSOLISIN 300MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12201,
        "name": "URUSO 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12211,
        "name": "URUSO 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12221,
        "name": "UTROGESTAN 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12231,
        "name": "UTROGESTAN 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12241,
        "name": "UVEBLOCK 80 TRANG 40ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12251,
        "name": "UVOMO 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12261,
        "name": "VALBELIS 160/25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12271,
        "name": "VALBELIS 80/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12281,
        "name": "VALIAN-X 445MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12291,
        "name": "VALIERA 2MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12301,
        "name": "VALSACARD 160MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12311,
        "name": "VALSARTAN STADA 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12321,
        "name": "VALSGIM-H 80/12.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12331,
        "name": "VALSITA 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12341,
        "name": "VARAFIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12351,
        "name": "VASBLOCK 80MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12361,
        "name": "VASHASAN MR 35MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12371,
        "name": "VASTAREL MR 35MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12381,
        "name": "VENLAFAXINE STADA 37.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12391,
        "name": "VENLAFAXINE STADA 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12401,
        "name": "VENOSAN DUI L",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12411,
        "name": "VENOSAN DUI M",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12421,
        "name": "VENOSAN DUI S",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12431,
        "name": "VENOSAN DUI XL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12441,
        "name": "VENOSAN GOI XL",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12451,
        "name": "VENOSAN GOI XS",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12461,
        "name": "VENRUTINE 500/100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12471,
        "name": "VENTOLIN INH 100MCG 200DOSE",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12481,
        "name": "VENTOLIN NEBULES SOL 2.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12491,
        "name": "VENTOLIN NEBULES SOL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12501,
        "name": "VENTOLIN SUGAR FREE SYR 2MG/5ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12511,
        "name": "VERIMED 135MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12521,
        "name": "VERIST 16MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12531,
        "name": "VERNI TEEN 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12541,
        "name": "VEROSPIRON 25MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12551,
        "name": "VEROSPIRON 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12561,
        "name": "VESICARE TAB 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12571,
        "name": "VIAGRA 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12581,
        "name": "VIAGRA 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12591,
        "name": "VICETIN 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12601,
        "name": "VICETIN 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12611,
        "name": "VICTOZA 6MG/ML 3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12621,
        "name": "VIFAMOX F 1000MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12631,
        "name": "VIGADEXA",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12641,
        "name": "VIGAMOX DROP 0.5%",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12651,
        "name": "VISMED 0.18% 0.3ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12661,
        "name": "VITAMIN A 5000UI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12671,
        "name": "VITAMIN B1 250MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12681,
        "name": "VITAMIN B1 250MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12691,
        "name": "VITAMIN B1 50MG MEKOPHAR",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12701,
        "name": "VITAMIN B1 B6 B12 (HANEUVIT)",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12711,
        "name": "VITAMIN B1 B6 B12 MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12721,
        "name": "VITAMIN B6 250MG DMC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12731,
        "name": "VITAMIN B6 250MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12741,
        "name": "VITAMIN C 500MG MKP",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12751,
        "name": "VITAMIN C STADA 1G SUI",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12761,
        "name": "VITAMIN E 400IU",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12771,
        "name": "VITAMIN PP 500MG AGIMEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12781,
        "name": "VITAMIN PP 500MG PHARMEDIC",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12791,
        "name": "VITAMIN PP 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12801,
        "name": "VITARALS 20ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12811,
        "name": "VITISKIN 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12821,
        "name": "VOLTAREN 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12831,
        "name": "VOLTAREN EMULGEL 1% 20G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12841,
        "name": "VOLTAREN SR 75MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12851,
        "name": "VORIFEND FORTE 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12861,
        "name": "VYTORIN 10/10",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12871,
        "name": "VYTORIN 10/20",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12881,
        "name": "XALEXA 30MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12891,
        "name": "XAMIOL GEL 15G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12901,
        "name": "XARELTO 15MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12911,
        "name": "XARELTO 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12921,
        "name": "XATRAL XL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12931,
        "name": "XELODA 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12941,
        "name": "XISAT 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12951,
        "name": "XISAT CHILDREN 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12961,
        "name": "XISAT VIEM MUI 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12971,
        "name": "XOLAIR INJ 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12981,
        "name": "XYLOCAIN JELLY 2% 30G",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 12991,
        "name": "XYPENAT 75ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13001,
        "name": "XYZAL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13011,
        "name": "YESOM 40MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13021,
        "name": "ZANTAC 150MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13031,
        "name": "ZEFFIX 100MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13041,
        "name": "ZENTEL 200MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13051,
        "name": "ZESTORETIC 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13061,
        "name": "ZESTRIL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13071,
        "name": "ZESTRIL 5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13081,
        "name": "ZINC 10MG AGIMEX",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13091,
        "name": "ZINNAT 250MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13101,
        "name": "ZINNAT 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13111,
        "name": "ZINNAT SUS 125MG 50ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13121,
        "name": "ZITROMAX TAB 500MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13131,
        "name": "ZOACNEL 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13141,
        "name": "ZOCOR 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13151,
        "name": "ZOCOR 20MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13161,
        "name": "ZOLOFT 50MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13171,
        "name": "ZOPISTAD 7.5MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13181,
        "name": "ZOSTOPAIN 60MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13191,
        "name": "ZYRTEC (N) SOL 1MG/ML 60ML",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13201,
        "name": "ZYRTEC 10MG",
        "price": 1000,
        "uom": "Hộp",
        "note": null,
        "created_at": null,
        "created_by": null,
        "updated_at": null,
        "updated_by": null
    },
    {
        "id": 13211,
        "name": "Paradon 4",
        "price": 150000,
        "uom": "box",
        "note": null,
        "created_at": 1517765849,
        "created_by": 6,
        "updated_at": 1517765849,
        "updated_by": null
    }
]

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <span>
        {suggestion.name}
    </span>
);
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numChildren: 0,
            value: '',
            suggestions: [],

            nameCustomer: '',
            phoneCustomer: '',
            dateCustomer: '',
            addressCustomer: '',
            noteCustomer: '',

            tenthuoc: '',
            donvi: '',
            gia: 0,
            soluong: 1,
            thanhtien: 0,
            ghichu: '',
            bill: [],
            modalIsOpen: false,
            tongtien: 0,
            editbill: false,
            loading: false,
            idBill: 0
        }
        this.submitDonThuoc = this.submitDonThuoc.bind()
        this.submitBill = this.submitBill.bind()
        this.openModal = this.openModal.bind()
        this.handleKeyDown = this.handleKeyDown.bind()
        this.onForCus = this.onForCus.bind()
    }



    componentWillMount() {
        if (this.props.id) {
            this.setState({ loading: true })
            this.props.actions.authenticate.getDetailOrder(this.props.storage.token, this.props.id)
            this.setState({ idBill: this.props.id, editbill: true, loading: false })
        }
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.authenticate.detailOrder && nextProps.authenticate.detailOrder.status == 200) {
            let data = nextProps.authenticate.detailOrder.data
            await this.setState({
                noteCustomer: data.note,
                addressCustomer: data.address,
                dateCustomer: data.delivery_date,
                phoneCustomer: data.phone,
                nameCustomer: data.name,
                bill: data.po_product,
                loading: false
            })
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : languages.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };


    componentDidMount() {

    }


    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({ donvi: suggestion.uom, tenthuoc: suggestion.name, gia: suggestion.price })
    };

    submitDonThuoc = () => {
        if (this.state.tenthuoc == '') {
            alert('Tên không để trống')
            return
        }
        if (this.state.donvi == '') {
            alert('Đơn vị để trống')
            return
        }
        if (this.state.gia == '') {
            alert('Giá không để trống')
            return
        }
        if (this.state.soluong == '') {
            alert('Số lượng không để trống')
            return
        }
        else {
            let thuoc = {
                name: this.state.tenthuoc,
                uom: this.state.donvi,
                price: this.state.gia,
                quantity: this.state.soluong,
                amount: this.state.soluong * this.state.gia,
                note: this.state.ghichu
            }
            let array = this.state.bill.slice()
            array.push(thuoc)
            this.setState({
                bill: array
            })

            this.setState({
                tenthuoc: "",
                donvi: '',
                gia: 0,
                soluong: 1,
                thanhtien: 0,
                ghichu: '',
                value: '',
                tongtien: parseInt(this.state.tongtien) + parseInt(this.state.thanhtien)
            })
        }
    }

    submitBill = () => {
        this.setState({ loading: true })
        var that = this
        let data = {
            "address": this.state.addressCustomer,
            "customer_id": 0,
            "delivery_date": this.state.dateCustomer,
            "name": this.state.nameCustomer,
            "note": this.state.noteCustomer,
            "phone": this.state.phoneCustomer,
            "po_product": this.state.bill
        }

        fetch('https://medicine-api.herokuapp.com/api/v1/order', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.props.storage.token
            },
        }).then(function (response) {
            if (response.status == 200) {
                alert('Tạo đơn hàng thành công')
                that.setState({ bill: [], loading: false })
            }
        }, function (error) {
            error.message
        })
    }

    editBill = () => {
        this.setState({ loading: true })
        var that = this
        let data = {
            "address": this.state.addressCustomer,
            "name": this.state.nameCustomer,
            "note": this.state.noteCustomer,
            "phone": this.state.phoneCustomer,
            "po_product": this.state.bill
        }

        fetch('https://medicine-api.herokuapp.com/api/v1/order/' + this.state.idBill, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.props.storage.token
            },
        }).then(function (response) {
            if (response.status == 200) {
                that.setState({ loading: false })
            }
        }, function (error) {
            error.message
        })
    }

    handleKeyDown = (e) => {
        if (e.keyCode == 9) {
            if (this.state.tenthuoc == '') {
                alert('Tên không để trống')
                return
            }
            if (this.state.donvi == '') {
                alert('Đơn vị để trống')
                return
            }
            if (this.state.gia == '') {
                alert('Giá không để trống')
                return
            }
            if (this.state.soluong == '') {
                alert('Số lượng không để trống')
                return
            }
            else {
                let thuoc = {
                    name: this.state.tenthuoc,
                    uom: this.state.donvi,
                    price: this.state.gia,
                    quantity: this.state.soluong,
                    amount: parseInt(this.state.soluong) * parseInt(this.state.gia),
                    note: this.state.ghichu
                }
                let tong = parseInt(thuoc.amount)
                let array = this.state.bill.slice()
                array.push(thuoc)
                this.setState({
                    bill: array
                })

                this.setState({
                    tenthuoc: "",
                    donvi: '',
                    gia: 0,
                    soluong: 1,
                    thanhtien: 0,
                    ghichu: '',
                    value: '',
                    tongtien: parseInt(this.state.tongtien) + parseInt(tong)
                })
            }
        }
    }

    onForCus = () => {
        this._input.focus();
    }

    deleteThuoc(index) {
        let arrayClone = this.state.bill.slice()

        if (index > -1) {
            arrayClone.splice(index, 1);
        }
        this.setState({ bill: arrayClone })
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Tên thuốc',
            value,
            onChange: this.onChange
        };

        const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(this.renderChildern());
        };

        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Thông tin đơn hàng
                        </h1>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                        <ul id="sparks" className="">
                            <li className="sparks-info">

                                <button onClick={() => { this.state.editbill ? this.editBill() : this.submitBill() }} type="button" className="btn btn-success btn-lg">
                                    {this.state.editbill ? "Lưu chỉnh sửa" : "Tạo mới"}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <JarvisWidget editbutton={false} custombutton={false}>
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-edit" />
                        </span>
                        <h2>Thông tin khách hàng</h2>
                    </header>
                    <div>
                        {/* widget content */}
                        <div className="no-padding">
                            <form className="smart-form" id="search">
                                <div className="row input-order">
                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Tên khách hàng :</h3>
                                            <input
                                                type="text" name="t" placeholder="Tên khách hàng" id="one"
                                                value={this.state.nameCustomer}
                                                onChange={e => this.setState({ nameCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Số điện thoại:</h3>
                                            <input
                                                type="number" name="t" placeholder="Số điện thoại" id="one"
                                                value={this.state.phoneCustomer}
                                                onChange={e => this.setState({ phoneCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Ngày giao hàng :</h3>
                                            <UiDatepicker
                                                type="text" name="finishdate" id="finishdate"
                                                maxRestrict="#startdate"
                                                placeholder="Ngày giao hàng"
                                                data-date-format="dd/mm/yy"
                                                defaultValue={this.state.dateCustomer}
                                                onChange={e => this.setState({ dateCustomer: e.target.value })} />
                                        </label>
                                    </div>

                                </div>

                                <div className="row input-order">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Địa chỉ :</h3>
                                            <input type="text" name="t" placeholder="Địa chỉ"
                                                value={this.state.addressCustomer}
                                                onChange={e => this.setState({ addressCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="row input-order ">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Ghi chú :</h3>
                                            <input type="text" name="t" placeholder="Ghi chú" id="one"
                                                value={this.state.noteCustomer}
                                                onChange={e => this.setState({ noteCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </JarvisWidget>
                <JarvisWidget editbutton={false} custombutton={false}>
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-edit" />
                        </span>
                        <h2>Nội dung</h2>
                    </header>
                    <div>
                        <div className="widget-body no-padding">
                            <form className="smart-form" id="search">
                                <div className="row input-order">
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Tên thuốc :</h3>
                                            <Autosuggest
                                                suggestions={suggestions}
                                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                getSuggestionValue={getSuggestionValue}
                                                renderSuggestion={renderSuggestion}
                                                inputProps={inputProps}
                                                theme={theme}
                                                onSuggestionSelected={this.onSuggestionSelected}
                                                renderInputComponent={(inputProps) => (
                                                    <input {...inputProps}
                                                        ref={(c) => this._input = c}
                                                    />
                                                )}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Đơn vị :</h3>
                                            <input type="text" name="t" placeholder="Đơn vị" id="one"
                                                value={this.state.donvi}
                                                onChange={e => this.setState({ donvi: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Giá :</h3>
                                            <input type="number" name="t" placeholder="Giá" id="one"
                                                value={this.state.gia}
                                                onChange={e =>
                                                    this.setState({ gia: e.target.value, thanhtien: (e.target.value * this.state.soluong) })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Số lượng:</h3>
                                            <input type="number" name="t" placeholder="Số lượng" id="one"
                                                value={this.state.soluong}
                                                onChange={e => this.setState({ soluong: e.target.value, thanhtien: this.state.gia * e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Ghi chú :</h3>
                                            <input type="text" name="t" onKeyDown={this.handleKeyDown}
                                                placeholder="Ghi chú" id="one"
                                                value={this.state.ghichu}
                                                onChange={e => this.setState({ ghichu: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Thành tiền:</h3>
                                            <input type="number" name="t" placeholder="Thành tiền" id="one"
                                                onFocus={() => this.onForCus()}
                                                value={this.state.gia * this.state.soluong}
                                                onChange={e => this.setState({ thanhtien: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <footer>
                                    <button type="button" onClick={() => this.submitDonThuoc()} className="btn btn-primary"> Thêm</button>
                                </footer>
                            </form>
                        </div>
                    </div>
                </JarvisWidget>
                {
                    <JarvisWidget editbutton={false} color="darken">
                        <header>
                            <span className="widget-icon">
                                <i className="fa fa-table" />
                            </span>
                            <h2>Danh sách nội dung</h2>
                        </header>
                        <div className="widget-body">
                            <div className="custom-table-bill">
                                <div className="no-padding">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover ">
                                            <thead>
                                                <tr>
                                                    <th>Tên</th>
                                                    <th>Đơn vị</th>
                                                    <th>Giá</th>
                                                    <th>Số lượng</th>
                                                    <th>Thành Tiền</th>
                                                    <th>Ghi chú</th>
                                                    <th>Thay đổi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.bill.map((item, index) =>
                                                    <tr key={index}>
                                                        <th>{item.name}</th>
                                                        <th>{item.uom}</th>
                                                        <th>{item.price}</th>
                                                        <th>{item.quantity}</th>
                                                        <th>{item.amount}</th>
                                                        <th>{item.note}</th>
                                                        <th><button type='button' onClick={() => this.deleteThuoc(index)}>Xóa</button></th>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-offset-7">
                                <label className="input">
                                    <h3>Thành tiền: {this.state.tongtien}</h3>
                                </label>
                            </div>
                        </div>
                    </JarvisWidget>
                }
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            alignSelf: 'center',
                        },
                        content: {
                            position: 'absolute',
                            top: '30%',
                            left: '40%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div>
                        <h4>Tên : </h4>
                        <h4>Địa chỉ :</h4>
                        <h4 >Số điện thoại :</h4>
                        <h4 >Ngày đặt hàng  :</h4>
                        <h4 >Ghi chú  :</h4>
                        <h4 ref={subtitle => this.subtitle = subtitle}>Chi tiết đơn đặt hàng</h4>
                    </div>
                </Modal>
                <Paginate
                    activeClassName="active"
                    initialPage={this.state.page - 1}
                    forcePage={this.state.page - 1}
                    containerClassName="pagination pagination-lg"
                    pageCount={this.props.widget.total / 20}
                    hrefBuilder={(currentPage) => Utils.link(LINK.WIDGET, "", {
                        page: currentPage,
                        title: this.state.title,
                        id: this.state.productId
                    })}
                />
                <Loading loading={this.state.loading} />
            </div>
        )
    }
}

export default Connect(WidgetList);