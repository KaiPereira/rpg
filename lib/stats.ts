export function determineLevel(xp: number){
    // xp = (level/0.07)**2
    // ln(xp) = 2ln(level/0.07)
    // 0.5(ln(xp)) = ln(level/0.07)
    // xp^(0.5) = level/0.07
    // 0.07xp^(0.5) = level
    return (Math.floor(0.02* xp**0.5))
}

export function determineDamage(duration: number, multiplier: number){
    return Math.ceil((duration * multiplier)/60)
}


export function determineTreasure(duration: number, multiplier: number){
    return Number((duration/6 * 10 * multiplier).toFixed(0))
}

export function determineExperience(duration: number, multiplier: number){
    return Number((duration * 10 * multiplier).toFixed(0))
}