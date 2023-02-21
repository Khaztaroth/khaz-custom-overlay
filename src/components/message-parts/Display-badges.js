export function DisplayBadges(props) {

    const renderBadge = (badge) => {
        switch (badge) {
            case 'broadcaster':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2' alt='broadcaster badge'/>;
            case 'subscriber':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/2' alt='subscriber badge' />;
            case 'bits':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/2' alt='bits badge'/>
            case 'partner': 
                return <img src='https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/2' alt='partner badge'/>;
            case 'moderator':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2' alt='moderator badge' />;
            case 'vip':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2' alt='vip badge' />;
            case 'premium':
                return <img src='https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/2' alt='prime badge'/>
            default:
                return null;
        }
      };
    
      return (
        <span>
            {props.badges &&
                Object.entries(props.badges).map(([key, value]) => (
                  <span key={`${key}-${value}`} className='badges'>{renderBadge(key)}</span>
                ))}
        </span>

    )

}