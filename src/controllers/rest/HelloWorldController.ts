import {Controller} from "@tsed/di";
import {PlatformRouter} from "@tsed/common";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(private router: PlatformRouter) {
    console.log('Controller');

    this.router.get('/test', async(req: any, res: any, next: any) => {
      res.end('this will work!');

      next();
    });
  }

  @Get("/")
  get() {
    return "hello";
  }
}
