import { BodyParams } from '@tsed/common';
import {Controller} from "@tsed/di";
import {Get, Post, Consumes, Required, Description, Summary, Returns, Property, Example, Tags} from "@tsed/schema";
import { setTimeout } from 'timers/promises';

class TokenResponseModel {
  @Required()
  @Property()
  @Example('sample-access-token')
  public hello: string;
}

@Controller("/")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Post("/token")
  @Summary('Request a OAuth 2 Bearer token.')
  @Description('Allows a registered application to obtain an OAuth 2 Bearer Token.')
  @Returns(200, TokenResponseModel).Description('Token issued.')
  @Returns(400).Description('Invalid data.')
  @Consumes('application/x-www-form-urlencoded')
  @Tags('oauth2')
  async login(
    @Required()
    @Description('The registered application client id.')
    @BodyParams('client_id') client_id: string,

    @Required()
    @Description('The grant type.')
    @BodyParams('grant_type') grant_type: string,
  ): Promise<TokenResponseModel> {
    await setTimeout(1);

    return {
      hello: `hello ${client_id} ${grant_type}`
    };
  }
}
