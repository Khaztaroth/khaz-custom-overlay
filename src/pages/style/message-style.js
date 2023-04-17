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