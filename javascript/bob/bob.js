//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isQuestion = message.trim().endsWith('?') 
  const isYelling = message.toUpperCase() === message && /[a-zA-Z]/.test(message)
  const isSilent = message.trim() === ""

  if(isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!"
  } else if (isYelling) {
    return "Whoa, chill out!"
  } else if (isQuestion) {
    return "Sure."
  } else if (isSilent) {
    return "Fine. Be that way!"
  } else {
    return "Whatever."
  }
}
