import {EntityRepository, FindManyOptions, getConnection, Repository} from "typeorm";
import {Buy} from "../entities/Buy";
import { $log } from "@tsed/common";

@EntityRepository(Buy)
export class BuyRepository extends Repository<Buy> {
  findByDate(dateStr: string): Promise<Buy> {
    const date = new Date(dateStr);
    $log.info(date)
    return this.findOne(date);
  }

  async findTotalQuantity(): Promise<number> {
    const res = await this
      .createQueryBuilder('buy')
      .select("SUM(buy.quantity)", "sum")
      .getRawOne();

    $log.info(res)

    return res
  }
}
