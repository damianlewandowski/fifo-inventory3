import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Returns, ReturnsArray} from "@tsed/swagger";
import {$log} from '@tsed/common';

import {BuyRepository} from "../../repositories/BuyRepository";
import {Buy} from "../../entities/Buy";
import {BuyModel} from "../../models/BuyModel";


@Controller("/buys")
export class UsersCtrl {
  constructor(private buyRepository: BuyRepository) {
  }

  @Post("/")
  @Returns(Buy)
  create(@BodyParams() buy: BuyModel): Promise<Buy> {
    $log.info('Adding new buy: ', buy);
    return this.buyRepository.save(buy);
  }

  @Get("/total_quantity")
  @Returns(404, {description: "Not found"})
  @Returns(200, {description: "OK"})
  async getTotalQuantity(): Promise<number> {
    return this.buyRepository.findTotalQuantity();
  }

  @Get("/")
  @ReturnsArray(Buy)
  async getList(): Promise<Buy[]> {
    $log.info('Getting all buys');
    return this.buyRepository.find();
  }
}
