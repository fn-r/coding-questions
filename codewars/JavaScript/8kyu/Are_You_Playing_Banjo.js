function areYouPlayingBanjo(name) {
    return `${name} ${name[0].toLowerCase() !== 'r' ? 'does not play banjo' : 'plays banjo'}`
}