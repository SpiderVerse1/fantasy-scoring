function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return PassingScore(player) + RushingScore(player)
    case 'RB':
      return RushingScore(player) + ReceivingScore(player) + ReturnScore(player)
    case 'WR':
      return RushingScore(player) + ReceivingScore(player) + ReturnScore(player)
    case 'TE':
      return ReceivingScore(player)
    case 'K':
      return 0
  }
}
//1 point for every 25 yards passing, 6 points for every passing touchdown, 
//-3 points for every interception, 1 point for every 10 yards rushing, 6 points for every rushing touchdown,
// -3 points for every rushing fumble
function PassingScore(player) {
  const yards = player.stats.passing.yards / 25
  const interceptions = player.stats.passing.interceptions * -3
  const touchdowns = player.stats.passing.touchdowns * 6

  return yards + interceptions + touchdowns 
}

function RushingScore(player) {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3
  return yards + touchdowns + fumbles
}
//1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble,
// 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, 
// -3 points for every receiving fumble, 1 point for every 15 kick return yards, 6 points for every kick return touchdown, 
// -3 points for every kick return fumble, 1 point for every 15 punt return yards, 6 points for every punt return touchdown, 
//-3 points for every punt return fumble

function ReceivingScore(player) {
  const yards = player.stats.receiving.yards / 10
  const fumbles = player.stats.receiving.fumbles * -3
  const touchdowns = player.stats.receiving.touchdowns * 6
  const receptions = player.stats.receiving.receptions 

  return receptions + yards + touchdowns + fumbles
}

function ReturnScore(player) {
  const kickYards = player.stats.return.kickreturn.yards / 15
  const puntYards = player.stats.return.puntreturn.yards / 15
  const punttouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const kicktouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const puntFumbles = player.stats.return.puntreturn.fumbles * -3
  const kickFumbles = player.stats.return.kickreturn.fumbles * -3

  return  kickYards + puntYards + punttouchdowns + kicktouchdowns + puntFumbles + kickFumbles
}

module.exports = calculateScore