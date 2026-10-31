export type PanelMember = { name: string; role: string; photo: string; group: "Junior vice presidents" | "Assistant secretaries" };

export const panelAnnouncementUrl = "https://www.facebook.com/bupeconomicsclub/posts/pfbid02eGoT8EYjiygoAvAy8MaXtVHYiyEGteDLiknLMgNBDm9L2wH5NbvsTd7QErpiAwuxl";

// Transcribed from the supplied 2026 announcement cards, numbered 66–90.
const people: [number, string, string, PanelMember["group"]][] = [
  [85, "Md Rieaduzzaman Riead", "Junior Vice President", "Junior vice presidents"],
  [86, "Hasibul Islam Hridoy", "Junior Vice President", "Junior vice presidents"],
  [87, "Asif Newaz Likhon", "Junior Vice President", "Junior vice presidents"],
  [88, "Elma Khalil", "Junior Vice President", "Junior vice presidents"],
  [89, "Tasnia Nawer Orpa", "Junior Vice President", "Junior vice presidents"],
  [90, "Md. Ashabul Yeamin Emon", "Junior Vice President", "Junior vice presidents"],
  [66, "Kaniz Fatema Aronnya", "Assistant Joint Secretary (Publications)", "Assistant secretaries"],
  [67, "Kirti Roy", "Assistant Joint Secretary (Operations)", "Assistant secretaries"],
  [68, "Zannatul Mawa Hera", "Assistant Joint Secretary (Communication)", "Assistant secretaries"],
  [69, "Mohammad Hasan Molik", "Assistant Joint Secretary (Publications)", "Assistant secretaries"],
  [70, "Nafisa Tabassum Maisha", "Assistant Joint Secretary (Admin)", "Assistant secretaries"],
  [71, "Sumaiya Afra", "Assistant Joint Secretary (R&D)", "Assistant secretaries"],
  [72, "Faizah Tasnim", "Assistant Joint Secretary (R&D)", "Assistant secretaries"],
  [73, "Fariha Binte Haque Fany", "Assistant Joint Secretary (Documentations)", "Assistant secretaries"],
  [74, "Fahim Muntasir Rauf", "Assistant General Secretary (Logistics)", "Assistant secretaries"],
  [75, "Md. Parvej Mosharof", "Assistant General Secretary (External Affairs)", "Assistant secretaries"],
  [76, "Iffat Kabir Hafsa", "Assistant General Secretary (Public Relation)", "Assistant secretaries"],
  [77, "Mehedi Hasan Manik", "Assistant General Secretary (Internal Affairs)", "Assistant secretaries"],
  [78, "Syeda Jannatul Ferdous", "Assistant General Secretary (Content)", "Assistant secretaries"],
  [79, "Riaz Uddin Hridoy", "Assistant General Secretary (Internal Affairs)", "Assistant secretaries"],
  [80, "Delwar Hossain", "Assistant General Secretary (Operation)", "Assistant secretaries"],
  [81, "Samiha Quadir", "Assistant General Secretary (Publications)", "Assistant secretaries"],
  [82, "Md. Tanvir", "Assistant General Secretary (R&D)", "Assistant secretaries"],
  [83, "Tasma Ishrat", "Assistant General Secretary (Admin)", "Assistant secretaries"],
  [84, "H M Sajin Amin", "Assistant General Secretary (Creative)", "Assistant secretaries"],
];

export const panel: PanelMember[] = people.map(([number, name, role, group]) => ({ name, role, group, photo: `/panel/${number}.jpg` }));

export function memberSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getMember(slug: string) {
  return panel.find((member) => memberSlug(member.name) === slug);
}
