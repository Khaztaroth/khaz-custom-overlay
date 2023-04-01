import { FetchUserPronouns } from "../api-requests/pronouns-fetcher"

export function DisplayPronouns(props) {

    var pronouns
    const userPronouns = FetchUserPronouns(props.user)
    
    if (userPronouns) {
        pronouns = userPronouns.pronoun_id
    } else pronouns = ""
    
    const formatPronouns = (pronouns) => {
        switch(pronouns) {
            case "aeaer": { return ("Ae/aer")
            } 
            case "any": { return ("Any")
            } 
            case "eem": { return ("E/em")
            } 
            case "faefaer": { return ("Fae/faer")
            } 
            case "hehim": { return ("He/him")
            } 
            case "heshe": { return ("He/she")
            } 
            case "hethey": { return ("He/they")
            } 
            case "itits": { return ("It/its")
            } 
            case "other": { return ("Other")
            } 
            case "perper": { return ("Per/per")
            } 
            case "sheher": { return ("She/her")
            } 
            case "shethey": { return ("She/they")
            } 
            case "theythem": { return ("They/them")
            } 
            case "vever": { return ("Ve/Ver")
            } 
            case "xexem": { return ("Xe/xem")
            } 
            case "ziehir": { return ("Zie/hir")
            } 
            default: { return ("") 
            }
        }
    }

    return (
        <span className={pronouns? "user-pronouns" : ""}> {formatPronouns(pronouns)}</span>
    )
}