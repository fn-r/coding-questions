function htmlspecialchars(formData) {
    const special_chars = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '&': '&amp;',
    }
    
    return formData.split('').map(c => c in special_chars ? special_chars[c] : c).join('')
  }