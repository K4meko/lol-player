interface Stats {
  name: string;
  value: number;
}

interface Participant {
  participantID: number;
  accountID: number;
  championName: string;
  teamID: number;
  hashedIP: string;
  summonerName: string;
  abGroup: string;
  perks: Stats[];
  summonerLevel: number;
  keystoneID: number;
  playerName: string;
  healthRegen: number;
  magicPenetrationPercent: number;
  totalGold: number;
  healthMax: number;
  armorPenetrationPercentBonus: number;
  magicPenetration: number;
  primaryAbilityResource: number;
  attackDamage: number;
  armorPenetration: number;
  primaryAbilityResourceRegen: number;
  primaryAbilityResourceMax: number;
  lifeSteal: number;
  magicResist: number;
  abilityPower: number;
  level: number;
  currentGold: number;
  health: number;
  ccReduction: number;
  spellVamp: number;
  magicPenetrationPercentBonus: number;
  armorPenetrationPercent: number;
  cooldownReduction: number;
  armor: number;
  attackSpeed: number;
  XP: number;
  goldPerSecond: number;
  position: {
    x: number;
    y: number;
  };
  stats: Stats[];
  summonerInternalName: string;
  selectedSkinIndex: number;
  pickTurn: number;
  championID: number;
  profileIconID: number;
  summonerID: number;
  spell2: number;
  spell1: number;
  pickMode: number;
}

interface Team {
  towerKills: number;
  assists: number;
  inhibKills: number;
  totalGold: number;
  teamID: number;
  championsKills: number;
  deaths: number;
  dragonKills: number;
  baronKills: number;
}

export type GameData = {
  gameID: number;
  rfc001Scope: string;
  sequenceIndex: number;
  gameTime: number;
  statsUpdateInterval: number;
  rfc460Timestamp: string;
  wallTime: number;
  platformID: string;
  gameOver: boolean;
  rfc190Scope: string;
  playbackID: number;
  gameName: string;
  gameVersion: string;
  rfc460Hostname: string;
  rfc461Schema: string;
  participants: Participant[];
  teams: Team[];
  participantID: number;
  itemID: number;
  nextDragonName: string;
  nextDragonSpawnTime: number;
  pickTurn: number;
  gameMode: string;
  gameState: string;
  teamOne: Participant[];
  teamTwo: Participant[];
  bannedChampions: {
    championID: number;
    pickTurn: number;
    teamID: number;
  }[];
};
