export  const MessageBG = (type) => {
    switch(type) {
      case 'chat': return {
        backgroundColor: `rgba(32, 32, 32, 0.904)`
      }
      case 'action': return {
        backgroundColor: `rgba(32, 32, 32, 0.904)`
      }
      case 'announcement': return {
        backgroundColor: `rgba(32, 32, 32, 0.99)`,
        border: `0.15rem solid grey`
      }
      case 'subscription': return {
        backgroundColor: `rgba(32, 32, 32, 0.99)`,
        border: `0.15rem solid grey`
      }
      default: return {
        backgroundColor: `rgba(32, 32, 32, 0.904)`
      }
    }
  }

export const MessageStyles = (type, user, color) => {
  switch(type) {
    case 'chat': return {
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'bold',
      }
    case 'action': return {
      color: color,
      fontStyle: 'italic',
      fontWeight: 'bold',
      }
    case 'announcement': return {
      color: "white",
      fontStyle: 'italic',
      fontWeight: 'bold',
    }
    case 'sub': return {
      color: "white",
      fontStyle: 'italic',
      fontWeight: 'bold',
      content: `${user} just subscribed`
    }
    default: return {
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'bold',
    }
  }
}