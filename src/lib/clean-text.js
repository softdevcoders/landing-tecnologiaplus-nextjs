export const cleanText = (text) => {
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{1F004}-\u{1F0CF}\u{2B06}\u{2194}\u{2B05}\u{1F200}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F004}\u{0031}-\u{0039}0\ud83d\ude02]/gu;

  return text.replace(emojiRegex, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
}
