import Names from '../configs/npcNames.js'
import SocialStateName from '../configs/socialGroupNames.js'

const SocialStatePeople=
[
    {
        name: SocialStateName.Pobres,
        peopleIn:
        [
           Names.Police, Names.Tabernero
        ]
    },
    {
        name: SocialStateName.Ricos,
        peopleIn:
        [
            Names.Tabernera
        ]
    }
]

export default SocialStatePeople;