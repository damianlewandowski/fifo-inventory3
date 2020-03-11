import {Minimum, Req, Required} from "@tsed/common";
import {Description, Example, Name} from "@tsed/swagger";
import {Column, Entity, PrimaryColumn} from "typeorm";

export class BuyModel {

  @Description("Date when buy transaction occured")
  @Column()
  @Required()
  @PrimaryColumn()
  date: Date;

  @Description("Number of purchased items")
  @Column()
  @Required()
  @Minimum(1)
  quantity: number;

  @Description("Price of a single item")
  @Column()
  @Required()
  costPerItem: number;
}
