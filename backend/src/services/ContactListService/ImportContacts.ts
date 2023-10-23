import { head } from "lodash";
import XLSX from "xlsx";
import { has } from "lodash";
import ContactListItem from "../../models/ContactListItem";
import CheckContactNumber from "../WbotServices/CheckNumber";
import { logger } from "../../utils/logger";
// import CheckContactNumber from "../WbotServices/CheckNumber";

export async function ImportContacts(
  contactListId: number,
  companyId: number,
  file: Express.Multer.File | undefined
) {
  const workbook = XLSX.readFile(file?.path as string);
  const worksheet = head(Object.values(workbook.Sheets)) as any;
  const rows: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 0 });
  const contacts = rows.map(row => {
    let name = "";
    let number = "";
    let email = "";
    let coluna_geral_1 = "";
    let coluna_geral_2 = "";
    let coluna_geral_3 = "";
    let coluna_geral_4 = "";
    let coluna_geral_5 = "";
    let coluna_geral_6 = "";
    let coluna_geral_7 = "";
    let coluna_geral_8 = "";
    let coluna_geral_9 = "";
    let coluna_geral_10 = "";


    if (has(row, "nome") || has(row, "Nome")) {
      name = row["nome"] || row["Nome"];
    }

    if (
      has(row, "numero") ||
      has(row, "número") ||
      has(row, "Numero") ||
      has(row, "Número")
    ) {
      number = row["numero"] || row["número"] || row["Numero"] || row["Número"];
      number = `${number}`.replace(/\D/g, "");
    }

    if (
      has(row, "email") ||
      has(row, "e-mail") ||
      has(row, "Email") ||
      has(row, "E-mail")
    ) {
      email = row["email"] || row["e-mail"] || row["Email"] || row["E-mail"];
    }

    if (
      has(row, "coluna_geral_1") ||
      has(row, "coluna geral 1") ||
      has(row, "Coluna Geral 1") ||
      has(row, "coluna geral I")
    ) {
      coluna_geral_1 = row["coluna_geral_1"] || row["coluna geral 1"] || row["Coluna Geral 1"] || row["coluna geral I"];
    }

    if (
      has(row, "coluna_geral_2") ||
      has(row, "coluna geral 2") ||
      has(row, "Coluna Geral 2") ||
      has(row, "coluna geral II")
    ) {
      coluna_geral_2 = row["coluna_geral_2"] || row["coluna geral 2"] || row["Coluna Geral 2"] || row["coluna geral II"];
    }

    if (
      has(row, "coluna_geral_3") ||
      has(row, "coluna geral 3") ||
      has(row, "Coluna Geral 3") ||
      has(row, "coluna geral III")
    ) {
      coluna_geral_3 = row["coluna_geral_3"] || row["coluna geral 3"] || row["Coluna Geral 3"] || row["coluna geral III"];
    }

    if (
      has(row, "coluna_geral_4") ||
      has(row, "coluna geral 4") ||
      has(row, "Coluna Geral 4") ||
      has(row, "coluna geral IV")
    ) {
      coluna_geral_4 = row["coluna_geral_4"] || row["coluna geral 4"] || row["Coluna Geral 4"] || row["coluna geral IV"];
    }

    if (
      has(row, "coluna_geral_5") ||
      has(row, "coluna geral 5") ||
      has(row, "Coluna Geral 5") ||
      has(row, "coluna geral V")
    ) {
      coluna_geral_5 = row["coluna_geral_5"] || row["coluna geral 5"] || row["Coluna Geral 5"] || row["coluna geral V"];
    }

    if (
      has(row, "coluna_geral_6") ||
      has(row, "coluna geral 6") ||
      has(row, "Coluna Geral 6") ||
      has(row, "coluna geral VI")
    ) {
      coluna_geral_6 = row["coluna_geral_6"] || row["coluna geral 6"] || row["Coluna Geral 6"] || row["coluna geral VI"];
    }

    if (
      has(row, "coluna_geral_7") ||
      has(row, "coluna geral 7") ||
      has(row, "Coluna Geral 7") ||
      has(row, "coluna geral VII")
    ) {
      coluna_geral_7 = row["coluna_geral_7"] || row["coluna geral 7"] || row["Coluna Geral 7"] || row["coluna geral VII"];
    }

    if (
      has(row, "coluna_geral_8") ||
      has(row, "coluna geral 8") ||
      has(row, "Coluna Geral 8") ||
      has(row, "coluna geral VIII")
    ) {
      coluna_geral_8 = row["coluna_geral_8"] || row["coluna_geral_8"] || row["Coluna Geral 8"] || row["coluna geral VIII"];
    }

    if (
      has(row, "coluna_geral_9") ||
      has(row, "coluna geral 9") ||
      has(row, "Coluna Geral 9") ||
      has(row, "coluna geral IX")
    ) {
      coluna_geral_9 = row["coluna_geral_9"] || row["coluna_geral_9"] || row["Coluna Geral 9"] || row["coluna geral IX"];
    }

    if (
      has(row, "coluna_geral_10") ||
      has(row, "coluna geral 10") ||
      has(row, "Coluna Geral 10") ||
      has(row, "coluna geral X")
    ) {
      coluna_geral_10 = row["coluna_geral_10"] || row["coluna_geral_9"] || row["Coluna Geral 9"] || row["coluna geral IX"];
    }



    return { name, number, email,coluna_geral_1,coluna_geral_2,coluna_geral_3,coluna_geral_4
      , coluna_geral_5, coluna_geral_6, coluna_geral_7, coluna_geral_8, coluna_geral_9,
      coluna_geral_10,contactListId, companyId };
  });

  const contactList: ContactListItem[] = [];

  for (const contact of contacts) {
    const [newContact, created] = await ContactListItem.findOrCreate({
      where: {
        number: `${contact.number}`,
        contactListId: contact.contactListId,
        companyId: contact.companyId
      },
      defaults: contact
    });
    if (created) {
      contactList.push(newContact);
    }
  }

  if (contactList) {
    for (let newContact of contactList) {
      try {
        const response = await CheckContactNumber(newContact.number, companyId);
        newContact.isWhatsappValid = response.exists;
        const number = response.jid.replace(/\D/g, "");
        newContact.number = number;
        await newContact.save();
      } catch (e) {
        logger.error(`Número de contato inválido: ${newContact.number}`);
      }
    }
  }

  return contactList;
}
