import Names from '../configs/npcNames.js'
import SocialStateName from '../configs/socialGroupNames.js'

const SocialStatePeople=
[
    {
        name: SocialStateName.Pobres,
        peopleIn:
        [
            Names.BestFriend, 
            Names.Tabernera, 
            Names.Tabernero,
            Names.Paca,
            Names.Sona,
            Names.OldMan,
            Names.MadMan,
            Names.Feriante,
            Names.Ferianta,
            Names.SrtaFeriante
        ]
    },
    {
        name: SocialStateName.Ricos,
        peopleIn:
        [
            Names.Carcelero,
            Names.Lola,
            Names.SrtaMento,
            Names.Embajador,
            Names.Embajadora,
            Names.SrtaEmbajadora

        ]
    },
    {
        name: SocialStateName.Dictador,
        peopleIn:
        [
           Names.Dictator
        ]
    },
    {
        name: SocialStateName.Player,
        peopleIn:
        [
            Names.Police
        ]
    },
    {
        name: SocialStateName.Objetos,
        peopleIn:
        [
            Names.Muro
        ]
    }
]

export default SocialStatePeople;