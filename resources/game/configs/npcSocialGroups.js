import Names from '../configs/npcNames.js'
import SocialStateName from '../configs/socialGroupNames.js'

const SocialStatePeople=
[
    {
        name: SocialStateName.Pobres,
        peopleIn:
        [
           Names.Tabernero
        ]
    },
    {
        name: SocialStateName.Ricos,
        peopleIn:
        [
            Names.Tabernera, Names.Police
        ]
    }
]

export default SocialStatePeople;