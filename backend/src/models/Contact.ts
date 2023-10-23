import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  Default,
  HasMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import ContactCustomField from "./ContactCustomField";
import Ticket from "./Ticket";
import Company from "./Company";
import Schedule from "./Schedule";

@Table
class Contact extends Model<Contact> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  number: string;

  @AllowNull(false)
  @Default("")
  @Column
  email: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_1: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_2: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_3: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_4: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_5: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_6: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_7: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_8: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_9: string;

  @AllowNull(false)
  @Default("")
  @Column
  coluna_geral_10: string;




  @Default("")
  @Column
  profilePicUrl: string;

  @Default(false)
  @Column
  isGroup: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @HasMany(() => ContactCustomField)
  extraInfo: ContactCustomField[];

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @HasMany(() => Schedule, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true
  })
  schedules: Schedule[];
}

export default Contact;
