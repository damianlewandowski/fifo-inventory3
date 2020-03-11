import {Minimum, Req, Required} from "@tsed/common";
import {Description, Example, Name} from "@tsed/swagger";
import {Column, Entity, PrimaryColumn} from "typeorm";
import {BuyModel} from "../models/BuyModel";

@Entity()
export class Buy extends BuyModel {

}
