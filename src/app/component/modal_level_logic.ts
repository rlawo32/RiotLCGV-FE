export interface ModalLevelPlayer {
  puuid: string;
  lv: number;
  nm: string;
}

export function getPlayerDisplayName(player: ModalLevelPlayer): string {
  return player.nm ?? `Player ${player.puuid ?? "Unknown"}`;
}

export function movePersonToLevel(
  people: ModalLevelPlayer[],
  name: string,
  level: number
): ModalLevelPlayer[] {
  if (!name) {
    throw new Error("name은 필수값입니다.");
  }
  if (!Number.isInteger(level)) {
    throw new Error("level은 정수여야 합니다.");
  }
  return people.map((p) => (getPlayerDisplayName(p) === name ? { ...p, lv: level } : p));
}

export function resetPeople(initial: ModalLevelPlayer[]): ModalLevelPlayer[] {
  return initial.map((p) => ({ ...p }));
}

export function groupByLevel(people: ModalLevelPlayer[], level: number): ModalLevelPlayer[] {
  return people.filter((p) => p.lv === level);
}